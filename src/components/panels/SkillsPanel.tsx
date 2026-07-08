import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

// Four skills laid out as strings on a fretboard: thickest (lowest) at the top,
// each string separates the rows. No cards, no placeholder icons.
const skills = [
  {
    gauge: 5,
    title: "Software Engineering",
    description:
      "Full-stack development across the MERN stack and beyond, from an AI booking pipeline that automates Instagram travel reservations to production web apps used by thousands of students.",
  },
  {
    gauge: 4,
    title: "Machine Learning Research",
    description:
      "Two years of neural surrogate modeling for plasma fusion simulators in PyTorch, using Bayesian Active Learning to slash data needs while holding accuracy, and running experiments 10x faster on GPU clusters.",
  },
  {
    gauge: 3,
    title: "Product Management",
    description:
      "Product lead for UCSD's largest CS org, running Agile planning in Notion that cut coordination overhead by 36% and lifted engagement by 40%.",
  },
  {
    gauge: 2,
    title: "Leadership",
    description:
      "As VP Internal, I organize around 20 people across internal teams, manage budgets for 140+ members, and run hackathons, workshops, and talks for 100+ attendees.",
  },
];

// Steel string gradient, brightest at the middle like a lit wound string.
const STRING_BG =
  "linear-gradient(90deg, transparent, rgba(199,204,210,0.35) 8%, rgba(236,239,243,0.7) 50%, rgba(199,204,210,0.35) 92%, transparent)";

export default function SkillsPanel() {
  return (
    <div className="mx-auto max-w-5xl">
      <SectionHeading note="A" title="Skills & Achievements" />

      {/* Fretboard */}
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
        style={{ background: "linear-gradient(175deg, #2b2018 0%, #1a120b 55%, #130d08 100%)" }}
      >
        {/* Frets + inlay markers */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {[24, 44, 64, 84].map((left) => (
            <span
              key={left}
              className="absolute bottom-0 top-0 w-px bg-white/[0.08]"
              style={{ left: `${left}%` }}
            />
          ))}
          {[44, 64].map((left) => (
            <span
              key={left}
              className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.12]"
              style={{ left: `${left}%` }}
            />
          ))}
        </div>
        {/* Warm amber wash from the sound hole side */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(75% 120% at 12% 0%, rgba(255,206,140,0.10), transparent 58%)" }}
        />

        <ul className="relative">
          {skills.map((skill, i) => (
            <motion.li
              key={skill.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative px-6 pb-9 pt-7 md:px-10"
            >
              <div className="flex items-center gap-3">
                {/* Tuning peg / nut */}
                <span className="h-3 w-3 shrink-0 rounded-full border border-white/40 bg-gradient-to-b from-silverlight to-silver/50 shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
                <h3 className="font-display text-lg font-medium text-white md:text-xl">
                  {skill.title}
                </h3>
              </div>
              <p className="mt-2.5 max-w-2xl font-display text-sm font-light leading-relaxed text-white/75 md:text-base">
                {skill.description}
              </p>

              {/* The string: this row's baseline, gauge by index, glows on hover. */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 transition-[filter,transform] duration-300 group-hover:brightness-125"
                style={{ height: `${skill.gauge}px`, background: STRING_BG }}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
