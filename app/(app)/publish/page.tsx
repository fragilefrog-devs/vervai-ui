import PublishHeader from "@/components/publish/PublishHeader";
import ReadyToPublish from "@/components/publish/ReadyToPublish";
import ConnectedChannels from "@/components/publish/ConnectedChannels";
import DispatchTelemetry from "@/components/publish/DispatchTelemetry";
import ContentCalendar from "@/components/publish/ContentCalendar";

export default function Page() {
  return (
    <div className="flex flex-col w-full space-y-space-xl">
      <PublishHeader />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <ReadyToPublish />
        <aside className="lg:col-span-5 space-y-space-lg">
          <ConnectedChannels />
          <DispatchTelemetry />
        </aside>
      </div>
      <ContentCalendar />
    </div>
  );
}