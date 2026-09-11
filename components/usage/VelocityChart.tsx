type VelocityBar = {
  day: string;
  tokens: string;
  isPeak?: boolean;
};

const VELOCITY_BARS: VelocityBar[] = [
  { day: "04", tokens: "8,200 tokens" },
  { day: "07", tokens: "11,400 tokens" },
  { day: "10", tokens: "9,100 tokens" },
  { day: "13", tokens: "13,800 tokens" },
  { day: "16", tokens: "12,200 tokens" },
  { day: "19", tokens: "14,100 tokens" },
  { day: "21", tokens: "18,400 tokens", isPeak: true },
  { day: "24", tokens: "15,300 tokens" },
  { day: "27", tokens: "12,900 tokens" },
  { day: "30", tokens: "10,400 tokens" },
];

export default function VelocityChart() {
  return (
    <div className="lg:col-span-7 rounded-xl bg-surface-container-lowest shadow-sm p-space-md flex flex-col justify-between">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-space-sm">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Daily Ingestion &amp; Synthesis Velocity
              </h2>
              <span className="font-label-caps text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-secondary font-bold">
                30 DAYS
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-secondary">
              Telemetry volume distributed across agent processing stages
            </p>
          </div>
          <div className="flex items-center gap-3 font-caption-bold text-[11px] text-secondary">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary-container"></span>Audio Ingest
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-primary"></span>Reasoning
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-tertiary"></span>Drafting
            </span>
          </div>
        </div>
        <div className="w-full mt-6">
          <div className="h-44 flex items-end justify-between gap-1.5 pt-4 pb-2 px-1 bg-surface-container-low rounded-lg">
            {VELOCITY_BARS.map((bar) => (
              <div
                key={bar.day}
                className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
                title={`Oct ${bar.day}: ${bar.tokens}`}
              >
                {bar.isPeak ? (
                  <span className="absolute -top-3 w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                ) : null}
                <div className="w-full flex flex-col justify-end h-full gap-0.5 rounded-t overflow-hidden">
                  <div className="w-full bg-tertiary" style={{ height: "30%" }}></div>
                  <div className="w-full bg-primary" style={{ height: "45%" }}></div>
                  <div className="w-full bg-secondary-container" style={{ height: "25%" }}></div>
                </div>
                <span
                  className={`font-label-caps text-[9px] mt-1 ${bar.isPeak ? "font-bold text-primary" : "text-outline group-hover:text-primary"}`}
                >
                  {bar.day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-surface-container-high/60 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-primary shrink-0">insights</span>
          <span className="font-body-sm text-body-sm text-on-surface">
            <strong className="font-semibold text-primary">Peak Day: Oct 21</strong> — 18,400 tokens
            processed, 4 sources ingested.
          </span>
        </div>
        <span className="font-label-caps text-label-caps text-secondary whitespace-nowrap hidden sm:inline-block">
          Average latency: <strong className="text-on-surface font-semibold">1.4s</strong> per node
        </span>
      </div>
    </div>
  );
}