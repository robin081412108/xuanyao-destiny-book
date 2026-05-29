import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { StarfieldBackground } from "./StarfieldBackground";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <StarfieldBackground />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#c89b3c]/20 pb-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center border border-[#c89b3c]/50 bg-black/40 text-sm font-semibold text-[#f0d492]">
              XY
            </span>
            <span className="text-sm uppercase tracking-[0.28em] text-[#f0d492]">
              XuanYao
            </span>
          </Link>
          <LanguageSwitcher />
        </header>
        <div className="flex-1">{children}</div>
        <footer className="mt-16 border-t border-[#c89b3c]/20 py-6 text-sm text-[#b9a77d]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>One-time unlock. No subscription.</p>
            <nav className="flex flex-wrap gap-4">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/refund">Refund</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  );
}
