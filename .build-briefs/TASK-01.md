# TASK-01 — Preferences persistence (wire: v4_agent_preferences)

Wave A. Depends on: none. Read PLAN.md Global constraints first.

## Context
The preferences page (agent defaults + brand voice + apply bar) is the only place
with a real save backend: the Supabase table `v4_agent_preferences` exists with
RLS own-row CRUD. Today `AgentDefaults` holds unpersisted local state and
`ApplyBar` fakes "Apply Preferences" ("Preferences are not persisted to the
server yet"). Wire it: a new client component owns the state and upserts to
Supabase on Apply.

## Requirements
1. **`lib/data.ts` — one type fix only.** Line 82: `auto_mode: boolean;` →
   `auto_mode: "assist" | "execute" | "automate";`. Do NOT change
   `brand_samples`'s declared type and do NOT change any function body in
   this file except nothing else. (Wire contract for brand_samples lives in
   PreferencesManager below; `getAgentPreferences` still returns the raw row.)
2. **`components/preferences/PreferencesManager.tsx` (NEW, "use client").**
   Props: `{ prefs: AgentPreferencesRow | null; children: ReactNode }`.
   State: `autoMode` (boolean), `tone` (string), `forbidden` (string[]),
   `examples` (string[]), `samples` (string[]), `status`:
   `"idle" | "saving" | "saved" | "error"`, `errorText`: string.
   Initializers from `prefs`:
   - autoMode: `(prefs?.auto_mode ?? "assist") !== "assist"` (DB default 'assist'
     = off; 'execute'/'automate' = on)
   - tone: `prefs?.brand_tone ?? ""`
   - forbidden: `prefs?.brand_forbidden_phrases ?? []`
   - examples: `prefs?.brand_examples ?? []`
   - samples: guarded parse helper:
     ```ts
     const raw: unknown = prefs?.brand_samples;
     const samples = Array.isArray(raw) ? (raw as string[])
       : typeof raw === "string" ? (() => { try { const p = JSON.parse(raw); return Array.isArray(p) ? p as string[] : [raw]; } catch { return [raw]; } })()
       : [];
     ```
   `handleApply`: `const { data } = await client.auth.getUser(); const uid =
   data.user?.id; if (!uid) { setStatus("error"); setErrorText("Sign-in required to save preferences."); return; }`
   then
   ```ts
   const { error } = await client.from("v4_agent_preferences").upsert(
     { user_id: uid,
       auto_mode: autoMode ? "execute" : "assist",
       brand_tone: tone,
       brand_forbidden_phrases: forbidden,
       brand_examples: examples,
       brand_samples: samples.length > 0 ? JSON.stringify(samples) : null },
     { onConflict: "user_id" });
   ```
   On success `setStatus("saved")`; on error `setStatus("error")` +
   `setErrorText(error.message)`. `handleDiscard`: re-run the initializers
   (reset to `prefs` values). `handleReset`: clear all state (autoMode false,
   tone "", arrays [], samples []) — the reset-to-empty case is also applied via
   handleApply so the upsert writes explicit empty values. Render children with
   the apply bar receiving `status/errorText/onApply/handleDiscard` and
   `AgentDefaults` receiving controlled values + `onChange` patches.
3. **`components/preferences/AgentDefaults.tsx` — make controlled.** Replace the
   local `useState` with props:
   `{ autoMode: boolean; tone: string; forbidden: string[]; examples: string[];
   samples: string[]; onChange: (patch: { autoMode?: boolean; tone?: string;
   forbidden?: string[]; examples?: string[]; samples?: string[] }) => void;
   onReset: () => void; }`. Keep all existing UI (Toggle, ChipInput bus)
   untouched except: Toggle `checked={autoMode} onChange={(v) =>
   onChange({ autoMode: v })}`; ChipInputs propagate new arrays; text area
   controlled by `value={tone}`. Update the footer caption "not saved to server
   yet" → "Saved to your workspace when you apply." The "Reset to defaults"
   handler calls `onReset`.
4. **`components/preferences/ApplyBar.tsx` — make controlled.**
   Props: `{ status: "idle" | "saving" | "saved" | "error";
   errorText?: string; onApply: () => void; onDiscard: () => void; }`.
   Apply button: `ui/Button` (variant primary, `disabled={status === "saving"}`,
   `loading={status === "saving"}`); label "Apply Preferences" → "Saving…" while
   saving → keep last label after saved but disabled + append
   `✓ Saved` icon-state. When `status==="error"` render the error line
   (`font-body-sm text-body-sm text-error`) below the buttons. Remove the
   "Preferences are not persisted to the server yet" copy (replace with
   "Changes save to your workspace."). Discard button calls `onDiscard` and sets
   status idle.
5. **`app/(app)/preferences/page.tsx`.** Render `<PreferencesManager prefs={prefs}>`
   wrapping the existing sections; `prefs` already comes from
   `getAgentPreferences()` (line ~24). Fold the compact edits here (file owned by
   Task 1): h1 line 44 `font-display-2xl text-display-2xl text-on-surface
   tracking-tight` → `font-headline-xl text-headline-xl text-on-surface
   tracking-tight`; wrapper `max-w-[1440px]` → `max-w-7xl` (single occurrence;
   rule 5 tokens). No other edits.

## Acceptance criteria
- TSC + build pass (constraint 9).
- AgentDefaults + ApplyBar receive props (no local preference state).
- Apply writes a row via upsert; user session required; error path renders
  `errorText`; success disables Apply until next edit.
- brand_samples round-trips: textarea-sample list saved as JSON text, parsed back
  to the same list on reload (constraint 4).
- h1 / max-w swapped per compact rules.

## Files
Edit: `lib/data.ts`, `components/preferences/AgentDefaults.tsx`,
`components/preferences/ApplyBar.tsx`, `app/(app)/preferences/page.tsx`.
Create: `components/preferences/PreferencesManager.tsx`.

## Do not touch
`lib/data.ts` beyond line 82. Pages/components owned by Tasks 2–6 (esp.
`brand-voice/*` pages, `components/brand-voice/*`), and any button-disabling
beyond this file set.

## Verification
Run from `V:\nextjs_app`: `npx tsc --noEmit`, then
`npm run build --prefix "V:/nextjs_app"`. Manual: preferences page loads, edit
tone + add a sample, Apply → relaunch page shows persisted values.