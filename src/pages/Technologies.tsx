import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles, Brain, Code, Database, Layers, Terminal, Shield, Cpu,
  TrendingUp, BarChart3, Settings, Cloud, Briefcase, CheckCircle2,
  Workflow, Palette, Globe, ArrowRight, Check
} from 'lucide-react';
import { parsedContent } from '../utils/content';
import { DotPattern } from '../components/ui/Patterns';
import { SectionTitle } from '../components/ui/SectionTitle';
import { GlowCard } from '../components/ui/GlowCard';
import { AnimatedBackground } from '../components/ui/AnimatedBackground';

export function Technologies() {
  const allTech = parsedContent.technologies;

  const getTechIcon = (name: string) => {
    if (name.includes('Generative AI')) return Sparkles;
    if (name.includes('Artificial Intelligence')) return Brain;
    if (name.includes('Python')) return Code;
    if (name.includes('Java')) return Database;
    if (name.includes('React')) return Layers;
    if (name.includes('DevOps')) return Terminal;
    if (name.includes('Cybersecurity')) return Shield;
    if (name.includes('Data Engineering')) return Cpu;
    if (name.includes('Data Science')) return TrendingUp;
    if (name.includes('Data Analytics')) return BarChart3;
    if (name.includes('Service Now')) return Settings;
    if (name.includes('Salesforce')) return Cloud;
    if (name.includes('SAP')) return Briefcase;
    if (name.includes('QA Automation')) return CheckCircle2;
    if (name.includes('Business Analysis')) return Workflow;
    if (name.includes('UI/UX')) return Palette;
    if (name.includes('Cloud & Network')) return Globe;
    return Cpu;
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <DotPattern className="opacity-25" />

      {/* --- HERO SECTION --- */}
      <section className="py-20 px-6 text-center bg-hero-secondary text-white">
        <div className="max-w-4xl mx-auto glass-dark p-8 md:p-12 rounded-3xl flex flex-col items-center gap-6 shadow-2xl">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 border border-white/20 text-white">
            TECHNOLOGY VERTICALS
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans leading-[1.1]">
            Tech Domains We Supply
          </h1>
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
            Vetted engineering talent across core software stacks, platform configuration, and predictive analysis.
          </p>
        </div>
      </section>

      {/* --- 17 CARDS GRID --- */}
      <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="Vetted Technology Domains"
          subtitle="Explore the 17 core engineering and platform capability domains we support with qualified professionals."
          badge="OUR STACK VERTICALS"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTech.map((tech, idx) => {
            const IconComp = getTechIcon(tech.name);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              >
                <GlowCard className="flex flex-col h-full gap-5 text-left relative overflow-hidden group hover:border-primary/35 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] text-body/60 font-bold uppercase tracking-widest">
                        Domain {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <h3 className="text-lg font-bold font-sans text-heading leading-snug group-hover:text-primary transition-colors duration-300">
                        {tech.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-body leading-relaxed mt-2 min-h-[4.5rem]">
                    {tech.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-border-default flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-success font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                      </span>
                      <span>Active</span>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 px-6 border-t border-border-default relative">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            title="Accelerate Your Sprints With Vetted Developers"
            subtitle="Tell us your tech stack and requirements, and we will present matched resumes within 48 hours."
            badge="on-demand talent"
            align="center"
          />
          <Link to="/contact" className="btn-primary rounded-full px-8 py-3.5 mt-8 inline-flex items-center gap-2">
            Inquire Stack Solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Technologies;
