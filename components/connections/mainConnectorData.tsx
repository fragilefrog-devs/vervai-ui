import type { ConnectorCardItem } from "./ConnectorCard";

const MAIN_SOURCE_CONNECTORS: ConnectorCardItem[] = [
  {
    icon: "folder_shared",
    iconTone: "primary-container",
    status: { label: "Connected", tone: "active" },
    title: "Google Drive",
    description: "Auto-syncs /VervAI-Intake directory",
    details: [
      { label: "Sync Mode:", value: "Delta Continuous" },
      { label: "Last Synced:", value: "12m ago", valueTone: "tertiary" },
    ],
    action: { label: "Configure Sync Paths", tone: "default" },
  },
  {
    icon: "smart_display",
    iconTone: "error",
    status: { label: "Connected", tone: "active" },
    title: "YouTube & Workspace",
    description: "Monitored channel: @AcmeEngineering",
    details: [
      { label: "Auto-transcription:", value: "Whisper v3 Active", valueTone: "tertiary" },
      { label: "Last Ingest:", value: "2h 45m ago" },
    ],
    action: { label: "Manage Channel Watch", tone: "default" },
  },
  {
    icon: "videocam",
    iconTone: "primary",
    status: { label: "Connected", tone: "active" },
    title: "Loom Enterprise",
    description: "Workspace: Acme Studio",
    details: [
      { label: "Target Tag:", value: "#repurpose" },
      { label: "Auto OCR:", value: "Keyframes Enabled" },
    ],
    action: { label: "Settings", tone: "default" },
  },
  {
    icon: "podcasts",
    iconTone: "on-surface-variant",
    status: { label: "Available", tone: "available" },
    title: "Spotify for Podcasters",
    description:
      "Ingest master audio feeds directly from RSS/Anchor endpoints for automated micro-content creation.",
    details: [
      { label: "", value: "No authenticated token profile attached", valueTone: "tertiary" },
    ],
    action: { label: "+ Connect OAuth", tone: "connect" },
  },
];

const MAIN_PUBLISHING_RELAYS: ConnectorCardItem[] = [
  {
    icon: "layers",
    iconTone: "primary-container",
    status: { label: "100% Stable", tone: "stable" },
    title: "Buffer Pipeline",
    description: "Target queues: LinkedIn, Twitter/X, Threads",
    details: [
      { label: "Token Expiry:", value: "52 days remaining" },
      { label: "Queued Drafts:", value: "14 scheduled", valueTone: "primary" },
    ],
    action: { label: "Test Webhook Relay", tone: "default" },
  },
  {
    icon: "share",
    iconTone: "primary",
    status: { label: "Active", tone: "active" },
    title: "LinkedIn Creator API",
    description: "Elena Vance (Personal) + Acme Studio (Page)",
    details: [
      { label: "Auth Type:", value: "OAuth 2.0 PKCE" },
      { label: "Permissions:", value: "w_member_social", valueTone: "tertiary" },
    ],
    action: { label: "Permissions", tone: "default" },
  },
  {
    icon: "tag",
    iconTone: "on-surface",
    status: { label: "Needs Attention", tone: "error" },
    title: "Twitter / X Developer v2",
    description: "@ElenaVance & @AcmeStudio",
    details: [
      { label: "Token Status:", value: "Expires in 48h", valueTone: "error" },
      { label: "Auto-refresh:", value: "Offline" },
    ],
    action: { label: "Re-authenticate", tone: "error", icon: "lock_reset" },
  },
  {
    icon: "webhook",
    iconTone: "on-surface-variant",
    status: { label: "Active", tone: "active" },
    title: "Substack & Ghost Webhook",
    description:
      "Live endpoint dispatching weekly draft newsletter bundles directly to publication queue.",
    details: [
      { label: "Target URL:", value: "https://api.acme.pub/...", valueTone: "mono" },
      { label: "Success Rate:", value: "100% (214/214)", valueTone: "tertiary" },
    ],
    action: { label: "Webhook Logs", tone: "default" },
  },
];

export { MAIN_SOURCE_CONNECTORS, MAIN_PUBLISHING_RELAYS };