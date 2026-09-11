import type { ReactNode } from "react";
import Panel from "@/components/ui/Panel";
import Icon from "@/components/ui/Icon";
import ProgressBar from "@/components/ui/ProgressBar";

export type KpiRow = {
  icon: string;
  label: string;
  value: string;
};

export type Kpi = {
  label: string;
  icon: string;
  iconTone?: string;
  value: string;
  unit: string;
  description: string;
  progress?: number;
  rows?: KpiRow[];
  footerLeft: ReactNode;
  footerRight: ReactNode;
};

const KPIS: Kpi[] = [
  {
    label: "Source Repositories",
    icon: "database",
    value: "18",
    unit: "active sources",
    description: "Cataloged into semantic search vector space.",
    rows: [
      { icon: "videocam", label: "Video files", value: "3" },
      { icon: "mic", label: "Audio recordings", value: "8" },
      { icon: "article", label: "Text documents", value: "7" },
    ],
    footerLeft: "Sync state",
    footerRight: (
      <>
        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" /> 2 hours ago
      </>
    ),
  },
  {
    label: "Distribution Pipeline",
    icon: "send",
    iconTone: "text-primary",
    value: "4 Posts",
    unit: "queued this week",
    description: "Live automation routed through social channels.",
    rows: [
      { icon: "in", label: "LinkedIn Creator", value: "2 queued" },
      { icon: "𝕏", label: "Twitter Broadcast", value: "2 queued" },
    ],
    footerLeft: "Connector",
    footerRight: (
      <>
        <Icon name="link" size={14} className="text-tertiary" /> Buffer Connected
      </>
    ),
  },
  {
    label: "Compute Quota",
    icon: "speed",
    value: "68%",
    unit: "136 / 200 min",
    description: "Voice transcription & generative reasoning minutes.",
    progress: 68,
    footerLeft: "Billing cycle",
    footerRight: "Reset in 9 days",
  },
];

function KpiCard({ kpi }: { kpi: Kpi }) {
  return (
    <Panel>
      <div>
        <div className="flex items-center justify-between mb-space-sm">
          <span className="font-label-caps text-label-caps uppercase text-secondary">
            {kpi.label}
          </span>
          <Icon name={kpi.icon} size={18} className={kpi.iconTone ?? "text-outline"} />
        </div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-display-xl text-display-xl text-on-surface">{kpi.value}</span>
          <span className="font-caption-bold text-caption-bold text-secondary">{kpi.unit}</span>
        </div>
        <p className="font-body-sm text-body-sm text-secondary mb-space-md">{kpi.description}</p>
        {kpi.progress !== undefined && (
          <>
            <ProgressBar value={kpi.progress} className="mb-space-sm" />
            <div className="flex items-center justify-between text-xs text-secondary pt-1">
              <span className="font-body-sm text-[11px]">64 min remaining</span>
              <span className="font-caption-bold text-[11px] text-on-surface">Studio Pro Tier</span>
            </div>
          </>
        )}
        {kpi.rows && (
          <div className="space-y-2 pt-space-xs">
            {kpi.rows.map((row) => (
              <div key={row.label} className="flex items-center justify-between text-xs">
                <span className="text-secondary flex items-center gap-1.5">
                  <Icon name={row.icon} size={14} />
                  {row.label}
                </span>
                <span className="font-caption-bold text-on-surface">{row.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-space-md mt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-2.5 rounded-b-xl flex items-center justify-between">
        <span className="font-label-caps text-[11px] text-secondary uppercase">
          {kpi.footerLeft}
        </span>
        <span className="font-caption-bold text-[12px] text-on-surface flex items-center gap-1">
          {kpi.footerRight}
        </span>
      </div>
    </Panel>
  );
}

export default function OverviewKpis() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {KPIS.map((kpi) => (
        <KpiCard key={kpi.label} kpi={kpi} />
      ))}
    </div>
  );
}