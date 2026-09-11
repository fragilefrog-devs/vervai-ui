"use client";

import { useState } from "react";
import Toggle from "@/components/ui/Toggle";
import Select from "@/components/ui/Select";
import Slider from "@/components/ui/Slider";

const BLUEPRINTS = [
  "Preset: High-Growth Founder Suite (1 Essay, 1 Newsletter, 3 Short-form scripts, 1 Infographic)",
  "Preset: B2B Thought Leader (1 Whitepaper Brief, 2 LinkedIn Articles, 5 Micro-posts)",
  "Preset: Podcaster Amplifier (Full Show Notes, 1 Deep Dive, 4 Audiogram Quotes, 1 Timestamp Index)",
  "Preset: Developer Evangelist (1 Tech Teardown, 3 Code Highlights, 1 TL;DR Summary)",
];

export default function AgentDefaults() {
  const [autoMatrix, setAutoMatrix] = useState(true);
  const [diarization, setDiarization] = useState(true);
  const [blueprint, setBlueprint] = useState(BLUEPRINTS[0]);
  const [threshold, setThreshold] = useState(90);

  const reset = () => {
    setAutoMatrix(true);
    setDiarization(true);
    setBlueprint(BLUEPRINTS[0]);
    setThreshold(90);
  };

  return (
    <section className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col justify-between gap-space-lg">
      <div className="flex flex-col gap-space-md">
        <div className="flex items-center justify-between pb-space-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-secondary-container text-on-secondary-fixed">
              <span className="material-symbols-outlined text-[20px]">psychology</span>
            </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Autonomous Agent Default Behaviors
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Calibrate ingestion triggers, output sets, and automated governance.
              </p>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-caption-bold text-caption-bold">
            v3.2 Core
          </span>
        </div>
        <div className="space-y-space-md">
          <div className="flex items-start justify-between p-space-md bg-surface-container-low rounded-xl gap-space-md">
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Auto-start Opportunity Matrix upon intake completion
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Launches semantic decomposition immediately when audio, video, or long-form copy
                completes ingestion.
              </span>
            </div>
            <div className="shrink-0 mt-1">
              <Toggle checked={autoMatrix} onChange={setAutoMatrix} />
            </div>
          </div>
          <div className="flex flex-col p-space-md bg-surface-container-low rounded-xl gap-2">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Default Output Target Blueprint
              </span>
              <span className="font-caption-bold text-caption-bold text-primary font-semibold">
                Active Strategy
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Defines the default matrix of content artifacts generated for incoming sources.
            </p>
            <div className="mt-1">
              <Select
                value={blueprint}
                onChange={(e) => setBlueprint(e.target.value)}
                options={BLUEPRINTS.map((label) => ({ value: label, label }))}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex items-start justify-between p-space-md bg-surface-container-low rounded-xl gap-space-md">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Autonomous Diarization
                </span>
                <span className="font-caption-bold text-[10px] px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
                  Whisper-v3 Large
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Always isolate multiple speaker channels with acoustic timestamps for precise quote
                attribution.
              </span>
            </div>
            <div className="shrink-0 mt-1">
              <Toggle checked={diarization} onChange={setDiarization} />
            </div>
          </div>
          <div className="flex items-start justify-between p-space-md bg-secondary-container/40 rounded-xl gap-space-md">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-on-secondary-fixed">
                <span className="material-symbols-outlined text-[16px] text-tertiary">lock</span>
                <span className="font-headline-sm text-headline-sm">Human Sign-off Guardrail</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Require explicit one-click human approval before any asset is moved to Distribution
                queue.
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-caption-bold text-caption-bold text-tertiary">
                Permanently Enforced
              </span>
              <Toggle checked disabled />
            </div>
          </div>
          <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Content Confidence Threshold
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Flag any synthesized draft scoring below target for mandatory deep review.
                </span>
              </div>
              <span className="font-headline-lg text-headline-lg text-primary font-bold px-2.5 py-1 bg-primary-fixed rounded-lg">
                {threshold}%
              </span>
            </div>
            <div className="w-full flex items-center gap-4 mt-2">
              <span className="font-caption-bold text-caption-bold text-outline">70%</span>
              <Slider
                min={70}
                max={100}
                step={1}
                value={threshold}
                onChange={(e) => setThreshold(Number(e.target.value))}
                className="flex-1"
              />
              <span className="font-caption-bold text-caption-bold text-on-surface font-semibold">
                100%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2 flex justify-end">
        <button
          className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-medium text-body-medium transition-all"
          type="button"
          onClick={reset}
        >
          Revert to System Defaults
        </button>
      </div>
    </section>
  );
}