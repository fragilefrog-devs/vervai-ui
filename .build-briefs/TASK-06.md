# TASK-06 — Compact UI sweep + landing retarget

Wave B (run after Task 1–3). Depends on: Task 1–3 merged. Pure-file isolation.

## Context
Apply the compact-UI audit (decision D3) to the remaining shell/headers/auth/
landing files, plus the approved landing-page retarget. All swaps are exact
string replacements — token classes only (PLAN constraint 5).

## Requirements
1. **components/shell/AppShell.tsx** — the main content wrapper:
   `max-w-[1440px]` → `max-w-7xl`; `py-space-lg` → `py-space-md` (in the same
   main element). Nothing else.
2. **components/ui/PageHeading.tsx** — h1 (line 31):
   `font-display-2xl text-display-2xl text-on-surface tracking-tight` →
   `font-headline-xl text-headline-xl text-on-surface tracking-tight`.
3. **components/publish/PublishHeader.tsx** — h1 (line 18), same swap as #2.
4. **components/brand-voice/BrandVoiceHeader.tsx** — h1 (line 14), same swap.
5. **components/usage/QuotaMonitors.tsx** — all four quota numerals:
   `font-display-2xl text-display-2xl text-on-surface font-bold tracking-tight`
   → `font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight`
   (4 occurrences — lines ~71, ~125, ~174, ~219). Use replaceAll on that exact
   class pair string.
6. **app/(app)/usage/page.tsx** — h1 (line 81), swap #2 (this file has no
   buttons).
7. **components/auth/SignInForm.tsx** — remove the bespoke input overrides on the
   two TextInput usages (lines 66, 97):
   `className="h-11 [&_input]:py-2.5 [&_input]:rounded-lg [&_input]:bg-surface-container-lowest"`
   → `className="[&_input]:rounded-lg [&_input]:bg-surface-container-lowest"`
   (both occurrences — replaceAll). Rationale: drop the h-11/py-2.5 overrides so
   auth inputs match the app's standard TextInput (component default h-9); do not
   introduce any new override value.
8. **components/auth/SignUpForm.tsx** — same for all three usages (lines 56, 70,
   85):
   `className="h-11 [&_input]:py-2.5 [&_input]:rounded-lg [&_input]:bg-surface-container-low [&_input]:focus:bg-surface-container"`
   → `className="[&_input]:rounded-lg [&_input]:bg-surface-container-low [&_input]:focus:bg-surface-container"`
   (replaceAll).
9. **components/landing/MarketingHeader.tsx** — `gap-8` → `gap-6` on the nav
   container (line 25).
10. **components/landing/MarketingFooter.tsx** — `gap-8` → `gap-6` (line 39).
11. **components/landing/LandingContent.tsx**:
    - The "Explore Interactive Demo" button (lines 36–43) → retarget: convert to
      `<a href="/sign-up"` keeping the exact same className and inner content
      (decision: demo has no backend; point at sign-up).
    - Both CTAs `h-12` → `h-11` (lines 30 and 36 — this includes the converted
      demo link's classes).
    - The logo row `gap-8` → `gap-6` (line 77).
    Do NOT change the marketing h1 (`font-display-2xl lg:text-[54px]`) — landing
    page keeps its display scale (decision D3 exempts marketing hero).
12. **app/(app)/usage + help pages** — usage handled in #6; help/page.tsx is
    Task 4's (folded there) — skip.

Exact token check: `headline-xl` = `font-headline-xl` / `text-headline-xl`;
`max-w-7xl` replaces the single fixed `max-w-[1440px]` per owned page; no other
pixel values introduced or removed (leave `text-[18px]` style utilities alone).

## Acceptance criteria
- App h1s are `font-headline-xl text-headline-xl` across
  PageHeading/PublishHeader/BrandVoiceHeader/usage page; lingering
  `font-display-2xl` classes in Task 6-owned files: 0 (grep each owned file).
- AppShell main is `max-w-7xl` + `py-space-md`.
- Auth inputs render the standard TextInput height (h-9) with no h-11/py-2.5
  overrides (grep SignIn/SignUp → 0 matches for `h-11`).
- Landing: demo button is an `<a href="/sign-up">`, both CTAs h-11, gaps gap-6.
- TSC + build pass.

## Files
Edit: components/shell/AppShell.tsx, components/ui/PageHeading.tsx,
components/publish/PublishHeader.tsx, components/brand-voice/BrandVoiceHeader.tsx,
components/usage/QuotaMonitors.tsx, app/(app)/usage/page.tsx,
components/auth/SignInForm.tsx, components/auth/SignUpForm.tsx,
components/landing/MarketingHeader.tsx, components/landing/MarketingFooter.tsx,
components/landing/LandingContent.tsx.

## Do not touch
help/page.tsx, LibraryHeader.tsx, billing/page.tsx, connections page(s),
SpeechHeader.tsx (all folded into Tasks 4/5); preferences page h1 (Task 1);
brand-voice/speech subtree (Task 5); any ../../shell file beyond AppShell;
SourceLineageTable / ContentCalendar / workspace files (Task 4).

## Verification
Run from `V:\nextjs_app`: `npx tsc --noEmit`, then
`npm run build --prefix "V:/nextjs_app"`. Greps to prove completeness in owned
files: `font-display-2xl` → 0 hits; `h-11` → 0 hits; `max-w-[1440px]` → 0 hits.