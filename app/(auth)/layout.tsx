import AuthHeader from "@/components/auth/AuthHeader";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-background">
      <AuthHeader />
      <main className="w-full flex-1 flex items-center justify-center px-4 py-8 bg-background">
        {children}
      </main>
      <footer className="w-full py-6 text-center font-body-sm text-body-sm text-on-surface-variant">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-caption-bold text-caption-bold text-outline">© 2025 VervAI Platform</span>
          <div className="flex items-center gap-6">
            <Link href="/pricing" className="hover:text-on-surface transition-colors">SOC2 Verified</Link>
            <Link href="/pricing" className="hover:text-on-surface transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}