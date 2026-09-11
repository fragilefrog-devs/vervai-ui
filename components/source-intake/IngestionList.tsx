type IngestionItem =
  | {
      kind: "in-flight";
      fileName: string;
      icon: string;
      meta: string;
      progress: number;
      eta: string;
    }
  | {
      kind: "processed";
      fileName: string;
      icon: string;
      meta: string;
      outputs: string;
    };

const INGESTIONS: IngestionItem[] = [
  {
    kind: "in-flight",
    fileName: "ep43-ai-infra-summit.mp4",
    icon: "smart_display",
    meta: "Video • 1.2 GB • Transcribing via Whisper-v3 Large • Speaker Diarization active",
    progress: 68,
    eta: "Est. 1m 20s remaining",
  },
  {
    kind: "processed",
    fileName: "ep42-founder-interview.mp3",
    icon: "podcasts",
    meta: "Audio • Processed 2h ago",
    outputs: "4 outputs synthesized",
  },
  {
    kind: "processed",
    fileName: "q3-growth-strategy.pdf",
    icon: "article",
    meta: "Document • Processed yesterday",
    outputs: "6 outputs synthesized",
  },
  {
    kind: "processed",
    fileName: "engineering-allhands-nov.wav",
    icon: "graphic_eq",
    meta: "Audio • Processed 3d ago",
    outputs: "2 outputs synthesized",
  },
];

function InFlightRow({ item }: { item: Extract<IngestionItem, { kind: "in-flight" }> }) {
  return (
    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      <div className="flex items-center gap-space-md min-w-0">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-primary text-[24px]">{item.icon}</span>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-headline-sm text-headline-sm text-on-surface truncate">
              {item.fileName}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-caption-bold text-caption-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              In Flight
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-secondary mt-0.5">{item.meta}</p>
        </div>
      </div>
      <div className="flex flex-col md:items-end w-full md:w-auto gap-2 shrink-0">
        <div className="flex items-center justify-between md:justify-end gap-space-md w-full md:w-auto">
          <div className="flex items-center gap-3">
            <span className="font-label-caps text-label-caps text-secondary uppercase">
              {item.eta}
            </span>
            <span className="font-caption-bold text-caption-bold text-primary">{item.progress}%</span>
          </div>
          <button
            className="px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-caption-bold text-caption-bold transition-colors shadow-xs"
            type="button"
          >
            Inspect Agent Log
          </button>
        </div>
        <div className="w-full md:w-64 h-2 rounded-full bg-surface-container overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${item.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function ProcessedRow({ item }: { item: Extract<IngestionItem, { kind: "processed" }> }) {
  return (
    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md hover:bg-surface-container-lowest/80 transition-colors">
      <div className="flex items-center gap-space-md min-w-0">
        <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-secondary text-[22px]">{item.icon}</span>
        </div>
        <div className="min-w-0">
          <p className="font-headline-sm text-headline-sm text-on-surface truncate">
            {item.fileName}
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="font-body-sm text-body-sm text-secondary">{item.meta}</span>
            <span className="text-outline-variant font-body-sm">•</span>
            <span className="font-caption-bold text-caption-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">
              {item.outputs}
            </span>
          </div>
        </div>
      </div>
      <a
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface font-caption-bold text-caption-bold transition-all shadow-xs self-end md:self-auto"
        href="/workspace"
      >
        <span>Open Agent Workspace</span>
        <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
      </a>
    </div>
  );
}

export default function IngestionList() {
  return (
    <section className="space-y-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Recent Source Ingestions &amp; Active Queue
          </h2>
          <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-caps text-label-caps text-secondary">
            4 Total
          </span>
        </div>
        <a
          className="font-caption-bold text-caption-bold text-primary hover:text-primary-container transition-colors flex items-center gap-1"
          href="/library"
        >
          <span>View full intake archive</span>
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </a>
      </div>
      <div className="space-y-space-sm">
        {INGESTIONS.map((item) =>
          item.kind === "in-flight" ? (
            <InFlightRow key={item.fileName} item={item} />
          ) : (
            <ProcessedRow key={item.fileName} item={item} />
          )
        )}
      </div>
    </section>
  );
}