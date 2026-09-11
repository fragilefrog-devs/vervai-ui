type LedgerRow = {
  timestamp: string;
  artifactIcon: string;
  artifactIconClass: string;
  artifact: string;
  taskBadge: string;
  taskBadgeClass: string;
  taskDetail: string;
  debit: string;
  debitClass: string;
  balance: string;
  operator: { type: "avatar" | "agent"; name: string };
};

const LEDGER_ROWS: LedgerRow[] = [
  {
    timestamp: "Today, 14:22:04",
    artifactIcon: "movie",
    artifactIconClass: "text-primary",
    artifact: "Ep_104_Founder_Master.mp4",
    taskBadge: "Longform Synthesis",
    taskBadgeClass: "bg-primary-fixed text-on-primary-fixed",
    taskDetail: "Autonomous cut + recap",
    debit: "-2.0 Credits",
    debitClass: "text-error",
    balance: "12.0 Credits",
    operator: { type: "avatar", name: "Elena Vance" },
  },
  {
    timestamp: "Today, 11:08:19",
    artifactIcon: "video_library",
    artifactIconClass: "text-secondary",
    artifact: "Q3_Keynote_Shorts_Pack",
    taskBadge: "Video Decomposition",
    taskBadgeClass: "bg-secondary-fixed text-on-secondary-fixed",
    taskDetail: "Whisper-v3 + Smart reframing",
    debit: "-1.0 Credit",
    debitClass: "text-error",
    balance: "14.0 Credits",
    operator: { type: "avatar", name: "Elena Vance" },
  },
  {
    timestamp: "Yesterday, 18:45:10",
    artifactIcon: "psychology",
    artifactIconClass: "text-tertiary",
    artifact: "Acme_Editorial_Brand_Voice_v2",
    taskBadge: "Vector Tone Clustering",
    taskBadgeClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    taskDetail: "pgvector 1536-dim resync",
    debit: "-0.5 Credits",
    debitClass: "text-error",
    balance: "15.0 Credits",
    operator: { type: "agent", name: "Autonomous Agent" },
  },
  {
    timestamp: "Oct 21, 09:12:44",
    artifactIcon: "movie",
    artifactIconClass: "text-primary",
    artifact: "Product_Showcase_Broll_Render",
    taskBadge: "Longform Synthesis",
    taskBadgeClass: "bg-primary-fixed text-on-primary-fixed",
    taskDetail: "Color grade + automated cuts",
    debit: "-2.0 Credits",
    debitClass: "text-error",
    balance: "15.5 Credits",
    operator: { type: "avatar", name: "Elena Vance" },
  },
  {
    timestamp: "Oct 19, 16:30:11",
    artifactIcon: "add_circle",
    artifactIconClass: "text-tertiary",
    artifact: "On-Demand Buffer Top-Up",
    taskBadge: "Credit Addition",
    taskBadgeClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    taskDetail: "Instant Stripe checkout",
    debit: "+10.0 Credits",
    debitClass: "text-tertiary",
    balance: "17.5 Credits",
    operator: { type: "avatar", name: "Elena Vance" },
  },
];

const AVATAR_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAAK3MhEuoGPve0KhsFwbTBM80XWd_qgGFGlwm9Wc7C8LZZn2PgVTtsHEtQ6v6XpIrDwRAeGDZ3jly4B0sd2iANU5vXISSFOEb4iCEzlC5rZkCa7Jp_uq23M7rV20jmxjScbn4wuymZD0m3Nn40_YO1R7aW1UHqG9XeqqgXyJPhXI6aYJy5ASS_vlmaQm3tkOs7qIgGvdc8rYED6LcN7RO584PogLBnkv45VOqWNI8kp6jicTJlfAMX";

export default function ConsumptionLedger() {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col" id="ledger">
      <div className="p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-low/40">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-space-xs">
            <h3 className="font-headline-lg text-headline-lg text-on-surface">Consumption Ledger</h3>
            <span className="font-caption-bold text-caption-bold px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">
              Past 30 Days
            </span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Deterministic record of inference steps, cluster time, and agent activity.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-space-xs">
          <div className="bg-surface-container-high p-1 rounded-lg flex items-center gap-1">
            <button className="px-space-sm py-1 rounded bg-surface-container-lowest text-on-surface font-caption-bold text-caption-bold shadow-sm">
              All Operations
            </button>
            <button className="px-space-sm py-1 rounded hover:bg-surface-container text-on-surface-variant font-caption-bold text-caption-bold transition-colors">
              Synthesis
            </button>
            <button className="px-space-sm py-1 rounded hover:bg-surface-container text-on-surface-variant font-caption-bold text-caption-bold transition-colors">
              Audio Parse
            </button>
            <button className="px-space-sm py-1 rounded hover:bg-surface-container text-on-surface-variant font-caption-bold text-caption-bold transition-colors">
              Embeddings
            </button>
          </div>
          <button className="flex items-center gap-1 bg-surface-container hover:bg-surface-container-high text-on-surface px-space-sm py-1.5 rounded-lg text-body-sm font-body-medium transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[16px]">file_download</span>
            <span>Export CSV</span>
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider">
              <th className="py-space-sm px-space-lg font-semibold">Timestamp</th>
              <th className="py-space-sm px-space-md font-semibold">Source Artifact / Pipeline</th>
              <th className="py-space-sm px-space-md font-semibold">Inference Model & Task</th>
              <th className="py-space-sm px-space-md font-semibold text-right">Debit</th>
              <th className="py-space-sm px-space-md font-semibold text-right">Balance</th>
              <th className="py-space-sm px-space-lg font-semibold">Operator</th>
            </tr>
          </thead>
          <tbody className="divide-y-0 text-on-surface font-body-sm text-body-sm">
            {LEDGER_ROWS.map((row) => (
              <tr key={row.timestamp} className="hover:bg-surface-container-low/60 transition-colors">
                <td className="py-space-md px-space-lg whitespace-nowrap text-on-surface-variant font-caption-bold">
                  {row.timestamp}
                </td>
                <td className="py-space-md px-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className={`material-symbols-outlined text-[18px] ${row.artifactIconClass}`}>
                      {row.artifactIcon}
                    </span>
                    <span className="font-body-medium text-body-medium text-on-surface truncate max-w-[200px]">
                      {row.artifact}
                    </span>
                  </div>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    <span className={`px-2 py-0.5 rounded font-caption-bold text-caption-bold ${row.taskBadgeClass}`}>
                      {row.taskBadge}
                    </span>
                    <span className="text-on-surface-variant text-[11px]">{row.taskDetail}</span>
                  </div>
                </td>
                <td className={`py-space-md px-space-md whitespace-nowrap text-right font-headline-sm text-headline-sm ${row.debitClass}`}>
                  {row.debit}
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap text-right font-body-medium text-body-medium text-on-surface">
                  {row.balance}
                </td>
                <td className="py-space-md px-space-lg whitespace-nowrap">
                  <div className="flex items-center gap-space-xs">
                    {row.operator.type === "avatar" ? (
                      <img
                        className="w-5 h-5 rounded-full object-cover"
                        data-alt="Elena Vance circular portrait creative director photo professional studio lighting neutral gray tones"
                        src={AVATAR_SRC}
                      />
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[10px] text-on-primary font-bold">
                        AI
                      </div>
                    )}
                    <span className="font-caption-bold text-caption-bold text-on-surface">
                      {row.operator.name}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-space-md bg-surface-container-low/60 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
        <span>Showing 5 of 48 ledger operations</span>
        <div className="flex items-center gap-1">
          <button className="p-1 rounded hover:bg-surface-container text-on-surface disabled:opacity-40" disabled>
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <span className="px-2 font-caption-bold text-caption-bold text-on-surface">1 / 10</span>
          <button className="p-1 rounded hover:bg-surface-container text-on-surface">
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}