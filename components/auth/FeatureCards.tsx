type FeatureCard = {
  icon: string;
  iconClass: string;
  title: string;
  description: string;
};

const FEATURES: FeatureCard[] = [
  {
    icon: "bolt",
    iconClass: "text-primary",
    title: "20 Free Synthesis Credits",
    description: "Instant activation across long-form multimodal transforms.",
  },
  {
    icon: "graphic_eq",
    iconClass: "text-tertiary",
    title: "Whisper-v3 Neural Diarization",
    description: "Frame-accurate multi-speaker separation and transcript synthesis.",
  },
  {
    icon: "verified",
    iconClass: "text-primary",
    title: "Zero-Buzzword Pruning Gate",
    description: "Deterministic brand voice filters to strip slop and generic jargon.",
  },
  {
    icon: "sync_alt",
    iconClass: "text-secondary",
    title: "Native Buffer & LinkedIn Sync",
    description: "Single-click pipeline delivery to your connected channels.",
  },
];

export default function FeatureCards() {
  return (
    <div className="space-y-4">
      {FEATURES.map((feature) => (
        <div key={feature.title} className="flex items-start gap-3.5 p-3 rounded-lg bg-surface-container-lowest/80 shadow-sm">
          <span className={`material-symbols-outlined text-[20px] mt-0.5 ${feature.iconClass}`}>{feature.icon}</span>
          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface">{feature.title}</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}