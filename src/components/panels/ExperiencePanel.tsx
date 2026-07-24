import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

// Experience as a tour schedule: each role is a show on a rail lit by an amber
// stage light. No cards — the rail and the type carry it.
const experiences = [
  {
    period: "June 2026 – Present",
    company: "Atrisense",
    role: "Scientific Software Engineering Intern",
    description:
      "Building scientific software for a medical-device startup, improving the accuracy of patient anatomy models. Specifics under NDA.",
  },
  {
    period: "Sept 2024 – Present",
    company: "UC San Diego",
    role: "Machine Learning Researcher",
    description:
      "Building Bayesian Active Learning pipelines for CGYRO fusion surrogates with General Atomics, and cutting experiment time 10x by parallelizing GPU runs across Docker and Kubernetes.",
  },
  {
    period: "March – June 2025",
    company: "Revicid Inc.",
    role: "Software Engineering Intern",
    description:
      "Architected a data engine that bypassed access restrictions to reach a near 90% success rate on government websites, and built automated parsing pipelines with logic-based stopping.",
  },
  {
    period: "Sept 2023 – June 2026",
    company: "Computer Science & Engineering Society",
    role: "VP Internal",
    description:
      "Lead operations, budgets for 140+ members, and events for 100+ attendees, with Agile planning in Notion that cut coordination overhead by 36%.",
  },
];

export default function ExperiencePanel() {
  return (
    <div>
      <SectionHeading note="G" title="Experience" />

      {/* Keeps its own reading measure, but hangs off the page's left edge. */}
      <ol className="flex max-w-3xl flex-col">
        {experiences.map((exp, i) => {
          const last = i === experiences.length - 1;
          return (
            <motion.li
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-[22px_1fr] gap-x-4 md:gap-x-6"
            >
              {/* Rail + stage-light node */}
              <div className="relative flex justify-center">
                {!last && (
                  <span
                    aria-hidden
                    className="absolute top-3 bottom-0 w-px bg-gradient-to-b from-white/20 to-white/[0.06]"
                  />
                )}
                <span
                  aria-hidden
                  className="relative z-10 mt-1.5 h-3.5 w-3.5 rounded-full bg-[#ffce8c] shadow-[0_0_10px_2px_rgba(255,206,140,0.45)] ring-4 ring-ink transition-all duration-300 group-hover:shadow-[0_0_16px_3px_rgba(255,206,140,0.7)]"
                />
              </div>

              {/* The show */}
              <div className={last ? "pb-1" : "pb-10"}>
                <div className="font-display text-sm tabular-nums text-silver/90">
                  {exp.period}
                </div>
                <h3 className="mt-1.5 font-display text-xl font-medium text-white md:text-2xl">
                  {exp.role}
                </h3>
                <div className="mt-0.5 font-display text-base text-white/65">
                  {exp.company}
                </div>
                <p className="mt-3 max-w-prose font-display text-sm font-light leading-relaxed text-white/75 md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
