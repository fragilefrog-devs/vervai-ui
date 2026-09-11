const ACCOUNT_TABS = [
  { icon: "badge", label: "Profile & Identity", active: true },
  { icon: "lock", label: "Security & Authentication", active: false },
  { icon: "group", label: "Team & Multi-seat Access", active: false, badge: "4/5" },
  { icon: "key", label: "API Keys & Personal Tokens", active: false },
  { icon: "receipt_long", label: "Audit Log", active: false },
];

export default function AccountHeader() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider">
            <span>Account</span>
            <span className="material-symbols-outlined text-[13px] text-outline">chevron_right</span>
            <span className="text-primary font-headline-sm">Identity & Security</span>
          </div>
          <h1 className="font-display-xl text-display-xl text-on-surface tracking-tight">Account & User Profile</h1>
          <p className="font-body-medium text-body-medium text-on-surface-variant max-w-2xl">
            Manage your personal profile, cryptographic credentials, team role permissions, and active creative workspace sessions.
          </p>
        </div>
        <div className="flex items-center gap-space-sm self-start md:self-auto">
          <div className="flex items-center gap-2 bg-surface-container px-3 py-1.5 rounded-lg shadow-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-tertiary"></span>
            <span className="font-caption-bold text-caption-bold text-on-surface">Master Seat (Root Admin)</span>
          </div>
          <button
            className="flex items-center gap-1.5 bg-surface-container-high hover:bg-surface-variant text-on-surface px-3 py-1.5 rounded-lg font-body-sm text-body-sm transition-all shadow-sm active:scale-[0.98]"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">history</span>
            <span>View Audit Trail</span>
          </button>
        </div>
      </div>
      <div className="bg-surface-container-low p-1 rounded-xl shadow-sm overflow-x-auto">
        <nav className="flex items-center gap-1 min-w-max">
          {ACCOUNT_TABS.map((tab) => (
            <button
              key={tab.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                tab.active
                  ? "bg-surface-container-lowest text-primary font-headline-sm text-headline-sm shadow-sm"
                  : "hover:bg-surface-container text-on-surface-variant font-body-medium text-body-medium"
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
              <span>{tab.label}</span>
              {tab.badge && (
                <span className="bg-surface-container-high px-1.5 py-0.5 rounded text-[10px] font-caption-bold text-on-surface-variant">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}