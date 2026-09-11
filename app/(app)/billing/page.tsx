import CreditCards from "@/components/billing/CreditCards";
import OnDemandPacks from "@/components/billing/OnDemandPacks";
import ConsumptionLedger from "@/components/billing/ConsumptionLedger";
import BillingAutoToggle from "@/components/billing/BillingAutoToggle";
import TopUpModal from "@/components/billing/TopUpModal";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1440px] mx-auto px-space-lg py-space-xl flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider">
              <span>Workspace</span>
              <span className="material-symbols-outlined text-[13px]">chevron_right</span>
              <span className="text-primary font-caption-bold">Billing & Inference Quotas</span>
            </div>
            <h1 className="font-display-2xl text-display-2xl text-on-surface tracking-tight">
              Credits & Subscription Allocation
            </h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Real-time consumption telemetry, token telemetry, and sovereign capacity
              replenishment.
            </p>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <TopUpModal />
            <button
              className="flex items-center gap-space-xs bg-primary-container hover:bg-primary text-on-primary font-body-medium text-body-medium px-space-md py-2.5 rounded-lg transition-all active:scale-[0.98] shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">upgrade</span>
              <span>Upgrade Plan</span>
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-secondary-container via-surface-container-low to-surface-container-low p-space-md shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md z-10 relative">
            <div className="flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
                <span className="material-symbols-outlined text-[24px]">speed</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    Auto-Topup Inactive
                  </span>
                  <span className="font-caption-bold text-caption-bold px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed">
                    Recommended
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Prevent model pipeline halts during high-concurrency batch renders by activating
                  buffer refills.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-sm self-start sm:self-center">
              <BillingAutoToggle />
            </div>
          </div>
        </div>
        <CreditCards />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm bg-surface-container-low -mx-space-lg -mt-space-lg px-space-lg pt-space-md rounded-t-xl">
                <div className="flex items-center gap-space-sm">
                  <span className="bg-primary text-on-primary font-caption-bold text-caption-bold px-2 py-1 rounded tracking-wide">
                    ACTIVE SUBSCRIPTION
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">Studio Pro Tier</h2>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display-xl text-display-xl text-on-surface">$149</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">/ month</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md py-space-sm">
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      Autonomous Multi-Agent
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Parallel generative pipeline runs
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      3 Active Creator Seats
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Elena Vance + 2 allocated editors
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      Priority Whisper-v3
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Lossless speaker acoustic isolation
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      Dedicated Vector Cluster
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Private pgvector isolation partition
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                    credit_card
                  </span>
                  <div className="flex flex-col">
                    <span className="font-body-medium text-body-medium text-on-surface">
                      Mastercard ending in 4092
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Next invoice: $149.00 on Nov 01, 2025 via Stripe
                    </span>
                  </div>
                </div>
                <span className="font-caption-bold text-caption-bold text-tertiary bg-surface-container-lowest px-2.5 py-1 rounded shadow-sm self-start sm:self-center">
                  Auto-renew On
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-md mt-space-sm">
              <button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-medium text-body-medium px-space-md py-2 rounded-lg transition-colors active:scale-[0.98]">
                Change Plan
              </button>
              <button className="bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-body-medium text-body-medium px-space-md py-2 rounded-lg transition-colors active:scale-[0.98] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                <span>Manage Stripe Invoices & Tax ID</span>
              </button>
              <button className="text-error hover:bg-error-container text-body-sm font-body-medium px-space-sm py-2 rounded-lg transition-colors ml-auto">
                Cancel Subscription
              </button>
            </div>
          </div>
          <OnDemandPacks />
        </div>
        <ConsumptionLedger />
        <div
          className="fixed bottom-6 right-6 z-50 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-xl shadow-xl flex items-center gap-space-sm"
          id="toast"
        >
          <span className="material-symbols-outlined text-tertiary-fixed text-[22px]">check_circle</span>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm" id="toast-title">
              Top-up Successful
            </span>
            <span className="font-body-sm text-body-sm opacity-80" id="toast-desc">
              Credits were immediately provisioned.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}