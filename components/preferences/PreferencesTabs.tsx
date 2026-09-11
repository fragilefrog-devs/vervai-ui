"use client";

import { useState } from "react";

const TABS = [
  { id: "general", icon: "tune", label: "General & Profile" },
  { id: "agents", icon: "smart_toy", label: "Agent Defaults" },
  { id: "notifications", icon: "notifications_active", label: "Notifications" },
  { id: "security", icon: "shield_person", label: "Team & Security" },
  { id: "data", icon: "database", label: "Data & Export" },
];

export default function PreferencesTabs() {
  const [active, setActive] = useState("general");

  return (
    <div className="flex items-center gap-1 p-1 bg-surface-container rounded-xl overflow-x-auto select-none shadow-sm">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          className={`flex items-center gap-2 px-space-md py-2 rounded-lg transition-all whitespace-nowrap ${
            active === tab.id
              ? "bg-surface-container-lowest text-primary font-headline-sm text-headline-sm shadow-sm"
              : "text-on-surface-variant hover:text-on-surface font-body-medium text-body-medium"
          }`}
          type="button"
          aria-pressed={active === tab.id}
          onClick={() => setActive(tab.id)}
        >
          <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}