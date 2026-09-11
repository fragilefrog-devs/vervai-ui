import QuotaMonitors from "@/components/usage/QuotaMonitors";
import VelocityChart from "@/components/usage/VelocityChart";
import LeverageMetrics from "@/components/usage/LeverageMetrics";
import PipelineExecutions from "@/components/usage/PipelineExecutions";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-sm">
        <div className="flex items-center gap-space-xs font-label-caps text-label-caps tracking-wider text-secondary">
          <span>WORKSPACE</span>
          <span>/</span>
          <span className="text-on-surface font-semibold">CONSUMPTION &amp; AGENT TELEMETRY</span>
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container animate-pulse ml-1"></span>
        </div>
        <div className="flex items-center gap-space-xs text-caption-bold font-caption-bold text-secondary">
          <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
          <span>All inference nodes operational • 99.98% runtime SLA</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-lg pb-space-sm">
        <div className="max-w-2xl">
          <h1 className="font-display-2xl text-display-2xl text-on-surface tracking-tight">
            Usage &amp; Telemetry
          </h1>
          <p className="font-body-base text-body-base text-secondary mt-1">
            Real-time observability into autonomous agent runtimes, speech transcription hours,
            token consumption, and billing thresholds.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-space-sm shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-lowest shadow-sm hover:bg-surface-container-low transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
            <span className="font-caption-bold text-caption-bold text-on-surface">
              Oct 01 – Oct 31, 2025
            </span>
            <span className="font-label-caps text-[10px] px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed uppercase font-bold">
              Active
            </span>
          </div>
          <button
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-caption-bold text-caption-bold shadow-sm hover:bg-surface-container-low active:scale-[0.98] transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px] text-secondary">download</span>
            <span>Export Usage CSV</span>
          </button>
          <button
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary font-caption-bold text-caption-bold hover:bg-primary-container shadow-md active:scale-[0.98] transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            <span>Upgrade Allocation</span>
          </button>
        </div>
      </div>
      <QuotaMonitors />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-space-lg">
        <VelocityChart />
        <LeverageMetrics />
      </div>
      <PipelineExecutions />
    </div>
  );
}