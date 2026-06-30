import { Link } from 'react-router-dom';
import { ArrowRight, Cpu } from 'lucide-react';
import { toast } from 'sonner';
import { parsedContent } from '../../utils/contentParser';

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const emailInput = target.querySelector('input[type="email"]') as HTMLInputElement;
    if (emailInput.value) {
      toast.success('Thank you for subscribing to our newsletter!');
      emailInput.value = '';
    }
  };

  return (
    <footer className="relative bg-surface border-t border-border-default pt-14 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group w-max">
              <img
                src="/nexamentes.png"
                alt="Nexamentes Logo"
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-body leading-relaxed max-w-sm">
              Connecting forward-thinking organizations with world-class technology talent, powered by AI-driven staffing intelligence and recruitment process outsourcing.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/nexamentes-llc/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-border-default flex items-center justify-center text-body/60 hover:text-primary hover:border-primary transition-all"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-heading">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/" className="text-sm text-body hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-body hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-body hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/technologies" className="text-sm text-body hover:text-primary transition-colors">
                  Technologies
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-body hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-heading">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {parsedContent.services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#service-${service.id}`}
                    className="text-sm text-body hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-heading">Stay Connected</h4>
            <p className="text-sm text-body leading-relaxed">
              Subscribe to receive insights, tech updates, and talent strategy resources.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="input-field py-3 pl-4 pr-12 text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary text-primary-contrast flex items-center justify-center hover:bg-secondary hover:scale-105 transition-all cursor-pointer"
                  aria-label="Submit Newsletter"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-default pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-body/60">
            &copy; {new Date().getFullYear()} Nexamentes. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-xs text-body/60 hover:text-heading transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-xs text-body/60 hover:text-heading transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
