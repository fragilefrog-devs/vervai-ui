"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

export default function ApplyBar() {
  const [applied, setApplied] = useState(false);

  const apply = () => {
    setApplied(true);
    setTimeout(() => setApplied(false), 1500);
  };

  return (
    <div className="flex items-center justify-between p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
      <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
        <span className="material-symbols-outlined text-tertiary text-[18px]">cloud_off</span>
        <span>
          {applied
            ? "Applied to this session only."
            : "Preferences are not persisted to the server yet. Changes apply to the current session only."}
        </span>
      </div>
      <div className="flex items-center gap-space-sm">
        <button
          className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-medium text-body-medium transition-colors"
          type="button"
        >
          Discard
        </button>
        <button
          className={`px-space-lg py-2 rounded-lg font-body-medium text-body-medium shadow-sm transition-all active:scale-[0.98] ${
            applied
              ? "bg-tertiary-container text-on-tertiary-container"
              : "bg-primary hover:bg-primary-container text-on-primary"
          }`}
          type="button"
          onClick={apply}
        >
          {applied ? "✓ Applied" : "Apply Preferences"}
        </button>
      </div>
    </div>
  );
}