import { useState, useCallback, useRef } from 'react';

export function useSound() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const initAudio = () => {
    if (!audioCtxRef.current && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }
  };

  const playBlip = useCallback((freq = 440, type: OscillatorType = 'sine', duration = 0.08) => {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtxRef.current) return;
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio not supported or blocked
    }
  }, [soundEnabled]);

  const playClick = useCallback(() => {
    playBlip(620, 'triangle', 0.04);
  }, [playBlip]);

  const playSuccess = useCallback(() => {
    if (!soundEnabled) return;
    playBlip(523.25, 'sine', 0.1);
    setTimeout(() => playBlip(659.25, 'sine', 0.1), 100);
    setTimeout(() => playBlip(783.99, 'sine', 0.2), 200);
  }, [soundEnabled, playBlip]);

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  return { soundEnabled, toggleSound, playClick, playBlip, playSuccess };
}
