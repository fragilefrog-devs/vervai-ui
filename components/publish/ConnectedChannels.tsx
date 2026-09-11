type ChannelRow = {
  monogram: string;
  monogramClass: string;
  name: string;
  meta: string;
  status: string;
  statusIcon: string;
};

const CHANNELS: ChannelRow[] = [
  {
    monogram: "B",
    monogramClass: "bg-blue-600",
    name: "Buffer Pipeline",
    meta: "Default routing queue",
    status: "Synchronized",
    statusIcon: "sync",
  },
  {
    monogram: "in",
    monogramClass: "bg-sky-700",
    name: "LinkedIn Creator API",
    meta: "Token valid for 52 days",
    status: "Connected",
    statusIcon: "check_circle",
  },
  {
    monogram: "𝕏",
    monogramClass: "bg-neutral-900",
    name: "Twitter / X Broadcast",
    meta: "@ElenaVance & @AcmeStudio",
    status: "Connected",
    statusIcon: "check_circle",
  },
  {
    monogram: "S",
    monogramClass: "bg-amber-600",
    name: "Substack / Ghost",
    meta: "Direct CMS Webhook",
    status: "Active",
    statusIcon: "bolt",
  },
];

export default function ConnectedChannels() {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col space-y-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">sensors</span>
          </div>
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Connected Channels</h2>
            <p className="font-label-caps text-label-caps text-secondary uppercase">
              Delivery Health &amp; Credentials
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 font-caption-bold text-caption-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          All 4 Stable
        </span>
      </div>
      <div className="space-y-space-xs">
        {CHANNELS.map((channel) => (
          <div key={channel.name} className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-7 h-7 rounded-full ${channel.monogramClass} text-white flex items-center justify-center font-bold text-xs`}
              >
                {channel.monogram}
              </div>
              <div>
                <div className="font-caption-bold text-caption-bold text-on-surface">
                  {channel.name}
                </div>
                <div className="font-label-caps text-label-caps text-secondary">{channel.meta}</div>
              </div>
            </div>
            <span className="font-caption-bold text-caption-bold text-tertiary flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">{channel.statusIcon}</span>
              {channel.status}
            </span>
          </div>
        ))}
      </div>
      <div className="p-space-md rounded-xl bg-surface-container-high/60 space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-label-caps text-label-caps uppercase text-secondary tracking-wider">
            Next Dispatched Broadcast
          </span>
          <span className="font-caption-bold text-caption-bold text-primary">T-18h 40m</span>
        </div>
        <div className="font-headline-sm text-headline-sm text-on-surface">Tomorrow, 8:45 AM</div>
        <p className="font-body-sm text-body-sm text-secondary">
          Dispatches via LinkedIn Creator Pipe upon sign-off approval.
        </p>
      </div>
      <a
        className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-surface-container text-on-surface font-caption-bold text-caption-bold hover:bg-surface-container-high transition-colors active:scale-[0.98]"
        href="/connections"
      >
        <span className="material-symbols-outlined text-[16px]">hub</span>
        <span>Manage Connectors &amp; Webhooks</span>
      </a>
    </div>
  );
}