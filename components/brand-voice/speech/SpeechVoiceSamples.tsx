"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

type Sample = {
  icon: string;
  name: string;
  match: string;
  meta: string;
};

const SAMPLES: Sample[] = [
  {
    icon: "description",
    name: "Seed to Series A Post-Mortem.md",
    match: "98% Match",
    meta: "1,420 words • Markdown • Ingested Oct 14",
  },
  {
    icon: "article",
    name: "Operating Leverage in the Age of Agents (Internal Memo)",
    match: "99% Match",
    meta: "2,800 words • Rich Text Memo • Ingested Nov 02",
  },
  {
    icon: "mic",
    name: "Keynote Transcript: Dissecting Autonomous Workflows",
    match: "94% Match",
    meta: "Audio Transcription • 4,110 tokens • Ingested Nov 18",
  },
];

export default function SpeechVoiceSamples() {
  const [samples, setSamples] = useState(SAMPLES);

  const removeSample = (name: string) =>
    setSamples((s) => s.filter((x) => x.name !== name));

  return (
    <div className="lg:col-span-7 flex flex-col bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex items-center justify-between pb-space-sm">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Approved Voice Ground Truth
            </h2>
            <span className="font-caption-bold text-caption-bold px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container">
              {samples.length} Context Anchors
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Verified founder-authored essays used for zero-shot in-context priming.
          </p>
        </div>
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-medium text-body-sm transition-colors"
          type="button"
        >
          <Icon name="upload_file" size={16} />
          <span>+ Upload Sample</span>
        </button>
      </div>
      <div className="space-y-space-sm my-space-md">
        {samples.map((s) => (
          <div
            key={s.name}
            className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors group"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
                <Icon name={s.icon} size={20} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm text-body-medium text-on-surface truncate">
                    {s.name}
                  </span>
                  <span className="font-caption-bold text-caption-bold px-1.5 py-0.2 bg-tertiary-container/10 text-tertiary-container rounded">
                    {s.match}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  {s.meta}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
              <button
                className="p-1.5 text-on-surface-variant hover:text-on-surface rounded transition-colors"
                title="Inspect Tokens"
                type="button"
                aria-label={`Inspect ${s.name}`}
              >
                <Icon name="visibility" size={18} />
              </button>
              <button
                className="p-1.5 text-on-surface-variant hover:text-error rounded transition-colors"
                title="Remove Ground Truth"
                type="button"
                aria-label={`Remove ${s.name}`}
                onClick={() => removeSample(s.name)}
              >
                <Icon name="delete" size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-space-sm flex items-center justify-between text-on-surface-variant">
        <span className="font-body-sm text-body-sm font-medium">
          Combined Ground Truth Corpus: <strong className="text-on-surface">{samples.length * 2770} words</strong>
        </span>
        <button
          className="font-body-sm text-body-sm text-primary hover:underline flex items-center gap-1 font-semibold"
          type="button"
        >
          <span>View Corpus Embeddings</span>
          <Icon name="arrow_forward" size={15} />
        </button>
      </div>
    </div>
  );
}