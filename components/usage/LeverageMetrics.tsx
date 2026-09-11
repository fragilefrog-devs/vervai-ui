type LeverageMetric = {
  value: string;
  valueClass: string;
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
};

const LEVERAGE_METRICS: LeverageMetric[] = [
  {
    value: "8.4x",
    valueClass: "text-primary",
    badge: "+18% vs Sep",
    badgeClass: "bg-primary-fixed text-on-primary-fixed",
    title: "Content Leverage Multiplier",
    description:
      "Average 8.4 publication-ready deliverables produced per raw hour of audio digested.",
  },
  {
    value: "96.2%",
    valueClass: "text-tertiary",
    badge: "High Quality",
    badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    title: "First-Pass Approval Rate",
    description:
      "Synthesized assets accepted into final review queue without manual paragraph restructuring.",
  },
  {
    value: "4.2 hrs",
    valueClass: "text-on-surface",
    badge: "Time Saved",
    badgeClass: "bg-surface-container-highest text-secondary",
    title: "Velocity Delta",
    description:
      "Time reduction measured against historic manual audio transcription & draft staging.",
  },
];

export default function LeverageMetrics() {
  return (
    <div className="lg:col-span-5 rounded-xl bg-surface-container-lowest shadow-sm p-space-md flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-space-sm">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Operational Leverage &amp; Yield
            </h2>
            <p className="font-body-sm text-body-sm text-secondary">
              Efficiency metrics across autonomous production
            </p>
          </div>
          <div className="w-7 h-7 rounded bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
            <span className="material-symbols-outlined text-[18px]">trending_up</span>
          </div>
        </div>
        <div className="space-y-space-md mt-4">
          {LEVERAGE_METRICS.map((metric) => (
            <div
              key={metric.title}
              className="p-space-sm rounded-lg bg-surface-container-low transition-colors hover:bg-surface-container"
            >
              <div className="flex items-baseline justify-between">
                <span className={`font-display-xl text-display-xl font-bold ${metric.valueClass}`}>
                  {metric.value}
                </span>
                <span
                  className={`font-label-caps text-[10px] px-2 py-0.5 rounded font-semibold ${metric.badgeClass}`}
                >
                  {metric.badge}
                </span>
              </div>
              <h3 className="font-caption-bold text-caption-bold text-on-surface mt-1">
                {metric.title}
              </h3>
              <p className="font-body-sm text-body-sm text-secondary mt-0.5 leading-snug">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}