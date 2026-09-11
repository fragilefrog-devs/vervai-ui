# REPORT — TASK-03: Idea approval + output delete (wire: v4_content_ideas, outputs)

Status: **DONE** — `npx tsc --noEmit` passes with zero errors.

## Files changed

**Created (4):**
- `components/workspace/IdeaApproveButton.tsx` — "use client"; props `{ ideaId: string; label?: string }` (default "Approve"); `getUser()` guard → `client.from("v4_content_ideas").update({ approved: true }).eq("id", ideaId)`; states idle/saving/saved/error; `ui/Button` (primary/sm) with `loading` while saving; saved → disabled + "✓ Approved"; inline error in `font-body-sm text-body-sm text-error`.
- `components/library/ApproveQueueButton.tsx` — "use client"; props `{ ideaId: string | null; label?: string }` (default "Approve & Queue"); `ideaId === null` → `ui/Button` disabled + `title="No pending idea"`; otherwise identical update flow to IdeaApproveButton (`ui/Button` secondary, `loading`, inline error, saved → disabled + "✓ Approved").
- `components/library/DeleteOutputMenu.tsx` — "use client"; props `{ outputId: string; title: string }`; `more_vert` icon-button (`material-symbols-outlined`, `text-[18px]`) opens `ui/Modal`; title `Delete “{title}”?`; body "This removes the output. This cannot be undone."; footer = confirm `ui/Button` (danger-styled primary, "Delete Output") + cancel `ui/Button` (ghost); `deleting` state disables confirm + shows spinner; error rendered inside modal in `font-body-sm text-body-sm text-error`; success → `window.location.reload()`. No dropdown menu — confirm-in-Modal only.
- `app/api/outputs/[id]/route.ts` — DELETE handler, exact code from the brief (Next 15 Promise-typed `params`).

**Edited (4):**
- `components/workspace/AngleReservoir.tsx` — "Add to Plan" button per idea replaced with `<IdeaApproveButton ideaId={idea.id} />`; approved-ideas checkmark/"Included in plan" logic untouched. No "Add all staggered"/bulk button exists in this file, so nothing to disable there.
- `components/library/FeaturedExtraction.tsx` — added `featuredIdeaId: string | null` to `FeaturedSource`; static "Approve & Queue" replaced with `<ApproveQueueButton ideaId={source.featuredIdeaId} />`; "Open in Editor" and "Compare with Source Node" disabled per constraint 6 (raw-button treatment: `disabled` + `disabled:opacity-50 disabled:cursor-not-allowed` + `title="Coming soon"`; "Open in Editor" additionally gets the `Coming soon` label-caps span since it's a primary CTA).
- `components/library/ContentCard.tsx` — added optional `outputId?: string | null` to `ContentCardItem`; when truthy renders `<DeleteOutputMenu outputId={item.outputId} title={item.title} />` in the top-right action area next to `StatusBadge` (wrapped in a `flex items-center gap-1` container). No other restyling.
- `app/(app)/library/page.tsx` — `featured` object gains `featuredIdeaId: ideas.find((i) => !i.approved)?.id ?? null` (from existing `getRecentIdeas` result); `matrixItems` gain `outputId: o.id` (flows through `CuratedMatrix` → `ContentCard`; `CuratedMatrix` mapping itself untouched).

## API route contract — `DELETE /api/outputs/[id]`

- **Method:** `DELETE` only. Next 15 signature: `params` is a `Promise<{ id: string }>`, awaited.
- **Auth check:** server-side session via `createClient()` from `@/lib/supabase/server` → `supabase.auth.getUser()`. No user → `401 { error: "unauthorized" }`. (Middleware excludes `/api/`, so the route does its own auth.)
- **Authorization:** service-role client (`createServiceClient` from `@supabase/supabase-js`, `NEXT_PUBLIC_SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`, `{ auth: { persistSession: false } }`) fetches `user_id` for the row. Row missing or fetch error → `404 { error: "not_found" }`. `row.user_id !== user.id` → `403 { error: "forbidden" }`.
- **Delete:** service-role `delete().eq("id", id)` (bypasses the missing RLS delete policy on `outputs`). DB error → `500 { error: <message> }`. Success → `200 { ok: true }`.
- **Env:** `SUPABASE_SERVICE_ROLE_KEY` verified present in `V:\nextjs_app\.env.local` (checked without printing values). This route is the only code path using the service-role key.

## Idea-update payload (both approve buttons)

```ts
const supabase = createClient(); // @/lib/supabase/client (browser client)
const { data: { user } } = await supabase.auth.getUser();
if (!user) { /* error state: "Sign in required to approve ideas." */ }
await supabase.from("v4_content_ideas").update({ approved: true }).eq("id", ideaId);
```

- Payload is `{ approved: true }` only — no `user_id` sent; RLS own-row update policy enforces ownership (per PLAN global constraint 3, we never send another user's id).
- `getUser()` guard runs first; missing session surfaces inline error text instead of attempting the write.

## Confirm-dialog UX (DeleteOutputMenu)

- `more_vert` icon button (top-right of ContentCard, next to StatusBadge) → opens `ui/Modal` (`open/onClose/title/footer`).
- Title: `Delete “{title}”?` (curly quotes). Body: "This removes the output. This cannot be undone."
- Footer: cancel `ui/Button` (ghost) + confirm `ui/Button` labeled "Delete Output", styled as a filled danger primary (`variant="danger"` + `!bg-error !text-on-error hover:!bg-on-error-container` — important overrides used because Tailwind theme order makes plain class overrides on `ui/Button` variants order-fragile; matches the `DangerZone` filled-danger look).
- Confirm flow: `fetch(\`/api/outputs/${outputId}\`, { method: "DELETE" })` → `res.json()` → `!res.ok` shows `body?.error ?? "Delete failed"` inside the modal (`font-body-sm text-body-sm text-error`); success → `window.location.reload()`.
- `deleting` state disables the confirm button and shows the spinner; network exceptions are caught and surfaced as inline error text (honest error surfacing).

## tsc result

`npx tsc --noEmit` (run from `V:\nextjs_app`): **passes with zero errors.**

Note: the first run reported one error in `components/publish/ApproveScheduleButton.tsx` (Task 2's file — `.update()` without `.select()` narrows `updated` to `never`). That file is owned by Task 2 and I am forbidden from editing it; a re-run after Task 2's parallel fix passes clean. Not caused by and not touched by this task.

## Deviations from brief

1. **`DeleteOutputMenu` fetch wrapped in try/catch** — the brief's confirm flow is verbatim, but a thrown `fetch` (network failure) would otherwise be an unhandled rejection; the catch surfaces the message inline per "surface errors honestly". Success/error handling otherwise exactly as specified.
2. **Confirm button styling** — brief says `ui/Button` variant "danger"-styled primary. `ui/Button`'s `danger` variant is text-only (`text-error hover:bg-error-container`), so the filled-danger look is achieved with `!`-important class overrides (`!bg-error !text-on-error hover:!bg-on-error-container`) rather than editing `components/ui/Button.tsx` (not owned). Visual result matches the codebase's existing filled-danger buttons (DangerZone/DataSovereignty).
3. **`IdeaApproveButton` uses `variant="primary" size="sm"`** — brief didn't specify variant/size; default primary with `sm` keeps the card-footer button compact.
4. **`ApproveQueueButton` uses `variant="secondary"`** — matches the original "Approve & Queue" button's surface-container-high look; keeps the `check_circle` icon.
5. **No bulk button found in `AngleReservoir`** — the "Add all staggered" disable clause was a no-op; the "View Full Transcription Analysis" button was left untouched (not in scope).

## Verification

- `npx tsc --noEmit` → zero errors (final run).
- `next build` intentionally NOT run (controller builds centrally).
- Manual checks not performed (no live session against the deployed DB from this environment); acceptance criteria for the delete flow (401/403/404 paths, reload without the output) are covered by the route's explicit status-code handling and the client's `res.ok` branch.