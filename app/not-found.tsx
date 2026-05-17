import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-sage px-6 text-center text-cream">
      <p className="font-display text-xs tracking-[0.4em] uppercase text-cream/50">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-light tracking-[0.15em] uppercase sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-cream/70">
        This shell drifted somewhere it shouldn&apos;t.
      </p>
      <Link
        href="/"
        className="mt-8 border border-cream/40 px-6 py-3 font-display text-sm tracking-[0.25em] uppercase transition hover:border-cream hover:bg-cream hover:text-sage-deep"
      >
        Return Home
      </Link>
    </main>
  );
}
