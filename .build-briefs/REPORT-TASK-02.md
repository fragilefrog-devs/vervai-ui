# REPORT — TASK-02 (Publish: Approve & Schedule → v4_distribution_jobs)

- **Status:** DONE
- **Commits:** none (working tree only; controller builds/merges centrally)

## Files changed (ownership per PLAN.md matrix — nothing outside)

| File | Change |
|------|--------|
| `components/publish/ApproveScheduleButton.tsx` | **NEW** ("use client"). State machine `"idle" \| "saving" \| "saved" \| "error"` + `errorText`. Props `{ jobId, title, scheduledAt? }`. UPDATE of the existing draft row; `router.refresh()` on success. |
| `components/publish/ApprovalCard.tsx` | Added `jobId: string`, `scheduledAt?: string \| null` to `ApprovalCardItem`; static primary button replaced with `<ApproveScheduleButton jobId title scheduledAt />`; "Edit Draft" disabled (constraint 6 raw-button treatment: `disabled` + `disabled:opacity-50 disabled:cursor-not-allowed` + `title="Coming soon"`). |
| `components/publish/QuickScheduleModal.tsx` | Rewired `handleQueue` to real INSERTs (see payloads); form fields controlled; honest loading/error/success states; header note added; channel→platform map. |
| `app/(app)/publish/page.tsx` | Added `jobId: job.id` and `scheduledAt: job.scheduled_at` to each `ApprovalCardItem`. Outputs derivation (~line 60) and `ContentCalendar` untouched. |

## Channel → platform mapping (single source of truth, in QuickScheduleModal)

```ts
const CHANNEL_PLATFORM: Record<string, Platform> = {
  linkedin: "linkedin",
  twitter: "x",
  substack: "newsletter",
  shorts: "youtube_shorts",
};
```

## UPDATE payload (Approve & Schedule — never INSERT)

```ts
client
  .from("v4_distribution_jobs")
  .update({
    status: "scheduled",
    scheduled_at: scheduledAt ?? new Date(Date.now() + 15 * 60 * 1000).toISOString(),
  })
  .eq("id", jobId)
  .select();
```

Preserves `output_id` (and all other columns); only flips status → `'scheduled'` + timestamptz `scheduled_at` (existing value preserved when set). `scheduled_at` comes from the client-side `createClient()`; `jobId` is threaded from the server-fetched draft row via `page.tsx`.

## INSERT payload (QuickSchedule, one per selected channel)

```ts
client.from("v4_distribution_jobs").insert({
  user_id: uid,                       // (await client.auth.getUser()).data.user?.id
  platform,                           // CHANNEL_PLATFORM[channel.id]
  status: "scheduled",
  scheduled_at,                       // new Date(`${date}T${time}:00`).toISOString()
  output_id: null,
  run_id: null,
});
```

## Error handling approach (no fake success)

- **ApproveScheduleButton:** sign-out → `"Sign-in required."`; Supabase error → its real `error.message`; zero rows updated (`.select()` response empty) → `"Job no longer exists."`. Error renders under the button with `font-body-sm text-body-sm text-error`. Success (`saved`) → disabled, tertiary-styled "✓ Scheduled", `router.refresh()`. `ui/Button` `loading={status === "saving"}`; label "Approve & Schedule" / "Scheduling…". No toasts.
- **QuickScheduleModal:** not signed in → `"Sign-in required."`; none checked → `"Select at least one channel."`; unparseable date/time → `"Enter a valid publish date and time."` (prevents `toISOString()` RangeError); any insert error → modal-level `text-error` line with the **first** error message; all succeeded → reset channels/copy/date/time to defaults, `router.refresh()`, brief "Queued to distribution" success state (~1.2s), then close. "Push to Queue" shows `loading` while inserts run; Cancel disabled while saving. Header copy kept + note "Queued jobs appear on your publish timeline."

## Verification

`npx tsc --noEmit` (run from `V:\nextjs_app`) → **EXIT 0, zero errors**.
`npm run build` intentionally **not** run (controller builds centrally per brief).

## Deviations from brief

1. **`.select()` appended to the UPDATE chain.** The untyped supabase-js builder types `update().eq()` (without `.select()`) as `data: never`, so the brief's exact snippet cannot carry a row-count guard. `.select()` changes only the response (returns the updated rows); the UPDATE statement + RLS semantics are identical. Required to honestly detect a zero-row update instead of fabricating "✓ Scheduled".
2. **Zero-row guard in ApproveScheduleButton** (`"Job no longer exists."`) — not in the brief's snippet, added to satisfy the acceptance criterion "never a fake success".
3. **Invalid date/time guard in the modal** (`"Enter a valid publish date and time."`) — brief didn't specify an error string; without it an empty date field throws from `toISOString()`.
4. **No title TextInput exists in the current modal.** The brief's prose says the modal "currently collects: title (TextInput)", but the shipped file has only channel checkboxes, an anchor textarea, date and time. No title field/state was added (would invent UI not in the design; title/anchor are not in the INSERT payload anyway). Success reset covers the fields that exist: channels, copy (anchor), date, time.
5. **Modal success string** is `"Queued to distribution"` (brief's quoted string), replacing the old fake "Pushed to queue".

## Concerns

- ReadyToPublish keys approval cards by `item.title` — titles are the output source title, so duplicates would warn; out of scope (Task 6 file, per matrix).
- `Approve & Schedule` quirk: two users on the RLS-owned row — `update().eq("id", jobId)` is scoped by RLS to own rows, so a row that isn't yours errors out honestly via `error.message`.
- Manual DB verification (two channels → two rows with correct platforms, `status='scheduled'`, `scheduled_at` timestamptz) still needs a signed-in browser session with at least one draft job.