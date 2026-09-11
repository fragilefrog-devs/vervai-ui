"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

type Archetype = {
  id: string;
  name: string;
  sub: string;
};

const ARCHETYPES: Archetype[] = [
  { id: "solo", name: "Solo Operator", sub: "Founder / Creator" },
  { id: "agency", name: "Agency Desk", sub: "2 - 15 Strategists" },
  { id: "enterprise", name: "Enterprise Team", sub: "Autonomous Units" },
];

export default function ArchetypeSelector() {
  const [selected, setSelected] = useState("solo");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" id="archetype-selector">
      {ARCHETYPES.map((archetype) => {
        const active = archetype.id === selected;
        return (
          <button
            key={archetype.id}
            className={`text-left p-3 rounded-lg font-caption-bold text-caption-bold transition-all ${
              active
                ? "bg-primary-fixed text-on-primary-fixed shadow-sm"
                : "bg-surface-container text-on-surface hover:bg-surface-variant"
            }`}
            data-archetype={archetype.id}
            onClick={() => setSelected(archetype.id)}
            type="button"
            aria-pressed={active}
          >
            <div className="flex items-center justify-between mb-1">
              <span>{archetype.name}</span>
              <Icon
                name="check_circle"
                size={16}
                className={active ? "" : "opacity-0"}
              />
            </div>
            <span
              className={`font-label-caps text-label-caps block ${
                active ? "text-on-primary-fixed-variant" : "text-outline"
              }`}
            >
              {archetype.sub}
            </span>
          </button>
        );
      })}
    </div>
  );
}