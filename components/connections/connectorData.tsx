import ConnectorSection from "./ConnectorSection";
import type { ConnectorCardItem } from "./ConnectorCard";

const SOURCE_CONNECTORS: ConnectorCardItem[] = [
  {
    icon: "cloud_sync",
    iconTone: "primary",
    status: { label: "Connected", tone: "active" },
    title: "Google Drive Enterprise",
    description: (
      <>
        Autonomous sync directory:{" "}
        <code className="bg-surface-container px-1 py-0.5 rounded text-[11px] text-on-surface font-mono">
          /VervAI-Intake
        </code>
      </>
    ) as unknown as string,
    details: [
      { label: "Sync Mode:", value: "Delta Continuous" },
      { label: "Last Synced:", value: "12m ago" },
    ],
    action: { label: "Configure Sync Paths", tone: "default" },
  },
  {
    icon: "smart_display",
    iconTone: "error",
    status: { label: "Connected", tone: "active" },
    title: "YouTube & Studio",
    description: "Monitored channel: @AcmeEngineering",
    details: [
      { label: "Auto-transcription:", value: "Whisper-v3 Active", valueTone: "tertiary" },
      { label: "Last Ingest:", value: "2h 45m ago" },
    ],
    action: { label: "Manage Channel Watch", tone: "default" },
  },
  {
    icon: "video_library",
    iconTone: "primary-container",
    status: { label: "Connected", tone: "active" },
    title: "Loom Enterprise",
    description: "Workspace: Acme Studio",
    details: [
      { label: "Target Tag:", value: "#repurpose", valueTone: "mono" },
      { label: "Auto OCR:", value: "Keyframes Enabled", valueTone: "tertiary" },
    ],
    action: { label: "Settings", tone: "default" },
  },
  {
    icon: "podcasts",
    iconTone: "secondary",
    status: { label: "Available", tone: "available" },
    title: "Spotify for Podcasters",
    description:
      "Direct master audio ingest from RSS/Anchor endpoints for automated micro-clip generation.",
    details: [
      { label: "Endpoint:", value: "Unconfigured", valueTone: "tertiary" },
      { label: "Protocol:", value: "Audio Feed Pull" },
    ],
    action: { label: "+ Connect OAuth", tone: "connect" },
  },
];

const PUBLISHING_RELAYS: ConnectorCardItem[] = [
  {
    icon: "layers",
    iconTone: "primary",
    status: { label: "100% Stable", tone: "stable" },
    title: "Buffer Pipeline",
    description: "Queues: LinkedIn, Twitter/X, Threads",
    details: [
      { label: "Token Expiry:", value: "52 days remaining" },
      { label: "Queued Drafts:", value: "14 scheduled", valueTone: "primary" },
    ],
    action: { label: "Test Webhook Relay", tone: "default" },
  },
  {
    icon: "share",
    iconTone: "primary-container",
    status: { label: "Active", tone: "active" },
    title: "LinkedIn Creator API",
    description: "Elena Vance + Acme Studio Page",
    details: [
      { label: "Auth Type:", value: "OAuth 2.0 PKCE" },
      { label: "Permissions:", value: "w_member_social", valueTone: "mono" },
    ],
    action: { label: "Permissions", tone: "default" },
  },
  {
    icon: "tag",
    iconTone: "error",
    status: { label: "Needs Attention", tone: "error" },
    title: "Twitter / X Developer v2",
    description: "@ElenaVance & @AcmeStudio",
    details: [
      { label: "Token Status:", value: "Expires in 48h", valueTone: "error" },
      { label: "Auto-refresh:", value: "Offline (Auth Failed)", valueTone: "error" },
    ],
    action: { label: "Re-authenticate", tone: "error", icon: "lock_reset" },
  },
  {
    icon: "mark_email_read",
    iconTone: "on-surface",
    status: { label: "Active", tone: "active" },
    title: "Substack & Ghost Webhook",
    description: "Dispatches weekly draft bundles",
    details: [
      { label: "Success Rate:", value: "100% (214/214)", valueTone: "tertiary" },
      { label: "Payload Type:", value: "Signed HMAC-SHA256" },
    ],
    action: { label: "Webhook Logs", tone: "default" },
  },
];

export { SOURCE_CONNECTORS, PUBLISHING_RELAYS };