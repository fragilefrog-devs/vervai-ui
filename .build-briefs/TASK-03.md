# TASK-03 — Idea approval + output delete (wire: v4_content_ideas, outputs)

Wave A. Depends on: none. Read PLAN.md Global constraints first.

## Context
Workspace's AngleReservoir lists ideas (each with `id`) and its "Add to Plan"
button is dead. Library's FeaturedExtraction has a static "Approve & Queue"
button. `v4_content_ideas.approved` is a real boolean column with own-row update
RLS — wire both. Library ContentCards render outputs (with `id`) but
`v4_content_ideas`/`outputs` have no delete and delete-via-client is impossible
on `outputs` (no RLS delete policy), so add a service-role
`DELETE /api/outputs/[id]` route (Next 15) plus a confirm-then-delete client
menu.

## Requirements
1. **`components/workspace/IdeaApproveButton.tsx` (NEW, "use client").**
   Props: `{ ideaId: string; label?: string }` (default label "Approve").
   onClick: `client.from("v4_content_ideas").update({ approved: true })
   .eq("id", ideaId)` with `getUser()` guard first (error state text if missing).
   States idle/saving/saved/error; saved → disabled + "✓ Approved". `ui/Button`
   with `loading` while saving; error message rendered inline in
   `font-body-sm text-body-sm text-error`.
2. **`components/workspace/AngleReservoir.tsx`.** Replace the "Add to Plan"
   button (per idea) with `<IdeaApproveButton ideaId={idea.id} />`. Keep the
   approved-ideas styling/checkmark logic as-is (it already keys off
   `idea.approved`). If an "Add all staggered" / bulk button exists in this file,
   disable it with constraint 6 (no bulk backend).
3. **`components/library/ApproveQueueButton.tsx` (NEW, "use client").**
   Props: `{ ideaId: string | null; label?: string }` (default label
   "Approve & Queue"). When `ideaId` is null render `ui/Button` disabled +
   `title="No pending idea"`. Otherwise same update flow as requirement 1
   (update `approved: true`). Use `ui/Button` `loading` + inline error text.
4. **`components/library/FeaturedExtraction.tsx`.** Add `featuredIdeaId:
   string | null` to `FeaturedSource` props. Replace the static "Approve & Queue"
   button with `<ApproveQueueButton ideaId={source.featuredIdeaId} />`. Disable
   "Open in Editor" and "Compare with Source Node" (constraint 6 — raw-button
   treatment, `title="Coming soon"`).
5. **`components/library/DeleteOutputMenu.tsx` (NEW, "use client").**
   Props: `{ outputId: string; title: string }`. Renders a `more_vert`
   icon-button (material-symbols-outlined, `text-[18px]`) opening the existing
   `ui/Modal` (props `open/onClose/title/footer`):
   title `Delete “{title}”?`, body "This removes the output. This cannot be
   undone.", footer = confirm `ui/Button` variant "danger"-styled primary
   (label "Delete Output") + cancel Button. Confirm flow:
   ```ts
   const res = await fetch(`/api/outputs/${outputId}`, { method: "DELETE" });
   const body = await res.json();
   if (!res.ok) setError(body?.error ?? "Delete failed"); else window.location.reload();
   ```
   Error shown inside the modal (`font-body-sm text-body-sm text-error`). Stateful
   `deleting` disables the confirm button. Keep the module small — no dropdown
   menu, confirm-in-Modal only.
6. **`components/library/ContentCard.tsx`.** Add optional prop
   `outputId?: string | null`. When truthy, render `<DeleteOutputMenu
   outputId={outputId} title={title} />` in the card's top-right action area
   (next to the StatusBadge area). Do not restyle anything else.
7. **`app/api/outputs/[id]/route.ts` (NEW).** Exact handler (Next 15 — `params`
   is a Promise):
   ```ts
   import { NextResponse, type NextRequest } from "next/server";
   import { createClient as createServiceClient } from "@supabase/supabase-js";
   import { createClient as createServerClient } from "@/lib/supabase/server";

   export async function DELETE(
     _req: NextRequest,
     { params }: { params: Promise<{ id: string }> }
   ) {
     const { id } = await params;
     const supabase = await createServerClient();
     const { data: { user } } = await supabase.auth.getUser();
     if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
     const admin = createServiceClient(
       process.env.NEXT_PUBLIC_SUPABASE_URL!,
       process.env.SUPABASE_SERVICE_ROLE_KEY!,
       { auth: { persistSession: false } }
     );
     const { data: row, error: fetchError } = await admin
       .from("outputs").select("user_id").eq("id", id).maybeSingle();
     if (fetchError || !row) return NextResponse.json({ error: "not_found" }, { status: 404 });
     if (row.user_id !== user.id) return NextResponse.json({ error: "forbidden" }, { status: 403 });
     const { error } = await admin.from("outputs").delete().eq("id", id);
     if (error) return NextResponse.json({ error: error.message }, { status: 500 });
     return NextResponse.json({ ok: true });
   }
   ```
   (`SUPABASE_SERVICE_ROLE_KEY` is already in `.env.local`; `@supabase/supabase-js`
   is a dependency. This route is the ONLY code path that ever uses the service
   role key.)
8. **`app/(app)/library/page.tsx`.** Sources → matrix items: `featuredIdeaId:
   ideas.find((i) => !i.approved)?.id ?? null` from the existing
   `getRecentIdeas` result (loose coupling: the featured extraction represents
   the latest unapproved idea; acceptable for this prototype). Outputs →
   matrix items: add `outputId: o.id` (continue passing `outputId` into
   `ContentCard`).

## Acceptance criteria
- TSC + build pass (including the new route — Next 15 Promise-typed params).
- AngleReservoir approve flips the idea row (`approved: true`); checkmark state
  stays consistent after refresh.
- FeaturedExtraction approve does the same; "Open in Editor" / "Compare with
  Source Node" disabled + Coming soon.
- Delete flow: menu → modal → confirm → `DELETE` succeeds → page reloads without
  the output; 404/403 paths handled; a signed-out DELETE returns 401.

## Files
Edit: `components/workspace/AngleReservoir.tsx`,
`components/library/FeaturedExtraction.tsx`, `components/library/ContentCard.tsx`,
`app/(app)/library/page.tsx`.
Create: `components/workspace/IdeaApproveButton.tsx`,
`components/library/ApproveQueueButton.tsx`,
`components/library/DeleteOutputMenu.tsx`, `app/api/outputs/[id]/route.ts`.

## Do not touch
`components/library/LibraryHeader.tsx`, `SourceLineageTable.tsx` (Task 4);
`components/library/CuratedMatrix.tsx` mapping stays server-side; any
workspace/PlanBlueprint file (Task 4); `app/api` should otherwise remain empty.

## Verification
Run from `V:\nextjs_app`: `npx tsc --noEmit`, then
`npm run build --prefix "V:/nextjs_app"` (build also validates the route file).
Manual: approve an idea in workspace and in library (row flips; refresh holds);
delete an output via the new menu (row gone, no console error).