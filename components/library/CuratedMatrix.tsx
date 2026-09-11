import ContentCard, { type ContentCardItem } from "./ContentCard";

const EXTRACTS: ContentCardItem[] = [
  {
    typeLabel: "LinkedIn Carousel",
    typeIcon: "view_carousel",
    typeTone: "secondary",
    status: { kind: "scheduled", label: "Thu 9:00 AM via Buffer" },
    preview: {
      kind: "image",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQIaemGFeYPTdSQMDMOgPDoMHm2B0OpdQUg5p6A-rMSiwDdXxQK8T7rY2dIY_cI11c3aubYBRajLPSoMrMVk95BXq10vAWVzi_3fZrKjFAAXg-ug8dUEORGH55fiLMFND83iekuuzPT5vJ3pTffGNjtJwSYC-jylak3Kxqx-ZjqXcmK818X-gAgpC9mJh9E_xP_Q3oVG7UJIrSVdB9oHXifqWcvZAxFIKZFufT-x8uB1hvKK2uef46",
      alt: "A clean minimalist editorial slide preview of a B2B SaaS growth chart with sharp monochrome typography, deep navy accents, and structured architectural lines on a light paper surface.",
      badge: "7 Slides",
    },
    title: "B2B SaaS Growth Framework: Breaking The Product-Led Linear Ceiling",
    description:
      'Hook: "Your ACV isn\'t stuck because your product is weak. It\'s stuck because your sales motion assumes customers know how to define their own ROI..."',
    source: "q3-strategy.pdf",
    actionLabel: "View 7 slides",
    actionIcon: "arrow_forward",
  },
  {
    typeLabel: "X Thread • 8 Tweets",
    typeIcon: "forum",
    typeTone: "neutral",
    status: { kind: "review", label: "Needs Review" },
    preview: {
      kind: "thread",
      authorInitials: "EV",
      authorName: "Elena Vance",
      authorHandle: "@elenavance",
      tweetIndex: "1/8",
      quote:
        "Why premature venture capital silently kills founder product intuition. A thread on surviving post-seed validation in 2025:",
    },
    title: "Contrarian Seed Capital Narrative",
    meta: "96% Model Confidence • Est. 12k impressions",
    source: "ep42-interview.mp3",
    actionLabel: "Review Draft",
    actionIcon: "open_in_new",
  },
  {
    typeLabel: "Vertical Shorts • 3 Cuts",
    typeIcon: "movie",
    typeTone: "neutral",
    status: { kind: "ready", label: "Ready to Publish" },
    preview: {
      kind: "video",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFC-eZfcTf5QEQdGtEAcRShiUn_F4uuwCT2ptNeCX8wH-btx-3dTUg7-NrmRu1seXYDrwwx32vJOZWGuJa0qRjAyBbtoqO8iT_KO52XQVHzyk_1Vsru0sb06VaO1ua8I172GkxgFAsrLcmd44U1TZ0qcGwhus0Zfx4R0jBSRg_jPhW21Hwcilp65s57QxzO8emBPaCJD9Aj5sz_v682tZIoXowfZq-BQ71jiAqr8CQuKQ96d8Kle8x",
      alt: "High quality 9 to 16 vertical video frame preview showing a speaker presenting with dynamic animated captions on screen in an architectural conference environment with moody soft lighting.",
      duration: "00:48 • 1080p",
      sync: "Word Sync: 100%",
    },
    title: 'Founder Keynote Micro-Clips: "The Autonomous Shift"',
    description:
      "Speaker: Elena Vance • Auto-burned kinetic captions with keyword emphasis in Cobalt.",
    source: "ep42-interview.mp3",
    actionLabel: "Preview Cuts & Captions",
    actionIcon: "arrow_forward",
  },
];

export default function CuratedMatrix() {
  return (
    <section className="space-y-space-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-headline-md text-headline-md text-on-surface">Curated Matrix</span>
          <span className="text-secondary text-body-sm font-medium">(Selected Extracts)</span>
        </div>
        <div className="flex items-center gap-2 text-secondary font-caption-bold text-caption-bold">
          <span>Sort by:</span>
          <button className="text-on-surface inline-flex items-center gap-0.5 hover:underline" type="button">
            Confidence Index
            <span className="material-symbols-outlined text-[14px]">unfold_more</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {EXTRACTS.map((item) => (
          <ContentCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}