import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { DotPattern } from '../components/ui/Patterns';

export function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen py-12 px-6">
      <DotPattern className="opacity-25" />

      {/* --- HERO HEADER --- */}
      <section className="max-w-4xl mx-auto text-center mb-16 flex flex-col items-center gap-6 relative z-10 bg-hero-secondary p-8 md:p-12 rounded-3xl text-white shadow-2xl glass-dark">
        <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 border border-white/20 text-white flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-white" /> LEGAL AGREEMENTS
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
          Privacy Policy
        </h1>
        <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
          Last updated: June 29, 2026. Learn how Nexamentes protects and manages your candidate profiles, hiring requirements, and personal data.
        </p>
      </section>

      {/* --- CONTENT CONTAINER --- */}
      <section className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-premium p-8 md:p-12 rounded-3xl shadow-2xl space-y-10 text-left text-body text-sm leading-relaxed"
        >
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-sans text-heading flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" /> 1. Information We Collect
            </h2>
            <p>
              We collect information that you directly provide to us when using our services or website, including when submitting resume credentials, applying to jobs, or registering hiring briefs. This may include:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1 text-body/80">
              <li>Contact details (e.g. name, email, phone number, physical address).</li>
              <li>Employment history, portfolios, skill validations, and resume documents.</li>
              <li>Company name, headcount requirements, job roles, and workforce goals.</li>
              <li>Communications and inquiries submitted via contact forms or email portals.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-sans text-heading flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" /> 2. How We Use Your Information
            </h2>
            <p>
              Nexamentes uses the collected details to orchestrate workforce staffing processes, including:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1 text-body/80">
              <li>Identifying, evaluating, and matching candidates with relevant tech jobs.</li>
              <li>Providing, analyzing, and improving our AI-enabled talent acquisition services.</li>
              <li>Communicating with you regarding job opportunities, compliance onboarding, or payroll.</li>
              <li>Securing our digital network, verifying candidate identities, and preventing fraudulent applications.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-sans text-heading flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" /> 3. Data Processing & AI Sourcing
            </h2>
            <p>
              We utilize intelligent screening algorithms to parse qualifications and match skills. Candidate data is processed securely and is never sold to third parties. We share data only with client companies with candidate approval, or to comply with vendor management systems (VMS) compliance protocols.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-sans text-heading flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" /> 4. Security & Data Retention
            </h2>
            <p>
              We enforce appropriate physical, administrative, and technical guardrails to protect your personal information against unauthorized access, leakage, or modification. We store your data only as long as necessary to fulfill recruitment agreements or to satisfy legal, tax, or regulatory obligations.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4 border-t border-border-default pt-8">
            <h2 className="text-xl font-bold font-sans text-heading">
              5. Contact Our Privacy Officer
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or the removal of your recruitment profiles, please reach out to us:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 bg-card p-6 rounded-card border border-border-default">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-body/60 uppercase tracking-widest font-semibold">Email</p>
                  <a href="mailto:privacy@nexamentes.com" className="text-sm font-semibold text-heading hover:text-primary transition-colors">
                    privacy@nexamentes.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-body/60 uppercase tracking-widest font-semibold">Phone</p>
                  <a href="tel:+18005553145" className="text-sm font-semibold text-heading hover:text-primary transition-colors">
                    +1 (800) 555-3145
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-body/60 uppercase tracking-widest font-semibold">Address</p>
                  <span className="text-sm font-semibold text-heading">
                    100 Pine Street, San Francisco, CA 94111
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
