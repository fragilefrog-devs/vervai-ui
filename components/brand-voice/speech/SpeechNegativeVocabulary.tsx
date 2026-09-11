const BANNED = [
  "delve",
  "testament to",
  "game changer",
  "synergy",
  "leverage",
  "unlock potential",
  "fast-paced world",
  "tapestry",
];

export default function SpeechNegativeVocabulary() {
  return (
    <div className="lg:col-span-4 flex flex-col bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex items-center justify-between pb-space-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-error">block</span>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Negative Vocabulary
          </h2>
        </div>
        <span className="font-caption-bold text-caption-bold px-2 py-0.5 rounded bg-error-container text-on-error-container">
          8 Active Blocks
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
        Hard-prune generic synthetic patterns, buzzwords, and corporate boilerplate before drafts
        are rendered.
      </p>
      <div className="relative mb-space-md">
        <input
          className="w-full pl-3 pr-10 py-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder-outline focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner"
          id="banned-input"
          placeholder="Type banned phrase + Enter..."
          type="text"
        />
        <button
          className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 text-primary hover:bg-surface-container rounded-md transition-colors"
          title="Add token"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">add_circle</span>
        </button>
      </div>
      <div className="flex flex-wrap gap-1.5 flex-1 content-start mb-space-md">
        {BANNED.map((word) => (
          <span
            key={word}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container font-caption-bold text-caption-bold text-on-surface"
          >
            {word}
            <button className="hover:text-error text-outline transition-colors" type="button">
              <span className="material-symbols-outlined text-[14px]">close</span>
            </button>
          </span>
        ))}
      </div>
      <div className="mt-auto p-3.5 rounded-xl bg-surface-container-low flex items-start gap-3">
        <div className="pt-0.5">
          <input
            checked
            className="w-4 h-4 accent-primary rounded cursor-pointer"
            id="guardrail-toggle"
            type="checkbox"
          />
        </div>
        <div className="flex-1 min-w-0">
          <label
            className="font-headline-sm text-body-sm text-on-surface block cursor-pointer select-none"
            htmlFor="guardrail-toggle"
          >
            Deterministic Token Intercept
          </label>
          <span className="font-body-sm text-[12px] text-on-surface-variant leading-snug block mt-0.5">
            Auto-reject generation and force token re-roll if banned count &gt; 0 during stream.
          </span>
        </div>
      </div>
    </div>
  );
}