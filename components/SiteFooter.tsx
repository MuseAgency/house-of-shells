import Link from "next/link";
import TwinMark from "./TwinMark";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 mx-auto max-w-7xl px-6 py-10 sm:px-12">
      <div className="flex flex-col items-center gap-6 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
        <p className="font-display text-[10px] tracking-[0.35em] uppercase text-ink-mute sm:text-xs">
          © 2026 House of Shells
        </p>

        <nav className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/about"
            className="font-display text-[10px] tracking-[0.35em] uppercase text-ink-mute transition-colors hover:text-ink sm:text-xs"
          >
            About
          </Link>
          <span className="text-champagne/50" aria-hidden="true">·</span>
          <Link
            href="/contact"
            className="font-display text-[10px] tracking-[0.35em] uppercase text-ink-mute transition-colors hover:text-ink sm:text-xs"
          >
            Contact
          </Link>
          <span className="text-champagne/50" aria-hidden="true">·</span>
          <div className="text-champagne/70" aria-hidden="true">
            <TwinMark className="h-3 w-auto" />
          </div>
        </nav>

        <p className="font-display text-[10px] tracking-[0.35em] uppercase text-ink-mute sm:text-xs">
          Handcrafted with care
        </p>
      </div>
    </footer>
  );
}
