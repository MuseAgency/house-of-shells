"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import TwinMark from "./TwinMark";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-pearl text-ink">
      <div className="grain" />

      <SiteHeader />

      {/* Hero: asymmetric editorial layout */}
      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pt-8 pb-20 sm:px-12 lg:grid-cols-12 lg:gap-16 lg:pt-16">
        {/* Logo column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease }}
          className="flex items-center justify-center lg:col-span-6 lg:justify-end"
        >
          <div className="animate-float relative aspect-square w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px]">
            <Image
              src="/logo.png"
              alt="House of Shells"
              fill
              priority
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Copy column */}
        <div className="flex flex-col justify-center lg:col-span-6">
          {/* Tiny eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-champagne" />
            <span className="font-display text-[10px] tracking-[0.4em] uppercase text-champagne sm:text-xs">
              Inspired by the worlds we love
            </span>
          </motion.div>

          {/* Big poetic statement */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.85, ease }}
            className="font-display text-4xl leading-[1.05] font-light tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Where every
            <br />
            <span className="font-script text-5xl text-sage-deep italic sm:text-6xl lg:text-7xl">
              shell
            </span>{" "}
            tells
            <br />
            a story.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05, ease }}
            className="mt-10 max-w-md text-[15px] leading-relaxed text-ink-soft sm:text-base"
          >
            A new home for collectible coastal art. Handpainted scallop shells
            on canvas, made by twin sisters in pairs — every piece carries our
            signature: two golden stars, in opposite corners.
          </motion.p>

          {/* Status line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.25, ease }}
            className="mt-10 flex items-center gap-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
            </span>
            <span className="font-display text-xs tracking-[0.35em] uppercase text-ink-mute">
              First Sister Pieces — launching this summer
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease }}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="https://instagram.com/houseofshells.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-6 border-b border-ink/20 pb-2 font-display text-sm tracking-[0.3em] uppercase text-ink transition-all duration-500 hover:border-ink sm:gap-8"
            >
              <span>Instagram</span>
              <span className="text-sage transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </a>
            <a
              href="https://tiktok.com/@houseofshells.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-6 border-b border-ink/20 pb-2 font-display text-sm tracking-[0.3em] uppercase text-ink transition-all duration-500 hover:border-ink sm:gap-8"
            >
              <span>TikTok</span>
              <span className="text-sage transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Signature — twin concept band */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease }}
        className="relative z-10 mx-auto max-w-3xl border-t border-champagne/30 px-6 py-16 text-center sm:px-12 sm:py-20"
      >
        <div className="mb-6 flex justify-center text-champagne">
          <TwinMark className="h-6 w-auto" />
        </div>
        <p className="font-display text-[10px] tracking-[0.45em] uppercase text-champagne sm:text-xs">
          The Twin Signature
        </p>
        <h2 className="mx-auto mt-6 max-w-xl font-display text-2xl leading-[1.25] font-light text-ink italic sm:text-3xl">
          Two sisters. Two hands.
          <br />
          Two of everything we make.
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-[15px] leading-relaxed text-ink-soft sm:text-base">
          Every canvas is created in matching pairs — our{" "}
          <span className="italic">Sister Pieces</span>. Each one carries our
          quiet mark: two golden stars in opposite corners, signed by both of
          us. Collect one, or both.
        </p>
        <Link
          href="/about"
          className="group mt-8 inline-flex items-center gap-3 font-display text-sm tracking-[0.3em] uppercase text-ink-mute transition-colors hover:text-ink"
        >
          <span className="border-b border-ink-mute/40 pb-1 transition-colors group-hover:border-ink">
            Read our story
          </span>
          <span className="text-sage transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </motion.section>

      {/* Lower band — commissions */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.4, ease }}
        className="relative z-10 mx-auto max-w-7xl border-t border-champagne/30 px-6 py-12 sm:px-12 sm:py-16"
      >
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-[10px] tracking-[0.4em] uppercase text-champagne sm:text-xs">
              ⋄ &nbsp;Private commissions
            </p>
            <h2 className="mt-4 font-display text-2xl leading-tight font-light text-ink italic sm:text-3xl">
              Have something in mind?
              <br />
              Tell us your story.
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
      </motion.section>

      <SiteFooter />
    </main>
  );
}
