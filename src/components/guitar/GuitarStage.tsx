import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { sections, type Section } from "../../data/sections";
import { useGuitarAudio } from "../../hooks/useGuitarAudio";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import GuitarBody from "./GuitarBody";
import GuitarNeck from "./GuitarNeck";
import MuteToggle from "./MuteToggle";
import StickyNav from "./StickyNav";

export default function GuitarStage() {
  const { pluck, muted, toggleMute } = useGuitarAudio();
  const reducedMotion = useReducedMotion() ?? false;
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const heroRef = useRef<HTMLElement | null>(null);
  const [pastHero, setPastHero] = useState(false);
  const [activeId, setActiveId] = useState(sections[0].id);

  // Pluck the string's note (silent when muted), then glide the page to its
  // section. Reduced motion jumps instantly. scrollIntoView honours the
  // section's scroll-margin so the sticky nav never covers the heading.
  const navigate = useCallback(
    (section: Section) => {
      pluck(section.frequency);
      const el = document.getElementById(section.id);
      if (!el) return;
      el.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `#${section.id}`);
    },
    [pluck, reducedMotion]
  );

  // Reveal the sticky nav once the full-screen hero has scrolled away.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  // Scroll-spy: light up whichever section owns the most of the viewport.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    const ratios = new Map<string, number>();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) ratios.set(entry.target.id, entry.intersectionRatio);
          else ratios.delete(entry.target.id);
        }
        let best: string | null = null;
        let bestRatio = -1;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        if (best) setActiveId(best);
      },
      { threshold: [0.2, 0.5, 0.8] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-ink text-white">
      {/* ── Guitar hero: the stage itself, cropped full-bleed by the viewport ── */}
      <header
        ref={heroRef}
        id="top"
        className="relative min-h-[100svh] overflow-hidden guitar-stage-bg"
      >
        <div className="absolute inset-0 z-0">
          {isDesktop ? (
            <GuitarBody reducedMotion={reducedMotion} onPluck={navigate} />
          ) : (
            <GuitarNeck reducedMotion={reducedMotion} onPluck={navigate} />
          )}
        </div>

        {/* Legibility scrim — darkens top + left where the type lives. */}
        <div aria-hidden className="guitar-scrim pointer-events-none absolute inset-0 z-10" />

        {/* Mute toggle — small, circular, bottom-right of the guitar hero. */}
        <MuteToggle
          muted={muted}
          onToggle={toggleMute}
          className="absolute bottom-6 right-6 z-30 h-11 w-11 border border-white/15 bg-ink/50 text-white/80 backdrop-blur-sm hover:border-silver hover:text-silver focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:bottom-10 sm:right-10 lg:bottom-14 lg:right-14"
        />

        {/* Hero overlay. pointer-events-none so plucks fall through to the
            strings; only the fallback nav re-enables pointer events. */}
        <div className="pointer-events-none relative z-20 flex min-h-[100svh] flex-col">
          <div className="max-w-2xl p-6 sm:p-10 lg:p-14">
            <motion.h1
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl"
            >
              Min Zin Hlaing
            </motion.h1>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-md text-pretty font-display text-base font-light leading-relaxed text-white/75 sm:text-lg"
            >
              Pluck a string to explore. Each one opens a different part of my
              world.
            </motion.p>
          </div>
        </div>
      </header>

      <StickyNav
        sections={sections}
        activeId={activeId}
        visible={pastHero}
        reducedMotion={reducedMotion}
        onNavigate={navigate}
        muted={muted}
        onToggleMute={toggleMute}
      />

      {/* ── The sections, inline and continuous — no more popups ── */}
      <main>
        {sections.map((section, index) => {
          const Panel = section.panel;
          return (
            <section
              key={section.id}
              id={section.id}
              aria-label={section.label}
              className={`scroll-mt-16 px-6 md:px-10 md:scroll-mt-20 ${
                index === 0
                  ? "pt-16 md:pt-24"
                  : "border-t border-white/10 pt-20 md:pt-28"
              } pb-20 md:pb-28`}
            >
              <Panel />
            </section>
          );
        })}
      </main>
    </div>
  );
}
