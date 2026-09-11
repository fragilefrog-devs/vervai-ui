import NotificationCenter from "@/components/notifications/NotificationCenter";

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full relative">
        <div className="w-full px-space-lg py-space-md opacity-40 pointer-events-none select-none transition-opacity duration-300">
          <div className="flex items-center justify-between mb-space-lg">
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Studio Telemetry</span>
              <span className="font-display-2xl text-display-2xl text-on-surface tracking-tight">Active Operations</span>
            </div>
            <div className="flex items-center gap-space-sm">
              <div className="bg-surface-container-high px-space-md py-space-sm rounded-lg flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                Autonomous pipeline running: nominal
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-space-lg">
            <div className="col-span-8 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-space-sm">
                <span className="font-headline-md text-headline-md text-on-surface">Live Orchestrator Matrix</span>
                <span className="font-label-caps text-label-caps text-primary bg-primary-fixed px-space-sm py-0.5 rounded">6 Active Tasks</span>
              </div>
              <div className="h-44 bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-headline-sm text-headline-sm text-on-surface">ep43-ai-infra-summit.mp4</span>
                  <span className="font-body-sm text-body-sm text-tertiary font-medium">98% Match</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-primary-container h-full w-4/5 rounded-full"></div>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">4 child synthesis threads operating across 3 clusters</span>
              </div>
            </div>
            <div className="col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
              <span className="font-headline-md text-headline-md text-on-surface">System Health</span>
              <div className="space-y-space-sm">
                <div className="p-space-sm bg-surface-container rounded-lg flex justify-between items-center">
                  <span className="font-body-sm text-body-sm text-on-surface">Whisper-v3 Capacity</span>
                  <span className="font-caption-bold text-caption-bold text-on-surface">67%</span>
                </div>
                <div className="p-space-sm bg-surface-container rounded-lg flex justify-between items-center">
                  <span className="font-body-sm text-body-sm text-on-surface">Vector Embeddings</span>
                  <span className="font-caption-bold text-caption-bold text-tertiary">Optimal</span>
                </div>
                <div className="p-space-sm bg-surface-container rounded-lg flex justify-between items-center">
                  <span className="font-body-sm text-body-sm text-on-surface">Twitter OAuth</span>
                  <span className="font-caption-bold text-caption-bold text-error">Stale</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NotificationCenter />
      </div>
    </>
  );
}