type PipelineRun = {
  id: string;
  sourceIcon: string;
  source: string;
  tokens: string;
  latency: string;
  status: "Completed";
};

const PIPELINE_RUNS: PipelineRun[] = [
  { id: "pip_82e79f2", sourceIcon: "audiotrack", source: "ep42-founder-interview.mp3", tokens: "3.8k tokens", latency: "42 seconds", status: "Completed" },
  { id: "pip_99b12a0", sourceIcon: "description", source: "q3-growth-strategy.pdf", tokens: "2.1k tokens", latency: "18 seconds", status: "Completed" },
  { id: "pip_77c44d1", sourceIcon: "mic", source: "engineering-allhands-nov.wav", tokens: "4.4k tokens", latency: "54 seconds", status: "Completed" },
  { id: "pip_63d911b", sourceIcon: "videocam", source: "brand-onboarding-deck.mp4", tokens: "5.2k tokens", latency: "1m 12s", status: "Completed" },
];

export default function PipelineExecutions() {
  return (
    <div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm mb-space-sm">
        <div className="flex items-center gap-3">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Recent Agent Pipeline Executions &amp; Token Breakdown
          </h2>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed text-[11px] font-caption-bold">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span>Live telemetry stream</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="px-2.5 py-1 text-[12px] font-caption-bold rounded bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface transition-colors"
            type="button"
          >
            Filter by Status
          </button>
          <button
            className="px-2.5 py-1 text-[12px] font-caption-bold rounded bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface transition-colors"
            type="button"
          >
            Token Size
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left font-body-sm text-body-sm">
          <thead>
            <tr className="bg-surface-container-low text-secondary font-label-caps text-label-caps uppercase">
              <th className="py-2.5 px-4 rounded-l">Pipeline Run ID</th>
              <th className="py-2.5 px-4">Source Material</th>
              <th className="py-2.5 px-4">Compute Vol</th>
              <th className="py-2.5 px-4">Execution Latency</th>
              <th className="py-2.5 px-4">Billing Tier</th>
              <th className="py-2.5 px-4 rounded-r text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y-0 space-y-1">
            {PIPELINE_RUNS.map((run) => (
              <tr key={run.id} className="hover:bg-surface-container-low transition-colors group">
                <td className="py-3 px-4 font-caption-bold text-caption-bold text-on-surface">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      account_tree
                    </span>
                    <span className="font-mono text-on-surface">{run.id}</span>
                  </div>
                </td>
                <td className="py-3 px-4 font-medium text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    {run.sourceIcon}
                  </span>
                  <span>{run.source}</span>
                </td>
                <td className="py-3 px-4 text-on-surface font-mono">{run.tokens}</td>
                <td className="py-3 px-4 text-secondary">{run.latency}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-secondary text-[11px] font-label-caps">
                    Included
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-caption-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    {run.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span className="font-body-sm text-body-sm text-secondary">
          Showing latest 4 of 142 total pipeline executions in cycle
        </span>
        <a
          className="inline-flex items-center gap-1 font-caption-bold text-caption-bold text-primary hover:text-primary-container transition-colors group"
          href="#"
        >
          <span>View Complete Telemetry Stream</span>
          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}