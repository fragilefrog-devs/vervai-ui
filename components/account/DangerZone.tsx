import type { ReactNode } from "react";

type DangerAction = {
  icon: string;
  iconClass: string;
  title: string;
  titleClass: string;
  description: ReactNode;
  action: { icon: string; label: string; className: string };
  footerNote?: string;
};

const DANGER_ACTIONS: DangerAction[] = [
  {
    icon: "folder_zip",
    iconClass: "text-primary text-[18px]",
    title: "Export Sovereign Creative Identity",
    titleClass: "text-on-surface",
    description:
      "Download a cryptographically signed bundle containing your fine-tuned prompt vectors, generation history, custom brand models, and audit logs formatted as an open standard JSON/Vector manifest.",
    action: {
      icon: "download",
      label: "Export Vector Archive (2.4 GB)",
      className:
        "flex items-center gap-2 bg-surface-container-highest hover:bg-surface-dim text-on-surface font-body-medium text-body-medium px-4 py-2 rounded-lg transition-all active:scale-[0.98] shadow-sm",
    },
    footerNote: "SHA-256 Verified",
  },
  {
    icon: "delete_forever",
    iconClass: "text-error text-[18px]",
    title: "Irrevocable Profile & Seat Closure",
    titleClass: "text-error",
    description: (
      <>
        Closing your account purges your access from <strong>Acme Studio</strong>, revokes all personal tokens, transfers organization ownership to your secondary team administrator, and detaches linked identities.
      </>
    ),
    action: {
      icon: "close",
      label: "Close Account & Revoke Keys",
      className:
        "flex items-center gap-1.5 bg-error text-on-error hover:bg-on-error-container font-body-medium text-body-medium px-4 py-2 rounded-lg transition-all active:scale-[0.98] shadow-sm",
    },
  },
];

export default function DangerZone() {
  return (
    <section className="col-span-12 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
      <div className="px-space-lg py-4 bg-error-container/40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-error text-[20px]">warning</span>
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Data Sovereignty, Portability & Identity Deletion</h2>
            <p className="font-body-sm text-[12px] text-on-surface-variant">Export immutable creative outputs or irrevocably close this personal profile node.</p>
          </div>
        </div>
        <span className="font-caption-bold text-caption-bold text-error uppercase tracking-wide">Danger Zone</span>
      </div>
      <div className="p-space-lg grid grid-cols-1 md:grid-cols-2 gap-space-lg items-center">
        {DANGER_ACTIONS.map((item) => (
          <div key={item.title} className="flex flex-col gap-2 p-space-md bg-surface-container-low rounded-xl">
            <div className={`flex items-center gap-2 font-headline-sm text-[15px] ${item.titleClass}`}>
              <span className={`material-symbols-outlined ${item.iconClass}`}>{item.icon}</span>
              <span>{item.title}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
            <div className="mt-2 flex items-center gap-space-sm">
              <button className={item.action.className} type="button">
                <span className="material-symbols-outlined text-[18px]">{item.action.icon}</span>
                <span>{item.action.label}</span>
              </button>
              {item.footerNote && (
                <span className="font-caption-bold text-[11px] text-on-surface-variant">{item.footerNote}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}