import { sections, type Section } from "../../data/sections";
import GuitarString from "./GuitarString";

type GuitarBodyProps = {
  reducedMotion: boolean;
  onPluck: (section: Section) => void;
};

// Desktop close-up (landscape). The camera sits low on the soundboard: fretboard
// enters from the left, sound hole + bridge sit right of centre, strings span the
// full width. Rendered as a full-bleed cover (xMinYMid slice) so the label side
// is always anchored and the bridge bleeds off the right — no rectangle.
const STRING_X1 = -40; // strings run off the left edge (nut is out of frame)
const BRIDGE_PIN_X = 1010; // strings anchor at the bridge pins
const LABEL_X = 46; // section label pills ride the left end of each string
const STRING_TOP = 250;
const STRING_SPACING = 54;

const HOLE_CX = 792;
const HOLE_CY = 385;

const GRAIN_LINES = [
  "M -40,150 Q 300,132 620,158 T 1240,144",
  "M -40,300 Q 320,320 640,296 T 1240,312",
  "M -40,470 Q 300,452 620,478 T 1240,464",
  "M -40,588 Q 340,604 660,582 T 1240,596",
];

const FRET_XS = [70, 165, 260, 355];

export default function GuitarBody({ reducedMotion, onPluck }: GuitarBodyProps) {
  return (
    <svg
      viewBox="0 0 1200 640"
      preserveAspectRatio="xMinYMid slice"
      className="h-full w-full"
      role="group"
      aria-label="Interactive guitar. Pluck a string to jump to a section."
    >
      <defs>
        <linearGradient id="woodGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d49b62" />
          <stop offset="45%" stopColor="#ab7642" />
          <stop offset="100%" stopColor="#5f3c21" />
        </linearGradient>
        <linearGradient id="fretboardGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f231a" />
          <stop offset="100%" stopColor="#140d08" />
        </linearGradient>
        <linearGradient id="steelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4f6f9" />
          <stop offset="45%" stopColor="#aeb4bc" />
          <stop offset="100%" stopColor="#6b7077" />
        </linearGradient>
        <linearGradient id="bridgeGrad" x1="0" y1="0" x2="0" y2="1">
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
        {/* Broad warm spotlight — lands on the soundboard around the hole. */}
        <radialGradient id="spotlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,216,164,0.30)" />
          <stop offset="100%" stopColor="rgba(255,216,164,0)" />
        </radialGradient>
        <radialGradient id="vignette" cx="50%" cy="50%" r="60%">
          <stop offset="50%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.58)" />
        </radialGradient>
      </defs>

      {/* Soundboard */}
      <rect x={-40} y={0} width={1280} height={640} fill="url(#woodGrad)" />
      <ellipse cx={760} cy={385} rx={720} ry={430} fill="url(#spotlight)" />
      {GRAIN_LINES.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="rgba(60,36,16,0.28)" strokeWidth={2} />
      ))}

      {/* Fretboard with rounded heel on the right */}
      <path
        d="M -40,210 H 400 Q 445,210 445,255 V 520 Q 445,565 400,565 H -40 Z"
        fill="url(#fretboardGrad)"
        stroke="rgba(0,0,0,0.5)"
        strokeWidth={2}
      />
      {FRET_XS.map((fx) => (
        <g key={fx}>
          <line x1={fx} y1={210} x2={fx} y2={565} stroke="#777c83" strokeWidth={5} />
          <line x1={fx - 2} y1={210} x2={fx - 2} y2={565} stroke="rgba(255,255,255,0.35)" strokeWidth={1} />
        </g>
      ))}
      {[240, 330].map((ix) => (
        <circle key={ix} cx={ix} cy={385} r={9} fill="#e8e6dd" opacity={0.85} />
      ))}

      {/* Warm aura around the hole (breathes via CSS) */}
      <circle className="hole-glow" cx={HOLE_CX} cy={HOLE_CY} r={215} fill="url(#holeGlow)" />

      {/* Rosette rings */}
      <circle cx={HOLE_CX} cy={HOLE_CY} r={140} fill="none" stroke="rgba(199,204,210,0.85)" strokeWidth={3} />
      <circle cx={HOLE_CX} cy={HOLE_CY} r={127} fill="none" stroke="rgba(236,239,243,0.55)" strokeWidth={6} strokeDasharray="4 6" />
      <circle cx={HOLE_CX} cy={HOLE_CY} r={114} fill="none" stroke="rgba(40,28,14,0.9)" strokeWidth={3} />

      {/* Sound hole + inner shadow */}
      <circle cx={HOLE_CX} cy={HOLE_CY} r={108} fill="url(#holeShadow)" />
      <path
        d={`M ${HOLE_CX - 86},${HOLE_CY - 34} A 108 108 0 0 1 ${HOLE_CX + 86},${HOLE_CY - 34}`}
        fill="none"
        stroke="rgba(255,232,200,0.24)"
        strokeWidth={4}
      />

      {/* Bridge + saddle + pins */}
      <rect x={968} y={232} width={94} height={306} rx={14} fill="url(#bridgeGrad)" stroke="rgba(0,0,0,0.5)" strokeWidth={2} />
      <rect x={984} y={246} width={8} height={278} rx={4} fill="#d8d2c0" />
      {sections.map((section, index) => (
        <g key={`pin-${section.id}`}>
          <circle cx={1010} cy={STRING_TOP + index * STRING_SPACING} r={8} fill="#e8e6dd" />
          <circle cx={1010} cy={STRING_TOP + index * STRING_SPACING} r={3} fill="#1a120a" />
        </g>
      ))}

      {/* Edge vignette (under the strings so they stay crisp) */}
      <rect x={-40} y={0} width={1280} height={640} fill="url(#vignette)" pointerEvents="none" />

      {/* Strings */}
      {sections.map((section, index) => (
        <GuitarString
          key={section.id}
          section={section}
          index={index}
          orientation="horizontal"
          main1={STRING_X1}
          main2={BRIDGE_PIN_X}
          cross={STRING_TOP + index * STRING_SPACING}
          labelMain={LABEL_X}
          reducedMotion={reducedMotion}
          onPluck={onPluck}
        />
      ))}
    </svg>
  );
}
