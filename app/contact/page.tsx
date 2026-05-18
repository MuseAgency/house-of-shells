import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CommissionForm from "@/components/CommissionForm";
import { CONTACT, whatsappLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with House of Shells — WhatsApp, email, phone, or request a private commission.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-pearl text-ink">
      <div className="grain" />

      <SiteHeader />

      {/* Header */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-12 sm:px-12 sm:pt-16">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-champagne" />
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-champagne sm:text-xs">
            Get in touch
          </span>
        </div>
        <h1 className="font-display text-4xl leading-[1.05] font-light tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Tell us your
          <br />
          <span className="font-script text-5xl text-sage-deep italic sm:text-6xl lg:text-7xl">
            story
          </span>
          .
        </h1>
        <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
          For questions, custom orders, collaborations, or just a hello —
          message us on WhatsApp for the fastest reply, or send an email. We
          read everything ourselves.
        </p>
      </section>

      {/* Quick contact: WhatsApp + Email + Phone */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 sm:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* WhatsApp — primary CTA */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between gap-6 bg-sage px-8 py-10 text-cream-light transition-all duration-500 hover:bg-sage-deep"
          >
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <p className="font-display text-[10px] tracking-[0.35em] uppercase text-cream-light/80 sm:text-xs">
                Fastest reply
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-light italic text-cream-light sm:text-3xl">
                WhatsApp us
              </p>
              <p className="mt-2 flex items-center gap-2 font-display text-sm tracking-[0.25em] uppercase text-cream-light/80">
                <span>Open chat</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${CONTACT.email}`}
            className="group flex flex-col justify-between gap-6 border border-ink/15 bg-cream-light/30 px-8 py-10 transition-all duration-500 hover:border-ink/40"
          >
            <p className="font-display text-[10px] tracking-[0.35em] uppercase text-champagne sm:text-xs">
              Email
            </p>
            <div>
              <p className="font-display text-xl font-light italic text-ink sm:text-2xl">
                {CONTACT.email}
              </p>
              <p className="mt-2 flex items-center gap-2 font-display text-sm tracking-[0.25em] uppercase text-ink-mute">
                <span>Send a note</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="group flex flex-col justify-between gap-6 border border-ink/15 bg-cream-light/30 px-8 py-10 transition-all duration-500 hover:border-ink/40"
          >
            <p className="font-display text-[10px] tracking-[0.35em] uppercase text-champagne sm:text-xs">
              Phone
            </p>
            <div>
              <p className="font-display text-xl font-light italic text-ink sm:text-2xl">
                {CONTACT.phone}
              </p>
              <p className="mt-2 flex items-center gap-2 font-display text-sm tracking-[0.25em] uppercase text-ink-mute">
                <span>Give us a call</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Commission form */}
      <section className="relative z-10 mx-auto max-w-3xl border-t border-champagne/30 px-6 py-16 sm:px-12 sm:py-20">
        <div className="mb-10 text-center">
          <p className="font-display text-[10px] tracking-[0.45em] uppercase text-champagne sm:text-xs">
            ⋄ &nbsp;Private commission request
          </p>
          <h2 className="mt-6 font-display text-3xl leading-tight font-light text-ink italic sm:text-4xl">
            Tell us what you&apos;d love.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft sm:text-base">
            Fill in the form below and we&apos;ll get back to you with a
            mood-board, timeline and quote within two business days.
          </p>
        </div>

        <CommissionForm />
      </section>

      <SiteFooter />
    </main>
  );
}
