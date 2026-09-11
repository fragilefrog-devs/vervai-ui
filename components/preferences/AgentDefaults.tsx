"use client";

import { useState } from "react";
import Toggle from "@/components/ui/Toggle";
import type { AgentPreferencesRow } from "@/lib/data";

type AgentDefaultsProps = {
  prefs?: AgentPreferencesRow | null;
};

type ListMode = "phrases" | "examples" | "samples";

export default function AgentDefaults({ prefs }: AgentDefaultsProps) {
  const [autoMode, setAutoMode] = useState(prefs?.auto_mode ?? false);
  const [tone, setTone] = useState(prefs?.brand_tone ?? "");
  const [forbidden, setForbidden] = useState<string[]>(prefs?.brand_forbidden_phrases ?? []);
  const [examples, setExamples] = useState<string[]>(prefs?.brand_examples ?? []);
  const [samples, setSamples] = useState<string[]>(prefs?.brand_samples ?? []);

  const reset = () => {
    setAutoMode(false);
    setTone("");
    setForbidden([]);
    setExamples([]);
    setSamples([]);
  };

  const ListSection = ({ mode }: { mode: ListMode }) => {
    const items = mode === "phrases" ? forbidden : mode === "examples" ? examples : samples;
    const setItems =
      mode === "phrases" ? setForbidden : mode === "examples" ? setExamples : setSamples;
    const title =
      mode === "phrases"
        ? "Forbidden Phrases"
        : mode === "examples"
          ? "Brand Examples"
          : "Brand Samples";
    const singular = mode === "phrases" ? "phrase" : mode === "examples" ? "example" : "sample";

    return (
      <div className="flex flex-col p-space-md bg-surface-container-low rounded-xl gap-2">
        <div className="flex items-center justify-between">
          <span className="font-headline-sm text-headline-sm text-on-surface">{title}</span>
          <span className="font-caption-bold text-caption-bold text-primary font-semibold">
            {items.length}
          </span>
        </div>
        {items.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {items.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-highest text-on-surface font-caption-bold text-caption-bold"
              >
                {item}
                <button
                  className="text-outline hover:text-error transition-colors"
                  type="button"
                  aria-label={`Remove ${item}`}
                  onClick={() => setItems(items.filter((i) => i !== item))}
                >
                  <span className="material-symbols-outlined text-[14px]">close</span>
                </button>
              </span>
            ))}
          </div>
        ) : (
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            No {singular}s configured.
          </p>
        )}
      </div>
    );
  };

  return (
    <section
      id="agent-defaults"
      className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col justify-between gap-space-lg scroll-mt-8"
    >
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
                Defaults the agent uses when processing new source content.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-space-md">
          <div className="flex items-start justify-between p-space-md bg-surface-container-low rounded-xl gap-space-md">
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Autonomous mode
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Start processing automatically when new source content arrives.
              </span>
            </div>
            <div className="shrink-0 mt-1">
              <Toggle checked={autoMode} onChange={setAutoMode} />
            </div>
          </div>
          <div className="flex flex-col p-space-md bg-surface-container-low rounded-xl gap-2">
            <label
              className="font-headline-sm text-headline-sm text-on-surface"
              htmlFor="agent-brand-tone"
            >
              Brand Tone
            </label>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Free-text description of your brand voice used by the agent.
            </p>
            <textarea
              id="agent-brand-tone"
              className="p-3 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-lg outline-none focus:shadow-sm focus:bg-surface-container-highest transition-all resize-none placeholder:text-outline"
              rows={3}
              placeholder="No brand tone configured"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            />
          </div>
          <ListSection mode="phrases" />
          <ListSection mode="examples" />
          <ListSection mode="samples" />
        </div>
      </div>
      <div className="pt-2 flex flex-wrap items-center justify-end gap-space-sm">
        <span className="font-body-sm text-[12px] text-on-surface-variant mr-auto">
          Changes are applied locally and are not saved to the server yet.
        </span>
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