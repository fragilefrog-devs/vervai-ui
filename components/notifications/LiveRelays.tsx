type Relay = { name: string; detail: string; checked?: boolean };

const RELAYS: Relay[] = [
  { name: "Slack", detail: "#autonomous-ops", checked: true },
  { name: "Digest", detail: "Daily at 08:00", checked: true },
  { name: "In-App", detail: "Instant push", checked: true },
];

export default function LiveRelays() {
  return (
    <div className="p-space-lg bg-surface-container-lowest shrink-0 shadow-[0_-4px_16px_rgba(0,0,0,0.02)]">
      <div className="flex items-center justify-between mb-space-sm">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant">settings_input_component</span>
          <span className="font-headline-sm text-headline-sm text-on-surface">Live Relays</span>
        </div>
        <a className="font-caption-bold text-caption-bold text-primary hover:underline" href="#">
          Config rules
        </a>
      </div>
      <div className="grid grid-cols-3 gap-space-sm">
        {RELAYS.map((relay) => (
          <label
            key={relay.name}
            className="cursor-pointer bg-surface-container-low hover:bg-surface-container p-space-sm rounded-lg flex flex-col justify-between transition-colors"
          >
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-caption-bold text-caption-bold text-on-surface">{relay.name}</span>
              <input checked={relay.checked} className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
            </div>
            <span className="font-body-sm text-[11px] text-on-surface-variant">{relay.detail}</span>
          </label>
        ))}
      </div>
    </div>
  );
}