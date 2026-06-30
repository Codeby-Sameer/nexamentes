import { motion } from 'framer-motion';
import { FileText, Award, Scale, HelpCircle, CheckCircle, Mail } from 'lucide-react';
import { DotPattern } from '../components/ui/Patterns';

export function TermsConditions() {
  return (
    <div className="relative min-h-screen py-12 px-6">
      <DotPattern className="opacity-25" />

      {/* --- HERO HEADER --- */}
      <section className="max-w-4xl mx-auto text-center mb-16 flex flex-col items-center gap-6 relative z-10 bg-hero-secondary p-8 md:p-12 rounded-3xl text-white shadow-2xl glass-dark">
        <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 border border-white/20 text-white flex items-center gap-1.5">
          <Scale className="w-3.5 h-3.5 text-white" /> LEGAL AGREEMENTS
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
          Terms & Conditions
        </h1>
        <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
          Last updated: June 29, 2026. Please read these terms carefully before accessing Nexamentes’ recruitment, candidate vetting, or staffing consultation portals.
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
              <CheckCircle className="w-5 h-5 text-primary" /> 1. Acceptable Use
            </h2>
            <p>
              By visiting our site or submitting information, you agree to comply with all applicable hiring regulations and local laws. You must not use our site or candidate submissions:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1 text-body/80">
              <li>To transmit inaccurate, fraudulent, or falsified professional qualifications.</li>
              <li>To scrape candidate rosters, profiles, or job vacancies without our authorization.</li>
              <li>To introduce security threats, scripts, or malicious tools that damage our database infrastructure.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-sans text-heading flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" /> 2. Client & Candidate Relationships
            </h2>
            <p>
              Nexamentes functions as a specialized intermediary connecting client corporations with technology talent. While we perform thorough screening, skills mapping, and assessment checks:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1 text-body/80">
              <li>Clients are responsible for final screening, background checks, and verification of candidate credentials before job placement.</li>
              <li>Candidates are responsible for verifying client terms, workplace safety, and job offer compliance.</li>
              <li>Staffing services are executed subject to separate service level agreements (SLAs) or master service agreements (MSAs) signed directly between Nexamentes and client entities.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-sans text-heading flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" /> 3. Intellectual Property Rights
            </h2>
            <p>
              All software algorithms, user experience graphics, website structures, text, and registered logo designs are owned by Nexamentes. You are prohibited from copying, distributing, or republishing website elements without express written permission.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-sans text-heading flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" /> 4. Limitation of Liability
            </h2>
            <p>
              In no event shall Nexamentes, its directors, or its partners be held liable for indirect, incidental, or consequential damages resulting from job recruitment delays, candidate performance, system downtime, or inaccuracies in talent databases, except as guaranteed in active signed contracts.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4 border-t border-border-default pt-8">
            <h2 className="text-xl font-bold font-sans text-heading flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" /> 5. Questions & Legal Inquiries
            </h2>
            <p>
              For legal clarification regarding these terms, candidate contracts, or corporate dispute resolutions, please write to:
            </p>
            <div className="flex items-center gap-3 mt-4 bg-card p-4 rounded-card border border-border-default w-max">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-[10px] text-body/60 uppercase tracking-widest font-semibold">Corporate Compliance</p>
                <a href="mailto:legal@nexamentes.com" className="text-sm font-semibold text-heading hover:text-primary transition-colors">
                  legal@nexamentes.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default TermsConditions;
