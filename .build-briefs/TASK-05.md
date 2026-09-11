# TASK-05 — Disable sweep B (connections / billing / account / preferences / speech)

Wave B (run after Task 1–3). Depends on: Task 1–3 merged, pure-file isolation.

## Context
Same honest-disable pass (decision D2, PLAN constraint 6) for the commercial /
account surfaces and the speech demo page. No fake successes; disabled treatment
+ Coming soon title. Folded compact edits: connections page h1, billing page h1 +
max-w, SpeechHeader h1 (Task 6 must NOT touch these files).

## Requirements (per file — find each label, apply constraint 6)
1. **app/(app)/connections/page.tsx** — disable "+ Add Integration" (line 185)
   and "Request Connector" (line 457) — both raw `<button>`s, primary-styled →
   chip on the first. FOLDED compact: h1 (line 169)
   `font-display-2xl text-display-2xl text-on-surface tracking-tight` →
   `font-headline-xl text-headline-xl text-on-surface tracking-tight`.
2. **app/(app)/connections/detail/page.tsx** — disable "Add Integration" (line
   211) and "Request Connector" (line 465), same treatment.
3. **components/connections/ConnectorCard.tsx** — the data-driven action button
   (from connector actions array: "Manage Sync Paths", "+ Connect OAuth", etc.)
   is rendered generically with no backend. Make the card's action
   button always render `disabled` + `title="Coming soon"` (constraint 6; keep
   the connector's "Connected"/"OAuth" status styling).
4. **components/account/ConnectedAccounts.tsx** — disable "Link Platform"
   (per provider row).
5. **components/account/AccountHeader.tsx** — the "Upgrade" button (line 60–65,
   isFree only) → disabled + title. Leave the ACCOUNT_TABS nav buttons alone
   (UI-only tabs, decision D2 acceptable).
6. **components/account/DangerZone.tsx** — disable "Export Workspace Archive"
   and "Close Account & Revoke Access" (primary-styled → chip on the close one).
7. **components/account/ProfileSection.tsx** — disable "Upgrade Plan" (line 137
   area, `ui/Button`-style button).
8. **components/billing/TopUpModal.tsx** — disable the trigger button that opens
   the modal + `title="Coming soon"` (the modal body itself stays untouched; it
   just can't open).
9. **app/(app)/billing/page.tsx** — disable "Upgrade Plan" (lines 44–50) and
   "Change Plan" (line 118). FOLDED compact: h1 (line 35)
   `font-display-2xl text-display-2xl text-on-surface tracking-tight` →
   `font-headline-xl text-headline-xl text-on-surface tracking-tight`, and
   `max-w-[1440px]` → `max-w-7xl` (single occurrence in this file).
10. **components/preferences/ProfileSection.tsx** — disable "Upgrade Plan"
    (line 137–143 raw button).
11. **components/preferences/DataSovereignty.tsx** — disable BOTH buttons
    (line 55 "Export Workspace Content" and the second action around line 88;
    both are unbacked retention/export actions) with constraint 6.
12. **components/brand-voice/speech/SpeechHeader.tsx** — disable "Test Cadence"
    and "Save Parameters" (unbacked demo actions). FOLDED compact: h1 (line 14)
    `font-display-2xl text-display-2xl text-on-surface tracking-tight` →
    `font-headline-xl text-headline-xl text-on-surface tracking-tight`.

Consistency note: the exact "Upgrade Plan" button may be a `ui/Button` or raw
`<button>` depending on file — apply constraint 6 accordingly (raw: `disabled`
attr + `disabled:opacity-50 disabled:cursor-not-allowed` classes + title; Button:
`disabled` + title; BASE already grays out disabled).

## Acceptance criteria
- Every named button renders disabled with Coming soon title; nothing else in
  these files changes (no copy rewrites, no handler deletions).
- Folded compact edits applied: connections, billing, SpeechHeader h1s → headline-
  xl; billing max-w → max-w-7xl.
- TSC + build pass. Grep check: no `onClick` removed anywhere; no new fake
  toasts.

## Files
Edit: app/(app)/connections/page.tsx, app/(app)/connections/detail/page.tsx,
components/connections/ConnectorCard.tsx, components/account/ConnectedAccounts.tsx,
components/account/AccountHeader.tsx, components/account/DangerZone.tsx,
components/account/ProfileSection.tsx, components/billing/TopUpModal.tsx,
app/(app)/billing/page.tsx, components/preferences/ProfileSection.tsx,
components/preferences/DataSovereignty.tsx,
components/brand-voice/speech/SpeechHeader.tsx.

## Do not touch
components/preferences/{AgentDefaults,ApplyBar,PreferencesManager}.tsx and
app/(app)/preferences/page.tsx (Task 1 — owned, keep hands off even though
ProfileSection/DataSovereignty sit in the same folder); app/(app)/billing/page.tsx
compact is folded HERE so Task 6 skips billing; brand-voice non-speech files
(BrandVoiceHeader → Task 6); account tabs styling; any /api code (Task 3).

## Verification
Run from `V:\nextjs_app`: `npx tsc --noEmit`, then
`npm run build --prefix "V:/nextjs_app"`. Manual: visit connections (list +
detail), billing, account, preferences, brand-voice/speech — each named control
is visibly disabled with the Coming soon tooltip; no actions fire.