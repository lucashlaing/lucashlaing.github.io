import { sections, type Section } from "../../data/sections";
import GuitarString from "./GuitarString";

type GuitarNeckProps = {
  reducedMotion: boolean;
  onPluck: (section: Section) => void;
};

// Mobile close-up (portrait). The camera looks down the neck: strings run
// top → bottom, frets cross the fretboard, and the sound hole peeks in at the
// bottom edge (bleeding off). Full-bleed cover so there's no rectangle.
const STRING_Y1 = -60; // strings run off the top edge (nut is out of frame)
const BRIDGE_Y = 1030; // strings anchor near the bottom, over the hole
const NECK_LEFT = 160; // x of the first (low E) string
const STRING_SPACING = 56;
const HOLE_CX = 300;
const HOLE_CY = 1150;

const FRET_YS = [130, 320, 510, 700];
const GRAIN_LINES = [
  "M 96,-60 Q 80,300 104,620 T 92,1240",
  "M 300,-60 Q 320,320 296,640 T 312,1240",
  "M 504,-60 Q 488,300 512,620 T 496,1240",
];

export default function GuitarNeck({ reducedMotion, onPluck }: GuitarNeckProps) {
  return (
    <svg
      viewBox="0 0 600 1200"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="group"
      aria-label="Interactive guitar. Pluck a string to jump to a section."
    >
      <defs>
        <linearGradient id="woodGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d49b62" />
          <stop offset="45%" stopColor="#ab7642" />
          <stop offset="100%" stopColor="#5f3c21" />
        </linearGradient>
        <linearGradient id="fretboardGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2f231a" />
          <stop offset="100%" stopColor="#140d08" />
        </linearGradient>
        <linearGradient id="steelGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f4f6f9" />
          <stop offset="45%" stopColor="#aeb4bc" />
          <stop offset="100%" stopColor="#6b7077" />
        </linearGradient>
        <linearGradient id="bridgeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3c2618" />
          <stop offset="100%" stopColor="#21100a" />
        </linearGradient>
        <radialGradient id="holeShadow" cx="50%" cy="44%" r="54%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="68%" stopColor="#060402" />
          <stop offset="100%" stopColor="#33240f" />
        </radialGradient>
        <radialGradient id="holeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,206,140,0.42)" />
          <stop offset="100%" stopColor="rgba(255,206,140,0)" />
        </radialGradient>
        <radialGradient id="spotlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,216,164,0.26)" />
          <stop offset="100%" stopColor="rgba(255,216,164,0)" />
        </radialGradient>
        <radialGradient id="vignette" cx="50%" cy="50%" r="62%">
          <stop offset="52%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.6)" />
        </radialGradient>
      </defs>

      {/* Soundboard / neck ground */}
      <rect x={0} y={-60} width={600} height={1320} fill="url(#woodGrad)" />
      <ellipse cx={300} cy={560} rx={430} ry={720} fill="url(#spotlight)" />
      {GRAIN_LINES.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="rgba(60,36,16,0.28)" strokeWidth={2} />
      ))}

      {/* Fretboard with rounded heel at the bottom */}
      <path
        d="M 70,-60 V 820 Q 70,865 115,865 H 485 Q 530,865 530,820 V -60 Z"
        fill="url(#fretboardGrad)"
        stroke="rgba(0,0,0,0.5)"
        strokeWidth={2}
      />
      {FRET_YS.map((fy) => (
        <g key={fy}>
          <line x1={70} y1={fy} x2={530} y2={fy} stroke="#777c83" strokeWidth={5} />
          <line x1={70} y1={fy - 2} x2={530} y2={fy - 2} stroke="rgba(255,255,255,0.35)" strokeWidth={1} />
        </g>
      ))}
      {[225, 415].map((iy) => (
        <circle key={iy} cx={300} cy={iy} r={9} fill="#e8e6dd" opacity={0.85} />
      ))}

      {/* Warm aura around the hole (breathes via CSS) */}
      <circle className="hole-glow" cx={HOLE_CX} cy={HOLE_CY} r={230} fill="url(#holeGlow)" />

      {/* Rosette rings */}
      <circle cx={HOLE_CX} cy={HOLE_CY} r={150} fill="none" stroke="rgba(199,204,210,0.85)" strokeWidth={3} />
      <circle cx={HOLE_CX} cy={HOLE_CY} r={136} fill="none" stroke="rgba(236,239,243,0.55)" strokeWidth={6} strokeDasharray="4 6" />
      <circle cx={HOLE_CX} cy={HOLE_CY} r={122} fill="none" stroke="rgba(40,28,14,0.9)" strokeWidth={3} />
      <circle cx={HOLE_CX} cy={HOLE_CY} r={116} fill="url(#holeShadow)" />

      {/* Bridge + pins near the bottom */}
      <rect x={158} y={1000} width={284} height={78} rx={14} fill="url(#bridgeGrad)" stroke="rgba(0,0,0,0.5)" strokeWidth={2} />
      {sections.map((section, index) => (
        <g key={`pin-${section.id}`}>
          <circle cx={NECK_LEFT + index * STRING_SPACING} cy={1030} r={8} fill="#e8e6dd" />
          <circle cx={NECK_LEFT + index * STRING_SPACING} cy={1030} r={3} fill="#1a120a" />
        </g>
      ))}

      {/* Edge vignette */}
      <rect x={0} y={-60} width={600} height={1320} fill="url(#vignette)" pointerEvents="none" />

      {/* Strings — labels staggered down the neck so they never collide */}
      {sections.map((section, index) => (
        <GuitarString
          key={section.id}
          section={section}
          index={index}
          orientation="vertical"
          main1={STRING_Y1}
          main2={BRIDGE_Y}
          cross={NECK_LEFT + index * STRING_SPACING}
          labelMain={384 + index * 76}
          reducedMotion={reducedMotion}
          onPluck={onPluck}
        />
      ))}
    </svg>
  );
}
