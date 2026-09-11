import SpeechToneSliders from "./SpeechToneSliders";

export default function SpeechProfilePanel() {
  return (
    <div className="lg:col-span-8 flex flex-col bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[24px]">graphic_eq</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Core Voice Profile: Elena Vance / Acme Executive
              </h2>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-fixed/60 text-tertiary font-caption-bold text-caption-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                Active Master
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Archetype: Operator-Scholar • v4.2 Fine-Tuned LoRA (96.8% Fidelity)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-caption-bold text-caption-bold text-outline uppercase tracking-wider">
            Tone Vector Mode:
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-body-sm text-body-sm font-semibold">
            Strict Deterministic
          </span>
        </div>
      </div>
      <SpeechToneSliders />
      <div className="mt-space-lg pt-space-md bg-surface-container-low rounded-xl p-space-md flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md min-w-0">
          <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 text-primary shadow-sm">
            <span className="material-symbols-outlined text-[26px]">insights</span>
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Real-Time Vector Embeddings Wave
              </span>
              <span className="font-caption-bold text-caption-bold px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed">
                Zero-Drift Active
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Continuous semantic clustering across 1,536 dimensions. Variance: ±0.04%
            </p>
          </div>
        </div>
        <div className="w-full md:w-64 h-11 flex items-center justify-center bg-surface-container-lowest rounded-lg px-2 shadow-inner">
          <svg
            className="w-full h-8 text-primary overflow-visible"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 240 32"
          >
            <path
              d="M0,16 Q15,4 30,16 T60,16 T90,28 T120,6 T150,20 T180,10 T210,22 T240,16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            ></path>
            <circle cx={120} cy={6} fill="#007454" r={3.5}></circle>
            <circle cx={180} cy={10} fill="#2a4dff" r={2.5}></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}