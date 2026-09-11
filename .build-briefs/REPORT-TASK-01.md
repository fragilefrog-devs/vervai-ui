# REPORT — TASK-01 (Preferences persistence: v4_agent_preferences)

**Status:** COMPLETE — all requirements implemented, `npx tsc --noEmit` passes with zero errors.
**Commits:** none — changes left in the working tree (no commit was requested; per repo rules I do not commit unprompted).
**Tests:** `npx tsc --noEmit` → **EXIT 0, zero errors** (command run from `V:\nextjs_app`). Build not run per instruction (controller runs builds centrally).

---

## What changed

| File | Change |
|------|--------|
| `lib/data.ts` | Line 82 only: `auto_mode: boolean;` → `auto_mode: "assist" \| "execute" \| "automate";`. `brand_samples` declared type and every function body untouched. |
| `components/preferences/PreferencesManager.tsx` | **NEW** `"use client"` island. Props `{ prefs: AgentPreferencesRow \| null; children: ReactNode }`. Owns the preference state and the upsert. |
| `components/preferences/AgentDefaults.tsx` | Made controlled — local `useState` removed. Receives `autoMode/tone/forbidden/examples/samples/onChange/onReset`; Toggle, chip remove buttons, and textarea propagate patches through `onChange`. Footer caption → "Saved to your workspace when you apply."; reset button calls `onReset`. All existing UI/classes/labels preserved. |
| `components/preferences/ApplyBar.tsx` | Made controlled — props `status/errorText/onApply/onDiscard`. Apply uses `ui/Button` (variant primary, `loading` + `disabled` while saving, disabled after saved) with label "Apply Preferences" → "Saving…" → "Apply Preferences ✓ Saved". Error line (`font-body-sm text-body-sm text-error`) rendered below buttons on `status === "error"`. Copy → "Changes save to your workspace." Discard calls `onDiscard`. |
| `app/(app)/preferences/page.tsx` | Wrapped sections in `<PreferencesManager prefs={prefs}>` (kept `<AgentDefaults />` / `<ApplyBar />` in place — props injected by the manager). Compact edits: h1 `font-display-2xl text-display-2xl` → `font-headline-xl text-headline-xl`; wrapper `max-w-[1440px]` → `max-w-7xl` (single occurrence). No other edits. |

## Key functions (PreferencesManager)

- **Initializers** — autoMode: `(prefs?.auto_mode ?? "assist") !== "assist"`; tone: `prefs?.brand_tone ?? ""`; forbidden/examples: `prefs?.brand_forbidden_phrases/examples ?? []`; samples: guarded parse helper (arrays pass through, JSON strings parsed in try/catch with plain-string fallback, otherwise `[]`).
- **`applyPatch(patch)`** — applies one-or-more field patches, sets status back to `"idle"` (re-enables Apply after an edit post-save).
- **`handleApply()`** — `setStatus("saving")` → `client.auth.getUser()` → no uid ⇒ `"error"` + `"Sign-in required to save preferences."` → else upsert (payload below) → error ⇒ `"error"` + `error.message`, success ⇒ `"saved"`.
- **`handleDiscard()`** — re-runs the initializers against `prefs`, status → `"idle"`.
- **`handleReset()`** — clears everything (autoMode false, tone "", all arrays `[]`), status → `"idle"`; the empty state is then written explicitly when the user applies.
- **Composition** — children are rendered as-is; the manager walks the child tree (`Children.map` + `cloneElement`, matching by component identity) so `ApplyBar` receives `status/errorText/onApply/handleDiscard` and `AgentDefaults` receives the controlled values + `onChange`/`onReset`. This is how the pinned `{ prefs, children: ReactNode }` interface delivers props to the two controlled components from a client island (see deviation note below).

## Exact upsert payload (SQL-equivalent shape)

Called on `client.from("v4_agent_preferences").upsert(payload, { onConflict: "user_id" })`:

```json
{
  "user_id": "<uid from (await client.auth.getUser()).data.user?.id>",
  "auto_mode": "<\"execute\" when autoMode else \"assist\">",
  "brand_tone": "<tone string>",
  "brand_forbidden_phrases": ["string", "..."],
  "brand_examples": ["string", "..."],
  "brand_samples": "<samples.length > 0 ? JSON.stringify(samples) : null>"
}
```

`brand_samples` round-trip contract (PLAN constraint 4): written as a JSON-encoded array string (or `null` when empty); read side parses the TEXT column back to the same list via the guarded parse in the initializer / `handleDiscard`.

## Deviations from the brief

1. **`AgentDefaults` / `ApplyBar` prop types are declared optional** (brief pinned them required), and **`PreferencesManager` injects them via `cloneElement`** rather than the page passing props at the JSX call site. Reasoning (forced by constraints, not a judgment call): the page is a **server component** and cannot hold client state; with the pinned *required* props the page's `<AgentDefaults />`/`<ApplyBar />` call sites are `TS2741` errors and `tsc` cannot pass. Optional typing + runtime injection keeps every pinned prop name, the manager-owned state, the untouched layout (AgentDefaults stays in the 12-col grid, ApplyBar below), and zero-error TSC. The components always receive the full pinned prop set from the manager (defaults only guard the bare-render path).
2. No other deviations. Type fix, labels, copy strings, state fields, status transitions, error handling, and compact token edits all match the brief verbatim.
3. `handleDiscard` also sets status `"idle"` (per Requirement 4 "sets status idle"); since ApplyBar is fully controlled, this lives in the manager's handler.

## Concerns for review

- **Mechanism check:** child-walk injection matches by component identity (`child.type === AgentDefaults/ApplyBar`) — works across the RSC boundary because both are "use client" modules, so identities align. Server-rendered children (tabs, grid) are cloned structurally but untouched in behavior. Please sanity-check that this composition reads as intended vs. an alternative (e.g., render-prop children), which would have required deviating from the pinned `children: ReactNode`.
- **Manual verification (not run — no signed-in browser session here):** preferences page loads server-side values; edit tone + toggle Auto mode + remove/add samples → Apply → row upserts on `user_id`; relaunch shows persisted values; signed-out Apply shows "Sign-in required to save preferences."; samples round-trip as JSON text.
- **`next build`** not run here per instruction (controller runs centrally).
- Tasks 2/3 files in the working tree were pre-existing and untouched.

---

## Fix pass (review findings)

Re-verified: `npx tsc --noEmit` → **EXIT 0, zero errors**. No commits (none requested).

- **C1 (CRITICAL) — list add-inputs restored in `AgentDefaults.tsx`.** The three list cards (Forbidden Phrases / Brand Examples / Brand Samples) are no longer remove-only: each now has a per-list `Add a ${singular}…` text input + "Add" button inside a small `<form>` (so Enter adds too). Submit trims the draft, ignores empty submissions, appends `[...items, value]` and pushes the new array through `onChange` with the correct list key (`forbidden` / `examples` / `samples`), then clears the input. Chip removal, chip styling, and the "No X configured." empty state are preserved unchanged. `ListSection` was hoisted from an inline closure to a module-level component in the same file (it now owns a tiny local `draft` state) — this keeps the input's draft stable across preference re-renders and avoids remount-on-every-parent-render of the old inline definition.
- **I1 (IMPORTANT) — injection hardening in `PreferencesManager.tsx` + bare-render comments.** `injectProps` now records whether it matched `<AgentDefaults />` and `<ApplyBar />`; in development (`process.env.NODE_ENV === "development"`) it `console.error`s per missing target so a mis-wired page fails loudly instead of silently rendering uncontrolled. `AgentDefaults` (and a short note on `ApplyBar`) now carry a code comment on the bare-render fallback explaining that props are typed optional because the server-component page cannot pass client state, and PreferencesManager injects the full controlled prop set via `cloneElement` at runtime.
- **M1 (accepted) — discard/edit-mid-save race fixed in `PreferencesManager.tsx`.** Added `statusRef` (a ref mirroring `status` via a single `updateStatus` helper used by every status transition) and guarded `handleApply`'s async continuations: after `auth.getUser()` and again after the upsert, the result only lands as `saved`/`error` if `statusRef.current` is still `"saving"`. Discard, Reset, or an edit during the in-flight request silently drops the stale result instead of overriding the newer UI state. (Underscore: for `errorText` the stale-write path is also skipped since the continuation returns before touching it.)
- M2/M3 were not applicable / skipped (no other findings to fold in).