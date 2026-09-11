const BANNED_PHRASES = [
  "delve",
  "testament to",
  "game changer",
  "synergy",
  "leverage",
  "unlock potential",
  "fast-paced world",
  "tapestry",
];

export default function NegativeVocabulary() {
  return (
    <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between space-y-space-md">
      <div className="space-y-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-error text-[20px]">block</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Negative Vocabulary
            </h3>
          </div>
          <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-caption-bold text-caption-bold">
            8 Active Blocks
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Hard-prune generic AI artifacts and corporate boilerplate from ever reaching draft
          states.
        </p>
        <div className="flex flex-wrap gap-1.5 pt-space-xs" id="blacklist-container">
          {BANNED_PHRASES.map((phrase) => (
            <span
              key={phrase}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-caption-bold text-caption-bold"
            >
              {phrase}
              <button className="text-outline hover:text-error transition-colors" type="button">
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            </span>
          ))}
        </div>
        <div className="relative pt-space-xs">
          <input
            className="w-full pl-3 pr-9 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:bg-surface-container-lowest focus:shadow-sm focus:outline-none transition-all placeholder:text-outline"
            id="new-tag-input"
            placeholder="Type banned phrase + Enter..."
            type="text"
          />
          <button
            className="absolute right-2 top-4 text-on-surface-variant hover:text-primary transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
          </button>
        </div>
      </div>
      <div className="p-space-md rounded-xl bg-tertiary-fixed/20 flex items-start gap-space-sm">
        <input
          checked
          className="mt-1 w-4 h-4 accent-tertiary cursor-pointer"
          id="enforce-toggle"
          type="checkbox"
        />
        <label className="cursor-pointer select-none space-y-0.5" htmlFor="enforce-toggle">
          <span className="font-headline-sm text-body-sm text-on-surface block">
            Zero-Tolerance LLM Guardrail
          </span>
          <span className="font-body-sm text-[12px] text-on-surface-variant leading-tight block">
            Reject &amp; re-synthesize generation automatically if any banned vocabulary count &gt;
            0.
          </span>
        </label>
      </div>
    </div>
  );
}