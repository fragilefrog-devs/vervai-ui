# REPORT-TASK-04 — Disable sweep A (workspace / library / publish / source-intake / dashboard / help)

**Status: DONE**
**Commits: none** (working tree is wave-uncommitted; other tasks' changes present in the same tree)
**Test summary:** `npx tsc --noEmit` from `V:\nextjs_app` → exit 0, zero errors.

## Per-file changes

| File | Change |
|------|--------|
| `components/workspace/WorkspaceHeader.tsx` | "Cancel Run" + "Approve & Generate All" (rendered `Approve &amp; Generate All`): `disabled`, `disabled:opacity-50 disabled:cursor-not-allowed`, `title="Coming soon"`. "Approve & Generate All" is primary → also got the small-caps `Coming soon` chip span (constraint 6). |
| `components/workspace/PlanBlueprint.tsx` | "Modify Plan Prompts", "Regenerate Plan", "Approve Plan": same raw-button treatment. "Approve Plan" is primary → chip added. |
| `components/library/LibraryHeader.tsx` | "+ New Extraction" → disabled + chip. **Compact h1 fold:** `font-display-2xl text-display-2xl` → `font-headline-xl text-headline-xl` (Tracking/other classes unchanged). |
| `components/library/SourceLineageTable.tsx` | "Bulk Export" → disabled + title. **Deviation (see below):** also disabled "Batch Action" and the per-row `more_horiz`. "Do not alter checkbox cells' styling" — file contains no checkbox cells; no-op. |
| `components/publish/ContentCalendar.tsx` | "Add impromptu post", "Queue View", and per-scheduled-day `more_vert` — all disabled + title (raw treatment). |
| `components/source-intake/UrlFetchBar.tsx` | "Fetch & Analyze" → disabled + title. Checkboxes untouched. |
| `components/source-intake/IngestionList.tsx` | "Inspect Agent Log" → disabled + title. Real `<a>` links to /workspace and /library untouched. |
| `components/dashboard/NeedsReviewPanel.tsx` | Per-item "Review" `ui/Button` → added `disabled` + `title="Coming soon"` (Button BASE already renders `disabled:opacity-50 disabled:pointer-events-none`). No onClick present; none added. |
| `app/(app)/help/page.tsx` | "PDF Schemas" header button + every `FREQUENT_QUERIES` chip → disabled + title. **Compact h1 fold:** `font-display-2xl text-display-2xl` → `font-headline-xl text-headline-xl`. SearchInput untouched. **Deviation (see below):** the two dead `<a href="#">` anchors ("Community Forum", "Contact Support") converted to `<span>` + `cursor-default` per constraint 7. |
| `components/help/ApiExtensibilityPanel.tsx` | "Explore Interactive Swagger API Specs" button → disabled + title. Code-sample `pre` blocks untouched. |
| `components/help/ChangelogPanel.tsx` | "Read All Release Notes" `<a href="#">` → `<span>` + `cursor-default`, `hover:underline` dropped (constraint 7). |
| `components/help/DagPipeline.tsx` | Copy-endpoint action `<button>` (only button in file, `content_copy`) → disabled + title (replaced old "Copy endpoint" title with "Coming soon"). "Read complete DAG specification" `<a href="#">` → `<span>` + `cursor-default`. |
| `components/help/VoiceTonePanel.tsx` | "Tune Voice Calibration Vector" `<a href="#">` → `<span>` + `cursor-default`. |

## Verification

- `npx tsc --noEmit` from `V:\nextjs_app`: **exit 0, zero errors** (entire combined wave tree, not just owned files).
- Grep `href="#"` in `components/help/` + `app/(app)/help/page.tsx` → **0 matches** (acceptance criterion met).
- Grep `font-display-2xl` in LibraryHeader + help page → 0 remaining; both h1s are now `font-headline-xl text-headline-xl text-on-surface tracking-tight`.
- `npm run build` NOT run per brief (controller builds centrally).

## Deviations / judgment calls (flag for controller)

1. **SourceLineageTable — disabled beyond the brief's named "Bulk Export".** Applied constraint 6 to the sibling "Batch Action" header button and the per-row `more_horiz` (Lineage Ops) icon buttons. Rationale: acceptance criterion 1 ("No buttons in these files remain clickable without a backend") and the ContentCalendar `more_vert` precedent (same overflow-menu pattern, explicitly disabled there) — these are identical unbacked demo controls in an owned file; nothing wired can break. Revert any of these three if undesired.
2. **help/page.tsx — dead anchors converted to spans.** The brief's requirement #9 named only "PDF Schemas" + query chips + h1, but acceptance demands `href="#"` → 0 in the help page; "Community Forum" / "Contact Support" were the last two. Standard constraint 7 conversion; no buttons created or removed.
3. **NeedsReviewPanel "main variant" note.** Brief said Review buttons use `ui/Button` (main variant); the file actually passes `variant="secondary"`. Kept the existing variant — only added `disabled` + `title`.
4. **DagPipeline button identified by icon/label** — the only `<button>` in the file is the `content_copy` "Copy endpoint" control next to the `GET /api/agent/runs/{run_id}/graph` snippet; disabled that one.

## Scope guard

Touched only the 13 files in the brief. Not touched: `components/help/QuickstartWorkflows.tsx` (no buttons/links), notifications (D1e local "Mark all read"), SearchInput, checkbox/filter/tab local-UI controls, all real `ButtonLink`/`<a>` hrefs (`/workspace`, `/library`, `Go to review queue`).