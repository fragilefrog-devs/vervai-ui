"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

type ToneSlider = {
  id: string;
  label: string;
  default: number;
  valueLabel: (v: number) => string;
  descriptionIcon: string;
  description: string;
};

const TONE_SLIDERS: ToneSlider[] = [
  {
    id: "analytical",
    label: "Analytical vs. Emotional",
    default: 85,
    valueLabel: (v) => `${v}% Analytical`,
    descriptionIcon: "check_circle",
    description: "Data-dense, operational proof, zero hyperbole.",
  },
  {
    id: "punchiness",
    label: "Punchiness vs. Exposition",
    default: 78,
    valueLabel: (v) => `${v}% Crisp`,
    descriptionIcon: "speed",
    description: "High-velocity pacing, sub-15-word lead sentences.",
  },
  {
    id: "formality",
    label: "Formality Matrix",
    default: 42,
    valueLabel: (v) => `${v}% Peer-to-Peer`,
    descriptionIcon: "record_voice_over",
    description: "Unbuttoned authority, executive tone, no bureaucracy.",
  },
  {
    id: "contrarian",
    label: "Contrarian Index",
    default: 68,
    valueLabel: (v) => `${v}% Non-Consensus`,
    descriptionIcon: "trending_up",
    description: "Lead with counter-intuitive data or operational thesis.",
  },
];

export default function ToneSliders() {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(TONE_SLIDERS.map((s) => [s.id, s.default]))
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-xl gap-y-space-lg bg-surface-container-low p-space-lg rounded-xl">
      {TONE_SLIDERS.map((slider) => (
        <div key={slider.id} className="space-y-2">
          <div className="flex justify-between items-baseline">
            <label className="font-headline-sm text-headline-sm text-on-surface" htmlFor={`tone-${slider.id}`}>
              {slider.label}
            </label>
            <span className="font-caption-bold text-caption-bold text-primary px-2 py-0.5 rounded bg-primary-fixed">
              {slider.valueLabel(values[slider.id])}
            </span>
          </div>
          <input
            id={`tone-${slider.id}`}
            className="w-full accent-primary-container h-1.5 bg-surface-container-highest rounded-lg cursor-pointer transition-all"
            max="100"
            min="0"
            type="range"
            value={values[slider.id]}
            onChange={(e) =>
              setValues((v) => ({ ...v, [slider.id]: Number(e.target.value) }))
            }
          />
          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5">
            <Icon name={slider.descriptionIcon} size={15} className="text-tertiary" />
            {slider.description}
          </p>
        </div>
      ))}
    </div>
  );
}