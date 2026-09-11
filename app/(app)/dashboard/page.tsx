import PageHeading from "@/components/ui/PageHeading";
import Icon from "@/components/ui/Icon";
import { Button, ButtonLink } from "@/components/ui/Button";
import IntakePanel from "@/components/dashboard/IntakePanel";
import NeedsReviewPanel from "@/components/dashboard/NeedsReviewPanel";
import AgentOpportunitiesPanel from "@/components/dashboard/AgentOpportunitiesPanel";
import RecentContentPanel from "@/components/dashboard/RecentContentPanel";
import OverviewKpis from "@/components/dashboard/OverviewKpis";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <PageHeading
        eyebrow="Autonomous Operations"
        title="Good morning, Elena"
        subtitle="Turn your content into your next best content."
        actions={
          <>
            <Button variant="secondary" size="md">
              <Icon name="calendar_today" size={16} className="text-secondary" />
              This week
              <Icon name="expand_more" size={14} className="text-outline" />
            </Button>
            <ButtonLink href="/source-intake">
              <Icon name="upload_file" size={18} />
              Upload source
            </ButtonLink>
          </>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-gutter">
        <IntakePanel />
        <NeedsReviewPanel />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-gutter">
        <AgentOpportunitiesPanel />
        <RecentContentPanel />
      </div>

      <OverviewKpis />
    </div>
  );
}