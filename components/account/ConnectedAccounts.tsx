import SectionHeader from "@/components/account/SectionHeader";

type ConnectedAccountRow = {
  letter: string;
  letterClass: string;
  title: string;
  profilePrefix: string;
  profileValue: string;
  profileSuffix: string;
  status: { label: string; className: string };
  disconnectLabel: string;
};

const CONNECTED_ACCOUNTS: ConnectedAccountRow[] = [
  {
    letter: "in",
    letterClass: "text-primary",
    title: "LinkedIn Network",
    profilePrefix: "Profile:",
    profileValue: "Elena Vance",
    profileSuffix: " (Founder / Creative Director)",
    status: { label: "Linked & Verified", className: "text-tertiary font-caption-bold text-[11px] bg-tertiary-fixed/30 px-2 py-0.5 rounded" },
    disconnectLabel: "Disconnect LinkedIn",
  },
  {
    letter: "S",
    letterClass: "text-on-surface",
    title: "Substack Publication",
    profilePrefix: "Publication:",
    profileValue: "Elena Vance Insights",
    profileSuffix: " (Weekly Syndication)",
    status: { label: "Auto-Publish Active", className: "text-tertiary font-caption-bold text-[11px] bg-tertiary-fixed/30 px-2 py-0.5 rounded" },
    disconnectLabel: "Disconnect Substack",
  },
  {
    letter: "GH",
    letterClass: "text-on-surface",
    title: "Personal GitHub",
    profilePrefix: "Profile:",
    profileValue: "@elenavance",
    profileSuffix: " (Workflow repository owner)",
    status: { label: "GPG Key Verified", className: "text-tertiary font-caption-bold text-[11px] bg-tertiary-fixed/30 px-2 py-0.5 rounded" },
    disconnectLabel: "Disconnect GitHub",
  },
];

export default function ConnectedAccounts() {
  return (
    <section className="col-span-12 lg:col-span-6 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
      <SectionHeader
        icon="hub"
        iconClass="text-primary"
        title="Connected Author Accounts"
        subtitle="Direct founder presence attribution and external syndication links."
        badge={{ label: "3 Active Synced", className: "font-caption-bold text-caption-bold bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded" }}
      />
      <div className="p-space-lg flex flex-col gap-space-md">
        {CONNECTED_ACCOUNTS.map((account) => (
          <div key={account.title} className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
            <div className="flex items-center gap-space-sm">
              <div className={`w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm ${account.letterClass}`}>
                {account.letter}
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-[14px] text-on-surface">{account.title}</span>
                <span className="font-body-sm text-[12px] text-on-surface-variant">
                  {account.profilePrefix} <strong>{account.profileValue}</strong>
                  {account.profileSuffix}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={account.status.className}>{account.status.label}</span>
              <button aria-label={account.disconnectLabel} className="text-on-surface-variant hover:text-error p-1" type="button">
                <span className="material-symbols-outlined text-[18px]">link_off</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="px-space-lg py-3 bg-surface-container-low flex items-center justify-between">
        <span className="font-body-sm text-[12px] text-on-surface-variant">Syndicate outputs under verified cryptographic signatures</span>
        <button
          className="flex items-center gap-1.5 bg-surface-container-highest hover:bg-surface-dim text-on-surface font-caption-bold text-caption-bold px-3 py-1.5 rounded-lg active:scale-[0.98] transition-all"
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">add_link</span>
          <span>Link Platform</span>
        </button>
      </div>
    </section>
  );
}