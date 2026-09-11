import SectionHeader from "@/components/account/SectionHeader";

type AuthMethodRow = {
  icon: string;
  iconTile: string;
  title: string;
  badge?: { label: string; className: string };
  detail: string;
  action: { type: "verified" } | { type: "button"; label: string; className: string };
};

const AUTH_METHODS: AuthMethodRow[] = [
  {
    icon: "vibration",
    iconTile: "p-2 bg-tertiary/10 text-tertiary rounded-lg",
    title: "YubiKey 5C NFC (Primary Hardware)",
    badge: { label: "FIDO2 / WebAuthn", className: "bg-tertiary text-on-tertiary text-[10px] font-caption-bold px-1.5 py-0.2 rounded" },
    detail: "Serial: YUBI-9920-F8 • Registered Mar 12, 2024",
    action: { type: "verified" },
  },
  {
    icon: "pin",
    iconTile: "p-2 bg-primary/10 text-primary rounded-lg",
    title: "Authenticator App (TOTP)",
    badge: { label: "Configured", className: "bg-primary-fixed text-on-primary-fixed text-[10px] font-caption-bold px-1.5 py-0.2 rounded" },
    detail: "1Password / Google Authenticator synced",
    action: {
      type: "button",
      label: "Re-sync",
      className: "text-on-surface-variant hover:text-primary font-caption-bold text-caption-bold bg-surface-container-high px-2.5 py-1 rounded",
    },
  },
  {
    icon: "encrypted",
    iconTile: "p-2 bg-secondary/10 text-secondary rounded-lg",
    title: "Backup Emergency Recovery Codes",
    detail: "8 of 10 unspent single-use emergency bypass tokens remaining",
    action: {
      type: "button",
      label: "Regenerate",
      className: "text-on-surface font-caption-bold text-caption-bold hover:bg-surface-container-high px-2.5 py-1 rounded transition-colors",
    },
  },
];

export default function AuthMethods() {
  return (
    <section className="col-span-12 lg:col-span-6 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
      <SectionHeader
        icon="security"
        iconClass="text-tertiary"
        title="Two-Factor & Cryptographic Auth"
        subtitle="Passkeys, WebAuthn, and hardware enclave credentials."
        badge={{ label: "STRICT M-OF-N", className: "font-caption-bold text-caption-bold bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded" }}
      />
      <div className="p-space-lg flex flex-col gap-space-md">
        {AUTH_METHODS.map((method) => (
          <div key={method.title} className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
            <div className="flex items-center gap-space-sm">
              <div className={method.iconTile}>
                <span className="material-symbols-outlined text-[20px]">{method.icon}</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm text-[14px] text-on-surface">{method.title}</span>
                  {method.badge && <span className={method.badge.className}>{method.badge.label}</span>}
                </div>
                <span className="font-body-sm text-[12px] text-on-surface-variant">{method.detail}</span>
              </div>
            </div>
            {method.action.type === "verified" ? (
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-tertiary">check_circle</span>
                <button className="text-on-surface-variant hover:text-on-surface p-1" type="button">
                  <span className="material-symbols-outlined text-[18px]">more_vert</span>
                </button>
              </div>
            ) : (
              <button className={method.action.className} type="button">
                {method.action.label}
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="px-space-lg py-3 bg-surface-container-low flex items-center justify-between">
        <span className="font-body-sm text-[12px] text-on-surface-variant">Hardware-backed enforcement enabled</span>
        <button
          className="flex items-center gap-1.5 bg-surface-container-highest hover:bg-surface-dim text-on-surface font-caption-bold text-caption-bold px-3 py-1.5 rounded-lg active:scale-[0.98] transition-all"
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">add_circle</span>
          <span>Register New Passkey</span>
        </button>
      </div>
    </section>
  );
}