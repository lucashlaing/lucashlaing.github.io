import { motion } from "motion/react";

type SectionHeadingProps = {
  /** The section's guitar string note (E A D G B e) — ties the heading to its string. */
  note: string;
  title: string;
  /** Optional deck under the title (used where a section needs a one-liner). */
  subtitle?: string;
};

/**
 * Section heading as a plucked string, not a tracked-uppercase eyebrow.
 * A lit amber node feeds a steel line into a legible "E string" label (the note
 * reads as an actual guitar string, not cryptic jargon), then the title.
 */
export default function SectionHeading({ note, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 md:mb-14"
    >
      <div className="flex items-center gap-2.5">
        <span
          aria-hidden
          className="h-2.5 w-2.5 rounded-full bg-[#ffce8c] shadow-[0_0_12px_2px_rgba(255,206,140,0.6)]"
        />
        <span aria-hidden className="h-px w-7 bg-silver/45" />
        <span className="font-display text-sm font-medium text-white/60">
          <span className="text-silver">{note}</span> string
        </span>
      </div>
      <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.01em] text-white md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-pretty font-display text-lg font-light text-white/60 md:text-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
