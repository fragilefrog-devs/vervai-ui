import ApprovalCard, { type ApprovalCardItem } from "./ApprovalCard";

const APPROVALS: ApprovalCardItem[] = [
  {
    channel: "LinkedIn Creator",
    channelTone: "blue",
    channelIcon: "share",
    channelMeta: "Company + Founder Profile",
    title: "Why premature scaling headcount destroys leverage",
    slot: "Tomorrow, 8:45 AM EDT",
    slotTone: "primary",
    slotHint: "Peak founder engagement",
    preview: {
      kind: "image",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC92AholPjK_HC6d-5eObm0AKuU7pnhatKl5IhBOMHB-YGFeB6Mgsgf19R0rh_OZr9wbG7U-ibGMUYzyUAHdzPOVmmw54K5O18f10v3hRxil4OkL2LoP89NuMO8e4_9weMvbKp660wpgKWVOTpbAoaRYBdzJnN1DrijiG0ImGquCsfeUaRMB2B_X3Sy4_rN7SK2tw63QjKefNDRNTWAEof1fg6aVhxQL2iMqPNqTUYPXnVk3nOHmGBu",
      alt: "Minimalist abstract graph illustrating economic leverage versus headcount scaling in modern software enterprise, stark cobalt and pure white tones, crisp editorial vector aesthetic",
      text: '"Adding heads before finding distribution symmetry is the fastest way to dilute founder velocity. Here are 4 operating constraints we use to keep engineering output high..."',
    },
    validation: {
      icon: "check_circle",
      label: "Validated against Acme Brand Guidelines v2.4",
    },
    secondaryAction: "Edit Draft",
  },
  {
    channel: "Substack / Ghost",
    channelTone: "orange",
    channelIcon: "mail",
    channelMeta: "Bi-weekly Newsletter Broadcast",
    title: "AI-Augmented Team Velocity: The 10x Myth vs Real Telemetry",
    slot: "Friday, 10:00 AM EDT",
    slotTone: "neutral",
    slotHint: "High open-rate historical window",
    preview: {
      kind: "document",
      icon: "article",
      text: '"We analyzed 18,000 pull requests across 6 quarters to see where LLMs actually accelerate product roadmaps—and where they introduce architectural review debt..."',
    },
    validation: {
      icon: "tune",
      label: "Reading time: 4 min 20 sec (1,140 words)",
    },
    secondaryAction: "Edit Draft",
  },
  {
    channel: "Shorts & TikTok",
    channelTone: "red",
    channelIcon: "smart_display",
    channelMeta: "Multi-Platform Vertical Video (9:16)",
    title: "3 Hard Lessons From Our Seed Round (Cut 01)",
    slot: "Monday, 12:30 PM EDT",
    slotTone: "neutral",
    slotHint: "Midday algorithm boost",
    preview: {
      kind: "video",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbUKqsPI-b7wP4CtuQSezeE_0a3b42H_Qvsd399nfyg3wET4ycJqncqS3BgX47u_AolkOUzqkuabFGykzqwQjegu-Vx8xcuBt1opb--0UjJ9hlC4O1aKdjMq8xe1DEZ3F969Ws4hTRWz_gWqPpkfVRqiDYFk5vgJx96gwsOC5ESvpZhD-_YtB4FPA9V7r_GDQc-JF15U1OxgpwHwD0pR2yFDlqOZLMMWnZFdrcDBTuGrS7m_lAU5mM",
      alt: "High-contrast studio frame of founder speaking on microphone in modern dark architectural studio setting with soft cobalt rim light, professional 4k portrait format video still",
      text: '"Clip length: 00:48 • Auto-captioned • 3 dynamic camera zooms applied"',
      audio: "Audio: VervAI Sound Design Master 03",
    },
    validation: {
      icon: "auto_awesome",
      label: "Burned kinetic captions synced",
    },
    secondaryAction: "Preview Clip",
    secondaryActionIcon: "visibility",
  },
];

export default function ReadyToPublish() {
  return (
    <section className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col">
      <div className="p-space-lg bg-surface-container-low/40 rounded-t-xl flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Ready to Publish</h2>
            <p className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
              Human Sign-off Required • 3 Awaiting Approval
            </p>
          </div>
        </div>
        <span className="font-caption-bold text-caption-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 shadow-xs">
          Attention Needed
        </span>
      </div>
      <div className="p-space-lg space-y-space-md">
        {APPROVALS.map((item) => (
          <ApprovalCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}