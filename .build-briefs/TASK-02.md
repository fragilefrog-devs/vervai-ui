# TASK-02 — Publish: Approve & Schedule (wire: v4_distribution_jobs)

Wave A. Depends on: none. Read PLAN.md Global constraints first.

## Context
The publish page derives real "Pending review" approval cards from
`v4_distribution_jobs` rows whose status is `'draft'` (each draft job already has
an id and output_id). The card's "Approve & Schedule" button is a static element
(no handler), and QuickScheduleModal's "Push to Queue" only flips a fake local
state. Wire both to the real table (constraint 8: RLS allows own-row
insert/update).

## Requirements
1. **Channel/platform mapping (single source of truth, use in both places).**
   QuickScheduleModal channel ids → platform:
   `linkedin → linkedin`, `twitter → x`, `substack → newsletter`,
   `shorts → youtube_shorts`.
2. **`components/publish/ApproveScheduleButton.tsx` (NEW, "use client").**
   Props:
   `{ jobId: string; title: string; scheduledAt?: string | null }`.
   State: `"idle" | "saving" | "saved" | "error"` + `errorText`.
   onClick:
   ```ts
   const client = createClient(); // @/lib/supabase/client
   const { data } = await client.auth.getUser();
   if (!data.user) { setError("Sign-in required."); return; }
   const { error } = await client
     .from("v4_distribution_jobs")
     .update({ status: "scheduled",
       scheduled_at: scheduledAt ?? new Date(Date.now() + 15 * 60 * 1000).toISOString() })
     .eq("id", jobId);
   ```
   Success → `saved` state: button becomes disabled, tertiary-style label
   "✓ Scheduled". Error → render `errorText` under the button
   (`font-body-sm text-body-sm text-error`). Use `ui/Button` with
   `loading={status === "saving"}`; never show a fabricated success toast for a
   failed write. Label: "Approve & Schedule" (saving → "Scheduling…").
3. **`components/publish/ApprovalCard.tsx`.** Add `jobId: string` and
   `scheduledAt?: string | null` to `ApprovalCardItem`. Replace the static
   primary button with `<ApproveScheduleButton jobId={item.jobId}
   title={item.title} scheduledAt={item.scheduledAt} />`. Also disable the
   secondary "Edit Draft" button (no editor backend; constraint 6 raw-button
   treatment + `title="Coming soon"`).
4. **`components/publish/QuickScheduleModal.tsx` (already "use client").**
   Currently collects: title (TextInput), anchor (textarea), channel checkboxes
   (ids linkedin/twitter/substack/shorts), date (`type="date"`, default
   "2024-10-24"), time (`type="time"`, default "09:00"), and a "Push to Queue"
   button that fakes a queued state. Rewire `handleQueue`:
   - `const uid = (await client.auth.getUser()).data.user?.id; if (!uid) show
     error "Sign-in required."`
   - determine the selected channel ids (existing local `channels` state);
     `if (none) show error "Select at least one channel."`
   - `const scheduledAt = new Date(`${date}T${time}:00`).toISOString()`
   - for each selected channel map its id → platform (requirement 1) and INSERT:
     ```ts
     const { error } = await client.from("v4_distribution_jobs").insert({
       user_id: uid,
       platform,
       status: "scheduled",
       scheduled_at: scheduledAt,
       output_id: null,
       run_id: null,
     });
     ```
   - aggregate: if any insert errored → modal-level error line with the first
     error message; if all succeeded → clear the form (reset title/anchors/
     channels/date/time to defaults) and close the modal; hold a
     "Queued to distribution" success state briefly (honest — rows were written).
   - Remove the "not persisted" messaging if any; the section header can keep its
     existing copy plus a note "Queued jobs appear on your publish timeline."
5. **`app/(app)/publish/page.tsx`.** The approvals list is built from draft jobs
   (`readyToApprove`/approvals mapping). Add `jobId: job.id` and
   `scheduledAt: job.scheduled_at` to each `ApprovalCardItem` passed to
   `ApprovalCard`. Do not change the outputs derivation (line ~60) or
   `ContentCalendar` (owned by Task 4).

## Acceptance criteria
- TSC + build pass.
- Approve & Schedule flips the draft row to `status: 'scheduled'` with a
  timestamptz `scheduled_at` (existing value preserved if set).
- QuickSchedule inserts one row per selected channel with the mapped platform,
  correct `scheduled_at`, `user_id` = session user, `output_id` null.
- Failure paths show the real Supabase error message — never a fake success.
- "Edit Draft" renders disabled + "Coming soon".

## Files
Edit: `components/publish/ApprovalCard.tsx`,
`components/publish/QuickScheduleModal.tsx`, `app/(app)/publish/page.tsx`.
Create: `components/publish/ApproveScheduleButton.tsx`.

## Do not touch
`components/publish/ContentCalendar.tsx` (Task 4), `components/publish/
ReadyToPublish.tsx`/`PublishHeader.tsx` (Task 6), anything in
workspace/library/help/connections (Tasks 3/4/5).

## Verification
Run from `V:\nextjs_app`: `npx tsc --noEmit`, then
`npm run build --prefix "V:/nextjs_app"`. Manual (against a signed-in session with
a draft job): click Approve & Schedule → card flips to ✓ Scheduled; QuickSchedule
with 2 channels → verify two rows appear in the DB with `status='scheduled'` and
the correct platforms; refresh → scheduled items appear on the calendar/timeline.