import { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Briefcase, Compass, Brain, Shield, Layers, 
  Activity, Globe, Award, Cpu, FileCheck, MessageSquare, 
  TrendingUp, Clock, Zap, Wifi, X, Check, ArrowRight
} from 'lucide-react';
import { parsedContent, type Service } from '../utils/contentParser';
import { DotPattern } from '../components/ui/Patterns';
import { SectionTitle } from '../components/ui/SectionTitle';
import { GlowCard } from '../components/ui/GlowCard';

// Map ids to appropriate Lucide icons
const iconMap: Record<number, any> = {
  1: Users,
  2: Briefcase,
  3: Compass,
  4: Brain,
  5: Shield,
  6: Layers,
  7: Activity,
  8: Globe,
  9: Award,
  10: Cpu,
  11: FileCheck,
  12: MessageSquare,
  13: TrendingUp,
  14: Clock,
  15: Zap,
  16: Wifi
};

// Map ids to gradients
const gradientMap: Record<number, string> = {
  1: 'from-sky-500/10 to-indigo-500/10 border-sky-500/20 text-sky-400',
  2: 'from-violet-500/10 to-purple-500/10 border-violet-500/20 text-violet-400',
  3: 'from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-400',
  4: 'from-fuchsia-500/10 to-pink-500/10 border-fuchsia-500/20 text-fuchsia-400',
  5: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-400',
  6: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20 text-blue-400',
  7: 'from-red-500/10 to-rose-500/10 border-red-500/20 text-red-400',
  8: 'from-indigo-500/10 to-purple-500/10 border-indigo-500/20 text-indigo-400',
  9: 'from-yellow-500/10 to-amber-500/10 border-yellow-500/20 text-yellow-400',
  10: 'from-pink-500/10 to-rose-500/10 border-pink-500/20 text-pink-400',
  11: 'from-teal-500/10 to-emerald-500/10 border-teal-500/20 text-teal-400',
  12: 'from-cyan-500/10 to-sky-500/10 border-cyan-500/20 text-cyan-400',
  13: 'from-orange-500/10 to-red-500/10 border-orange-500/20 text-orange-400',
  14: 'from-purple-500/10 to-fuchsia-500/10 border-purple-500/20 text-purple-400',
  15: 'from-rose-500/10 to-pink-500/10 border-rose-500/20 text-rose-400',
  16: 'from-sky-500/10 to-teal-500/10 border-sky-500/20 text-sky-400'
};

const getServiceFeatures = (id: number): string[] => {
  switch(id) {
    case 1: return ["Contract Staffing", "Direct Hire Placement", "Temp-to-Perm Solutions", "Vetted Talent Match"];
    case 2: return ["Full Lifecycle Sourcing", "ATS & HRIS Optimization", "Candidate Experience Design", "Hiring Cost Reductions"];
    case 3: return ["Skills Gap Appraisals", "Workforce Trend Forecasting", "Strategic Scale Planning", "Capacity Alignment Consulting"];
    case 4: return ["LLM & Agent Engineers", "RAG Pipeline Specialists", "Prompt Design Architects", "Deep Learning Experts"];
    case 5: return ["Vendor Compliance Vetting", "Submittal Speed Automation", "SLA Performance Tracking", "VMS Tool Integration Support"];
    case 6: return ["Dedicated Agile Squads", "Project Delivery Leadership", "Scale-on-Demand engineers", "Milestone Progress Audits"];
    case 7: return ["Proactive Talent Pipelines", "Pre-screened Candidate Database", "Active Community Engagement", "Reduced Lead Hiring Time"];
    case 8: return ["GCC Scale Accelerators", "Global Setup Support", "Cross-Border Compliance", "Integrated Staffing Hubs"];
    case 9: return ["Diverse Talent Sourcing", "Blind Resume Screen Protocols", "DEI Metric Integrations", "Fair Sourcing Frameworks"];
    case 10: return ["Web3 & Cryptography Devs", "IoT Hardware/Software Devs", "RPA Engineering Specialists", "Niche Architecture Sourcing"];
    case 11: return ["Coding Sandbox Diagnostics", "SME Panel Evaluations", "Cognitive Skill Mapping", "Structured Tech Assessments"];
    case 12: return ["Nurtured Developer Networks", "Exclusive Tech Forums", "Referral Community Sourcing", "Passive Talent Engagement"];
    case 13: return ["Salary/Compensation Reports", "Talent Shortage Assessments", "Organizational Design Reviews", "Sourcing Roadmap Design"];
    case 14: return ["Short-term Project Contracts", "Long-term Permanent Hires", "Rapid Resource Deployment", "Compliance Advisory Support"];
    case 15: return ["AI CV Parsing Models", "Smart Skill Matching Engine", "Automated Background Scans", "Speed-to-Hire Optimization"];
    case 16: return ["Cross-border Compliance Setup", "Distributed Workflow Advisory", "Remote Culture Matching", "Remote Operations Optimization"];
    default: return ["AI-Assisted Vetting", "Sprints Scaling Ready", "Quality Vetted Talent", "Accelerated Pipeline"];
  }
};

export function Services() {
  const [activeServiceId, setActiveServiceId] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const serviceRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const location = useLocation();

  const scrollToService = (id: number) => {
    const element = serviceRefs.current[id];
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
      setActiveServiceId(id);
    }
  };

  // Observe active service on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.id.replace('service-', ''));
          if (!isNaN(id)) {
            setActiveServiceId(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    Object.values(serviceRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to initial hash if present
  useEffect(() => {
    if (location.hash) {
      const id = parseInt(location.hash.replace('#service-', ''));
      if (!isNaN(id)) {
        const timer = setTimeout(() => {
          scrollToService(id);
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [location.hash]);

  return (
    <div className="relative min-h-screen">
      <DotPattern className="opacity-25" />

      {/* --- HERO SECTION --- */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-secondary/15 to-accent/15 border border-secondary/20 text-secondary">
            CAPABILITIES
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gradient-primary font-sans leading-[1.1]">
            Our Staffing & Workforce Solutions
          </h1>
          <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl">
            Empowering organizations across the full technology lifecycle through flexible, scalable, and AI-driven hiring strategies.
          </p>
        </div>
      </section>

      {/* --- MOBILE STICKY QUICK NAVIGATOR --- */}
      <div className="lg:hidden sticky top-[72px] z-30 bg-background/90 backdrop-blur-md border-y border-white/5 py-3 px-6 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-2">
        {parsedContent.services.map((service) => (
          <button
            key={service.id}
            onClick={() => scrollToService(service.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeServiceId === service.id
                ? 'bg-secondary text-background font-bold shadow-md'
                : 'bg-white/5 text-foreground/70 hover:text-foreground'
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* --- SERVICES MATRIX SPLIT --- */}
      <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* STICKY SIDE NAVIGATION (DESKTOP) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 self-start pr-6 border-r border-white/5">
            <div className="relative">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/45 mb-6 pl-3">
                Solution Navigator
              </h3>
              
              {/* Progress Line Track */}
              <div className="absolute left-[19px] top-[40px] bottom-[20px] w-[2px] bg-white/5">
                <div
                  className="w-full bg-gradient-to-b from-secondary to-accent rounded-full"
                  style={{
                    height: `${((activeServiceId - 1) / (parsedContent.services.length - 1)) * 100}%`,
                    transition: 'height 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </div>

              <ul className="flex flex-col gap-2 relative z-10">
                {parsedContent.services.map((service) => (
                  <li key={service.id}>
                    <button
                      onClick={() => scrollToService(service.id)}
                      className={`w-full text-left pl-10 pr-3 py-2 rounded-xl text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 group relative ${
                        activeServiceId === service.id
                          ? 'text-secondary bg-secondary/5 font-extrabold'
                          : 'text-foreground/60 hover:text-foreground hover:bg-white/5'
                      }`}
                    >
                      {/* Nav Bullet Indicator */}
                      <span className={`absolute left-4 w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                        activeServiceId === service.id 
                          ? 'bg-secondary border-secondary scale-125 shadow-[0_0_8px_rgba(234,179,8,0.8)]' 
                          : 'bg-background border-white/20 group-hover:border-white/40'
                      }`} />
                      
                      <span className="truncate">{service.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* MAIN SERVICE CARDS LIST */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {parsedContent.services.map((service) => {
              const IconComp = iconMap[service.id] || Cpu;
              const styleClasses = gradientMap[service.id] || 'from-white/10 to-transparent';
              const features = getServiceFeatures(service.id);

              return (
                <motion.div
                  key={service.id}
                  id={`service-${service.id}`}
                  ref={(el) => { serviceRefs.current[service.id] = el; }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5 }}
                >
                  <GlowCard
                    className={`p-8 rounded-3xl border bg-gradient-to-br ${styleClasses} flex flex-col gap-5 text-left transition-all duration-300 relative group overflow-hidden ${
                      activeServiceId === service.id 
                        ? 'ring-2 ring-secondary/50 shadow-[0_0_30px_rgba(234,179,8,0.15)] scale-[1.01]' 
                        : 'hover:border-white/20'
                    }`}
                  >
                    {/* Decorative background circle */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-current opacity-[0.02] group-hover:scale-125 transition-transform duration-500" />
                    
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 relative text-current">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] text-foreground/45 font-bold uppercase tracking-wider">
                        Capability {service.id < 10 ? `0${service.id}` : service.id}
                      </span>
                    </div>

                    <h3 
                      onClick={() => scrollToService(service.id)}
                      className="text-2xl font-extrabold font-sans text-foreground mt-2 cursor-pointer hover:text-secondary transition-colors"
                    >
                      {service.title}
                    </h3>

                    <p className="text-sm text-foreground/75 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <h4 className="text-[10px] text-foreground/45 font-bold uppercase tracking-wider mb-3">
                        Key Pillars & Targets
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-foreground/70">
                            <Check className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="inline-flex items-center gap-1.5 text-xs text-secondary hover:text-white font-semibold group w-max border-b border-transparent hover:border-white pb-0.5 transition-colors cursor-pointer"
                      >
                        Deep Service Details <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- DETAILED SERVICE DETAILS POPUP/DIALOG MODAL --- */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl glass-premium p-8 rounded-3xl border border-white/10 shadow-2xl relative text-left"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-foreground/60 hover:text-foreground bg-white/5 rounded-full border border-white/10 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/25">
                  {(() => {
                    const IconComp = iconMap[selectedService.id] || Cpu;
                    return <IconComp className="w-6 h-6" />;
                  })()}
                </div>
                <div>
                  <span className="text-[10px] text-secondary font-bold uppercase tracking-widest">Service Details</span>
                  <h3 className="text-xl font-bold font-sans text-foreground">{selectedService.title}</h3>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {selectedService.description}
                </p>
                <div className="border-t border-white/5 pt-4">
                  <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2.5">Key Deliverables</h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground/60">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary flex-shrink-0" /> AI-augmented search</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary flex-shrink-0" /> Quick fill execution</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary flex-shrink-0" /> Full payroll setup</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary flex-shrink-0" /> Quality metrics logs</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 btn-secondary text-xs rounded-xl py-3"
                >
                  Dismiss
                </button>
                <Link
                  to="/contact"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 btn-primary text-xs rounded-xl py-3 text-center flex items-center justify-center"
                >
                  Inquire Now
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Services;
