import Link from "next/link";
import TwinMark from "./TwinMark";

export default function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-8 sm:px-12 sm:py-10">
      <Link
        href="/"
        className="font-display text-[10px] tracking-[0.4em] uppercase text-ink-mute transition-colors hover:text-ink sm:text-xs"
      >
        Coastal art atelier
      </Link>

      <Link href="/" className="hidden text-champagne sm:block" aria-label="Home">
        <TwinMark className="h-4 w-auto" />
      </Link>

      <nav className="flex items-center gap-4 sm:gap-6">
        <Link
          href="/about"
          className="font-display text-[10px] tracking-[0.4em] uppercase text-ink-mute transition-colors hover:text-ink sm:text-xs"
        >
          About
        </Link>
        <span className="text-champagne/60" aria-hidden="true">·</span>
        <Link
          href="/contact"
          className="font-display text-[10px] tracking-[0.4em] uppercase text-ink-mute transition-colors hover:text-ink sm:text-xs"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
