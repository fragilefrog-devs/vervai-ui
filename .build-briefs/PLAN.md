# Implementation Plan — VervAI (V:\nextjs_app)

Next.js 15 App Router + Supabase SaaS prototype. Goal: wire the three persistence
hooks that have real backends (preferences, publish scheduling, idea approval /
output deletion), honestly disable every unbacked button, and apply the compact-UI
audit. 6 tasks, 2 waves. One owner per file — no task may touch a file owned by
another task.

## Global constraints (binding for all tasks)
1. **File ownership.** Only touch files listed in your brief. New files only where
   listed. No task may edit a file owned by another task (see matrix below).
2. **No product-code judgment calls.** Copy exact strings from the brief. When a
   label can't be found verbatim, search for the trailing part and match it.
3. **Mutation rules.** All browser-side writes go through the browser client from
   `@/lib/supabase/client` (`createClient()`). Never write via `lib/data.ts`
   (stays SELECT-only). `user_id` for every insert/update payload comes from
   `(await supabase.auth.getUser()).data.user?.id` — RLS policies enforce
   ownership, so we never send another user's id.
4. **Roundtrip contract for brand_samples.** DB column `brand_samples` is `TEXT`
   (a JSON-encoded array string or null), but the app type `AgentPreferencesRow`
   declares `brand_samples: string[] | null`. On read (getAgentPreferences) the
   raw value arrives from Postgres as a *string*; every consumer must
   `Array.isArray(x) ? x : JSON.parse(x)` guarded in try/catch. On write, encode:
   `samples.length > 0 ? JSON.stringify(samples) : null`. (Preferred: put the
   guarded parse in PreferencesManager's initializer, Task 1.)
5. **Design tokens only.** Keep Material-3 token classes (`font-headline-*`,
   `text-headline-*`, `space-*`, `bg-surface-*`). No arbitrary pixel values
   except the exact `text-[18px]`-style classes already present (leave those).
   Never introduce new fixed pixel sizing.
6. **Disabled look (unbacked buttons).** Raw `<button>`: add `disabled` attribute,
   extend className with `disabled:opacity-50 disabled:cursor-not-allowed`, and
   add `title="Coming soon"`. `ui/Button`: add `disabled` + `title="Coming soon"`
   (it already renders `disabled:opacity-50 disabled:pointer-events-none`). For
   primary-looking CTAs, additionally append a small
   `<span className="font-label-caps text-[10px] text-on-surface-variant uppercase ml-1">Coming soon</span>`
   inside the button label.
7. **Dead anchors:** replace `<a href="#">…</a>` with `<span className="…">…</span>`
   keeping the same classes minus link styling (`hover:underline` dropped, add
   `cursor-default`). Real `ButtonLink` hrefs (AppShell "Create" → /source-intake)
   stay real.
8. **Schema facts (do not re-litigate).**
   - `v4_agent_preferences`: `auto_mode` is `TEXT` check
     ('assist','execute','automate') NOT NULL default 'assist' — NOT boolean.
     `brand_tone` TEXT NOT NULL default ''. `brand_forbidden_phrases` /
     `brand_examples` `text[]`. `brand_samples` TEXT (single). Upsert on
     `user_id` conflict (`onConflict: "user_id"`).
   - `v4_distribution_jobs`: `user_id` NOT NULL; `platform` check
     ('linkedin','x','newsletter','youtube_shorts','tiktok','instagram');
     `status` check ('draft','scheduled','published','failed','cancelled')
     default 'draft'; `scheduled_at` timestamptz nullable; `output_id` nullable;
     RLS own-row insert/update/select/delete all enabled.
   - `v4_content_ideas`: `approved` BOOLEAN default true (there is NO
     'dismissed' string status — "dismissed"/"approved" ideas both live on the
     boolean). RLS own-row update enabled.
   - `outputs`: RLS has SELECT+INSERT only — **no delete policy**. Deleting an
     output must go through a new service-role API route (Task 3).
9. **Verification** (run from `V:\nextjs_app`): `npx tsc --noEmit` then
   `npm run build --prefix "V:/nextjs_app"` (AGENTS.md: always `--prefix` for
   npm on this machine). Both must pass before a task is done.

## Product decisions (approved — do not reopen)
- **D1 Wire what has a backend:** (a) preferences/brand-voice save + AgentDefaults
  → upsert `v4_agent_preferences`; (b) publish "Approve & Schedule" + QuickSchedule
  → write `v4_distribution_jobs`; (c) idea approval in workspace (AngleReservoir)
  and library (FeaturedExtraction) → `v4_content_ideas.approved=true`;
  (d) delete output → `outputs` via service-role API route with confirm dialog;
  (e) notification "Mark all read" stays LOCAL (no live notifications table in the
  deployed DB — a dated migration exists but per decision it is not wired; keep
  the existing local `allRead` state).
- **D2 Honestly disable everything unbacked:** all agent-run / generation /
  export / billing / connection action buttons get the disabled treatment
  (constraint 6). No fake success toasts. Local-only toggles/tabs/inputs that are
  pure UI (account tabs, search inputs, NotificationSettings switches, ToneSliders
  previews) stay as-is.
- **D3 Compact UI per audit** (exact targets in Task 6, folded spreads elsewhere).

## Task list
| # | Task | Wave | Files (owner) |
|---|------|------|---------------|
| 1 | Preferences persistence (wire) | A | lib/data.ts (type only), components/preferences/AgentDefaults.tsx, ApplyBar.tsx, PreferencesManager.tsx (new), app/(app)/preferences/page.tsx |
| 2 | Publish: approve & schedule (wire) | A | components/publish/ApprovalCard.tsx, ApproveScheduleButton.tsx (new), QuickScheduleModal.tsx, app/(app)/publish/page.tsx |
| 3 | Idea approval + output delete (wire) | A | components/workspace/AngleReservoir.tsx, IdeaApproveButton.tsx (new), components/library/FeaturedExtraction.tsx, ApproveQueueButton.tsx (new), ContentCard.tsx, DeleteOutputMenu.tsx (new), app/api/outputs/[id]/route.ts (new), app/(app)/library/page.tsx |
| 4 | Disable sweep A: workspace/library/publish/source-intake/dashboard/help | B | WorkspaceHeader, PlanBlueprint, LibraryHeader (+h1), SourceLineageTable, ContentCalendar, UrlFetchBar, IngestionList, NeedsReviewPanel, app/(app)/help/page.tsx (+h1), ApiExtensibilityPanel, DagPipeline, ChangelogPanel, VoiceTonePanel |
| 5 | Disable sweep B: connections/billing/account/preferences/speech | B | app/(app)/connections/page.tsx (+h1), connections/detail/page.tsx, ConnectorCard, ConnectedAccounts, AccountHeader, DangerZone, account ProfileSection, TopUpModal, app/(app)/billing/page.tsx (+h1/+max-w), preferences ProfileSection, DataSovereignty, brand-voice/speech/SpeechHeader.tsx (+h1) |
| 6 | Compact UI sweep + landing retarget | B | AppShell, PageHeading, PublishHeader, BrandVoiceHeader, QuotaMonitors, app/(app)/usage/page.tsx, SignInForm, SignUpForm, MarketingHeader, MarketingFooter, LandingContent |

Waves: Tasks 1–3 are parallelizable (no shared files). Tasks 4–6 are
parallelizable. Run Wave A first, then Wave B — Wave B's folded `h1`/`max-w`
edits assume Wave A's wiring compiles. Dependencies: none beyond wave ordering.

## File ownership matrix (one owner each — do not edit another task's files)
| File | Owner |
|------|-------|
| lib/data.ts | Task 1 |
| components/preferences/{AgentDefaults,ApplyBar}.tsx, PreferencesManager.tsx (new), app/(app)/preferences/page.tsx | Task 1 |
| components/publish/{ApprovalCard,ApproveScheduleButton(new),QuickScheduleModal}.tsx, app/(app)/publish/page.tsx | Task 2 |
| components/workspace/{AngleReservoir,IdeaApproveButton(new)}.tsx, components/library/{FeaturedExtraction,ApproveQueueButton(new),ContentCard,DeleteOutputMenu(new)}.tsx, app/api/outputs/[id]/route.ts (new), app/(app)/library/page.tsx | Task 3 |
| components/workspace/{WorkspaceHeader,PlanBlueprint}.tsx, components/library/{LibraryHeader,SourceLineageTable}.tsx, components/publish/ContentCalendar.tsx, components/source-intake/{UrlFetchBar,IngestionList}.tsx, components/dashboard/NeedsReviewPanel.tsx, app/(app)/help/page.tsx, components/help/{ApiExtensibilityPanel,DagPipeline,ChangelogPanel,VoiceTonePanel}.tsx | Task 4 |
| app/(app)/connections/{page,detail/page}.tsx, components/connections/ConnectorCard.tsx, components/account/{ConnectedAccounts,AccountHeader,DangerZone,ProfileSection}.tsx, components/billing/TopUpModal.tsx, app/(app)/billing/page.tsx, components/preferences/{ProfileSection,DataSovereignty}.tsx, components/brand-voice/speech/SpeechHeader.tsx | Task 5 |
| components/shell/AppShell.tsx, components/ui/PageHeading.tsx, components/publish/PublishHeader.tsx, components/brand-voice/BrandVoiceHeader.tsx, components/usage/QuotaMonitors.tsx, app/(app)/usage/page.tsx, components/auth/{SignInForm,SignUpForm}.tsx, components/landing/{MarketingHeader,MarketingFooter,LandingContent}.tsx | Task 6 |

## Conflict resolutions already made (pin, do not reopen)
- ApprovalCard approve = **UPDATE** the existing draft job (`status: 'scheduled'`),
  never INSERT (keeps `output_id`, avoids orphan rows). QuickSchedule = literal
  **INSERT** per selected channel.
- AngleReservoir "Add to Plan" → **wired** (relabel "Approve"), not disabled —
  backend exists, and disabling would orphan the wire decision.
- Brand-voice page stays **read-only display** (ToneSliders explicitly "not
  saved"); the save surface is the preferences page only. No fake edit controls.
- FeaturedExtraction is entirely Task 3 (approve wire + disable "Open in Editor" /
  "Compare with Source Node" folded in) to keep a single owner.
- SpeechHeader "Test Cadence" / "Save Parameters" are unbacked demo saves → Task 5
  disables them (decision D2), and its h1 compact edit is folded into Task 5.
- help/page.tsx is entirely Task 4 (double-header disable + h1 compact) — Task 6
  does NOT touch it.