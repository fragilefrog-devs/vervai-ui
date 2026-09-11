"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import TextInput from "@/components/ui/TextInput";
import PasswordField from "@/components/ui/PasswordField";
import Checkbox from "@/components/ui/Checkbox";
import Icon from "@/components/ui/Icon";

export default function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("next") ?? "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberDevice, setRememberDevice] = useState(true);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setStatus("error");
      setErrorMessage(error.message);
      return;
    }

    setStatus("success");
    router.push(redirectTo);
    router.refresh();
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="font-caption-bold text-caption-bold text-on-surface" htmlFor="work-email">
            Work Email
          </label>
          <span className="font-label-caps text-label-caps uppercase text-outline">Corporate Id</span>
        </div>
        <TextInput
          id="work-email"
          leadingIcon="mail"
          type="email"
          placeholder="elena@acmestudio.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 [&_input]:py-2.5 [&_input]:rounded-lg [&_input]:bg-surface-container-lowest"
        />
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="font-caption-bold text-caption-bold text-on-surface" htmlFor="auth-password">
            Master Password
          </label>
          <a className="font-caption-bold text-caption-bold text-primary hover:underline" href="/sign-in">
            Forgot password?
          </a>
        </div>
        <PasswordField
          id="auth-password"
          leadingIcon="lock"
          placeholder="••••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-11 [&_input]:py-2.5 [&_input]:rounded-lg [&_input]:bg-surface-container-lowest"
        />
      </div>

      <div className="pt-1">
        <Checkbox
          id="remember-device"
          checked={rememberDevice}
          onChange={() => setRememberDevice((v) => !v)}
          label="Remember this device for 30 days"
          description="Enforces hardware-backed encryption token on local secure enclave"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-error-container text-on-error-container font-body-sm text-body-sm">
          <Icon name="error" size={18} />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="pt-2">
        <button
          className="w-full py-3.5 px-6 rounded-lg bg-primary hover:bg-on-primary-fixed text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98] group disabled:opacity-60 disabled:pointer-events-none"
          type="submit"
          disabled={status === "submitting" || status === "success"}
        >
          {status === "submitting" ? (
            <svg className="animate-spin h-5 w-5 text-on-primary" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : status === "success" ? (
            <>Signed in!</>
          ) : (
            <>
              <span>Sign In to Workspace</span>
              <Icon name="arrow_forward" size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>

      <div className="pt-8 mt-6 border-t-0 flex flex-col sm:flex-row items-center justify-between gap-3 text-on-surface-variant">
        <p className="font-body-sm text-body-sm">
          Don&apos;t have an account?{" "}
          <Link className="font-caption-bold text-caption-bold text-primary hover:underline ml-1" href="/sign-up">
            Create an account
          </Link>
        </p>
        <div className="flex items-center gap-4 font-caption-bold text-caption-bold text-outline">
          <Link href="/pricing" className="hover:text-on-surface transition-colors">Legal Terms</Link>
          <span>•</span>
          <Link href="/enterprise" className="hover:text-on-surface transition-colors">Privacy Codex</Link>
        </div>
      </div>
    </form>
  );
}