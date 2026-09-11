export default function DataSovereignty() {
  return (
    <section className="lg:col-span-12 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col gap-space-lg">
      <div className="flex items-center justify-between pb-space-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-surface-container text-on-surface">
            <span className="material-symbols-outlined text-[20px]">security</span>
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Data Sovereignty & Retention
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Manage persistent vector indexes, cloud retention life cycles, and complete workspace
              exports.
            </p>
          </div>
        </div>
        <span className="font-caption-bold text-caption-bold text-tertiary flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">lock_open</span>
          Zero-Retention AI Fine-Tuning Agreement
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl pt-1">
        <div className="flex flex-col gap-space-md justify-between">
          <div className="space-y-space-md">
            <div className="flex flex-col gap-2">
              <label className="font-headline-sm text-headline-sm text-on-surface">
                Raw Media Retention Policy
              </label>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Automatically purge raw audio and video source files after transcript extraction to
                conserve workspace footprint. Synthesized textual vector embeddings remain
                persistent.
              </p>
              <div className="relative mt-1">
                <select className="w-full appearance-none px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-base text-body-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-primary-container pr-10">
                  <option selected>
                    Keep raw source media files for 90 days after synthesis (Recommended)
                  </option>
                  <option>Keep raw source media files for 30 days after synthesis</option>
                  <option>Keep raw source media files for 180 days after synthesis</option>
                  <option>Store permanently (Custom Enterprise Tier)</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]">
                  history
                </span>
              </div>
            </div>
            <div className="p-space-md bg-surface-container-low rounded-xl space-y-2">
              <div className="flex items-center justify-between font-caption-bold text-caption-bold">
                <span className="text-on-surface">Vectorized Semantic Index Footprint</span>
                <span className="text-primary font-bold">14.8 GB / 50 GB</span>
              </div>
              <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary-container rounded-full" style={{ width: "30%" }}></div>
              </div>
              <div className="flex items-center justify-between text-[11px] font-body-sm text-on-surface-variant pt-1">
                <span>1,842 synthesized documents indexed</span>
                <span>Pinecone Dedicated Pod us-east-1</span>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <button
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-medium text-body-medium shadow-sm transition-all active:scale-[0.98]"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px] text-primary">download</span>
              <span>Export All Synthesized Content (ZIP / JSON Manifest)</span>
            </button>
          </div>
        </div>
        <div className="p-space-lg bg-error-container/20 rounded-xl flex flex-col justify-between gap-space-md">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-error">
              <span className="material-symbols-outlined text-[20px]">warning</span>
              <span className="font-headline-md text-headline-md font-bold">Danger Zone</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface">
              Irreversible systemic actions for this workspace. Purging will immediately cancel
              scheduled outbound dispatches, discard all pending drafts, and completely flush the
              Pinecone semantic memory vector store.
            </p>
            <div className="p-3 bg-surface-container-lowest rounded-lg">
              <ul className="text-[12px] font-body-sm text-on-surface-variant space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-error"></span>
                  Immediate deletion of 18 live automated intake channels
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-error"></span>
                  Destruction of fine-tuned Acme Studio editorial tone profiles
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-2">
            <button
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-lg bg-error text-on-error font-body-medium text-body-medium shadow-md hover:bg-on-error-container transition-all active:scale-[0.98]"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">delete_forever</span>
              <span>Delete Workspace & Purge Vector Index</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}