import SectionHeader from "@/components/account/SectionHeader";

export default function ProfileSection() {
  return (
    <section className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
      <SectionHeader
        icon="person_pin"
        iconClass="text-primary"
        title="Primary Identity & Author Attribution"
        subtitle="Signature attached to autonomous generation runs and published assets."
        badge={{ label: "PRO AUTONOMOUS", className: "font-caption-bold text-caption-bold bg-primary-fixed text-on-primary-fixed px-2.5 py-1 rounded-md" }}
      />
      <div className="p-space-lg flex flex-col gap-space-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md p-space-md bg-surface-container-low rounded-xl">
          <div className="flex items-center gap-space-md">
            <div className="relative">
              <img
                className="w-20 h-20 rounded-xl object-cover shadow-sm"
                data-alt="Close-up editorial portrait of Elena Vance, creative director, with warm modernist studio lighting, minimalist concrete architectural backdrop, soft daylight, sharp typography-focused studio aesthetic, neutral clean palette."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOroFxB7tCHHroCQb9Cse60PQGw1I1Wg7gyqCNL25CMY-jBAtXlt1L1DzGvbzYuSjfoXZVFf_-J02RZ_SESzItbBh6X3CptJ4VgwQrCIUyR_69Gm_4EaUajAPY02D6NYUhRDqUva6VJCNoTl7fSQ5x82g88_inqO9thi2uRkuY1vyXQzthJHK80DZvY6LnKZPVJqYz0hLBqHd7nhn9BocHiMWD6mAyfsNJdVDp3dP8miLxLEMiGCx5"
              />
              <button
                aria-label="Change photo"
                className="absolute -bottom-1.5 -right-1.5 bg-primary text-on-primary p-1 rounded-full shadow hover:bg-primary-container transition-all"
                type="button"
              >
                <span className="material-symbols-outlined text-[14px]">edit</span>
              </button>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline-md text-headline-md text-on-surface">Elena Vance</span>
                <span className="material-symbols-outlined text-[18px] text-primary" title="Verified Creator">verified</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Creative Director & Founder</span>
              <span className="font-caption-bold text-[11px] text-secondary font-mono tracking-tight mt-0.5">UID-8849-ACME • ORG-CENTRAL-01</span>
            </div>
          </div>
          <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
            <button
              className="flex-1 sm:flex-none px-3 py-1.5 bg-surface-container-highest hover:bg-surface-dim text-on-surface font-caption-bold text-caption-bold rounded-lg transition-all text-center"
              type="button"
            >
              Upload New Photo
            </button>
            <button
              className="flex-1 sm:flex-none px-3 py-1.5 bg-transparent hover:bg-error-container text-error font-caption-bold text-caption-bold rounded-lg transition-all text-center"
              type="button"
            >
              Remove Avatar
            </button>
          </div>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <div className="flex flex-col gap-1.5">
            <label className="font-caption-bold text-caption-bold text-on-surface uppercase tracking-wide">Full Legal Name</label>
            <input
              className="h-10 px-3 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#2A4DFF] transition-all"
              type="text"
              value="Elena Vance"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="font-caption-bold text-caption-bold text-on-surface uppercase tracking-wide">Primary Email</label>
              <span className="font-caption-bold text-[10px] text-tertiary bg-tertiary-fixed/30 px-1.5 py-0.5 rounded">Verified Primary</span>
            </div>
            <input
              className="h-10 px-3 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#2A4DFF] transition-all"
              type="email"
              value="elena@acmestudio.com"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-caption-bold text-caption-bold text-on-surface uppercase tracking-wide">Editorial Role & Permissions</label>
            <select className="h-10 px-3 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#2A4DFF] transition-all">
              <option selected>Creative Director & Executive Producer</option>
              <option>Lead Content Strategist</option>
              <option>Principal Prompt Engineer</option>
              <option>Workspace Billing Manager</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-caption-bold text-caption-bold text-on-surface uppercase tracking-wide">Timezone Attribution</label>
            <div className="relative">
              <select className="w-full h-10 px-3 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#2A4DFF] transition-all appearance-none">
                <option selected>America/New_York (EDT, UTC-4)</option>
                <option>America/Los_Angeles (PDT, UTC-7)</option>
                <option>Europe/London (BST, UTC+1)</option>
                <option>Europe/Berlin (CEST, UTC+2)</option>
                <option>Asia/Tokyo (JST, UTC+9)</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="font-caption-bold text-caption-bold text-on-surface uppercase tracking-wide">Default Bylines & Autonomous Attribution Text</label>
              <span className="font-body-sm text-[11px] text-on-surface-variant">Appended to generated editorial dossiers</span>
            </div>
            <textarea
              className="p-3 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#2A4DFF] transition-all resize-none"
              rows={2}
            >
              Curated & directed by Elena Vance for Acme Autonomous Studio. Synthetic components validated against enterprise stylistic standards.
            </textarea>
          </div>
        </form>
      </div>
      <div className="px-space-lg py-3 bg-surface-container-low flex items-center justify-between">
        <span className="font-body-sm text-[12px] text-on-surface-variant">Last metadata sync: Today, 14:22 EST</span>
        <button
          className="flex items-center gap-1.5 bg-primary hover:bg-primary-container text-on-primary font-body-medium text-body-medium px-4 py-2 rounded-lg active:scale-[0.98] transition-all shadow-sm"
          type="submit"
        >
          <span className="material-symbols-outlined text-[18px]">check</span>
          <span>Save Changes</span>
        </button>
      </div>
    </section>
  );
}