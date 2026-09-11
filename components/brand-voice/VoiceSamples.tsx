"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

type VoiceSample = {
  icon: string;
  iconTone: "primary" | "secondary" | "tertiary";
  name: string;
  match: string;
  matchTone: "tertiary" | "neutral";
  meta: string;
};

const VOICE_SAMPLES: VoiceSample[] = [
  {
    icon: "description",
    iconTone: "primary",
    name: "Seed to Series A Post-Mortem.md",
    match: "98% Match",
    matchTone: "tertiary",
    meta: "1,420 words • Markdown • Ingested Oct 14",
  },
  {
    icon: "newspaper",
    iconTone: "secondary",
    name: "Operating Leverage in the Age of Agents (Substack Memo)",
    match: "99% Match",
    matchTone: "tertiary",
    meta: "2,800 words • Rich Text Memo • Ingested Nov 02",
  },
  {
    icon: "graphic_eq",
    iconTone: "tertiary",
    name: "Keynote Transcript: Dissecting Autonomous Workflows",
    match: "94% Match",
    matchTone: "neutral",
    meta: "Audio transcription • 4,110 tokens • Ingested Nov 18",
  },
];

const ICON_TONES = {
  primary: "bg-primary-fixed text-primary",
  secondary: "bg-secondary-fixed text-secondary",
  tertiary: "bg-tertiary-fixed-dim/40 text-tertiary",
} as const;

export default function VoiceSamples() {
  const [samples, setSamples] = useState(VOICE_SAMPLES);
  const [uploaded, setUploaded] = useState(false);

  const removeSample = (name: string) =>
    setSamples((s) => s.filter((x) => x.name !== name));

  const uploadSample = () => {
    setUploaded(true);
    setSamples((s) => [
      ...s,
      {
        icon: "description",
        iconTone: "secondary",
        name: "Q3 Board Update.md",
        match: "96% Match",
        matchTone: "tertiary",
        meta: "890 words • Markdown • Uploaded just now",
      },
    ]);
  };

  return (
    <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-sm p-space-lg space-y-space-md">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Approved Ingested Voice Ground Truth
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Validated founder-authored prose used as grounding context.
          </p>
        </div>
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-on-primary font-caption-bold text-caption-bold shadow-sm hover:bg-primary-container transition-all"
          type="button"
          onClick={uploadSample}
        >
          <Icon name="upload_file" size={16} />
          <span>Upload Sample</span>
        </button>
      </div>
      <div className="space-y-space-sm">
        {samples.map((sample) => (
          <div
            key={sample.name}
            className="flex items-center justify-between p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors group"
          >
            <div className="flex items-center gap-space-md min-w-0">
              <div
                className={`w-10 h-10 rounded-lg ${ICON_TONES[sample.iconTone]} flex items-center justify-center shrink-0`}
              >
                <Icon name={sample.icon} size={20} />
              </div>
              <div className="min-w-0 space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm text-body-sm text-on-surface truncate font-semibold">
                    {sample.name}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded font-caption-bold text-caption-bold shrink-0 ${
                      sample.matchTone === "tertiary"
                        ? "bg-tertiary-fixed text-on-tertiary-fixed"
                        : "bg-surface-container-high text-on-surface"
                    }`}
                  >
                    {sample.match}
                  </span>
                </div>
                <p className="font-body-sm text-[12px] text-on-surface-variant">{sample.meta}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors"
                title="Inspect weights"
                type="button"
                aria-label={`Inspect ${sample.name}`}
              >
                <Icon name="visibility" size={18} />
              </button>
              <button
                className="p-1.5 rounded-lg text-outline hover:text-error hover:bg-surface-container-high transition-colors"
                title="Remove"
                type="button"
                aria-label={`Remove ${sample.name}`}
                onClick={() => removeSample(sample.name)}
              >
                <Icon name="delete" size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {uploaded && (
        <p className="font-body-sm text-body-sm text-tertiary">
          Sample uploaded and indexed into the grounding corpus.
        </p>
      )}
      <div className="flex items-center justify-between pt-space-xs text-on-surface-variant font-caption-bold text-caption-bold">
        <span>Combined Ground Truth Corpus: {samples.length} samples</span>
        <span className="flex items-center gap-1 text-primary cursor-pointer hover:underline">
          <Icon name="auto_stories" size={14} />
          <span>View Corpus Embeddings</span>
        </span>
      </div>
    </div>
  );
}