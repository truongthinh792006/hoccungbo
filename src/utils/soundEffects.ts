/**
 * Zero-dependency Web Audio API sound synthesizer
 * Provides calming meditation chimes and subtle ticks for the Pomodoro Focus Timer
 */

class SoundEffectsService {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;

    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || 
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      
      if (AudioContextClass) {
        try {
          this.ctx = new AudioContextClass();
        } catch {
          return null;
        }
      }
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      try {
        this.ctx.resume();
      } catch {
        // Ignored if user gesture required
      }
    }

    return this.ctx;
  }

  /**
   * Resonant singing bowl / Zen chime upon completing a 25-minute focus session
   * Harmonics: 528Hz (fundamental), 1056Hz, 1584Hz
   */
  public playCompletionChime(): void {
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const harmonics = [
        { freq: 528, gain: 0.22, decay: 3.2 },
        { freq: 1056, gain: 0.10, decay: 2.8 },
        { freq: 1584, gain: 0.04, decay: 2.2 }
      ];

      harmonics.forEach(({ freq, gain, decay }, idx) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = 'sine';
        // Subtle microtonal chorus effect
        const detune = idx === 0 ? 0 : (idx % 2 === 0 ? 1.5 : -1.5);
        osc.frequency.setValueAtTime(freq + detune, now);

        gainNode.gain.setValueAtTime(0.0001, now);
        // Soft attack
        gainNode.gain.linearRampToValueAtTime(gain, now + 0.04);
        // Long serene exponential decay
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + decay + 0.1);
      });
    } catch {
      // Audio autoplay policy fail-safe
    }
  }

  /**
   * Soft wooden clock tick for active focus mode
   */
  public playTick(): void {
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.025);

      gainNode.gain.setValueAtTime(0.015, now);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.03);
    } catch {
      // Audio autoplay policy fail-safe
    }
  }
}

export const SoundEffects = new SoundEffectsService();
