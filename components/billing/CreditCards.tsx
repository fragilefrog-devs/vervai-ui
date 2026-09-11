type CreditCard = {
  label: string;
  title: string;
  icon: string;
  iconClass: string;
  value: string;
  total: string;
  totalClass: string;
  badge: string;
  badgeClass: string;
  barClass: string;
  barWidth: string;
  footerLeft: string;
  footerRight: string;
};

const CREDIT_CARDS: CreditCard[] = [
  {
    label: "Primary Computation",
    title: "Synthesis Credits",
    icon: "bolt",
    iconClass: "bg-primary-fixed text-on-primary-fixed",
    value: "12",
    total: "/ 20",
    totalClass: "font-headline-lg text-headline-lg text-on-surface-variant",
    badge: "60% used",
    badgeClass: "bg-primary-fixed text-primary",
    barClass: "bg-primary-container",
    barWidth: "60%",
    footerLeft: "Multi-agent allocation healthy",
    footerRight: "Audit logs",
  },
  {
    label: "Audio & Video Streams",
    title: "Whisper-v3 Diarization",
    icon: "mic",
    iconClass: "bg-secondary-fixed text-on-secondary-fixed",
    value: "13.4",
    total: "/ 20.0 hrs",
    totalClass: "font-headline-lg text-headline-lg text-on-surface-variant",
    badge: "67% parsed",
    badgeClass: "bg-secondary-fixed text-secondary",
    barClass: "bg-secondary",
    barWidth: "67%",
    footerLeft: "7 podcasts, 4 Zoom calls, 6 Looms",
    footerRight: "check",
  },
  {
    label: "High-Dimension Store",
    title: "Vector Memory & Index",
    icon: "hub",
    iconClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    value: "428,102",
    total: "/ 1M",
    totalClass: "font-headline-sm text-headline-sm text-on-surface-variant",
    badge: "Optimal",
    badgeClass: "bg-tertiary-fixed text-tertiary",
    barClass: "bg-tertiary-container",
    barWidth: "42.8%",
    footerLeft: "Supabase pgvector tenant: us-east-1",
    footerRight: "1.8ms lat",
  },
];

export default function CreditCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      {CREDIT_CARDS.map((card) => (
        <div
          key={card.title}
          className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider">
                {card.label}
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-0.5">
                {card.title}
              </h3>
            </div>
            <span
              className={`material-symbols-outlined p-2 rounded-lg text-[20px] ${card.iconClass}`}
            >
              {card.icon}
            </span>
          </div>
          <div className="my-space-md flex items-baseline gap-space-xs">
            <span className="font-display-2xl text-display-2xl text-on-surface tracking-tight font-bold">
              {card.value}
            </span>
            <span className={card.totalClass}>{card.total}</span>
            <span
              className={`font-caption-bold text-caption-bold ml-auto px-2 py-1 rounded ${card.badgeClass}`}
            >
              {card.badge}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
              <div
                className={`h-full ${card.barClass} rounded-full transition-all duration-700`}
                style={{ width: card.barWidth }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-on-surface-variant font-caption-bold text-caption-bold">
              <span>Cycle resets Nov 01 (in 9d)</span>
              <span>8 units deployed</span>
            </div>
          </div>
          <div className="mt-space-md pt-space-sm bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-2.5 flex items-center justify-between text-on-surface-variant">
            <span className="font-body-sm text-body-sm flex items-center gap-1 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              {card.footerLeft}
            </span>
            {card.footerRight === "check" ? (
              <span className="material-symbols-outlined text-tertiary text-[18px]" title="Zero transcription backlogs">
                check_circle
              </span>
            ) : (
              <a
                className="font-caption-bold text-caption-bold text-primary hover:underline flex items-center gap-0.5"
                href="#ledger"
              >
                {card.footerRight}
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}