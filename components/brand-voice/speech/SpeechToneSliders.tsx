"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

type SpeechSlider = {
  id: string;
  label: string;
  infoTitle: string;
  default: number;
  valueLabel: (v: number) => string;
  left: string;
  center: string;
  right: string;
};

const SLIDERS: SpeechSlider[] = [
  {
    id: "analytical",
    label: "Analytical vs. Emotional",
    infoTitle: "Prioritizes numerical citations, empirical evidence, and systemic logic over sentimental phrasing.",
    default: 85,
    valueLabel: (v) => `${v}% Analytical`,
    left: "Affective & Empathetic",
    center: "Empirical Proof • Operational",
    right: "Mathematical Axiom",
  },
  {
    id: "punchiness",
    label: "Punchiness vs. Exposition",
    infoTitle: "Controls average sentence token count, compression, and clause trimming.",
    default: 78,
    valueLabel: (v) => `${v}% Crisp`,
    left: "Detailed Narrative Flow",
    center: "Sub-15 Word Sentences",
    right: "Telegraphic Bulleted",
  },
  {
    id: "formality",
    label: "Formality Matrix",
    infoTitle: "Calibrates distance from colloquial ease to academic publication style.",
    default: 42,
    valueLabel: (v) => `${v}% Peer-to-Peer`,
    left: "Casual Raw Post",
    center: "Unbuttoned Executive Authority",
    right: "Rigid Enterprise Whitepaper",
  },
  {
    id: "contrarian",
    label: "Contrarian Index",
    infoTitle: "Encourages challenging conventional software management orthodoxy with actionable proof.",
    default: 68,
    valueLabel: (v) => `${v}% Non-Consensus`,
    left: "Consensus-Aligned",
    center: "Operational Thesis Leads",
    right: "Extreme Paradigm Shift",
  },
];

export default function SpeechToneSliders() {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(SLIDERS.map((s) => [s.id, s.default]))
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-space-md">
      {SLIDERS.map((s) => (
        <div key={s.id} className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1.5" htmlFor={`speech-tone-${s.id}`}>
              <span>{s.label}</span>
              <Icon
                name="info"
                size={15}
                className="text-outline"
                {...{ title: s.infoTitle }}
              />
            </label>
            <span className="font-caption-bold text-caption-bold px-2 py-0.5 rounded bg-surface-container-high text-primary font-mono">
              {s.valueLabel(values[s.id])}
            </span>
          </div>
          <div className="relative w-full py-1">
            <input
              id={`speech-tone-${s.id}`}
              className="w-full accent-primary-container h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer"
              max="100"
              min="0"
              type="range"
              value={values[s.id]}
              onChange={(e) =>
                setValues((v) => ({ ...v, [s.id]: Number(e.target.value) }))
              }
            />
          </div>
          <div className="flex justify-between font-caption-bold text-[11px] text-outline">
            <span>{s.left}</span>
            <span className="text-on-surface-variant font-medium">{s.center}</span>
            <span>{s.right}</span>
          </div>
        </div>
      ))}
    </div>
  );
}