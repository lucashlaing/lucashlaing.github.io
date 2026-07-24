import { motion } from "motion/react";
import headshot from "../../images/headshot.jpeg";
import SectionHeading from "./SectionHeading";

// Engraved instrument spec-plate instead of three metric cards.
const spec = [
  { label: "Institution", value: "UC San Diego" },
  { label: "GPA", value: "4.0 / 4.0" },
  { label: "Focus", value: "Systems · Backend · ML" },
];

export default function AboutPanel() {
  return (
    <div>
      <SectionHeading note="E" title="About Me" />

      <div className="grid items-start gap-10 md:grid-cols-[220px_1fr]">
        {/* Headshot in a warm, lit frame — not a pure-white block. */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-48 md:mx-0"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-5 z-0"
            style={{ background: "radial-gradient(60% 55% at 50% 40%, rgba(255,206,140,0.18), transparent 70%)" }}
          />
          <div
            className="relative z-10 overflow-hidden rounded-2xl border border-white/15 p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
            style={{ background: "linear-gradient(150deg, #d49b62 0%, #7a4f2c 45%, #3a2413 100%)" }}
          >
            <div
              className="h-52 w-full rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url('${headshot}')` }}
            />
          </div>
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-pretty font-display text-lg font-light leading-relaxed text-white/85 md:text-xl">
            I'm Lucas Hlaing (Min Zin Hlaing), a third-year Computer Science
            student at UC San Diego with a minor in Finance. I grew up in
            Yangon, Myanmar, where basic resources were often hard to access and
            formal support was thin. That shaped what I like to build: software
            that widens access, cuts out friction, and reaches real people at
            scale.
          </p>
          <p className="mt-5 text-pretty font-display text-lg font-light leading-relaxed text-white/70 md:text-xl">
            Lately I lean toward backend, infrastructure, and distributed
            systems, with machine learning research on the side. Outside of code
            I help run our campus CS community and play a fair bit of guitar,
            which I think of as a small rebellion against a future where AI does
            all the creative work.
          </p>

          {/* Engraved spec-plate. */}
          <dl
            className="mt-9 grid grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-xl border border-white/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
            style={{ background: "linear-gradient(180deg, rgba(199,204,210,0.12), rgba(199,204,210,0.03))" }}
          >
            {spec.map((item) => (
              <div key={item.label} className="px-5 py-4">
                <dt className="font-display text-xs font-medium tracking-wide text-white/65">
                  {item.label}
                </dt>
                <dd className="mt-1 font-display text-lg font-medium text-silverlight">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
