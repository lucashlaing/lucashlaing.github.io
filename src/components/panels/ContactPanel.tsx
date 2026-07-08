import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/min-zin-hlaing",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "GitHub",
    href: "https://github.com/lucashlaing",
    path: "M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
  },
];

const contacts = [
  { label: "Email", value: "mhlaing@ucsd.edu", href: "mailto:mhlaing@ucsd.edu" },
  { label: "Phone", value: "(858) 205-0942", href: "tel:+18582050942" },
];

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M4 10L10 4M10 4H5M10 4V9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactPanel() {
  return (
    <div className="mx-auto max-w-3xl">
      <SectionHeading note="e" title="Let's Connect" />

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-xl text-pretty font-display text-lg font-light leading-relaxed text-white/80 md:text-xl"
      >
        Whether it's an opportunity, a project, or just to talk shop, I'd love to
        hear from you.
      </motion.p>

      {/* Backstage pass — a ticket stub. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-9 overflow-hidden rounded-2xl border border-white/12 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
        style={{ background: "linear-gradient(150deg, #241812 0%, #17100b 55%, #0d0907 100%)" }}
      >
        {/* Ticket notches on the perforation (desktop). */}
        <span aria-hidden className="absolute right-[176px] -top-3 hidden h-6 w-6 rounded-full bg-ink md:block" />
        <span aria-hidden className="absolute right-[176px] -bottom-3 hidden h-6 w-6 rounded-full bg-ink md:block" />
        {/* Amber house light. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 90% at 18% 10%, rgba(255,206,140,0.12), transparent 55%)" }}
        />

        <div className="relative grid md:grid-cols-[1fr_auto]">
          <div className="p-6 md:p-8">
            <div className="font-display text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffce8c]/80">
              Backstage pass
            </div>
            <div className="mt-5 flex flex-col gap-1.5">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group -mx-2 flex items-center justify-between gap-4 rounded-xl px-2 py-3 transition-colors hover:bg-white/[0.05] focus-visible:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver"
                >
                  <span className="font-display text-sm text-white/65">{c.label}</span>
                  <span className="flex items-center gap-2 font-display text-lg font-medium text-white transition-colors group-hover:text-[#ffce8c]">
                    {c.value}
                    <span className="text-white/60 transition-all group-hover:translate-x-0.5 group-hover:text-[#ffce8c]">
                      <ArrowUpRight />
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Perforated stub with the socials. */}
          <div className="flex items-center justify-center gap-4 border-t border-dashed border-white/20 p-6 md:min-w-[176px] md:flex-col md:border-l md:border-t-0 md:p-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-colors hover:border-[#ffce8c]/50 hover:bg-[#ffce8c]/10 hover:text-[#ffce8c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
