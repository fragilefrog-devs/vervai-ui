type Metric = {
  label: string;
  value: string;
  verdict: string;
  tone: "primary" | "tertiary" | "neutral";
};

const METRICS: Metric[] = [
  { label: "Cadence Match", value: "94.2%", verdict: "Optimal", tone: "primary" },
  { label: "Jargon Score", value: "0.0%", verdict: "Clean", tone: "tertiary" },
  { label: "Rhythm Flow", value: "14 wps", verdict: "Punchy", tone: "neutral" },
];

export default function SpeechCadenceSimulator() {
  return (
    <div className="lg:col-span-5 flex flex-col bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex items-center justify-between pb-space-xs">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-primary">speed</span>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Live Cadence Simulator &amp; Lint
          </h2>
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-caption-bold text-caption-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Inference Active
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
        Paste a draft hook to evaluate sentence geometry, rhythm, and semantic density.
      </p>
      <div className="relative bg-surface-container-low rounded-xl p-3 mb-space-md shadow-inner">
        <textarea
          className="w-full bg-transparent font-body-base text-body-medium text-on-surface resize-none focus:outline-none leading-relaxed"
          rows={3}
        >
          Most enterprise software roadmaps are polite fiction. We scaled throughput 4x by
          eliminating consensus-seeking rituals and deploying deterministic agents directly into
          the PR review pipeline.
        </textarea>
        <div className="flex items-center justify-between pt-2 text-outline">
          <span className="font-caption-bold text-[11px] uppercase tracking-wider">
            Words: 28 • Clauses: 2
          </span>
          <span className="font-caption-bold text-[11px] text-tertiary uppercase tracking-wider">
            Passed Negative Check
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-space-md">
        {METRICS.map((m) => (
          <div key={m.label} className="p-3 bg-surface-container rounded-lg text-center">
            <span className="font-caption-bold text-[11px] uppercase text-outline block mb-1">
              {m.label}
            </span>
            <span
              className={`font-display-xl text-headline-lg font-bold ${
                m.tone === "primary"
                  ? "text-primary"
                  : m.tone === "tertiary"
                    ? "text-tertiary-container"
                    : "text-on-surface"
              }`}
            >
              {m.value}
            </span>
            <span
              className={`font-caption-bold text-[10px] block mt-0.5 ${
                m.tone === "primary"
                  ? "text-tertiary"
                  : m.tone === "tertiary"
                    ? "text-tertiary-container"
                    : "text-on-surface-variant"
              }`}
            >
              {m.verdict}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto p-3.5 rounded-xl bg-secondary-container/40 flex items-start gap-3">
        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
          auto_fix_high
        </span>
        <div className="min-w-0">
          <span className="font-headline-sm text-body-sm text-on-surface block">
            Dynamic Syntax Suggestion
          </span>
          <p className="font-body-sm text-[12px] text-on-surface-variant leading-normal mt-0.5">
            Opening assertion is solid. To hit &gt;96% cadence alignment, convert &quot;Most
            enterprise software roadmaps are polite fiction&quot; into an immediate empirical
            claim.
          </p>
        </div>
      </div>
    </div>
  );
}