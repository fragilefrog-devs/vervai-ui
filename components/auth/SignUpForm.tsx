"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import TextInput from "@/components/ui/TextInput";
import PasswordField from "@/components/ui/PasswordField";
import Checkbox from "@/components/ui/Checkbox";
import Icon from "@/components/ui/Icon";
import ArchetypeSelector from "./ArchetypeSelector";

function entropyBits(pw: string): number {
  if (!pw) return 0;
  let pool = 0;
  if (/[a-z]/.test(pw)) pool += 26;
  if (/[A-Z]/.test(pw)) pool += 26;
  if (/[0-9]/.test(pw)) pool += 10;
  if (/[^a-zA-Z0-9]/.test(pw)) pool += 32;
  return Math.round(pw.length * Math.log2(Math.max(pool, 1)));
}

export default function SignUpForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const bits = entropyBits(password);

  const strengthColor =
    bits === 0 ? "bg-surface-container-highest" : bits < 45 ? "bg-error" : "bg-tertiary";
  const strengthLabel =
    bits === 0 ? "Type securely" : bits < 45 ? "Entropy: Low" : bits < 70 ? "Entropy: Fair" : "Entropy: Strong";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });

    if (error) {
      setStatus("error");
      setErrorMessage(error.message);
      return;
    }

    setStatus("success");
    setTimeout(() => router.push("/sign-in?registered=true"), 1200);
  };

  return (
    <form className="space-y-4" id="verv-register-form" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-caption-bold text-caption-bold text-on-surface mb-1.5" htmlFor="full-name">
            Full Name
          </label>
          <TextInput
            id="full-name"
            placeholder="Elena Vance"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="h-11 [&_input]:py-2.5 [&_input]:rounded-lg [&_input]:bg-surface-container-low [&_input]:focus:bg-surface-container"
          />
        </div>
        <div>
          <label className="block font-caption-bold text-caption-bold text-on-surface mb-1.5" htmlFor="signup-email">
            Work Email
          </label>
          <TextInput
            id="signup-email"
            type="email"
            placeholder="elena@acmestudio.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 [&_input]:py-2.5 [&_input]:rounded-lg [&_input]:bg-surface-container-low [&_input]:focus:bg-surface-container"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="block font-caption-bold text-caption-bold text-on-surface" htmlFor="signup-password">
            Security Passphrase
          </label>
          <span className={`font-label-caps text-label-caps flex items-center gap-1 font-semibold ${bits >= 70 ? "text-tertiary" : "text-outline"}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${bits >= 70 ? "bg-tertiary" : "bg-outline"}`} />
            {bits > 0 ? `${bits} bits (${strengthLabel.replace("Entropy: ", "")})` : strengthLabel}
          </span>
        </div>
        <PasswordField
          id="signup-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-11 [&_input]:py-2.5 [&_input]:rounded-lg [&_input]:bg-surface-container-low [&_input]:focus:bg-surface-container [&_input]:tracking-wider"
        />
        <div className="grid grid-cols-4 gap-1.5 mt-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-colors ${
                bits >= (i + 1) * 25 ? strengthColor : "bg-surface-container-highest"
              }`}
            />
          ))}
        </div>
        <p className="font-caption-bold text-caption-bold text-outline mt-1.5">
          Cryptographic recommendation: 16+ chars including symbols &amp; digits.
        </p>
      </div>

      <div>
        <label className="block font-caption-bold text-caption-bold text-on-surface mb-2">
          Operational Archetype
        </label>
        <ArchetypeSelector />
      </div>

      <div className="pt-2">
        <Checkbox
          name="terms"
          defaultChecked
          label={
            <>
              I agree to the{" "}
              <Link className="text-primary hover:underline font-medium" href="/pricing">
                Terms of Service
              </Link>{" "}
              and the{" "}
              <span className="text-on-surface font-semibold">Data Sovereignty Agreement</span>{" "}
              (Strict Zero-Retention model; prompts are never used for base training).
            </>
          }
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
          className="w-full py-3.5 px-6 rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm hover:bg-primary-container transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none"
          id="submit-register"
          type="submit"
          disabled={status === "submitting" || status === "success"}
        >
          {status === "submitting" ? (
            <svg className="animate-spin h-5 w-5 text-on-primary" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : status === "success" ? (
            <>Account ready! Check your email for verification.</>
          ) : (
            <>
              <span>Create Sovereign Account</span>
              <Icon name="arrow_forward" size={18} />
            </>
          )}
        </button>
      </div>

      <div className="pt-5 border-t border-outline-variant/50 flex flex-col sm:flex-row items-center justify-between gap-3 font-body-sm text-body-sm text-outline">
        <div>
          <span>Already have an account?</span>
          <Link className="text-primary font-headline-sm text-headline-sm hover:underline ml-1" href="/sign-in">
            Sign In
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 font-label-caps text-label-caps uppercase text-secondary">
            <Icon name="lock" size={14} />
            AES-256 In Transit
          </span>
          <span>•</span>
          <span className="font-label-caps text-label-caps uppercase text-secondary">GDPR Sovereign</span>
        </div>
      </div>
    </form>
  );
}