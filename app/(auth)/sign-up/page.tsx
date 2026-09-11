import FeatureCards from "@/components/auth/FeatureCards";
import SignUpProviders from "@/components/auth/SignUpProviders";
import SignUpForm from "@/components/auth/SignUpForm";

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full max-w-6xl mx-auto my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-xl bg-surface-container-high relative overflow-hidden shadow-sm">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-surface-variant/40 blur-2xl pointer-events-none"></div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm mb-8">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                  <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider">Cluster Node US-East • Live</span>
                </div>
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-2">Autonomous Studio Engine</span>
                <h1 className="font-display-2xl text-display-2xl text-on-surface mb-4 tracking-tight leading-tight">
                  Join 1,200+ sovereign creators &amp; media desks.
                </h1>
                <p className="font-body-base text-body-base text-on-surface-variant mb-8">
                  Deploy self-orchestrating content pipelines, autonomous research synthesis, and zero-hallucination multi-channel distribution.
                </p>
                <FeatureCards />
              </div>
              <div className="mt-8 pt-6 border-t-0 bg-surface-container-lowest p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center font-headline-sm text-on-secondary-fixed">
                    MR
                  </div>
                  <div>
                    <p className="font-caption-bold text-caption-bold text-on-surface">Marcus Vance</p>
                    <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Design Principal, Hyperion Studio</p>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                  “VervAI removed the cognitive drag of multi-platform adaptation. The zero-retention guarantee is paramount for our studio's client contracts.”
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      alt="VervAI emblem"
                      className="w-10 h-10 rounded-lg object-contain bg-on-surface p-1 shadow-sm"
                      src="https://lh3.googleusercontent.com/aida/AEtjO1XjkZ3gDiei-V7HSowsT07XiLxSXhiP1lN_aVsj7Gt3CJj0nK7bimpTH9c5p5jTr9PYpngwSajnUaZhL_OkEGQgGl7hv9UvAjZeM82nU-m3Uz7r9BK9dcodJGpzLBXd7IhvH0xPoWjGbKxeivmKATbxdXLwDNgSFWgnI6OD-xCUaa3ZULziVYCvmV-raEoBdEp6wVjh_E7I4nBXOtzzs3XTz3cgEwuFtIhb3mVZ1k4twOwNREYtbuZa5ug"
                    />
                    <div>
                      <span className="font-label-caps text-label-caps tracking-widest text-primary uppercase">Workspace Enrollment</span>
                      <h2 className="font-headline-lg text-headline-lg text-on-surface">Create your VervAI account</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-caption-bold text-caption-bold">
                    14-Day Free Trial
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Start your 14-day trial. Zero friction, no credit card required.
                </p>
                <SignUpProviders />
                <div className="relative flex items-center justify-center my-6">
                  <div className="w-full h-px bg-surface-variant"></div>
                  <span className="absolute px-3 bg-surface-container-lowest font-caption-bold text-caption-bold text-outline uppercase tracking-wider">
                    or register with work email
                  </span>
                </div>
                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}