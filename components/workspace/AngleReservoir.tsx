type Angle = {
  number: string;
  heat: string;
  heatClass: string;
  score: string;
  title: string;
  description: string;
  footer: { label: string; action: string | null };
};

const ANGLES: Angle[] = [
  {
    number: "01",
    heat: "High Heat",
    heatClass: "text-primary",
    score: "Score: 9.4/10",
    title: "“Why seed capital makes founders hire people they don't need.”",
    description:
      "Dissects the psychological trap of equating team size with company trajectory, directly citing the 18-month burn ramp.",
    footer: { label: "Selected in Plan", action: null },
  },
  {
    number: "02",
    heat: "Tactical",
    heatClass: "text-secondary",
    score: "Score: 8.8/10",
    title: "“How we run 80 customer interviews in 14 days without burnout.”",
    description:
      "A precise operational SOP covering automated Calendly-to-Notion ingestion workflows and structured 15-minute question sets.",
    footer: { label: "Reserve Queue", action: "+ Add to Plan" },
  },
  {
    number: "03",
    heat: "Storytelling",
    heatClass: "text-secondary",
    score: "Score: 8.2/10",
    title: "“The single dashboard metric that forced us to pivot in Week 9.”",
    description:
      "Personal narrative revealing the emotional realization when active cohort retention plummeted to 4% despite strong signups.",
    footer: { label: "Reserve Queue", action: "+ Add to Plan" },
  },
];

export default function AngleReservoir() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            Candidate Angle Reservoir
          </h3>
          <p className="font-body-sm text-body-sm text-secondary">
            Autonomous extraction identified 5 viable narrative hooks from this conversation
          </p>
        </div>
        <button
          className="font-caption-bold text-caption-bold text-primary hover:text-primary-container transition-colors flex items-center gap-1 self-start md:self-auto"
          type="button"
        >
          <span>View Full Transcription Analysis</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        {ANGLES.map((angle) => (
          <div
            key={angle.number}
            className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-space-xs">
                <span className={`font-label-caps text-[10px] uppercase font-bold ${angle.heatClass}`}>
                  Angle {angle.number} • {angle.heat}
                </span>
                <span className="font-label-caps text-[10px] text-secondary">{angle.score}</span>
              </div>
              <p className="font-caption-bold text-caption-bold text-on-surface mb-1">
                {angle.title}
              </p>
              <p className="font-body-sm text-[12px] text-on-surface-variant line-clamp-2">
                {angle.description}
              </p>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between">
              <span className="font-label-caps text-[10px] text-secondary">{angle.footer.label}</span>
              {angle.footer.action ? (
                <button
                  className="font-label-caps text-[10px] font-bold text-primary hover:underline"
                  type="button"
                >
                  {angle.footer.action}
                </button>
              ) : (
                <span className="material-symbols-outlined text-[16px] text-primary">check</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}