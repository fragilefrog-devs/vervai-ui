import ToneSliders from "./ToneSliders";

export default function VoiceProfilePanel() {
  return (
    <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm p-space-lg space-y-space-lg">
      <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="font-headline-md text-headline-md text-on-surface">
              Core Voice Profile: Elena Vance / Acme Executive
            </span>
            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-caption-bold text-caption-bold">
              Active Master
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Live mathematical constraints applied during inference step
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant font-caption-bold text-caption-bold">
            <span className="material-symbols-outlined text-[16px] text-primary">psychology</span>
            <span>Archetype: Operator-Scholar</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container text-tertiary font-caption-bold text-caption-bold">
            <span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span>v4.2 Fine-Tuned LoRA (96.8% Fidelity)</span>
          </div>
        </div>
      </div>
      <ToneSliders />
      <div className="flex flex-col md:flex-row items-center justify-between gap-space-md pt-space-xs">
        <div className="space-y-1">
          <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
            Tone Vector Signature
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Real-time dynamic cluster visualization generated from current weights.
          </p>
        </div>
        <div className="flex items-center gap-space-md p-2 rounded-lg bg-surface-container-low shrink-0">
          <svg className="w-32 h-10 text-primary-container" fill="none" viewBox="0 0 120 30">
            <path
              d="M 0 15 Q 15 2, 30 18 T 60 8 T 90 24 T 120 12"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2.5"
            ></path>
            <circle cx={30} cy={18} fill="currentColor" r={3}></circle>
            <circle cx={60} cy={8} fill="currentColor" r={3}></circle>
            <circle cx={90} cy={24} fill="currentColor" r={3}></circle>
          </svg>
          <div className="text-right">
            <span className="font-caption-bold text-caption-bold text-on-surface block">
              Zero-Drift Status
            </span>
            <span className="font-caption-bold text-caption-bold text-tertiary">
              Optimal Stability
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}