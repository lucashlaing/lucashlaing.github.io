import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const coursework = [
  "Data Structures & Algorithms",
  "Machine Learning",
  "Computer Architecture",
  "Operating Systems",
  "Database Systems",
  "Software Engineering",
];

const toolkit = [
  "Python, TypeScript, JavaScript, Java, C++",
  "React, Node.js, Express, REST APIs",
  "PyTorch, TensorFlow, Bayesian Active Learning",
  "Docker, Kubernetes, AWS, MongoDB, PostgreSQL",
];

// Steel string, brightest at the middle — matches the Skills fretboard.
const STRING_BG =
  "linear-gradient(90deg, transparent, rgba(199,204,210,0.3) 8%, rgba(236,239,243,0.6) 50%, rgba(199,204,210,0.3) 92%, transparent)";

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-medium text-white/65">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 font-display text-sm text-white/80">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffce8c]/85" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EducationPanel() {
  return (
    <div className="mx-auto max-w-4xl">
      <SectionHeading note="B" title="Education" />

      {/* The luthier's label, glued to the soundboard inside the guitar. */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-white/12 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.5)] md:p-8"
        style={{ background: "linear-gradient(172deg, #2b2018 0%, #1a120b 55%, #130d08 100%)" }}
      >
        {/* Warm ambient, like light falling through the sound hole. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(75% 100% at 85% 0%, rgba(255,206,140,0.12), transparent 55%)" }}
        />
        {/* Engraved inner frame — the printed border of a maker's label. */}
        <div aria-hidden className="pointer-events-none absolute inset-3 rounded-xl border border-white/10" />

        <div className="relative p-2 md:p-4">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <div className="font-display text-xs font-medium uppercase tracking-[0.2em] text-[#ffce8c]/75">
                Made at
              </div>
              <h3 className="mt-2 font-display text-2xl font-medium text-white md:text-3xl">
                University of California, San Diego
              </h3>
              <div className="mt-1.5 font-display text-lg text-silver">
                B.S. Computer Science · Minor in Finance
              </div>
              <div className="mt-1 font-display text-base text-white/65">
                Expected June 2027
              </div>
            </div>
            <div className="shrink-0 self-start rounded-full border border-[#ffce8c]/40 bg-[#ffce8c]/[0.1] px-4 py-2 font-display text-sm font-medium text-[#ffce8c]">
              GPA 4.0 / 4.0
            </div>
          </div>

          <div
            aria-hidden
            className="my-8 h-[2px] w-full"
            style={{ background: STRING_BG }}
          />

          <div className="grid gap-8 sm:grid-cols-2">
            <Column title="Coursework" items={coursework} />
            <Column title="Toolkit" items={toolkit} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
