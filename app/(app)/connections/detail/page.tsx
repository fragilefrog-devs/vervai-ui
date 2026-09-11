import ConnectorSection from "@/components/connections/ConnectorSection";
import { SOURCE_CONNECTORS, PUBLISHING_RELAYS } from "@/components/connections/connectorData";

export default function Page() {
  return (
    <div className="flex flex-col w-full space-y-space-xl">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-secondary font-label-caps text-label-caps uppercase tracking-wider">
            <span>Workspace</span>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-bold">Integration &amp; Relay Ecosystem</span>
          </div>
          <h1 className="font-headline-lg text-display-xl md:text-display-2xl text-on-surface tracking-tight">
            System Connections &amp; Infrastructure
          </h1>
          <p className="font-body-medium text-body-medium text-secondary max-w-3xl">
            Manage OAuth authentications, webhook pipelines, source intake connectors, and scheduled
            distribution endpoints. Secure, isolated API token management.
          </p>
        </div>
        <div className="flex items-center gap-space-sm shrink-0">
          <button
            className="inline-flex items-center gap-1.5 h-10 px-4 rounded-lg bg-surface-container-lowest text-on-surface font-caption-bold text-caption-bold shadow-sm hover:bg-surface-container-high transition-colors active:scale-[0.98]"
            id="btn-check-statuses"
            type="button"
          >
            <span
              className="material-symbols-outlined text-[18px] text-secondary transition-transform duration-700"
              id="refresh-icon"
            >
              sync
            </span>
            <span>Check All Statuses</span>
          </button>
          <button
            className="inline-flex items-center gap-1.5 h-10 px-4 rounded-lg bg-primary text-on-primary font-caption-bold text-caption-bold shadow-sm hover:bg-primary-container transition-colors active:scale-[0.98]"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">add_link</span>
            <span>Add Integration</span>
          </button>
        </div>
      </section>

      <section className="flex flex-col space-y-space-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
                Connected Services
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
            </div>
            <div className="mt-space-md flex items-baseline justify-between">
              <div className="font-headline-lg text-display-xl text-on-surface">
                7 <span className="text-body-sm font-body-sm text-secondary font-normal">Active Nodes</span>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-caption-bold text-[11px]">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                Operational
              </span>
            </div>
          </div>
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
                Degraded Channels
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-error animate-ping"></span>
            </div>
            <div className="mt-space-md flex items-baseline justify-between">
              <div className="font-headline-lg text-display-xl text-on-surface">
                1 <span className="text-body-sm font-body-sm text-secondary font-normal">Requires Action</span>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-caption-bold text-[11px]">
                <span className="material-symbols-outlined text-[14px]">warning</span>
                X / Twitter Auth
              </span>
            </div>
          </div>
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
                Revoked Tokens
              </span>
              <span className="material-symbols-outlined text-[16px] text-tertiary">verified_user</span>
            </div>
            <div className="mt-space-md flex items-baseline justify-between">
              <div className="font-headline-lg text-display-xl text-on-surface">
                0 <span className="text-body-sm font-body-sm text-secondary font-normal">Vault Violations</span>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-caption-bold text-[11px]">
                Secure Enclave
              </span>
            </div>
          </div>
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
                Relay Peak Uptime (30d)
              </span>
              <span className="material-symbols-outlined text-[16px] text-primary">bolt</span>
            </div>
            <div className="mt-space-md flex items-baseline justify-between">
              <div className="font-headline-lg text-display-xl text-primary">99.94%</div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-caption-bold text-[11px]">
                SLA Met
              </span>
            </div>
          </div>
        </div>
        <div className="px-space-md py-2.5 rounded-lg bg-surface-container-low flex flex-wrap items-center justify-between text-secondary font-label-caps text-[11px] gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            <span>TLS 1.3 In-Flight Encryption Active</span>
            <span className="text-outline-variant">•</span>
            <span>Zero-Knowledge Ingress Vault</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px]">sensors</span>
            <span id="heartbeat-text">Global Heartbeat ping: 14ms ago (us-east edge)</span>
          </div>
        </div>
      </section>

      <ConnectorSection
        colorBar="bg-primary"
        title="Source Intake & Storage Connectors"
        badge="Raw Ingestion Layer"
        meta="3 Active / 1 Available"
        items={SOURCE_CONNECTORS}
      />

      <ConnectorSection
        colorBar="bg-tertiary"
        title="Publishing & Distribution Relays"
        badge="Multi-Platform Dispatch"
        meta="3 Stable / 1 Degraded"
        items={PUBLISHING_RELAYS}
      />

      <section className="space-y-space-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <span className="w-1.5 h-4 rounded-full bg-on-secondary-fixed-variant"></span>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Enterprise Vector & Agent Compute Relays
            </h2>
            <span className="font-label-caps text-[10px] uppercase bg-surface-container-high text-secondary px-2 py-0.5 rounded font-semibold">
              Storage & Inference Layer
            </span>
          </div>
          <span className="font-caption-bold text-caption-bold text-secondary">
            Zero Egress Policy
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-md">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-[28px]">database</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-lg text-on-surface">
                      Supabase pgvector & Storage
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Dedicated isolated tenant • AES-256 at-rest
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-caption-bold text-[11px]">
                  System Internal
                </span>
              </div>
              <p className="font-body-medium text-body-medium text-secondary">
                Provides dedicated semantic indexing for Acme Studio brand guidelines, transcripts,
                tone of voice embeddings, and asset version histories.
              </p>
              <div className="grid grid-cols-3 gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                <div className="space-y-0.5">
                  <p className="font-label-caps text-[10px] uppercase text-secondary">Index Size</p>
                  <p className="font-headline-sm text-headline-sm text-on-surface">428,102</p>
                  <p className="font-caption-bold text-[10px] text-tertiary">vecs active</p>
                </div>
                <div className="space-y-0.5">
                  <p className="font-label-caps text-[10px] uppercase text-secondary">Avg Query</p>
                  <p className="font-headline-sm text-headline-sm text-on-surface">18.4 ms</p>
                  <p className="font-caption-bold text-[10px] text-tertiary">p95 latency</p>
                </div>
                <div className="space-y-0.5">
                  <p className="font-label-caps text-[10px] uppercase text-secondary">Partition</p>
                  <p className="font-headline-sm text-headline-sm text-on-surface">us-east-1</p>
                  <p className="font-caption-bold text-[10px] text-secondary">AWS DirectConnect</p>
                </div>
              </div>
            </div>
            <div className="pt-space-sm flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-secondary font-caption-bold text-caption-bold">
                <span className="material-symbols-outlined text-[16px] text-tertiary">verified</span>
                <span>Hardware SOC2 Type II Certified</span>
              </div>
              <button
                className="h-9 px-4 rounded bg-surface-container-low hover:bg-surface-container-high text-on-surface font-caption-bold text-caption-bold transition-colors"
                type="button"
              >
                View DB Metrics
              </button>
            </div>
          </div>
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-md">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]">memory</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-lg text-on-surface">
                      OpenAI & Anthropic API Keys
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Active routing • BYOK tier enabled
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-caption-bold text-[11px]">
                  Multi-LLM Fabric
                </span>
              </div>
              <p className="font-body-medium text-body-medium text-secondary">
                Model orchestrator runs automated load balancing across Claude 3.5 Sonnet and GPT-4o
                with automated latency failover triggers and threshold alerts.
              </p>
              <div className="grid grid-cols-3 gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                <div className="space-y-0.5">
                  <p className="font-label-caps text-[10px] uppercase text-secondary">Primary Agent</p>
                  <p className="font-headline-sm text-headline-sm text-on-surface truncate">Claude 3.5</p>
                  <p className="font-caption-bold text-[10px] text-primary">High Reasoning</p>
                </div>
                <div className="space-y-0.5">
                  <p className="font-label-caps text-[10px] uppercase text-secondary">Fallback</p>
                  <p className="font-headline-sm text-headline-sm text-on-surface truncate">GPT-4o</p>
                  <p className="font-caption-bold text-[10px] text-secondary">Automated Sync</p>
                </div>
                <div className="space-y-0.5">
                  <p className="font-label-caps text-[10px] uppercase text-secondary">Monthly Cap</p>
                  <p className="font-headline-sm text-headline-sm text-on-surface truncate">$450.00</p>
                  <p className="font-caption-bold text-[10px] text-tertiary">38% Consumed</p>
                </div>
              </div>
            </div>
            <div className="pt-space-sm flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-secondary font-caption-bold text-caption-bold">
                <span className="material-symbols-outlined text-[16px] text-primary">key</span>
                <span>Keys vault-hashed (SHA-256)</span>
              </div>
              <button
                className="h-9 px-4 rounded bg-surface-container-low hover:bg-surface-container-high text-on-surface font-caption-bold text-caption-bold transition-colors"
                type="button"
              >
                Rotate Secret Keys
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex items-start gap-space-md max-w-2xl">
          <div className="w-10 h-10 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[22px]">terminal</span>
          </div>
          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface">
              Custom ERP or Bespoke CMS Endpoints?
            </h4>
            <p className="font-body-sm text-body-sm text-secondary mt-1">
              Develop tailored webhook listeners via our VervAI open-source TypeScript SDK or
              access enterprise SSO and custom data warehouse connectors.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-space-sm shrink-0 w-full md:w-auto justify-end">
          <a
            className="inline-flex items-center gap-1.5 h-9 px-4 rounded bg-surface-container-low text-on-surface font-caption-bold text-caption-bold hover:bg-surface-container-high transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-[16px]">code</span>
            <span>View Developer SDK</span>
          </a>
          <a
            className="inline-flex items-center gap-1.5 h-9 px-4 rounded bg-primary text-on-primary font-caption-bold text-caption-bold hover:bg-primary-container transition-colors shadow-sm"
            href="#"
          >
            <span className="material-symbols-outlined text-[16px]">contact_support</span>
            <span>Request Connector</span>
          </a>
        </div>
      </section>
    </div>
  );
}