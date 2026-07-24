import { useLayoutEffect, useRef } from "react";
import { motion } from "motion/react";
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
  const navRef = useRef<HTMLElement | null>(null);

  // Publish the bar's real height as --nav-h so sections can anchor to it.
  // Measured live rather than hard-coded: the pills wrap to a second row on
  // narrow screens, which nearly doubles the height. The nav stays mounted
  // (hidden via visibility) precisely so this is available before the first
  // pluck from the hero, when the scroll target is computed.
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const publish = () =>
      document.documentElement.style.setProperty(
        "--nav-h",
        `${Math.round(nav.getBoundingClientRect().height)}px`,
      );
    publish();
    if (typeof ResizeObserver === "undefined") return;
    const obs = new ResizeObserver(publish);
    obs.observe(nav);
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Sections"
      className={`fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/80 px-6 backdrop-blur-md transition-[opacity,transform,visibility] duration-300 ease-out md:px-10 ${
        visible
          ? "visible translate-y-0 opacity-100"
          : `invisible opacity-0 ${reducedMotion ? "" : "-translate-y-3.5"}`
      }`}
    >
      {/* Gutter outside, measure inside — the exact structure each section
          uses, so both resolve to the same left edge at every width. The
          negative inline start then pulls the first pill's label out of its
          own padding to sit on that edge, not 12px inside it. */}
      <div className="mx-auto flex w-full max-w-5xl items-center gap-2">
        <ul className="-ml-3 flex flex-1 flex-wrap items-center gap-x-1 gap-y-1 py-2.5 sm:-ml-3.5 sm:flex-nowrap sm:gap-x-1.5">
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
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
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
    </nav>
  );
}
