type TargetOutput = {
  monogram: string;
  monogramBg: string;
  title: string;
  audience: string;
  length: string;
  excerpt: string;
  excerptClamp: "line-clamp-2" | "line-clamp-1";
  tags: { icon: string; label: string }[];
};

const TARGET_OUTPUTS: TargetOutput[] = [
  {
    monogram: "LI",
    monogramBg: "bg-primary text-on-primary",
    title: "LinkedIn Authority Essay",
    audience: "Founders & Execs",
    length: "3 min read • ~680 words",
    excerptClamp: "line-clamp-2",
    excerpt:
      "“Why premature scaling headcount destroys operating leverage: Lessons from going $1M to $8M ARR with only 6 engineers.”",
    tags: [
      { icon: "bolt", label: "Tone: Analytical & Direct" },
      { icon: "target", label: "Hook: Contrarian metrics" },
    ],
  },
  {
    monogram: "NL",
    monogramBg: "bg-tertiary text-on-tertiary",
    title: "Bi-weekly Newsletter Feature",
    audience: "Operators",
    length: "7 min read • ~1,850 words",
    excerptClamp: "line-clamp-2",
    excerpt:
      "Deep architectural breakdown of shifting CAC/LTV dynamics in high-interest environments. Includes interactive formula breakdown and 3 founder tactical teardowns.",
    tags: [
      { icon: "bolt", label: "Tone: Educational Teardown" },
      { icon: "table_chart", label: "Visuals: 2 Data Matrices" },
    ],
  },
  {
    monogram: "VS",
    monogramBg: "bg-secondary text-on-secondary",
    title: "Hook-driven Video Script (Clip 01)",
    audience: "Reels / TikTok",
    length: "55 seconds • 140 words",
    excerptClamp: "line-clamp-1",
    excerpt:
      "Visual hook with dynamic on-screen text: “Most Seed startups don't die of starvation, they die of indigestion.”",
    tags: [],
  },
  {
    monogram: "VS",
    monogramBg: "bg-secondary text-on-secondary",
    title: "Hook-driven Video Script (Clip 02)",
    audience: "YouTube Shorts",
    length: "42 seconds • 115 words",
    excerptClamp: "line-clamp-1",
    excerpt:
      "Direct founder camera speech: “Here are the exact 3 metrics our board stopped asking for once we hit product-market fit.”",
    tags: [],
  },
];

export default function PlanBlueprint() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between flex-1">
      <div>
        <div className="flex items-start justify-between mb-space-md pb-space-sm bg-surface-container-low -mx-space-lg -mt-space-lg px-space-lg py-space-sm rounded-t-xl">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[20px] text-primary">splitscreen</span>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Active Plan Blueprint: 4 Target Outputs
              </h2>
              <p className="font-body-sm text-body-sm text-secondary">
                Target output architecture mapped to audience engagement telemetry
              </p>
            </div>
          </div>
          <span className="font-label-caps text-label-caps bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded uppercase">
            Synthesized
          </span>
        </div>
        <div className="space-y-space-sm">
          {TARGET_OUTPUTS.map((output) => (
            <div
              key={output.title}
              className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-5 h-5 rounded flex items-center justify-center text-[11px] font-bold ${output.monogramBg}`}
                  >
                    {output.monogram}
                  </span>
                  <span className="font-caption-bold text-caption-bold text-on-surface">
                    {output.title}
                  </span>
                  <span className="font-label-caps text-label-caps px-2 py-0.5 rounded bg-surface-container-high text-secondary">
                    {output.audience}
                  </span>
                </div>
                <span className="font-label-caps text-label-caps text-secondary">
                  {output.length}
                </span>
              </div>
              <p className={`font-body-sm text-body-sm text-on-surface-variant ${output.excerptClamp}`}>
                {output.excerpt}
              </p>
              {output.tags.length > 0 ? (
                <div className="flex items-center gap-space-md mt-2 pt-2 text-[11px] font-caption-bold text-secondary">
                  {output.tags.map((tag) => (
                    <span key={tag.label} className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">{tag.icon}</span>
                      {tag.label}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between pt-space-md mt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-space-sm rounded-b-xl">
        <button
          className="inline-flex items-center gap-1.5 text-secondary hover:text-on-surface font-caption-bold text-caption-bold transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">tune</span>
          <span>Modify Plan Prompts</span>
        </button>
        <div className="flex items-center gap-space-sm">
          <button
            className="px-3 py-1.5 rounded bg-surface-container-high text-on-surface font-caption-bold text-caption-bold hover:bg-surface-container-highest transition-colors"
            type="button"
          >
            Regenerate Plan
          </button>
          <button
            className="px-4 py-1.5 rounded bg-primary text-on-primary font-caption-bold text-caption-bold hover:bg-primary-container transition-colors shadow-sm"
            type="button"
          >
            Approve Plan
          </button>
        </div>
      </div>
    </div>
  );
}