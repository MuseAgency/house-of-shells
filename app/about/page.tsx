import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TwinMark from "@/components/TwinMark";

export const metadata: Metadata = {
  title: "About",
  description:
    "Two twin sisters from the Netherlands, hand-painting collectible coastal art inspired by the worlds we love.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-pearl text-ink">
      <div className="grain" />

      <SiteHeader />

      {/* Eyebrow + title */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-12 sm:px-12 sm:pt-16">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-champagne" />
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-champagne sm:text-xs">
            Our story
          </span>
        </div>
        <h1 className="font-display text-4xl leading-[1.05] font-light tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Two sisters.
          <br />
          One{" "}
          <span className="font-script text-5xl text-sage-deep italic sm:text-6xl lg:text-7xl">
            ocean
          </span>{" "}
          of inspiration.
        </h1>
      </section>

      {/* Photo + story */}
      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 sm:px-12 lg:grid-cols-12 lg:gap-16">
        {/* Photo */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-sage/10">
            <Image
              src="/sisters.jpg"
              alt="Esmee and Demi — the twin sisters behind House of Shells"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 font-display text-[10px] tracking-[0.35em] uppercase text-ink-mute sm:text-xs">
            Esmee + Demi · The Netherlands
          </p>
        </div>

        {/* Story copy */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <div className="space-y-6 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            <p>
              House of Shells started as a quiet experiment between two twin
              sisters — a way to slow down, work with our hands, and share the
              kind of art that holds a feeling.
            </p>
            <p>
              We grew up dreaming in pairs. Today we paint in pairs. Every
              canvas we make is composed together: shells gathered, colors
              chosen, brushes traded back and forth. What leaves our studio
              isn&apos;t one piece — it&apos;s a{" "}
              <span className="italic">Sister Piece</span>, made twice, for
              everyone who loves the idea of a perfect match.
            </p>
            <p>
              We pull our worlds from the stories that shaped us — fairytales,
              films, music, summers we can&apos;t forget — and translate them
              into soft pinks, sea blues, fairy gold and quiet greens.
            </p>
            <p className="font-display text-lg italic text-ink sm:text-xl">
              Inspired by the worlds we love.
            </p>
          </div>
        </div>
      </section>

      {/* Twin signature recap */}
      <section className="relative z-10 mx-auto max-w-3xl border-t border-champagne/30 px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="mb-6 flex justify-center text-champagne">
          <TwinMark className="h-6 w-auto" />
        </div>
        <p className="font-display text-[10px] tracking-[0.45em] uppercase text-champagne sm:text-xs">
          The Twin Signature
        </p>
        <h2 className="mx-auto mt-6 max-w-xl font-display text-2xl leading-[1.25] font-light text-ink italic sm:text-3xl">
          Every piece carries our quiet mark:
          <br />
          two golden stars, in opposite corners.
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-[15px] leading-relaxed text-ink-soft sm:text-base">
          One star for each sister. A small secret only collectors know — and
          our promise that the piece was made by both of us, together.
        </p>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-7xl border-t border-champagne/30 px-6 py-16 sm:px-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-[10px] tracking-[0.4em] uppercase text-champagne sm:text-xs">
              ⋄ &nbsp;Want a piece of your own world?
            </p>
            <h2 className="mt-4 font-display text-2xl leading-tight font-light text-ink italic sm:text-3xl">
              Tell us your story.
              <br />
              We&apos;ll paint it back.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 font-display text-base text-ink italic transition-colors hover:text-sage-deep sm:text-lg"
          >
            <span className="border-b border-ink/40 pb-1 transition-colors group-hover:border-sage-deep">
              Start a commission
            </span>
            <span className="text-sage transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
