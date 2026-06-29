import { useEffect } from 'react';
import { theme } from './theme';

export function ThemeInitializer() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--background', theme.background);
    root.style.setProperty('--foreground', theme.foreground);
    root.style.setProperty('--muted', theme.muted);
    root.style.setProperty('--border', theme.border);
    root.style.setProperty('--radius', theme.radius);
  }, []);

  return null;
}
