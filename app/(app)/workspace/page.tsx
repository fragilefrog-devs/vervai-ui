import WorkspaceHeader from "@/components/workspace/WorkspaceHeader";
import PipelineGraph from "@/components/workspace/PipelineGraph";
import PlanBlueprint from "@/components/workspace/PlanBlueprint";
import IngestionTelemetry from "@/components/workspace/IngestionTelemetry";
import AngleReservoir from "@/components/workspace/AngleReservoir";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <WorkspaceHeader />
      <PipelineGraph />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-lg">
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          <PlanBlueprint />
        </div>
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <IngestionTelemetry />
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[20px] text-secondary">speed</span>
                <div>
                  <p className="font-caption-bold text-caption-bold text-on-surface">
                    Agent Compute Telemetry
                  </p>
                  <p className="font-body-sm text-[12px] text-secondary">
                    Latency: 1.2s • Estimated full run: 0.4 mins
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-headline-sm text-headline-sm text-on-surface">3.8k</span>
                <span className="font-label-caps text-[10px] text-secondary block uppercase">
                  Tokens Processed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AngleReservoir />
    </div>
  );
}