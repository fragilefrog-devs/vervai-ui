export default function FeaturedExtraction() {
  return (
    <div className="lg:col-span-8 flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="space-y-space-md relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-space-xs">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container text-[11px] font-caption-bold text-on-surface-variant">
            <span className="material-symbols-outlined text-[14px] text-primary">psychology</span>
            <span>SYNTHESIZED FROM EP42 • 98% BRAND VOICE ALIGNMENT</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[11px] font-caption-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
            <span>Needs Human Review</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-caps text-[10px] uppercase font-bold tracking-wider">
              LinkedIn Longform • Substack Dispatch
            </span>
            <span className="text-secondary font-body-sm text-body-sm">• Batch #814-A</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg lg:text-display-xl lg:font-display-xl text-on-surface tracking-tight leading-snug">
            The Operating Leverage Fallacy: Why 6 Engineers Outperform 40 in the AI Era
          </h2>
          <p className="font-body-base text-body-base text-on-surface-variant line-clamp-2 max-w-2xl">
            Comprehensive 1,850-word analytical breakdown dissecting team topology, autonomous
            agent augmentation, and capital efficiency benchmarks from Acme's Q2 engineering
            velocity audit.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-space-sm py-space-xs bg-surface-container-low/60 rounded-lg px-space-md">
          <div>
            <p className="font-label-caps text-label-caps uppercase text-secondary">Length</p>
            <p className="font-headline-sm text-headline-sm text-on-surface">
              1,850 words <span className="text-secondary font-normal text-xs">(6 min)</span>
            </p>
          </div>
          <div>
            <p className="font-label-caps text-label-caps uppercase text-secondary">
              Predicted Virality
            </p>
            <div className="flex items-center gap-1.5">
              <span className="font-headline-sm text-headline-sm text-tertiary">9.4/10</span>
              <span className="material-symbols-outlined text-tertiary text-[16px]">
                trending_up
              </span>
            </div>
          </div>
          <div>
            <p className="font-label-caps text-label-caps uppercase text-secondary">
              Key Takeaways Extracted
            </p>
            <p className="font-headline-sm text-headline-sm text-on-surface">5 Axioms • 2 Schemas</p>
          </div>
        </div>
      </div>
      <div className="pt-space-md mt-space-md flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest relative z-10">
        <div className="flex items-center gap-space-xs">
          <button
            className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-primary text-on-primary font-caption-bold text-caption-bold shadow-xs hover:bg-primary-container active:scale-[0.98] transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">edit_note</span>
            <span>Open in Editor</span>
          </button>
          <button
            className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg bg-surface-container-high text-on-surface font-caption-bold text-caption-bold hover:bg-surface-container-highest transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
            <span>Approve &amp; Queue</span>
          </button>
        </div>
        <button
          className="inline-flex items-center gap-1 text-secondary hover:text-on-surface font-caption-bold text-caption-bold transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">account_tree</span>
          <span>Compare with Source Node</span>
        </button>
      </div>
    </div>
  );
}