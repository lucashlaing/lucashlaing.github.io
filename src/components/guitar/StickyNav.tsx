import { motion, AnimatePresence } from "motion/react";
import type { Section } from "../../data/sections";
import MuteToggle from "./MuteToggle";

type StickyNavProps = {
  sections: Section[];
  /** id of the section currently in view (drives the lit-string highlight). */
  activeId: string;
  /** Shown only once the guitar hero has scrolled out of view. */
  visible: boolean;
  reducedMotion: boolean;
  onNavigate: (section: Section) => void;
  /** String-sound state + toggle, so you can silence it after leaving the hero. */
  muted: boolean;
  onToggleMute: () => void;
};

/**
 * A taut set of strings pinned to the top of the page. Appears after the guitar
 * hero leaves the viewport so you can jump between sections from anywhere; the
 * in-view section reads as a lit string (amber underglow, never an amber fill).
 * Real anchors, so keyboard and screen readers get native section links.
 */
export default function StickyNav({
  sections,
  activeId,
  visible,
  reducedMotion,
  onNavigate,
  muted,
  onToggleMute,
}: StickyNavProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          aria-label="Sections"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
          animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-5xl items-center gap-2 px-3 sm:px-8">
          <ul className="flex flex-1 flex-wrap items-center justify-center gap-x-1 gap-y-1 py-2.5 sm:flex-nowrap sm:gap-x-1.5">
            {sections.map((section) => {
              const active = section.id === activeId;
              return (
                <li key={section.id} className="shrink-0">
                  <a
                    href={`#${section.id}`}
                    aria-current={active ? "true" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(section);
                    }}
                    className={`relative flex items-center gap-1.5 rounded-full px-3 py-2 font-display text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-silver sm:px-3.5 sm:py-1.5 ${
                      active
                        ? "text-silverlight"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <span className="font-display text-[11px] font-semibold leading-none text-silver/80">
                      {section.note}
                    </span>
                    {section.label}
                    {active &&
                      (reducedMotion ? (
                        <span
                          className="pointer-events-none absolute inset-x-3 -bottom-px h-[2px] rounded-full"
                          style={{
                            background: "#ffce8c",
                            boxShadow: "0 0 10px 1px rgba(255,206,140,0.7)",
                          }}
                        />
                      ) : (
                        <motion.span
                          layoutId="sticky-string-underglow"
                          className="pointer-events-none absolute inset-x-3 -bottom-px h-[2px] rounded-full"
                          style={{
                            background: "#ffce8c",
                            boxShadow: "0 0 10px 1px rgba(255,206,140,0.7)",
                          }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        />
                      ))}
                  </a>
                </li>
              );
            })}
          </ul>
            <MuteToggle
              muted={muted}
              onToggle={onToggleMute}
              className="h-9 w-9 shrink-0 text-white/70 hover:text-silver focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
