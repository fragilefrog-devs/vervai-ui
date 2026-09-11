import Link from "next/link";
import Panel from "@/components/ui/Panel";
import Tag, { type TagTone } from "@/components/ui/Tag";

export type ContentItem = {
  label: string;
  labelTone: TagTone;
  image: string;
  imageAlt: string;
  title: string;
  meta: string;
  status: string;
  statusTone: "neutral" | "brand" | "primary";
};

const CONTENTS: ContentItem[] = [
  {
    label: "Carousel",
    labelTone: "neutral",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1b2PRDrTucdRhYUkgIjav5K7KLG9g70eRWscZj8_9m7o_egk7igY9Shj_G4h9tbyeGsi4Wfs-O_9ryTN4NnlI4_9VRf46BOmx0GlTbR4TNaaJLAEb399yBqImX7j5FkqceprPqqfRqcPErnEkX0Nep9LGoxTUbqTfkAKgf9rueSCLeWooYVld6Odk2iAGSPkkq4O8hxz4vUPDLlxyiSrYKz5aJfyFblPiHuXxxOYmeK3kK1MF_ChL",
    imageAlt: "Clean minimalist slide presentation layout",
    title: "B2B Founder Framework",
    meta: "5 slides",
    status: "Draft",
    statusTone: "neutral",
  },
  {
    label: "Newsletter",
    labelTone: "tertiary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjeGkQhg-_r1Q--MePvrNEIn2WheJjs9bNzjQkU_5ujfM0hsvcVwNQP0kHqTBtbI3-sC1NhASRamy_jMP86wF8BglcVOukPxd811pV1o7oJ7M8Daky7ttROnIWH41WifeZxtuxuQ1vm-xh7VdXTAgPVI3-KgawuX1gOCjZHjnTGjqxCOm4eJ8kXmpjxtmTRLjS4kx2ZpbQJ-Xy3i_rgFmvnDKePmRJXLiM4QJrTqtDJdO4UEhI32UZ",
    imageAlt: "Editorial newsletter layout with technical Swiss typography",
    title: "SaaS Retention Drivers",
    meta: "1,240 words",
    status: "Ready",
    statusTone: "brand",
  },
  {
    label: "Memo",
    labelTone: "secondary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJoNoc7VwEV64KJhGU21B5rOXo0wN-ZvQIx_8IPN6n_P6wUETllmnDzHasF4gyTU1jiJCKvt4L0h2HgxKl-7_lOqey2tkglesSxmsuQAJUp2J54OuvDQs94O0YaTRaeweANn6gf_BCyngqkUBbtM2Tbr4QyLFM3uep-dP8LoMyU7P_JEMYQH0xfQXO40wes10UjJLO7ch_wdMzvBNiGK76hznyZfPZ6r9KiaDYq9cDPd64-eBLVnuL",
    imageAlt: "Engineering documentation brief with code blocks and structural hierarchy",
    title: "Engineering Culture Memo",
    meta: "3 min read",
    status: "Scheduled",
    statusTone: "primary",
  },
];

function ContentTile({ item }: { item: ContentItem }) {
  return (
    <div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container flex flex-col justify-between transition-colors">
      <div className="aspect-video w-full rounded bg-surface-container-highest overflow-hidden mb-2 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full h-full object-cover" src={item.image} alt={item.imageAlt} />
        <Tag tone={item.labelTone} className="absolute top-1.5 left-1.5 bg-surface-container-lowest/90 backdrop-blur-sm">
          {item.label}
        </Tag>
      </div>
      <div>
        <p className="font-caption-bold text-caption-bold text-on-surface truncate">{item.title}</p>
        <div className="flex items-center justify-between text-xs text-secondary mt-1">
          <span className="font-body-sm text-[11px]">{item.meta}</span>
          <Tag tone={item.statusTone}>{item.status}</Tag>
        </div>
      </div>
    </div>
  );
}

export default function RecentContentPanel() {
  return (
    <Panel className="lg:col-span-6">
      <div>
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-headline-lg text-headline-lg text-on-surface">Recent Content</h3>
          <Link
            href="/library"
            className="font-caption-bold text-caption-bold text-primary hover:text-primary-container flex items-center gap-1 transition-colors"
          >
            <span>View library</span>
          </Link>
        </div>
        <p className="font-body-medium text-body-medium text-secondary mb-space-md">
          Synthesized deliverables ready across your active communication channels.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
          {CONTENTS.map((item) => (
            <ContentTile key={item.title} item={item} />
          ))}
        </div>
      </div>
      <div className="pt-space-md mt-space-sm flex items-center justify-between">
        <span className="font-body-sm text-body-sm text-secondary text-xs">
          Total 48 items indexed in workspace
        </span>
        <span className="font-caption-bold text-caption-bold text-xs text-on-surface">
          Updated 14 mins ago
        </span>
      </div>
    </Panel>
  );
}