import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Sparkles, Cpu, Shield, Globe, Users, ArrowUpRight } from 'lucide-react';
import { parsedContent } from '../../utils/contentParser';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  // Key services for mega menu
  const featuredServices = parsedContent.services.slice(0, 4);
  // Key industries for mega menu
  const featuredIndustries = parsedContent.industries.slice(0, 4);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'py-4 glass-premium shadow-lg shadow-black/20'
        : 'py-4 bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/nexamentes.png"
            alt="Nexamentes Logo"
            className="h-18 w-auto object-contain"
          />

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-foreground/80'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-secondary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-foreground/80'
              }`
            }
          >
            {({ isActive }) => (
              <>
                About Us
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-secondary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>

          {/* Solutions Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setActiveMegaMenu(activeMegaMenu === 'solutions' ? null : 'solutions')}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-secondary cursor-pointer ${activeMegaMenu === 'solutions' || location.pathname.startsWith('/services') || location.pathname.startsWith('/industries')
                ? 'text-secondary'
                : 'text-foreground/80'
                }`}
            >
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform duration-350 ${activeMegaMenu === 'solutions' ? 'rotate-180' : ''}`} />
            </button>

            {/* Solutions Dropdown Menu */}
            <AnimatePresence>
              {activeMegaMenu === 'solutions' && (
                <>
                  {/* Backdrop overlay to close on click outside */}
                  <div
                    className="fixed inset-0 z-40 cursor-default"
                    onClick={() => setActiveMegaMenu(null)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full pt-4 w-56 z-50"
                  >
                    <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 flex flex-col gap-2">
                      <Link
                        to="/services"
                        onClick={() => setActiveMegaMenu(null)}
                        className="group flex items-center justify-between rounded-xl px-4 py-3 hover:bg-slate-50 transition-colors text-left"
                      >
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-secondary transition-colors">
                          Our Services
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </Link>

                      <Link
                        to="/industries"
                        onClick={() => setActiveMegaMenu(null)}
                        className="group flex items-center justify-between rounded-xl px-4 py-3 hover:bg-slate-50 transition-colors text-left"
                      >
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-secondary transition-colors">
                          Industries We Serve
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </Link>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/technologies"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-foreground/80'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Technologies
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-secondary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-foreground/80'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Careers
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-secondary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-white flex items-center gap-1 btn-cta-glow cursor-pointer"
          >
            Get Staffed <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground/80 hover:text-foreground cursor-pointer"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 glass-premium shadow-2xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${isActive ? 'text-secondary' : 'text-foreground/85'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${isActive ? 'text-secondary' : 'text-foreground/85'}`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${isActive ? 'text-secondary' : 'text-foreground/85'}`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/industries"
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${isActive ? 'text-secondary' : 'text-foreground/85'}`
                }
              >
                Industries
              </NavLink>
              <NavLink
                to="/technologies"
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${isActive ? 'text-secondary' : 'text-foreground/85'}`
                }
              >
                Technologies
              </NavLink>
              <NavLink
                to="/careers"
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${isActive ? 'text-secondary' : 'text-foreground/85'}`
                }
              >
                Careers
              </NavLink>

              <Link
                to="/contact"
                className="w-full text-center px-6 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 mt-4 btn-cta-glow cursor-pointer"
              >
                Get Staffed <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
