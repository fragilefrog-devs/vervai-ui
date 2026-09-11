import { createClient } from "@/lib/supabase/server";

export type SourceType = "audio" | "video" | "youtube" | "transcript";
export type SourceStatus =
  | "uploaded"
  | "transcribing"
  | "transcribed"
  | "generating"
  | "done"
  | "failed";

export type OutputFormat =
  | "linkedin_post"
  | "newsletter"
  | "shortform_script"
  | "thread"
  | "carousel";

export type SourceRow = {
  id: string;
  title: string;
  storage_path: string | null;
  source_url: string | null;
  source_type: SourceType;
  status: SourceStatus;
  duration_seconds: number | null;
  created_at: string;
  outputs: OutputRow[] | null;
};

export type OutputRow = {
  id: string;
  format: OutputFormat;
  content: string;
  created_at: string;
};

export type DistributionJobRow = {
  id: string;
  run_id: string | null;
  output_id: string | null;
  platform:
    | "linkedin"
    | "x"
    | "newsletter"
    | "youtube_shorts"
    | "tiktok"
    | "instagram";
  status: "draft" | "scheduled" | "published" | "failed" | "cancelled";
  scheduled_at: string | null;
  published_at: string | null;
  created_at: string;
};

export type IdeaRow = {
  id: string;
  run_id: string;
  title: string;
  description: string | null;
  rationale: string | null;
  suggested_formats: OutputFormat[];
  approved: boolean;
  created_at: string;
};

export type ConnectionsState = {
  buffer: { username: string; created_at: string } | null;
  youtube: { channel_title: string; created_at: string } | null;
  drive: { drive_name: string; drive_email: string; created_at: string } | null;
};

const MIN = 60_000;
const HOUR = 3_600_000;
const DAY = 86_400_000;

export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  if (diff < MIN) return "just now";
  if (diff < HOUR) return `${Math.floor(diff / MIN)}m ago`;
  if (diff < DAY) return `${Math.floor(diff / HOUR)}h ago`;
  return `${Math.floor(diff / DAY)}d ago`;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateTime(iso: string): string {
  const d = new Date(iso);
  return `${d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} • ${d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}`;
}

export function formatDuration(seconds: number | null): string {
  if (!seconds) return "";
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins >= 60) {
    const h = Math.floor(mins / 60);
    return `${h} hr ${mins % 60} min`;
  }
  return mins > 0 ? `${mins} min ${secs} sec` : `${secs} sec`;
}

export const SOURCE_TYPE_META: Record<
  SourceType,
  { icon: string; label: string }
> = {
  audio: { icon: "mic", label: "Audio" },
  video: { icon: "videocam", label: "Video" },
  youtube: { icon: "smart_display", label: "YouTube" },
  transcript: { icon: "description", label: "Transcript" },
};

export const FORMAT_LABEL: Record<OutputFormat, string> = {
  linkedin_post: "LinkedIn Post",
  newsletter: "Newsletter",
  shortform_script: "Short-Form Script",
  thread: "Thread",
  carousel: "Carousel",
};

export const PLATFORM_LABEL: Record<DistributionJobRow["platform"], string> = {
  linkedin: "LinkedIn",
  x: "Twitter / X",
  newsletter: "Newsletter",
  youtube_shorts: "YT Shorts",
  tiktok: "TikTok",
  instagram: "Instagram",
};

export const SOURCE_STATUS_LABEL: Record<SourceStatus, string> = {
  uploaded: "Uploaded",
  transcribing: "Transcribing",
  transcribed: "Transcribed",
  generating: "Generating",
  done: "Ready",
  failed: "Failed",
};

export const OUTCOME_STATUS_LABEL: Record<
  DistributionJobRow["status"],
  string
> = {
  draft: "Draft",
  scheduled: "Scheduled",
  published: "Published",
  failed: "Failed",
  cancelled: "Cancelled",
};

export async function getSourcesWithOutputs(limit = 100): Promise<SourceRow[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("sources")
    .select(
      "id,title,storage_path,source_url,source_type,status,duration_seconds,created_at,outputs(id,format,content,created_at)",
    )
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data ?? []) as SourceRow[];
}

export async function getDistributionJobs(
  limit = 100,
): Promise<DistributionJobRow[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("v4_distribution_jobs")
    .select("id,run_id,output_id,platform,status,scheduled_at,published_at,created_at")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data ?? []) as DistributionJobRow[];
}

export async function getRecentIdeas(limit = 50): Promise<IdeaRow[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("v4_content_ideas")
    .select("id,run_id,title,description,rationale,suggested_formats,approved,created_at")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data ?? []) as IdeaRow[];
}

export async function getConnectionsState(): Promise<ConnectionsState> {
  const supabase = await createClient();
  const [buffer, youtube, drive] = await Promise.all([
    supabase
      .from("buffer_connections")
      .select("buffer_username,created_at")
      .limit(1)
      .maybeSingle(),
    supabase
      .from("youtube_connections")
      .select("channel_title,created_at")
      .limit(1)
      .maybeSingle(),
    supabase
      .from("drive_connections")
      .select("drive_name,drive_email,created_at")
      .limit(1)
      .maybeSingle(),
  ]);
  return {
    buffer: buffer.data
      ? { username: buffer.data.buffer_username, created_at: buffer.data.created_at }
      : null,
    youtube: youtube.data
      ? {
          channel_title: youtube.data.channel_title,
          created_at: youtube.data.created_at,
        }
      : null,
    drive: drive.data
      ? {
          drive_name: drive.data.drive_name,
          drive_email: drive.data.drive_email,
          created_at: drive.data.created_at,
        }
      : null,
  };
}