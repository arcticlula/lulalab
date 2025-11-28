import { ref } from 'vue';

// Singleton refs so detection runs only once per session
const avifSupported = ref<boolean | null>(null);
let detectionInFlight: Promise<boolean> | null = null;

function runDetection(): Promise<boolean> {
  if (detectionInFlight) return detectionInFlight;
  detectionInFlight = (async () => {
    // Strategy 1: canvas toDataURL quick check
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 1; canvas.height = 1;
      const dataUrl = canvas.toDataURL('image/avif');
      if (dataUrl.startsWith('data:image/avif')) {
        avifSupported.value = true;
        return true;
      }
    } catch { /* ignore */ }

    // Strategy 2: embedded tiny AVIF sample (fast, no network)
    const sample = 'data:image/avif;base64,AAAAHGZ0eXBhdmlmAAACAGF2MDEAAACrbWV0YQAAAAAAAQAAAG1kYXQAAACUYXZpMDAwMGF2MW1pZjAxAAAADmZyZWUAAAAAAWZyZWUAAAAQdG8gYmUgZmlsbGVkIGJ5IG1wZGE=';
    const sampleOk = await new Promise<boolean>(resolve => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = sample;
    });
    if (sampleOk) {
      avifSupported.value = true;
      return true;
    }

    // Strategy 3: attempt to load an arbitrary avif path derived from first encountered media later (lazy) -> fallback false now
    avifSupported.value = false;
    return false;
  })();
  return detectionInFlight;
}

export function deriveAvifPath(original: string): string {
  if (!original) return original;
  if (original.toLowerCase().endsWith('.avif')) return original;
  const match = original.match(/^(.*\/(images|videos)\/)(.*)$/i);
  if (!match) return original;
  const base = match[1];
  const filename = match[3];
  const dot = filename.lastIndexOf('.');
  const stem = dot > -1 ? filename.substring(0, dot) : filename;
  return `${base}avif/${stem}.avif`;
}

export function getPreferredImage(original: string): string {
  // Always prefer derived AVIF candidate; fallback handled by <img @error> in components.
  return deriveAvifPath(original);
}

export function useAvif() {
  if (avifSupported.value === null) {
    // trigger detection asynchronously; components can optimistically attempt AVIF meanwhile
    void runDetection();
  }
  return { avifSupported, deriveAvifPath, getPreferredImage };
}
