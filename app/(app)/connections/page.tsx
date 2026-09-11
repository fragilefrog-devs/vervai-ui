import ConnectorSection from "@/components/connections/ConnectorSection";
import CheckAllStatuses from "@/components/connections/CheckAllStatuses";
import {
  MAIN_SOURCE_CONNECTORS,
  MAIN_PUBLISHING_RELAYS,
} from "@/components/connections/mainConnectorData";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-7xl mx-auto space-y-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pt-2">
          <div className="flex flex-col gap-1 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-label-caps uppercase text-outline tracking-wider">
                Workspace
              </span>
              <span className="text-outline-variant text-[10px]">/</span>
              <span className="font-label-caps text-label-caps uppercase text-primary font-semibold tracking-wider">
                Integration &amp; Relay Ecosystem
              </span>
            </div>
            <h1 className="font-display-2xl text-display-2xl text-on-surface tracking-tight">
              System Connections &amp; Infrastructure
            </h1>
            <p className="font-body-medium text-body-medium text-on-surface-variant leading-relaxed">
              Manage OAuth authentications, webhook pipelines, source intake connectors, and
              scheduled distribution endpoints. Secure, isolated API token management.
            </p>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <CheckAllStatuses />
            <button
              className="flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-body-medium text-body-medium hover:bg-primary transition-all active:scale-[0.98] shadow-md"
              id="addIntegrationBtn"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>+ Add Integration</span>
            </button>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md items-center">
            <div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low">
              <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[22px]">hub</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-xl text-display-xl text-on-surface leading-tight">7</span>
                <span className="font-caption-bold text-caption-bold text-on-surface-variant uppercase">
                  Connected Services
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low">
              <div className="w-10 h-10 rounded-lg bg-error-container flex items-center justify-center text-error">
                <span className="material-symbols-outlined text-[22px]">warning</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display-xl text-display-xl text-on-surface leading-tight">1</span>
                  <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                </div>
                <span className="font-caption-bold text-caption-bold text-on-surface-variant uppercase">
                  Degraded Channel
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[22px]">check_circle</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-xl text-display-xl text-on-surface leading-tight">0</span>
                <span className="font-caption-bold text-caption-bold text-on-surface-variant uppercase">
                  Revoked Tokens
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low">
              <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">speed</span>
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-display-xl text-display-xl text-on-surface leading-tight">
                    99.94%
                  </span>
                  <span className="font-caption-bold text-caption-bold text-tertiary">30D Peak</span>
                </div>
                <span className="font-caption-bold text-caption-bold text-on-surface-variant uppercase truncate">
                  Relay Engine Uptime
                </span>
              </div>
            </div>
          </div>
          <div className="mt-space-md pt-space-sm flex flex-col md:flex-row md:items-center justify-between gap-2 text-on-surface-variant font-caption-bold text-caption-bold">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-tertiary-container"></span> TLS 1.3
                In-Flight Encryption
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span> Zero-Knowledge
                Ingress Vault
              </span>
            </div>
            <div className="flex items-center gap-1 font-body-sm text-body-sm">
              <span>Global Heartbeat ping:</span>
              <span className="text-on-surface font-semibold">14ms ago</span>
            </div>
          </div>
        </div>
        <ConnectorSection
          colorBar="bg-primary"
          title="Source Intake & Storage Connectors"
          badge="4 Relays"
          meta="Raw Ingestion Layer"
          items={MAIN_SOURCE_CONNECTORS}
          variant="compact"
        />
        <ConnectorSection
          colorBar="bg-primary-container"
          title="Publishing & Distribution Relays"
          badge="Active Outbound"
          meta="Multi-Platform Dispatch"
          items={MAIN_PUBLISHING_RELAYS}
          variant="compact"
        />
        <section className="space-y-space-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <div className="w-2 h-5 bg-tertiary-container rounded-full"></div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Enterprise Vector &amp; Agent Compute Relays
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-secondary-container text-primary font-caption-bold text-caption-bold">
                Core Infrastructure
              </span>
            </div>
            <span className="font-caption-bold text-caption-bold text-outline uppercase tracking-wider">
              Storage &amp; Inference
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            <div className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-36 h-36 bg-tertiary-fixed/30 rounded-full blur-2xl pointer-events-none"></div>
              <div className="space-y-space-md relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-[28px]">database</span>
                    </div>
                    <div>
                      <h3 className="font-headline-lg text-headline-lg text-on-surface">
                        Supabase pgvector &amp; Storage
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        System Internal • Dedicated isolated tenant
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-tertiary font-caption-bold text-caption-bold">
                    <span className="w-2 h-2 rounded-full bg-tertiary"></span> Encrypted AES-256
                  </span>
                </div>
                <p className="font-body-base text-body-base text-on-surface-variant leading-relaxed">
                  Provides dedicated semantic indexing for Acme Studio brand guidelines, transcripts,
                  tone of voice embeddings, and asset version histories.
                </p>
                <div className="grid grid-cols-3 gap-space-sm pt-2">
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
                    <span className="font-caption-bold text-caption-bold text-outline uppercase">
                      Index Size
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      428,102 vecs
                    </span>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
                    <span className="font-caption-bold text-caption-bold text-outline uppercase">
                      Avg Query
                    </span>
                    <span className="font-headline-sm text-headline-sm text-tertiary">18.4 ms</span>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
                    <span className="font-caption-bold text-caption-bold text-outline uppercase">
                      Partition
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">us-east-1</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-space-lg mt-space-md">
                <div className="flex items-center gap-2 text-on-surface-variant font-caption-bold text-caption-bold">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">
                    verified_user
                  </span>
                  <span>Hardware-level SOC2 Compliant</span>
                </div>
                <button
                  className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-medium text-body-medium transition-colors flex items-center gap-2"
                  type="button"
                >
                  <span>View DB Metrics</span>
                  <span className="material-symbols-outlined text-[16px]">query_stats</span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-36 h-36 bg-primary-fixed/30 rounded-full blur-2xl pointer-events-none"></div>
              <div className="space-y-space-md relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[28px]">cognition</span>
                    </div>
                    <div>
                      <h3 className="font-headline-lg text-headline-lg text-on-surface">
                        OpenAI &amp; Anthropic API Keys
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Connected • Bring-Your-Own-Key tier enabled
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-primary font-caption-bold text-caption-bold">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Active
                    Routing
                  </span>
                </div>
                <p className="font-body-base text-body-base text-on-surface-variant leading-relaxed">
                  Model orchestrator runs automated load balancing across Claude 3.5 Sonnet and
                  GPT-4o with automatic latency failovers and budget alerts.
                </p>
                <div className="grid grid-cols-3 gap-space-sm pt-2">
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
                    <span className="font-caption-bold text-caption-bold text-outline uppercase">
                      Primary Agent
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">Claude 3.5</span>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
                    <span className="font-caption-bold text-caption-bold text-outline uppercase">
                      Fallback
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">GPT-4o</span>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
                    <span className="font-caption-bold text-caption-bold text-outline uppercase">
                      Monthly Cap
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary">$450.00 Max</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-space-lg mt-space-md">
                <div className="flex items-center gap-2 text-on-surface-variant font-caption-bold text-caption-bold">
                  <span className="material-symbols-outlined text-[18px] text-primary">key</span>
                  <span>Keys vault-hashed (SHA-256)</span>
                </div>
                <button
                  className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-medium text-body-medium transition-colors flex items-center gap-2"
                  type="button"
                >
                  <span>Rotate Secret Keys</span>
                  <span className="material-symbols-outlined text-[16px]">sync_lock</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-outline shrink-0">
              <span className="material-symbols-outlined text-[20px]">help_outline</span>
            </div>
            <div className="space-y-0.5">
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Looking for custom ERP or bespoke CMS endpoints?
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Develop tailored webhook listeners via our VervAI open-source TypeScript SDK or
                access enterprise SSO configurations.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <button
              className="px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-body-medium text-body-medium transition-colors"
              type="button"
            >
              View Developer SDK
            </button>
            <button
              className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary font-body-medium text-body-medium hover:bg-primary transition-colors"
              type="button"
            >
              Request Connector
            </button>
          </div>
        </div>
      </div>
      <div
        className="fixed bottom-6 right-6 bg-inverse-surface text-inverse-on-surface px-space-md py-3 rounded-xl shadow-xl flex items-center gap-3 transform translate-y-24 opacity-0 transition-all duration-300 z-50 pointer-events-none"
        id="statusToast"
      >
        <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">check_circle</span>
        <span className="font-body-medium text-body-medium" id="statusToastText">
          All 8 active API channels re-verified successfully.
        </span>
      </div>
    </div>
  );
}