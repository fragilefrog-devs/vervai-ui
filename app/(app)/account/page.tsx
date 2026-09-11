import AccountHeader from "@/components/account/AccountHeader";
import ProfileSection from "@/components/account/ProfileSection";
import ActiveSessions from "@/components/account/ActiveSessions";
import AuthMethods from "@/components/account/AuthMethods";
import ConnectedAccounts from "@/components/account/ConnectedAccounts";
import DangerZone from "@/components/account/DangerZone";

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="px-space-xl py-space-lg max-w-[1400px] w-full mx-auto flex flex-col gap-space-xl">
          <AccountHeader />
          <div className="grid grid-cols-12 gap-5">
            <ProfileSection />
            <ActiveSessions />
            <AuthMethods />
            <ConnectedAccounts />
            <DangerZone />
          </div>
        </div>
      </div>
    </>
  );
}