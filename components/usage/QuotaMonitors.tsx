type QuotaMonitor = {
  icon: string;
  iconBg: string;
  iconColor: string;
  monitorLabel: string;
  title: string;
  utilizationLabel: string;
  utilizationClass: string;
  value: string;
  total: string;
  barColor: string;
  barWidth: string;
  footerLeft: string;
  footerRight: string;
  allocationTitle: string;
  allocations: { dot: string; label: string; value: string }[];
};

const QUOTA_MONITORS: QuotaMonitor[] = [
  {
    icon: "smart_toy",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    monitorLabel: "Quota Monitor 01",
    title: "Autonomous Agent Runs",
    utilizationLabel: "71% Utilized",
    utilizationClass: "bg-primary-fixed text-on-primary-fixed",
    value: "142",
    total: "/ 200 Runs",
    barColor: "bg-primary",
    barWidth: "71%",
    footerLeft: "58 runs remaining",
    footerRight: "Resets in 9 days (Nov 01)",
    allocationTitle: "Run Allocation Profile",
    allocations: [
      { dot: "bg-primary", label: "Longform synthesis jobs", value: "98" },
      { dot: "bg-secondary", label: "Video decomposition runs", value: "32" },
      { dot: "bg-tertiary", label: "Multi-channel blueprints", value: "12" },
    ],
  },
  {
    icon: "mic",
    iconBg: "bg-tertiary/10",
    iconColor: "text-tertiary",
    monitorLabel: "Quota Monitor 02",
    title: "Whisper-v3 Audio & Video",
    utilizationLabel: "67% Utilized",
    utilizationClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    value: "13.4",
    total: "/ 20.0 Hours",
    barColor: "bg-tertiary",
    barWidth: "67%",
    footerLeft: "6.6 hours remaining",
    footerRight: "99.8% Diarization score",
    allocationTitle: "Processed Ingestion Feeds",
    allocations: [
      { dot: "", label: "Podcast master audio", value: "7 files (7.2h)" },
      { dot: "", label: "Zoom internal all-hands", value: "4 sessions (4.1h)" },
      { dot: "", label: "Loom product walkthroughs", value: "6 clips (2.1h)" },
    ],
  },
];

export default function QuotaMonitors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-space-lg">
      {QUOTA_MONITORS.map((monitor) => (
        <div
          key={monitor.title}
          className="rounded-xl bg-surface-container-lowest shadow-sm p-space-md flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div>
            <div className="flex items-center justify-between mb-space-xs">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-lg ${monitor.iconBg} flex items-center justify-center ${monitor.iconColor}`}
                >
                  <span className="material-symbols-outlined text-[20px]">{monitor.icon}</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps uppercase text-outline">
                    {monitor.monitorLabel}
                  </p>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    {monitor.title}
                  </h2>
                </div>
              </div>
              <span
                className={`font-label-caps text-[11px] px-2 py-0.5 rounded-full font-bold ${monitor.utilizationClass}`}
              >
                {monitor.utilizationLabel}
              </span>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display-2xl text-display-2xl text-on-surface font-bold tracking-tight">
                {monitor.value}
              </span>
              <span className="font-headline-md text-headline-md text-secondary">
                {monitor.total}
              </span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-surface-container-high mt-3 overflow-hidden">
              <div
                className={`h-full rounded-full ${monitor.barColor} transition-all duration-700`}
                style={{ width: monitor.barWidth }}
              ></div>
            </div>
            <div className="flex items-center justify-between mt-2 font-caption-bold text-caption-bold text-secondary">
              <span className="text-tertiary">{monitor.footerLeft}</span>
              <span>{monitor.footerRight}</span>
            </div>
          </div>
          <div className="mt-5 pt-3 bg-surface-container-low rounded-lg p-space-sm space-y-1.5">
            <p className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
              {monitor.allocationTitle}
            </p>
            {monitor.allocations.map((allocation) => (
              <div key={allocation.label} className="flex justify-between font-body-sm text-body-sm text-on-surface">
                <span className="flex items-center gap-1.5">
                  {allocation.dot ? <span className={`w-2 h-2 rounded-full ${allocation.dot}`}></span> : null}
                  {allocation.label}
                </span>
                <span className="font-semibold">{allocation.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-md flex flex-col justify-between hover:shadow-md transition-shadow">
        <div>
          <div className="flex items-center justify-between mb-space-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
                <span className="material-symbols-outlined text-[20px]">credit_card</span>
              </div>
              <div>
                <p className="font-label-caps text-label-caps uppercase text-outline">
                  Subscription &amp; Tier
                </p>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  Studio Pro ($149 / mo)
                </h2>
              </div>
            </div>
            <span className="font-label-caps text-[10px] px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-bold">
              Auto-Renew
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-secondary mt-3">
            Autonomous multi-agent orchestration for small cross-functional creative desks. Dedicated
            low-latency inference queues with priority Whisper diarization.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
              <span className="font-caption-bold text-caption-bold text-secondary">Included Seats</span>
              <span className="font-caption-bold text-caption-bold text-on-surface">
                3 Active Creators
              </span>
            </div>
            <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
              <span className="font-caption-bold text-caption-bold text-secondary">
                Next Invoice Date
              </span>
              <span className="font-caption-bold text-caption-bold text-on-surface">
                $149.00 on Nov 01, 2025
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5 pt-3">
          <a
            className="inline-flex items-center gap-1 font-caption-bold text-caption-bold text-primary hover:text-primary-container transition-colors group"
            href="#"
          >
            <span>Manage Stripe Subscription &amp; Invoices</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}