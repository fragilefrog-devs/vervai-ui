# REPORT — TASK-06: Compact UI sweep + landing retarget

**Status:** DONE
**Date:** 2026-09-12
**Verification:** `npx tsc --noEmit` (from `V:\nextjs_app`) → **0 errors**. `npm run build` intentionally NOT run (controller builds centrally per brief).

## Per-file changes

| File | Change |
|------|--------|
| `components/shell/AppShell.tsx` | `<main>`: `max-w-[1440px]` → `max-w-7xl`, `py-space-lg` → `py-space-md` (same element, line 255). Nothing else. |
| `components/ui/PageHeading.tsx` | h1 (line 31): `font-display-2xl text-display-2xl` → `font-headline-xl text-headline-xl` (kept `text-on-surface tracking-tight`). |
| `components/publish/PublishHeader.tsx` | h1 (line 18): same swap #2. |
| `components/brand-voice/BrandVoiceHeader.tsx` | h1 (line 14): same swap #2. |
| `components/usage/QuotaMonitors.tsx` | All 4 quota numerals (lines 71/125/174/219): `font-display-2xl text-display-2xl` → `font-headline-xl text-headline-xl` via replaceAll on the exact class pair. |
| `app/(app)/usage/page.tsx` | h1 (line 81): same swap #2. No other changes (file has no buttons). |
| `components/auth/SignInForm.tsx` | Both TextInput usages (lines 66/97): removed `h-11 [&_input]:py-2.5` from the override className via replaceAll → `[&_input]:rounded-lg [&_input]:bg-surface-container-lowest`. Inputs now render standard TextInput height (h-9). |
| `components/auth/SignUpForm.tsx` | All 3 usages (lines 56/70/85): removed `h-11 [&_input]:py-2.5` via replaceAll → `[&_input]:rounded-lg [&_input]:bg-surface-container-low [&_input]:focus:bg-surface-container`. |
| `components/landing/MarketingHeader.tsx` | Nav container (line 25): `gap-8` → `gap-6`. |
| `components/landing/MarketingFooter.tsx` | (line 39): `gap-8` → `gap-6` on the column grid. |
| `components/landing/LandingContent.tsx` | (a) "Explore Interactive Demo" `<button type="button">` → `<a href="/sign-up">` — className and inner content kept verbatim, `type` attr dropped (invalid on `<a>`), closing tag `</button>` → `</a>`. (b) Hero CTAs (lines 30/36): `h-12` → `h-11` on both — includes the converted demo link. (c) Logo row (line 77): `gap-8` → `gap-6`. Marketing h1 untouched. |

## Grep evidence (owned files)

- `font-display-2xl` in AppShell / PageHeading / PublishHeader / BrandVoiceHeader / QuotaMonitors / usage page: **0 hits**. `max-w-[1440px]` / `py-space-lg` in owned files: **0 hits**.
- `h-11` / `py-2.5` in SignInForm.tsx / SignUpForm.tsx: **0 hits**.
- `gap-8` in MarketingHeader / MarketingFooter: **0 hits**.
- LandingContent hero CTAs: `h-11` on both, demo link is `<a href="/sign-up">`, logo row `gap-6`.

## Deviations / notes for the controller

1. **`font-display-2xl` remains in `LandingContent.tsx`** (hero h1 line 21 + pricing numerals lines 583/637/693). This is per the brief's explicit requirement 11 ("Do NOT change the marketing h1 (`font-display-2xl lg:text-[54px]`) — landing page keeps its display scale, decision D3 exempts marketing hero"); the pricing numerals were not in the swap list. The brief's blanket "font-display-2xl → 0 hits" grep therefore applies to the compact-sweep (app-hat) files only.
2. **`h-11` remains in `LandingContent.tsx`** (pre-existing pricing CTAs, lines 615/675/725 — not introduced by this task, not listed for change). Acceptance criteria #3 scopes the h-11 grep to SignIn/SignUp, which passes.
3. **Other repo files still contain `font-display-2xl` / `max-w-[1440px]`** (billing/help/connections pages, LibraryHeader, SpeechHeader, `app/(auth)/sign-up/page.tsx`, `components/landing/pages/*`) — all owned by Tasks 1/4/5 or the auth/sign-up pages; not touched per the file ownership matrix.
4. **No `pb` reductions applied** on MarketingHeader/MarketingFooter: the numbered requirements (items 9/10) specify only the `gap-8 → gap-6` swaps; the context line's "pb reductions per brief" has no operative counterpart in the requirements, and the execution contract forbids improvising variations beyond the brief's exact values.
5. Only token classes were swapped; no arbitrary pixel values introduced, no layout restructure.