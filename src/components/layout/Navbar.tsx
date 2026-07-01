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
        ? 'py-2 glass-premium shadow-lg shadow-black/20'
        : 'py-2 bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gapx-3 py-2 group">
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
              `relative text-sm font-medium transition-colors hover:text-white hover:bg-blue-600 px-3 py-2 rounded-full ${isActive ? 'text-white bg-blue-600 px-3 py-2 rounded-full' : 'text-body/90'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home

              </>
            )}
          </NavLink>



          {/* Solutions Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setActiveMegaMenu(activeMegaMenu === 'solutions' ? null : 'solutions')}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-white hover:bg-blue-600 px-3 py-2 rounded-full cursor-pointer ${activeMegaMenu === 'solutions' || location.pathname.startsWith('/services') || location.pathname.startsWith('/industries')
                ? 'text-white bg-blue-600 px-3 py-2 rounded-full'
                : 'text-body/90'
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
                    <div className="bg-card rounded-card p-4 shadow-navbar border border-border-default flex flex-col gap-2">
                      <Link
                        to="/services"
                        onClick={() => setActiveMegaMenu(null)}
                        className="group flex items-center justify-between rounded-card px-4 py-3 hover:bg-surface transition-colors text-left"
                      >
                        <span className="text-sm font-semibold text-heading group-hover:text-primary transition-colors">
                          Our Services
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-body/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </Link>

                      <Link
                        to="/industries"
                        onClick={() => setActiveMegaMenu(null)}
                        className="group flex items-center justify-between rounded-card px-4 py-3 hover:bg-surface transition-colors text-left"
                      >
                        <span className="text-sm font-semibold text-heading group-hover:text-primary transition-colors">
                          Industries We Serve
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-body/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
              `relative text-sm font-medium transition-colors hover:text-white hover:bg-blue-600 px-3 py-2 rounded-full ${isActive ? 'text-white bg-blue-600 px-3 py-2 rounded-full' : 'text-body/90'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Technologies

              </>
            )}
          </NavLink>

          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors hover:text-white hover:bg-blue-600 px-3 py-2 rounded-full ${isActive ? 'text-white bg-blue-600 px-3 py-2 rounded-full' : 'text-body/90'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Careers

              </>
            )}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors hover:text-white hover:bg-blue-600 px-3 py-2 rounded-full ${isActive ? 'text-white bg-blue-600 px-3 py-2 rounded-full' : 'text-body/90'
              }`
            }
          >
            {({ isActive }) => (
              <>
                About Us

              </>
            )}
          </NavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="btn-gradient px-5 py-2 text-xs flex items-center gap-1.5"
          >
            Get Staffed <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden px-3 py-2 text-body hover:text-heading cursor-pointer"
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
            className="lg:hidden absolute top-24 bg-white left-0 right-0 shadow-navbar border-t border-border-default overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${isActive ? 'text-primary' : 'text-body'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${isActive ? 'text-primary' : 'text-body'}`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${isActive ? 'text-primary' : 'text-body'}`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/industries"
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${isActive ? 'text-primary' : 'text-body'}`
                }
              >
                Industries
              </NavLink>
              <NavLink
                to="/technologies"
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${isActive ? 'text-primary' : 'text-body'}`
                }
              >
                Technologies
              </NavLink>
              <NavLink
                to="/careers"
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${isActive ? 'text-primary' : 'text-body'}`
                }
              >
                Careers
              </NavLink>

              <Link
                to="/contact"
                className="w-full btn-gradient py-3 text-sm flex items-center justify-center gapx-3 py-2 mt-4"
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
