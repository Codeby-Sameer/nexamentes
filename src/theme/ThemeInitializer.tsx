import { useEffect } from 'react';
import { theme } from './theme';

export function ThemeInitializer() {
  useEffect(() => {
    const root = document.documentElement;
    
    // Colors
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--primary-contrast', theme.primaryContrast);
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--background', theme.background);
    root.style.setProperty('--section', theme.section);
    root.style.setProperty('--card', theme.card);
    root.style.setProperty('--heading', theme.heading);
    root.style.setProperty('--body', theme.body);
    root.style.setProperty('--border', theme.border);
    root.style.setProperty('--success', theme.success);
    root.style.setProperty('--warning', theme.warning);
    root.style.setProperty('--danger', theme.danger);

    // Shadows
    root.style.setProperty('--shadow-card', theme.shadowCard);
    root.style.setProperty('--shadow-primary', theme.shadowPrimary);
    root.style.setProperty('--shadow-glow', theme.shadowGlow);
    root.style.setProperty('--shadow-navbar', theme.shadowNavbar);

    // Radii
    root.style.setProperty('--radius-card', theme.radiusCard);
    root.style.setProperty('--radius-button', theme.radiusButton);
    root.style.setProperty('--radius-section', theme.radiusSection);
    root.style.setProperty('--radius-modal', theme.radiusModal);
  }, []);

  return null;
}
export default ThemeInitializer;
