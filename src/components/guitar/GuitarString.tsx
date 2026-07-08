import { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import type { Section } from "../../data/sections";

export type Orientation = "horizontal" | "vertical";

type GuitarStringProps = {
  section: Section;
  /** Index among the strings — used to stagger the idle shimmer. */
  index: number;
  orientation: Orientation;
  /** Start (off-frame) and end (bridge) positions along the string's main axis. */
  main1: number;
  main2: number;
  /** The string's fixed position on the cross axis (its lane). */
  cross: number;
  /** Position along the main axis where the section label pill rides. */
  labelMain: number;
  reducedMotion: boolean;
  onPluck: (section: Section) => void;
};

// Peak sideways displacement of the twang, then a damped settle back to rest.
const PLUCK_KEYFRAMES = [0, 20, -13, 7, -3.5, 1.5, 0];

export default function GuitarString({
  section,
  index,
  orientation,
  main1,
  main2,
  cross,
  labelMain,
  reducedMotion,
  onPluck,
}: GuitarStringProps) {
  const [hovered, setHovered] = useState(false);
  const mid = (main1 + main2) / 2;

  // Map (main, cross) → (x, y) for the active orientation. A horizontal string
  // runs along x with its lane on y; a vertical string runs along y, lane on x.
  const toXY = (main: number, crossPos: number) =>
    orientation === "horizontal"
      ? { x: main, y: crossPos }
      : { x: crossPos, y: main };

  const a = toXY(main1, cross);
  const b = toXY(main2, cross);

  // Perpendicular offset of the bezier control point — 0 is a straight string.
  const offset = useMotionValue(0);
  const d = useTransform(offset, (o) => {
    const c = toXY(mid, cross + o);
    return `M ${a.x} ${a.y} Q ${c.x} ${c.y} ${b.x} ${b.y}`;
  });

  const handlePluck = () => {
    onPluck(section);
    if (!reducedMotion) {
      animate(offset, PLUCK_KEYFRAMES, { duration: 0.65, ease: "easeOut" });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handlePluck();
    }
  };

  const labelWidth = section.label.length * 9 + 26;

  // Label pill geometry differs by orientation: horizontal strings carry the
  // pill at their left end (text left-aligned); vertical strings carry it
  // centered on the string's lane (text centred), always upright.
  const label = toXY(labelMain, cross);
  const pill =
    orientation === "horizontal"
      ? { x: label.x - 12, y: label.y - 17, textX: label.x, textY: label.y + 5, anchor: "start" as const }
      : {
          x: label.x - labelWidth / 2,
          y: label.y - 17,
          textX: label.x,
          textY: label.y + 5,
          anchor: "middle" as const,
        };

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`Jump to ${section.label}`}
      className="cursor-pointer outline-none"
      onClick={handlePluck}
      onKeyDown={handleKeyDown}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {/* Invisible wide hit target so the string is easy to grab. */}
      <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="transparent" strokeWidth={34} />

      {/* The steel string. */}
      <motion.path
        d={d}
        fill="none"
        stroke="url(#steelGrad)"
        strokeWidth={hovered ? section.gauge + 1 : section.gauge}
        strokeLinecap="round"
        style={{
          filter: hovered
            ? "drop-shadow(0 0 7px rgba(236,239,243,0.9))"
            : "drop-shadow(0 1px 1px rgba(0,0,0,0.55))",
          transition: "stroke-width 0.2s, filter 0.2s",
        }}
      />

      {/* Specular highlight that shimmers when idle. */}
      <motion.path
        className={reducedMotion ? undefined : "string-shimmer"}
        style={{ animationDelay: `${index * 0.5}s` }}
        d={d}
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth={Math.max(0.6, section.gauge - 1.4)}
        strokeLinecap="round"
        pointerEvents="none"
      />

      {/* Always-visible label pill riding the string. */}
      <rect
        x={pill.x}
        y={pill.y}
        width={labelWidth}
        height={34}
        rx={17}
        fill={hovered ? "rgba(199,204,210,0.18)" : "rgba(10,8,6,0.62)"}
        stroke={hovered ? "rgba(236,239,243,0.9)" : "rgba(255,255,255,0.2)"}
        strokeWidth={1}
        style={{ transition: "fill 0.2s, stroke 0.2s" }}
      />
      <text
        x={pill.textX}
        y={pill.textY}
        textAnchor={pill.anchor}
        className="font-display font-medium select-none"
        style={{
          fontSize: "15px",
          fill: hovered ? "#eceff3" : "rgba(255,255,255,0.82)",
          transition: "fill 0.2s",
        }}
      >
        {section.label}
      </text>
    </g>
  );
}
