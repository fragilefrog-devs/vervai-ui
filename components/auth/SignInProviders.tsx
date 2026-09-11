"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type SignInProvider = {
  id: "google" | "buffer";
  containerClass: string;
  label: string;
  sublabel?: string;
  trailing: "federated" | "sync";
};

const PROVIDERS: SignInProvider[] = [
  {
    id: "google",
    containerClass: "bg-surface-container-lowest hover:bg-surface-container-low shadow-sm",
    label: "Continue with Google",
    trailing: "federated",
  },
  {
    id: "buffer",
    containerClass: "bg-surface-container-low hover:bg-surface-container",
    label: "Continue with Buffer",
    sublabel: "Direct Relay Sync Enabled",
    trailing: "sync",
  },
];

export default function SignInProviders() {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleOAuth = async (id: "google" | "buffer") => {
    if (loadingId) return;
    setLoadingId(id);
    const supabase = createClient();
    // Buffer is not a first-party Supabase provider; route it through Google
    // federation until a Buffer OAuth provider is wired.
    const provider = id === "google" ? "google" : "google";
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_APP_URL ?? ""}/auth/callback?next=/dashboard`,
      },
    });
    if (error) {
      setLoadingId(null);
      router.refresh();
    }
  };

  return (
    <div className="mb-8 flex flex-col sm:flex-row gap-3">
      {PROVIDERS.map((provider) => (
        <button
          key={provider.id}
          className={`flex-1 w-full flex items-center justify-center gap-3.5 px-4 py-3 ${provider.containerClass} transition-all duration-150 rounded-lg active:scale-[0.99] text-left group disabled:opacity-60 disabled:pointer-events-none`}
          type="button"
          disabled={loadingId !== null}
          onClick={() => handleOAuth(provider.id)}
        >
          {loadingId === provider.id ? (
            <svg className="animate-spin h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : provider.id === "google" ? (
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" fill="#4285F4"></path>
              <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" fill="#34A853"></path>
              <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.94 0 12s.45 3.84 1.25 5.42l4.03-3.15z" fill="#FBBC05"></path>
              <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335"></path>
            </svg>
          ) : (
            <div className="w-5 h-5 flex-shrink-0 flex flex-col justify-between py-0.5">
              <span className="w-full h-1 bg-on-surface rounded-sm"></span>
              <span className="w-full h-1 bg-on-surface rounded-sm"></span>
              <span className="w-full h-1 bg-on-surface rounded-sm"></span>
            </div>
          )}
          {provider.sublabel ? (
            <div className="flex flex-col flex-1">
              <span className="font-body-medium text-body-medium text-on-surface font-semibold leading-tight">{provider.label}</span>
              <span className="font-label-caps text-[10px] text-tertiary">{provider.sublabel}</span>
            </div>
          ) : (
            <span className="font-body-medium text-body-medium text-on-surface font-semibold flex-1">{provider.label}</span>
          )}
          {provider.trailing === "federated" ? (
            <span className="font-label-caps text-label-caps uppercase text-outline group-hover:text-on-surface transition-colors">Federated</span>
          ) : (
            <span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary transition-colors">sync_alt</span>
          )}
        </button>
      ))}
    </div>
  );
}