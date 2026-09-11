type RegistryRow = {
  icon: string;
  iconTone: "primary" | "secondary";
  label: string;
  count: string;
};

const REGISTRY_ROWS: RegistryRow[] = [
  { icon: "article", iconTone: "primary", label: "Longform Articles", count: "14 ready" },
  { icon: "smart_display", iconTone: "secondary", label: "Video Scripts & Clips", count: "18 cut & timed" },
  { icon: "tag", iconTone: "secondary", label: "Micro-Essays & Threads", count: "11 drafted" },
  { icon: "schema", iconTone: "secondary", label: "Blueprint Diagrams", count: "5 generated" },
];

export default function OutputRegistry() {
  return (
    <div className="lg:col-span-4 flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="space-y-space-md">
        <div className="flex items-center justify-between">
          <span className="font-label-caps text-label-caps uppercase text-secondary tracking-wider">
            Output Registry
          </span>
          <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-caption-bold text-[11px]">
            Active Engine
          </span>
        </div>
        <div className="flex items-baseline justify-between">
          <div>
            <h3 className="font-display-xl text-display-xl text-on-surface">48 Total</h3>
            <p className="font-body-sm text-body-sm text-secondary">
              Asset artifacts across 6 channels
            </p>
          </div>
          <div className="text-right">
            <span className="font-headline-lg text-headline-lg text-tertiary">94.8%</span>
            <p className="font-label-caps text-[10px] text-secondary uppercase">Voice Score Avg</p>
          </div>
        </div>
        <div className="space-y-space-xs pt-1">
          {REGISTRY_ROWS.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`material-symbols-outlined text-[18px] ${
                    row.iconTone === "primary" ? "text-primary" : "text-secondary"
                  }`}
                >
                  {row.icon}
                </span>
                <span className="font-body-medium text-body-medium text-on-surface">
                  {row.label}
                </span>
              </div>
              <span className="font-caption-bold text-caption-bold text-on-surface px-2 py-0.5 bg-surface-container-lowest rounded">
                {row.count}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-space-md mt-space-sm flex items-center gap-3 bg-surface-container-lowest">
        <svg className="w-10 h-10 shrink-0 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-surface-container-high"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
          ></path>
          <path
            className="text-tertiary"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeDasharray="94.8, 100"
            strokeLinecap="round"
            strokeWidth="3.5"
          ></path>
        </svg>
        <div className="min-w-0">
          <p className="font-caption-bold text-caption-bold text-on-surface leading-tight">
            Audited for Elena's Cadence
          </p>
          <p className="font-body-sm text-[12px] text-secondary truncate">
            Zero generic corporate cliches detected
          </p>
        </div>
      </div>
    </div>
  );
}