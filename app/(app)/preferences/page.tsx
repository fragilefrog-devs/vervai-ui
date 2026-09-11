import ProfileSection from "@/components/preferences/ProfileSection";
import AgentDefaults from "@/components/preferences/AgentDefaults";
import NotificationSettings from "@/components/preferences/NotificationSettings";
import DataSovereignty from "@/components/preferences/DataSovereignty";
import PreferencesTabs from "@/components/preferences/PreferencesTabs";
import ApplyBar from "@/components/preferences/ApplyBar";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <div className="max-w-[1440px] w-full mx-auto space-y-space-xl">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider">
            <span>Account</span>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-semibold">Configuration & System Preferences</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mt-1">
            <h1 className="font-display-2xl text-display-2xl text-on-surface tracking-tight">
              Preferences & Workspace Settings
            </h1>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-caption-bold text-caption-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container animate-pulse"></span>
                Sync Active: US-East
              </span>
            </div>
          </div>
          <p className="font-body-base text-body-medium text-on-surface-variant max-w-3xl">
            Manage your personal profile, notification preferences, default agent behaviors,
            editorial safeguards, and security keys.
          </p>
        </div>
        <PreferencesTabs />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          <ProfileSection />
          <AgentDefaults />
          <NotificationSettings />
          <DataSovereignty />
        </div>
        <ApplyBar />
      </div>
    </div>
  );
}