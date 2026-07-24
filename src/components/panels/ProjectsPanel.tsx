import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import SectionHeading from "./SectionHeading";
import imgCSES from "../../images/CSES_Website.png";
import imgLingoLab from "../../images/Lingo_Lab.png";
import imgOperon from "../../images/Operon.png";
import imgRunway from "../../images/Runway_Avenue.png";

type Project = {
  id: string;
  title: string;
  category: string;
  /** One-line hook shown in every setlist row. */
  summary: string;
  /** Fuller description shown in the "Now Playing" feature pane. */
  description: string;
  tech: string[];
  /** Screenshot. Optional — projects without one get a designed fallback panel. */
  image?: string;
  alt: string;
  link?: string;
  linkText?: string;
};

const projects: Project[] = [
  {
    id: "operon",
    title: "Operon",
    category: "AI · Full-Stack",
    summary: "An AI pipeline that automates Instagram-based travel bookings end to end.",
    description:
      "Architected an AI booking pipeline using the Gemini and Meta Messenger APIs to automate Instagram travel reservations, backed by a state-driven MongoDB and Express service that keeps conversational workflows 100% persistent, with Stripe payments and automated document generation.",
    tech: ["MERN Stack", "Gemini API", "Meta API", "Stripe"],
    image: imgOperon,
    alt: "The Operon assistant automating a travel reservation over Instagram.",
    link: "https://github.com/OscarKhaing/Operon",
    linkText: "View on GitHub",
  },
  {
    id: "runway",
    title: "Runway Avenue",
    category: "Eng Manager · Full-Stack",
    summary: "Led 7 engineers building a Salesforce-integrated platform with failover.",
    description:
      "Led a team of 7 developers with Agile planning in Notion, architected a backend that integrates the Salesforce API with a Supabase failover system, and built a React frontend that tracks user clickstreams and dwell time through interaction metrics.",
    tech: ["Next.js", "React", "Supabase", "Salesforce API"],
    image: imgRunway,
    alt: "The Runway Avenue dashboard tracking user interaction metrics.",
    link: "https://github.com/CSES-Dev/runway-ave",
    linkText: "View on GitHub",
  },
  {
    id: "lingolab",
    title: "LingoLab",
    category: "Full-Stack · AI",
    summary: "An AI reading companion that classifies and defines words in papers as you read.",
    description:
      "A front-end app that enhances paper readability with real-time word classification and inline definitions, plus a collaborative correction system and an automated PDF pipeline.",
    tech: ["React", "Python", "OpenAI API", "Firebase"],
    image: imgLingoLab,
    alt: "The LingoLab reader highlighting a classified word alongside its generated definition.",
    link: "https://github.com/lucashlaing/lingolab",
    linkText: "View on GitHub",
  },
  {
    id: "cses",
    title: "CSES Website",
    category: "Web · Product Lead",
    summary: "Led product and shipped features for UCSD's largest CS org.",
    description:
      "Led product strategy and feature development for the Computer Science & Engineering Society website, boosting engagement through agile project management and iterative design.",
    tech: ["MERN Stack", "Figma", "Agile", "Notion"],
    image: imgCSES,
    alt: "The CSES homepage for the UC San Diego Computer Science & Engineering Society.",
    link: "https://csesatucsd.com",
    linkText: "Visit site",
  },
];

/* — Small inline icons (no icon dependency; matches the project's hand-rolled SVG approach) — */

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

function Lock() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="3" y="6.2" width="8" height="5.3" rx="1.3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4.7 6.2V4.9a2.3 2.3 0 0 1 4.6 0v1.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function TechChips({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-display text-white/70"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectCTA({ project }: { project: Project }) {
  if (!project.link) {
    return (
      <span className="inline-flex items-center gap-2 text-sm font-display text-white/65">
        <Lock />
        Source private
      </span>
    );
  }
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-silver px-5 py-2.5 text-sm font-display font-medium text-ink transition-colors hover:bg-silverlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      {project.linkText}
      <ArrowUpRight />
    </a>
  );
}

/** Screenshot framed under a warm spotlight — the "lifted & tactile" feature object. */
function FramedShot({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <figure className="relative">
      {/* Spotlight Amber — light, never fill (DESIGN.md: The Amber-Is-Light Rule). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 z-0 md:-inset-10"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 42%, rgba(255,206,140,0.18), transparent 70%)",
        }}
      />
      <div className="relative z-10 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] shadow-[0_18px_48px_rgba(0,0,0,0.6)]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="block aspect-[16/10] w-full object-cover"
          />
        ) : (
          <ShotFallback project={project} />
        )}
      </div>
    </figure>
  );
}

/** Designed placeholder for projects that don't have a screenshot yet — a warm
 *  soundboard gradient with a faint string motif, so the frame still reads as a
 *  deliberate object rather than a broken image. */
function ShotFallback({ project }: { project: Project }) {
  return (
    <div
      role="img"
      aria-label={project.alt}
      className="relative flex aspect-[16/10] w-full flex-col justify-end p-6 md:p-7"
      style={{ background: "linear-gradient(135deg, #2c1d11 0%, #16100a 55%, #0a0a0c 100%)" }}
    >
      {/* Amber spotlight (light, never fill). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(58% 60% at 30% 30%, rgba(255,206,140,0.16), transparent 70%)" }}
      />
      {/* Faint strings. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.14]">
        {[28, 44, 60, 76].map((top) => (
          <span
            key={top}
            className="absolute left-0 right-0 block h-px bg-silverlight"
            style={{ top: `${top}%` }}
          />
        ))}
      </div>
      <span className="relative font-display text-xs uppercase tracking-[0.16em] text-white/60">
        {project.category}
      </span>
      <span className="relative mt-1 font-display text-3xl font-semibold text-white/90 md:text-4xl">
        {project.title}
      </span>
    </div>
  );
}

export default function ProjectsPanel() {
  const reduced = useReducedMotion() ?? false;
  const [activeId, setActiveId] = useState(projects[0].id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = useMemo(
    () => projects.findIndex((p) => p.id === activeId),
    [activeId]
  );
  const active = projects[activeIndex] ?? projects[0];

  const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next = index;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (index + 1) % projects.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (index - 1 + projects.length) % projects.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = projects.length - 1;
    else return;
    e.preventDefault();
    setActiveId(projects[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <SectionHeading
        note="D"
        title="Projects"
        subtitle="A few things I've built end to end, from an AI booking pipeline to production apps used by thousands of students."
      />

      {/* ── Desktop: setlist (tablist) + Now Playing (tabpanel) ── */}
      <div className="hidden lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
        <div
          role="tablist"
          aria-label="Projects"
          aria-orientation="vertical"
          className="flex flex-col"
        >
          {projects.map((project, i) => {
            const isActive = project.id === activeId;
            const number = String(i + 1).padStart(2, "0");
            return (
              <motion.button
                key={project.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`project-tab-${project.id}`}
                aria-selected={isActive}
                aria-controls="project-feature"
                tabIndex={isActive ? 0 : -1}
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveId(project.id)}
                onFocus={() => setActiveId(project.id)}
                onMouseEnter={() => setActiveId(project.id)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                className={`group relative w-full rounded-2xl border px-5 py-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                  isActive
                    ? "border-white/15 bg-white/[0.06]"
                    : "border-transparent hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className={`font-display text-sm tabular-nums transition-colors ${
                      isActive ? "text-silverlight" : "text-white/60 group-hover:text-white/80"
                    }`}
                  >
                    {number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3
                        className={`truncate font-display text-xl font-medium transition-colors ${
                          isActive ? "text-silverlight" : "text-white group-hover:text-silver"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <span className="shrink-0 font-display text-xs uppercase tracking-[0.15em] text-white/60">
                        {project.category}
                      </span>
                    </div>
                    <p className="mt-1.5 font-display text-sm font-light leading-relaxed text-white/65">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Now Playing */}
        <div className="self-start lg:sticky lg:top-28">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              id="project-feature"
              role="tabpanel"
              aria-labelledby={`project-tab-${active.id}`}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduced ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <FramedShot project={active} priority />
              <div className="mt-7">
                <h4 className="font-display text-2xl font-medium text-white">{active.title}</h4>
                <p className="mt-3 max-w-prose font-display text-base font-light leading-relaxed text-white/85">
                  {active.description}
                </p>
                <div className="mt-6">
                  <TechChips tech={active.tech} />
                </div>
                <div className="mt-7">
                  <ProjectCTA project={active} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Mobile / tablet: stacked editorial blocks, nothing hidden ── */}
      <ol className="flex flex-col gap-12 lg:hidden">
        {projects.map((project, i) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-woodDark/40 pt-8 first:border-t-0 first:pt-0"
          >
            <FramedShot project={project} priority={i === 0} />
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-sm tabular-nums text-silver">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-medium text-white">{project.title}</h3>
            </div>
            <span className="mt-1 block font-display text-xs uppercase tracking-[0.15em] text-white/60">
              {project.category}
            </span>
            <p className="mt-3 max-w-prose font-display text-base font-light leading-relaxed text-white/85">
              {project.description}
            </p>
            <div className="mt-5">
              <TechChips tech={project.tech} />
            </div>
            <div className="mt-6">
              <ProjectCTA project={project} />
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
