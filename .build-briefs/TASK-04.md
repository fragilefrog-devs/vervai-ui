# TASK-04 — Disable sweep A (workspace / library / publish / source-intake / dashboard / help)

Wave B (run after Task 1–3). Depends on: Task 1–3 merged, pure-file isolation.

## Context
Honestly disable every unbacked action button in these six areas (decision D2,
PLAN constraint 6). No handler removal — just the disabled treatment + Coming
soon title; never a fake success. Dead `href="#"` anchors become spans.

## Requirements (per file — find each label, apply constraint 6)
1. **components/workspace/WorkspaceHeader.tsx** — disable "Cancel Run" and
   "Approve & Generate All" (rendered as `Approve &amp; Generate All` in JSX).
   "Approve & Generate All" is a primary CTA → also add the small
   `Coming soon` chip (constraint 6).
2. **components/workspace/PlanBlueprint.tsx** — disable "Modify Plan Prompts",
   "Regenerate Plan", "Approve Plan" (primary → chip).
3. **components/library/LibraryHeader.tsx** — disable "+ New Extraction" (primary
   → chip). FOLDED compact edit (Task 6 does NOT touch this file): h1
   `font-display-2xl text-display-2xl text-on-surface tracking-tight` (line 19)
   → `font-headline-xl text-headline-xl text-on-surface tracking-tight`.
4. **components/library/SourceLineageTable.tsx** — disable "Bulk Export" (the
   checkbox-column header). Do not alter the checkbox cells' styling.
5. **components/publish/ContentCalendar.tsx** — disable "Add impromptu post" and
   "Queue View". Also disable the per-scheduled-day `more_vert` icon button
   (overflow menu has no backend) with the raw-button treatment + title.
6. **components/source-intake/UrlFetchBar.tsx** — disable "Fetch & Analyze".
7. **components/source-intake/IngestionList.tsx** — disable "Inspect Agent Log".
8. **components/dashboard/NeedsReviewPanel.tsx** — the per-item "Review" buttons
   use `ui/Button` (main variant). Add `disabled` + no onClick → constraint 6
   (optionally `title="Coming soon"`).
9. **app/(app)/help/page.tsx** — disable the "PDF Schemas" header button and
   every FREQUENT_QUERIES chip `<button>` (dead search chips) with constraint 6.
   FOLDED compact edit: h1 `font-display-2xl text-display-2xl
   text-on-surface tracking-tight` (line 46) →
   `font-headline-xl text-headline-xl text-on-surface tracking-tight`. The
   SearchInput (line 53–64) stays untouched (UI-only).
10. **components/help/ApiExtensibilityPanel.tsx** — disable the "Explore
    Interactive Swagger API Specs" button (constraint 6). Leave the code-sample
    `pre` blocks untouched.
11. **components/help/ChangelogPanel.tsx** — replace every `<a href="#">` with a
    `<span>` (constraint 7).
12. **components/help/DagPipeline.tsx** — replace `<a href="#">` with `<span>`
    (constraint 7) AND disable the file's action `<button>` (pipeline viewer has
    no backend; lookup by its icon/label within the file).
13. **components/help/VoiceTonePanel.tsx** — replace `<a href="#">` with `<span>`
    (constraint 7).

Note: `components/help/QuickstartWorkflows.tsx` has no buttons/links — do not
edit it. Notifications stay as-is (decision D1e: local-only "Mark all read").

## Acceptance criteria
- No buttons in these files remain clickable without a backend; each shows the
  disabled treatment + Coming soon title (chip on the three marked primaries).
- No `href="#"` remains in help components (grep `href="#"` → 0 in
  components/help + help page, aside from none expected).
- TSC + build still pass; no behavior change elsewhere (no success texts added).
- Two folders' h1s are headline-xl (LibraryHeader, help page) — no other sizes
  moved in this task.

## Files
Edit: components/workspace/WorkspaceHeader.tsx, components/workspace/
PlanBlueprint.tsx, components/library/LibraryHeader.tsx, components/library/
SourceLineageTable.tsx, components/publish/ContentCalendar.tsx, components/
source-intake/UrlFetchBar.tsx, components/source-intake/IngestionList.tsx,
components/dashboard/NeedsReviewPanel.tsx, app/(app)/help/page.tsx, components/
help/ApiExtensibilityPanel.tsx, components/help/ChangelogPanel.tsx, components/
help/DagPipeline.tsx, components/help/VoiceTonePanel.tsx.

## Do not touch
Library ContentCard / FeaturedExtraction / library page (Task 3);
publish ApprovalCard / QuickScheduleModal / publish page (Task 2);
workspace AngleReservoir (Task 3); help page compact is folded here so Task 6
must skip it; components/help/QuickstartWorkflows.tsx; any account/billing/
connections file (Task 5); landing/auth/shell files (Task 6).

## Verification
Run from `V:\nextjs_app`: `npx tsc --noEmit`, then
`npm run build --prefix "V:/nextjs_app"`. Manual sweep: page-by-page click each
named control → pointer-events none / disabled look, tooltip says Coming soon,
no console errors.