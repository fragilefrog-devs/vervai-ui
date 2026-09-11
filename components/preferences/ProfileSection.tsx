"use client";

import { useState } from "react";
import TextInput from "@/components/ui/TextInput";
import Select from "@/components/ui/Select";

const TIMEZONES = [
  "America/New_York (EDT) - UTC-4",
  "America/Los_Angeles (PDT) - UTC-7",
  "Europe/London (BST) - UTC+1",
  "Europe/Berlin (CEST) - UTC+2",
  "Asia/Tokyo (JST) - UTC+9",
];

const LOCALES = [
  "English (United States) — en_US",
  "English (United Kingdom) — en_GB",
  "Deutsch (Deutschland) — de_DE",
  "Français (France) — fr_FR",
];

export default function ProfileSection() {
  const [name, setName] = useState("Elena Vance");
  const [email, setEmail] = useState("elena@acmestudio.com");
  const [timezone, setTimezone] = useState(TIMEZONES[0]);
  const [locale, setLocale] = useState(LOCALES[0]);
  const [saved, setSaved] = useState(false);

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <section className="lg:col-span-12 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col gap-space-lg">
      <div className="flex items-center justify-between pb-space-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary-fixed text-primary">
            <span className="material-symbols-outlined text-[20px]">badge</span>
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Personal Profile & Editorial Identity
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Configure your sovereign credential and how your authored content displays globally.
            </p>
          </div>
        </div>
        <span className="font-caption-bold text-caption-bold uppercase tracking-wider text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">
          Owner Access
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl items-start">
        <div className="md:col-span-4 flex flex-col items-center sm:items-start p-space-lg bg-surface-container-low rounded-xl gap-space-md">
          <div className="relative group">
            <img
              alt="Elena Vance"
              className="w-28 h-28 rounded-2xl object-cover shadow-sm ring-4 ring-surface-container-lowest"
              src="https://lh3.googleusercontent.com/aida/AEtjO1WLbLmWyPfOmdJlBlGa076snvY59TeMFF_0K1JITitZuT64S-b3a4Q5MslZOHGXfLoyAMlLqsb5lXn2rjv_R-xqyFxb6FCBL0gowfuDFlX8oAo8oF9BZt7lyEiIMa_r6s1TgWATA7gjbuZx0v9GTMlTtTWwQYSeJyiYCRZfLbDn1p_ZZSM8PtEKhAp7wku2SfhA_rAtHewBFi5vfu4K9cZhY5jS-PTEv5biML1Ul7dChE2mvrvx9SK0Lsw"
            />
            <button
              className="absolute inset-0 bg-inverse-surface/60 rounded-2xl opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-inverse-on-surface transition-opacity cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">photo_camera</span>
              <span className="font-caption-bold text-[10px] mt-1">Replace</span>
            </button>
          </div>
          <div className="flex flex-col text-center sm:text-left">
            <h3 className="font-headline-md text-headline-md text-on-surface">Elena Vance</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
              Creative Director & Founder
            </p>
            <div className="mt-2 flex items-center justify-center sm:justify-start gap-1 text-tertiary font-caption-bold text-caption-bold">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span>Verified Studio Principal</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-between pt-2">
            <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
              Role ID
            </span>
            <span className="font-body-sm text-body-sm text-on-surface font-semibold bg-surface-container-highest px-2 py-0.5 rounded">
              UID-8849-ACME
            </span>
          </div>
        </div>
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div className="flex flex-col gap-1.5">
            <label className="font-body-medium text-body-sm text-on-surface font-semibold flex items-center justify-between">
              <span>Full Name</span>
              <span className="text-outline text-[11px]">Primary author tag</span>
            </label>
            <TextInput value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-body-medium text-body-sm text-on-surface font-semibold flex items-center justify-between">
              <span>Email Address</span>
              <span className="text-tertiary text-[11px] font-semibold">Primary verified</span>
            </label>
            <TextInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-body-medium text-body-sm text-on-surface font-semibold">
              Timezone
            </label>
            <Select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              options={TIMEZONES.map((value) => ({ value, label: value }))}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-body-medium text-body-sm text-on-surface font-semibold">
              Language & Editorial Locale
            </label>
            <Select
              value={locale}
              onChange={(e) => setLocale(e.target.value)}
              options={LOCALES.map((value) => ({ value, label: value }))}
            />
          </div>
          <div className="sm:col-span-2 pt-2 flex items-center justify-between">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {saved
                ? "Profile changes saved to team manifests."
                : "Changes reflect immediately across team manifests and metadata embeds."}
            </p>
            <button
              className={`flex items-center gap-2 px-space-lg py-2.5 rounded-lg font-body-medium text-body-medium shadow-md transition-all active:scale-[0.98] ${
                saved
                  ? "bg-tertiary-container text-on-tertiary-container"
                  : "bg-primary text-on-primary hover:bg-primary-container"
              }`}
              type="button"
              onClick={save}
            >
              <span className="material-symbols-outlined text-[18px]">
                {saved ? "check" : "check"}
              </span>
              <span>{saved ? "Saved" : "Save Profile Changes"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}