export default function DispatchTelemetry() {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg space-y-space-md">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">Dispatch Telemetry</h2>
        <span className="font-label-caps text-label-caps text-secondary">30-Day Reliability</span>
      </div>
      <div className="grid grid-cols-2 gap-space-sm">
        <div className="p-3 rounded-lg bg-surface-container-low">
          <div className="font-label-caps text-label-caps text-secondary uppercase">Success Rate</div>
          <div className="font-display-xl text-display-xl text-on-surface mt-1">99.4%</div>
          <div className="text-[11px] font-caption-bold text-tertiary mt-0.5">0 failed retries</div>
        </div>
        <div className="p-3 rounded-lg bg-surface-container-low">
          <div className="font-label-caps text-label-caps text-secondary uppercase">Avg Latency</div>
          <div className="font-display-xl text-display-xl text-on-surface mt-1">1.8s</div>
          <div className="text-[11px] font-caption-bold text-secondary mt-0.5">
            Optimal webhook speed
          </div>
        </div>
      </div>
      <div className="space-y-1.5 pt-1">
        <div className="flex justify-between font-label-caps text-label-caps text-secondary">
          <span>Buffer API Quota Consumed</span>
          <span className="font-caption-bold text-on-surface">148 / 500 Calls</span>
        </div>
        <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
          <div className="h-full bg-primary rounded-full"></div>
        </div>
      </div>
    </div>
  );
}