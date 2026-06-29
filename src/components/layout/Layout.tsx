import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ThemeInitializer } from '../../theme/ThemeInitializer';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { WhatsAppWidget } from '../ui/WhatsAppWidget';

// Scroll to top helper when navigating to a new route
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  // Initialize Lenis smooth scroll
  useSmoothScroll();

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden selection:bg-secondary selection:text-white">
      {/* Centralized Theme custom variables */}
      <ThemeInitializer />

      {/* Toast Notification Handler */}
      <Toaster position="top-right" theme="dark" closeButton richColors />

      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Router Scroll restoration */}
      <ScrollToTop />

      {/* Core Page Render Outlet */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global WhatsApp Floating Widget */}
      <WhatsAppWidget />
    </div>
  );
}
