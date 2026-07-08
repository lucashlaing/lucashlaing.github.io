type MuteToggleProps = {
  muted: boolean;
  onToggle: () => void;
  /** Chrome + placement supplied by the caller (hero float vs nav control). */
  className?: string;
};

/** Speaker / muted-speaker toggle. Shared by the hero float and the sticky nav. */
export default function MuteToggle({ muted, onToggle, className = "" }: MuteToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={muted}
      aria-label={muted ? "Unmute string sound" : "Mute string sound"}
      className={`flex items-center justify-center rounded-full outline-none transition-colors focus-visible:ring-2 focus-visible:ring-silver ${className}`}
    >
      {muted ? <MutedIcon /> : <SoundIcon />}
    </button>
  );
}

function SoundIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden focusable="false">
      <path d="M3 10v4h3l4 4V6L6 10H3z" fill="currentColor" />
      <path
        d="M15.5 8.8a4 4 0 0 1 0 6.4M17.8 6.4a7 7 0 0 1 0 11.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden focusable="false">
      <path d="M3 10v4h3l4 4V6L6 10H3z" fill="currentColor" />
      <path
        d="M15 9.5l5 5M20 9.5l-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
