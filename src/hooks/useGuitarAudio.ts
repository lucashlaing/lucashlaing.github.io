import { useCallback, useRef, useState } from "react";

/**
 * Plucked-string synthesis via the Karplus-Strong algorithm.
 *
 * A short burst of white noise is fed through a delay line whose length sets the
 * pitch; averaging neighbouring samples on each pass acts as a lowpass filter, so
 * the harsh noise quickly decays into a warm, guitar-like tone. We render the
 * whole note offline into an AudioBuffer (cached per frequency) and play it back
 * through a gain + lowpass node — no oscillators, no audio files.
 */
const NOTE_DURATION = 2.6; // seconds of decay rendered per pluck
const DECAY = 0.996; // feedback factor — higher = longer sustain

function renderString(ctx: AudioContext, frequency: number): AudioBuffer {
  const { sampleRate } = ctx;
  const length = Math.floor(sampleRate * NOTE_DURATION);
  const buffer = ctx.createBuffer(1, length, sampleRate);
  const data = buffer.getChannelData(0);

  // Delay-line length determines the fundamental pitch.
  const n = Math.max(2, Math.round(sampleRate / frequency));

  // Seed the delay line with noise, then run the KS feedback loop.
  for (let i = 0; i < length; i++) {
    if (i < n) {
      data[i] = Math.random() * 2 - 1;
    } else {
      data[i] = DECAY * 0.5 * (data[i - n] + data[i - n + 1]);
    }
  }

  // Fade the tail so the buffer ends at zero (avoids a click on stop).
  const fade = Math.floor(length * 0.12);
  for (let i = length - fade; i < length; i++) {
    data[i] *= (length - i) / fade;
  }

  return buffer;
}

export function useGuitarAudio() {
  const ctxRef = useRef<AudioContext | null>(null);
  const cacheRef = useRef<Map<number, AudioBuffer>>(new Map());

  // Mute lives in a ref (so `pluck`'s stable closure always reads the latest
  // value) mirrored by state (so the toggle button can re-render its icon).
  const mutedRef = useRef(false);
  const [muted, setMuted] = useState(false);

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      mutedRef.current = next;
      return next;
    });
  }, []);

  const getContext = (): AudioContext | null => {
    if (ctxRef.current) return ctxRef.current;
    const Ctor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctor) return null;
    ctxRef.current = new Ctor();
    return ctxRef.current;
  };

  const pluck = useCallback((frequency: number) => {
    if (mutedRef.current) return; // Sound muted — skip (and never spin up audio).

    const ctx = getContext();
    if (!ctx) return; // Web Audio unsupported — fail silently.

    // Browsers start the context suspended until a user gesture; the first
    // pluck (always triggered by a click/keypress) resumes it.
    if (ctx.state === "suspended") {
      void ctx.resume();
    }

    let buffer = cacheRef.current.get(frequency);
    if (!buffer) {
      buffer = renderString(ctx, frequency);
      cacheRef.current.set(frequency, buffer);
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    // Gentle lowpass softens the attack into something more acoustic.
    const tone = ctx.createBiquadFilter();
    tone.type = "lowpass";
    tone.frequency.value = 3200;

    const gain = ctx.createGain();
    gain.gain.value = 0.65;

    source.connect(tone).connect(gain).connect(ctx.destination);
    source.start();
    source.onended = () => {
      source.disconnect();
      tone.disconnect();
      gain.disconnect();
    };
  }, []);

  return { pluck, muted, toggleMute };
}
