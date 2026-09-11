const TOPIC_CLUSTERS = [
  "GTM Strategy",
  "Bootstrapping vs VC",
  "Founder Led Sales",
  "Headcount Discipline",
  "LTV Expansion",
];

export default function IngestionTelemetry() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-space-md pb-space-sm bg-surface-container-low -mx-space-lg -mt-space-lg px-space-lg py-space-sm rounded-t-xl">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[20px] text-tertiary">analytics</span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Source Ingestion Telemetry
            </h2>
          </div>
          <span className="font-label-caps text-label-caps text-secondary font-mono">
            src_9821af84
          </span>
        </div>
        <div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low mb-space-md">
          <img
            className="w-16 h-16 rounded object-cover shadow-sm shrink-0"
            data-alt="High quality close up of modern broadcast studio microphone in a soundproofed podcast production room with subtle warm backlighting and architectural dampening panels."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnQafrFT3C1Xi4me0uln-sfSno2xS-09AzpeK-jC671IouZDrhVYuRUZbE8PBMflNyBIX16bx6HdNZ28645a9ssWMn5WSQiKb2nHsRBPoYy6TScMrUv9o6CzOqJBbZxdzK7OWcrYSUrsin0cCj-4SeUD049gyUOnbIeUjTtvYaVG_9c9cUPw2Hj2QublPigtFFMAA81UUsqswRJ988YhcWHfGYJIvavmMhNGDPDmxjdghU8oo5qjRN"
          />
          <div className="min-w-0 flex-1">
            <p className="font-caption-bold text-caption-bold text-on-surface truncate">
              ep42-founder-interview.mp3
            </p>
            <p className="font-body-sm text-[12px] text-secondary">Audio • 320kbps • 44:12 Duration</p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="font-label-caps text-[10px] text-tertiary font-bold uppercase">
                100% Transcribed
              </span>
            </div>
          </div>
        </div>
        <div className="p-space-sm rounded-lg bg-surface-container-low mb-space-md">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-caption-bold text-caption-bold text-on-surface">
              Brand Voice Alignment
            </span>
            <span className="font-headline-sm text-headline-sm text-primary">96%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: "96%" }}></div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-secondary mt-1.5">
            <span>Target: Acme Executive Voice</span>
            <span className="text-tertiary font-bold">Optimal Precision</span>
          </div>
        </div>
        <div className="space-y-space-xs mb-space-md">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider block">
            Discovered Topic Clusters
          </span>
          <div className="flex flex-wrap gap-1.5">
            {TOPIC_CLUSTERS.map((cluster) => (
              <span
                key={cluster}
                className="font-caption-bold text-[11px] px-2.5 py-1 rounded bg-surface-container text-on-surface"
              >
                {cluster}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-space-sm mb-space-sm">
          <div className="p-space-sm rounded bg-surface-container-low">
            <span className="font-label-caps text-[10px] uppercase text-secondary">
              Speaker 01 (Host)
            </span>
            <p className="font-headline-sm text-headline-sm text-on-surface mt-0.5">24.5%</p>
            <p className="font-body-sm text-[11px] text-secondary">10m 50s runtime</p>
          </div>
          <div className="p-space-sm rounded bg-surface-container-low">
            <span className="font-label-caps text-[10px] uppercase text-secondary">
              Speaker 02 (Founder)
            </span>
            <p className="font-headline-sm text-headline-sm text-primary mt-0.5">75.5%</p>
            <p className="font-body-sm text-[11px] text-secondary">33m 22s runtime</p>
          </div>
        </div>
      </div>
      <div className="pt-space-sm border-t border-surface-variant flex items-center justify-between text-secondary font-label-caps text-label-caps">
        <span>Vector Embeddings: text-embedding-3-large</span>
        <span>48 Chunks</span>
      </div>
    </div>
  );
}