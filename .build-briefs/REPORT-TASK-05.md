# REPORT — TASK-05 — Disable sweep B (connections / billing / account / preferences / speech)

**Status:** COMPLETE
**Commits:** none — no commit requested (tree also contains parallel Wave B edits from Tasks 4/6; controller commits centrally)
**Tests:** `npx tsc --noEmit` (from `V:\nextjs_app`) → exit 0, zero errors. Build intentionally NOT run (controller builds centrally).

## Per-file changes (12 files, exact constraint 6 treatment: `disabled` attr + `disabled:opacity-50 disabled:cursor-not-allowed` + `title="Coming soon"`; "Coming soon" chip span on primary-looking CTAs)

1. **app/(app)/connections/page.tsx**
   - h1: `font-display-2xl text-display-2xl` → `font-headline-xl text-headline-xl` (folded compact).
   - "+ Add Integration" (header CTA, primary-styled) → disabled + title + disabled classes + chip.
   - "Request Connector" (footer, raw button) → disabled + title + disabled classes, no chip ("chip on the first").
2. **app/(app)/connections/detail/page.tsx**
   - "Add Integration" (hero, primary-styled) → disabled + title + disabled classes + chip.
   - "Request Connector" — this is a **dead `<a href="#">` anchor**, not a button → converted to `<span>` (constraint 7) + `title="Coming soon"` + `cursor-default`; hover/transition affordances dropped; no chip (same treatment as list page).
   - "View Developer SDK" — dead `<a href="#">` anchor (unnamed but binding constraint 7) → converted to `<span>` + `cursor-default`, hover/transition affordances dropped. No disabled treatment (not a named unbacked action).
3. **components/connections/ConnectorCard.tsx** — data-driven action button now always renders `disabled` + `title="Coming soon"` + disabled classes; keeps tone/status styling and label exactly as before. No chip (brief specifies disabled + title only for this button).
4. **components/account/ConnectedAccounts.tsx** — "Link Platform" → disabled + title + disabled classes (no chip, secondary-styled).
5. **components/account/AccountHeader.tsx** — "Upgrade" (isFree only) → disabled + title + disabled classes + chip. ACCOUNT_TABS untouched.
6. **components/account/DangerZone.tsx** — data-driven buttons: both actions gain `disabled:opacity-50 disabled:cursor-not-allowed` in their className + `disabled title="Coming soon"` on the rendered button; "Close Account & Revoke Access" (primary-styled, bg-error) additionally gets the chip (new optional `chip?: boolean` on the action datum).
7. **components/account/ProfileSection.tsx** — "Upgrade Plan" (isFree) → disabled + title + disabled classes + chip. Footer "Upgrade" CTA (same file, same unbacked billing action, D2 global mandate) → identical treatment + chip.
8. **components/billing/TopUpModal.tsx** — trigger `ui/Button` (variant="secondary") → `disabled` + `title="Coming soon"` (BASE already grays out). `onClick` kept (no handler deletions); modal body untouched — it just can't open.
9. **app/(app)/billing/page.tsx** — h1 → `font-headline-xl`; `max-w-[1440px]` → `max-w-7xl`; "Upgrade Plan" → disabled + title + classes + chip; "Change Plan" → disabled + title + classes (no chip).
10. **components/preferences/ProfileSection.tsx** — "Upgrade Plan" (raw button) → disabled + title + classes + chip.
11. **components/preferences/DataSovereignty.tsx** — "Export Workspace Content" → disabled + title + classes (no chip); "Delete Workspace" (bg-error, primary-looking) → disabled + title + classes + chip.
12. **components/brand-voice/speech/SpeechHeader.tsx** — h1 → `font-headline-xl`; "Test Cadence" → disabled + title + classes (no chip); "Save Parameters" (primary-styled) → disabled + title + classes + chip.

## Reference check
- Grep: `title="Coming soon"` present on every named control; zero remaining `href="#"` in owned files; no `onClick` removed (none existed in these files except TopUpModal, which keeps it); no new fake toasts. Chip markup matches the parallel Wave B precedent (WorkspaceHeader/FeaturedExtraction: bare `disabled`, chip as sibling span `font-label-caps text-[10px] text-on-surface-variant uppercase ml-1`).
- Info-only rows left per brief's named-labels-only rule: "View Setup Guide", "Open Content Library", "Open Publish Queue" (connections list), retention `<select>` (DataSovereignty), account tabs — not named, untouched.

## Verification
- `npx tsc --noEmit` → PASS, zero errors (run from V:\nextjs_app; output empty, exit 0).

## Deviations / interpretation notes (flagging for controller)
1. **detail/page.tsx "Request Connector" is an anchor, not a button** — brief req 2 said "same treatment" as req 1; applied constraint 7 (anchor→span) + disabled title. No chip, matching the list page's "chip on the first" (chip reserved for the primary-styled "Add Integration" of the pair).
2. **account/ProfileSection footer "Upgrade"** — the brief's req 7 line ref (137) matches preferences/ProfileSection, and only "Upgrade Plan" is named; the account card also carries a second, identical unbacked "Upgrade" CTA in its footer. Disabled it identically per global D2 (would otherwise remain a functional-looking billing CTA on the very page this task sweeps). Remove if out of scope.
3. **Anchor→span class treatment** — constraint 7 says "same classes minus link styling"; neither anchor had `hover:underline`, so I dropped the hover-bg + transition classes (interactivity affordances on non-interactive spans) and added `cursor-default`. If controller prefers keeping hover-bg on dead-anchor spans, that's a 2-line revert.
4. **Chip placement** — "chip on the first" read as: of each named button pair, only the first-listed primary CTA gets the chip ("+ Add Integration" / "Add Integration" / "Save Parameters" / "Close Account" / "Delete Workspace" / "Upgrade Plan" family). Secondary/neutral buttons get disabled-only. Consistent across all files.