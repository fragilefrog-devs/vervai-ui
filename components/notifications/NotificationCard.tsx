import type { ReactNode } from "react";

type NotificationChip = { icon: string; iconClass: string; label: string };
type NotificationButton = { label: string; icon?: string; iconClass?: string; iconAfter?: boolean; className: string };

type NotificationBody =
  | { type: "chips"; chips: NotificationChip[] }
  | { type: "slide"; number: string; title: string; meta: string }
  | { type: "progress"; barClass: string; used: string; limit: string }
  | { type: "wave" }
  | { type: "none" };

type NotificationFooter =
  | { type: "actions"; wrapperClass: string; buttons: NotificationButton[]; trailing?: ReactNode }
  | { type: "error"; wrapperClass: string; button: NotificationButton; status: ReactNode }
  | { type: "quota"; wrapperClass: string; button: NotificationButton; tier: string }
  | { type: "wave"; wrapperClass: string; persona: string; link: string };

type NotificationCardProps = {
  category: string;
  barClass: string;
  icon: string;
  iconClass: string;
  title: string;
  badge?: { label: string; className: string };
  time?: string;
  description: ReactNode;
  body?: NotificationBody;
  footer: NotificationFooter;
};

const NOTIFICATIONS: NotificationCardProps[] = [
  {
    category: "agent",
    barClass: "bg-tertiary",
    icon: "task_alt",
    iconClass: "text-tertiary",
    title: "Agent Run Completed",
    badge: { label: "98% Match", className: "font-label-caps text-label-caps bg-tertiary-fixed text-on-tertiary-fixed px-space-xs py-0.5 rounded" },
    time: "4m ago",
    description: (
      <>
        Synthesis complete for <span className="text-on-surface font-body-medium">ep43-ai-infra-summit.mp4</span>. 4 high-leverage deliverables drafted (1 LinkedIn Essay, 1 Newsletter Feature, 2 Short-form clips).
      </>
    ),
    body: {
      type: "chips",
      chips: [
        { icon: "article", iconClass: "text-primary", label: "1x Founder Deep Dive" },
        { icon: "movie", iconClass: "text-tertiary", label: "2x 9:16 Video Cuts" },
      ],
    },
    footer: {
      type: "actions",
      wrapperClass: "flex items-center justify-between pt-space-xs",
      buttons: [
        {
          label: "Review Drafts",
          icon: "arrow_forward",
          iconAfter: true,
          className:
            "bg-primary hover:bg-primary-container text-on-primary font-body-medium text-body-sm px-space-md py-1.5 rounded-lg transition-all active:scale-[0.98] shadow-sm flex items-center gap-1",
        },
        {
          label: "View Graph",
          icon: "account_tree",
          iconClass: "text-on-surface-variant",
          className:
            "bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-medium text-body-sm px-space-sm py-1.5 rounded-lg transition-colors flex items-center gap-1",
        },
      ],
      trailing: (
        <button className="text-on-surface-variant hover:text-on-surface p-1 rounded transition-colors" title="Options" type="button">
          <span className="material-symbols-outlined text-[18px]">more_vert</span>
        </button>
      ),
    },
  },
  {
    category: "signoff",
    barClass: "bg-primary-container",
    icon: "rate_review",
    iconClass: "text-primary",
    title: "Human Sign-off Required",
    badge: { label: "Pending Gate", className: "font-label-caps text-label-caps bg-secondary-container text-on-secondary-fixed px-space-xs py-0.5 rounded font-bold uppercase" },
    description: (
      <>
        <span className="text-on-surface font-body-medium">B2B SaaS Retention Framework</span> carousel scheduled for tomorrow at <span className="text-on-surface font-body-medium">09:00 AM</span> requires final founder sign-off before Buffer dispatch.
      </>
    ),
    body: {
      type: "slide",
      number: "01",
      title: "Slide 1: Cohort Erosion Anatomy",
      meta: "6 Slides • 1080x1350 PNG • Tone: Direct",
    },
    footer: {
      type: "actions",
      wrapperClass: "flex items-center justify-between",
      buttons: [
        {
          label: "Approve Dispatch",
          icon: "check",
          className:
            "bg-primary-container hover:bg-primary text-on-primary font-body-medium text-body-sm px-space-md py-1.5 rounded-lg transition-all active:scale-[0.98] shadow-sm flex items-center gap-1",
        },
        {
          label: "Edit",
          className: "bg-surface-container hover:bg-surface-container-high text-on-surface font-body-medium text-body-sm px-space-md py-1.5 rounded-lg transition-colors",
        },
      ],
      trailing: <span className="font-caption-bold text-[11px] text-on-surface-variant">Scheduled: T-14h</span>,
    },
  },
  {
    category: "system",
    barClass: "bg-error",
    icon: "warning",
    iconClass: "text-error",
    title: "Integration Token Expired",
    badge: { label: "Needs Attention", className: "font-label-caps text-label-caps bg-error-container text-on-error-container px-space-xs py-0.5 rounded font-bold uppercase" },
    description: (
      <>
        Twitter / X Developer v2 OAuth token expired <span className="text-on-surface font-body-medium">2 hours ago</span>. 1 scheduled thread is currently stalled in the buffer distribution queue.
      </>
    ),
    body: { type: "none" },
    footer: {
      type: "error",
      wrapperClass: "flex items-center justify-between pt-space-xs",
      button: {
        label: "Re-authenticate",
        icon: "sync",
        className:
          "bg-error hover:bg-on-error-container text-on-error font-body-medium text-body-sm px-space-md py-1.5 rounded-lg transition-all active:scale-[0.98] shadow-sm flex items-center gap-1",
      },
      status: (
        <span className="font-body-sm text-[11px] text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">link_off</span> API status code: 401
        </span>
      ),
    },
  },
  {
    category: "system",
    barClass: "bg-outline-variant",
    icon: "hourglass_top",
    iconClass: "text-on-surface-variant",
    title: "Whisper-v3 Quota Threshold",
    badge: { label: "67% Utilized", className: "font-caption-bold text-caption-bold text-on-surface-variant" },
    description: (
      <>
        Audio ingestion capacity reached 67% (<span className="text-on-surface font-body-medium">13.4 / 20.0 Hours</span>). 6.6 hours remaining in current billing cycle (resets in 11 days).
      </>
    ),
    body: {
      type: "progress",
      barClass: "bg-primary-container h-full w-[67%] rounded-full transition-all",
      used: "0.0h Used",
      limit: "Limit: 20.0h",
    },
    footer: {
      type: "quota",
      wrapperClass: "flex items-center justify-between",
      button: {
        label: "Upgrade Allocation",
        icon: "arrow_upward",
        iconClass: "text-primary",
        className:
          "bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-medium text-body-sm px-space-md py-1.5 rounded-lg transition-colors flex items-center gap-1",
      },
      tier: "Pro Tier",
    },
  },
  {
    category: "agent",
    barClass: "bg-tertiary-container",
    icon: "record_voice_over",
    iconClass: "text-tertiary",
    title: "Voice Calibration Synced",
    badge: { label: "Optimized", className: "font-label-caps text-label-caps bg-tertiary-fixed text-on-tertiary-fixed px-space-xs py-0.5 rounded uppercase" },
    description: (
      <>
        Real-Time Vector Embeddings Wave updated with <span className="text-on-surface font-body-medium">3 newly approved founder essays</span>. Drift variance reduced to <span className="text-tertiary font-body-medium">±0.02%</span>.
      </>
    ),
    body: { type: "wave" },
    footer: {
      type: "wave",
      wrapperClass: "flex items-center justify-between text-on-surface-variant font-caption-bold text-[11px] pt-space-xs",
      persona: "Target Persona: Elena Vance (Clean Architectural)",
      link: "Inspect Weights",
    },
  },
];

function renderBody(body: NotificationBody) {
  switch (body.type) {
    case "chips":
      return (
        <div className="grid grid-cols-2 gap-space-xs mb-space-md">
          {body.chips.map((chip) => (
            <div key={chip.label} className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-space-xs">
              <span className={`material-symbols-outlined text-[16px] ${chip.iconClass}`}>{chip.icon}</span>
              <span className="font-caption-bold text-caption-bold text-on-surface truncate">{chip.label}</span>
            </div>
          ))}
        </div>
      );
    case "slide":
      return (
        <div className="flex items-center gap-space-sm p-space-xs bg-surface-container-low rounded-lg mb-space-md">
          <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0 font-headline-sm text-headline-sm">
            {body.number}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-caption-bold text-caption-bold text-on-surface truncate">{body.title}</span>
            <span className="font-body-sm text-[11px] text-on-surface-variant">{body.meta}</span>
          </div>
        </div>
      );
    case "progress":
      return (
        <div className="space-y-1.5 mb-space-md">
          <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden flex">
            <div className={body.barClass}></div>
          </div>
          <div className="flex justify-between font-caption-bold text-[10px] text-on-surface-variant">
            <span>{body.used}</span>
            <span>{body.limit}</span>
          </div>
        </div>
      );
    case "wave":
      return (
        <div className="h-10 bg-surface-container-low rounded-lg p-space-xs flex items-center justify-center overflow-hidden mb-space-xs">
          <svg className="w-full h-8 text-tertiary" fill="none" preserveAspectRatio="none" viewBox="0 0 300 40">
            <path d="M0,20 Q30,5 60,20 T120,20 T180,20 T240,20 T300,20" fill="none" opacity="0.4" stroke="currentColor" strokeWidth="2"></path>
            <path d="M0,20 Q25,8 55,20 T115,22 T175,18 T235,21 T300,20" fill="none" stroke="currentColor" strokeWidth="2.5"></path>
          </svg>
        </div>
      );
    case "none":
      return null;
  }
}

function renderFooter(footer: NotificationFooter) {
  switch (footer.type) {
    case "actions":
      return (
        <div className={footer.wrapperClass}>
          <div className="flex items-center gap-space-xs">
            {footer.buttons.map((button) => (
              <button key={button.label} className={button.className} type="button">
                {button.icon && !button.iconAfter && (
                  <span className={`material-symbols-outlined text-[16px] ${button.iconClass ?? ""}`}>{button.icon}</span>
                )}
                <span>{button.label}</span>
                {button.icon && button.iconAfter && (
                  <span className={`material-symbols-outlined text-[16px] ${button.iconClass ?? ""}`}>{button.icon}</span>
                )}
              </button>
            ))}
          </div>
          {footer.trailing}
        </div>
      );
    case "error":
      return (
        <div className={footer.wrapperClass}>
          <button className={footer.button.className} type="button">
            {footer.button.icon && (
              <span className={`material-symbols-outlined text-[16px] ${footer.button.iconClass ?? ""}`}>{footer.button.icon}</span>
            )}
            <span>{footer.button.label}</span>
          </button>
          {footer.status}
        </div>
      );
    case "quota":
      return (
        <div className={footer.wrapperClass}>
          <button className={footer.button.className} type="button">
            {footer.button.icon && (
              <span className={`material-symbols-outlined text-[16px] ${footer.button.iconClass ?? ""}`}>{footer.button.icon}</span>
            )}
            <span>{footer.button.label}</span>
          </button>
          <span className="font-caption-bold text-[11px] text-on-surface-variant">{footer.tier}</span>
        </div>
      );
    case "wave":
      return (
        <div className={footer.wrapperClass}>
          <span>{footer.persona}</span>
          <span className="text-primary hover:underline cursor-pointer">{footer.link}</span>
        </div>
      );
  }
}

export default function NotificationCard({ category, barClass, icon, iconClass, title, badge, time, description, body, footer }: NotificationCardProps) {
  return (
    <div
      className="notification-card bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
      data-category={category}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${barClass}`}></div>
      <div className="flex items-start justify-between gap-space-sm mb-space-xs">
        <div className="flex items-center gap-space-xs">
          <span className={`material-symbols-outlined text-[18px] ${iconClass}`}>{icon}</span>
          <span className="font-headline-sm text-headline-sm text-on-surface">{title}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {badge && <span className={badge.className}>{badge.label}</span>}
          {time && <span className="font-caption-bold text-[10px] text-on-surface-variant">{time}</span>}
        </div>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm leading-relaxed">{description}</p>
      {body && body.type !== "none" && renderBody(body)}
      {renderFooter(footer)}
    </div>
  );
}

export { NOTIFICATIONS };