"use client";

import { useState } from "react";
import SectionHeader from "@/components/account/SectionHeader";
import Icon from "@/components/ui/Icon";

type SessionRow = {
  id: string;
  icon: string;
  iconTile: string;
  title: string;
  badge?: { label: string; className: string };
  location: string;
  meta: string;
  isCurrent?: boolean;
  revokeLabel: string;
};

const INITIAL_SESSIONS: SessionRow[] = [
  {
    id: "mac",
    icon: "laptop_mac",
    iconTile: "p-2 bg-primary-fixed rounded-lg text-on-primary-fixed",
    title: 'MacBook Pro 16" (Apple M3 Max)',
    badge: { label: "Current Session", className: "bg-primary text-on-primary text-[10px] font-caption-bold px-1.5 py-0.5 rounded" },
    location: "New York, US • Arc Browser 124.0",
    meta: "192.168.1.104 • Active now",
    isCurrent: true,
    revokeLabel: "Revoke MacBook session",
  },
  {
    id: "iphone",
    icon: "smartphone",
    iconTile: "p-2 bg-surface-container-high rounded-lg text-on-surface",
    title: "iPhone 15 Pro (iOS 17.5)",
    badge: { label: "VervAI Companion App", className: "text-on-surface-variant text-[11px] font-body-sm" },
    location: "New York, US • Cellular Gateway",
    meta: "Synced 18 minutes ago",
    revokeLabel: "Revoke iPhone session",
  },
  {
    id: "ipad",
    icon: "tablet_mac",
    iconTile: "p-2 bg-surface-container-high rounded-lg text-on-surface",
    title: 'Chrome on iPad Pro 12.9"',
    badge: { label: "Studio Workstation", className: "text-on-surface-variant text-[11px] font-body-sm" },
    location: "Brooklyn, NY, US • Chrome Mobile",
    meta: "Last active 3 days ago",
    revokeLabel: "Revoke iPad session",
  },
];

export default function ActiveSessions() {
  const [revoked, setRevoked] = useState<Set<string>>(new Set());

  const revoke = (id: string) => setRevoked((prev) => { const n = new Set(prev); n.add(id); return n; });
  const revokeAll = () => setRevoked(new Set(INITIAL_SESSIONS.filter((s) => !s.isCurrent).map((s) => s.id)));
  const onlineCount = INITIAL_SESSIONS.filter((s) => !revoked.has(s.id)).length;

  return (
    <section className="col-span-12 lg:col-span-5 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
      <SectionHeader
        icon="devices"
        iconClass="text-secondary"
        title="Active Sessions & Devices"
        subtitle="Authenticated hardware instances"
        badge={{ label: `${onlineCount} Online`, className: "inline-flex items-center gap-1 text-[11px] font-caption-bold text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded" }}
      />
      <div className="p-space-lg flex flex-col gap-space-md">
        {INITIAL_SESSIONS.map((session) => {
          const isRevoked = revoked.has(session.id);
          return (
            <div key={session.id} className={`flex items-start justify-between p-space-sm rounded-lg transition-colors ${isRevoked ? "bg-error-container/20 opacity-60" : "bg-surface-container-low"}`}>
              <div className="flex items-start gap-space-sm">
                <div className={session.iconTile}>
                  <Icon name={session.icon} size={22} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-headline-sm text-[14px] text-on-surface">{session.title}</span>
                    {session.badge && <span className={session.badge.className}>{session.badge.label}</span>}
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{session.location}</span>
                  <span className="font-body-sm text-[11px] text-secondary font-mono">
                    {isRevoked ? "Session terminated" : session.meta}
                  </span>
                </div>
              </div>
              {session.isCurrent ? (
                <Icon name="verified_user" size={18} className="text-tertiary" />
              ) : isRevoked ? (
                <span className="font-caption-bold text-[10px] text-error px-1.5 py-0.5 rounded bg-error-container/30">
                  Revoked
                </span>
              ) : (
                <button
                  aria-label={session.revokeLabel}
                  className="text-on-surface-variant hover:text-error hover:bg-error-container p-1 rounded transition-colors"
                  type="button"
                  onClick={() => revoke(session.id)}
                >
                  <Icon name="close" size={18} />
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="px-space-lg py-3 bg-surface-container-low flex items-center justify-between">
        <span className="font-body-sm text-[12px] text-on-surface-variant">Secure hardware fingerprinting active</span>
        <button
          className="flex items-center gap-1.5 bg-surface-container-highest hover:bg-error hover:text-on-error text-on-surface font-caption-bold text-caption-bold px-3 py-2 rounded-lg active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none"
          type="button"
          disabled={revoked.size >= INITIAL_SESSIONS.filter((s) => !s.isCurrent).length}
          onClick={revokeAll}
        >
          <span className="material-symbols-outlined text-[16px]">logout</span>
          <span>Revoke Other Sessions</span>
        </button>
      </div>
    </section>
  );
}