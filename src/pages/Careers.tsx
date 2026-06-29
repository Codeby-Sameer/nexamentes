import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, Cpu, Search, Settings, Award, 
  TrendingUp, Briefcase, Sparkles, Check, ArrowRight 
} from 'lucide-react';
import { parsedContent } from '../utils/content';
import { DotPattern } from '../components/ui/Patterns';
import { SectionTitle } from '../components/ui/SectionTitle';
import { GlowCard } from '../components/ui/GlowCard';
import { AnimatedBackground } from '../components/ui/AnimatedBackground';

export function Careers() {
  const programs = parsedContent.careers;

  // Map icons to the respective program IDs
  const getProgramIcon = (id: number) => {
    switch (id) {
      case 1:
        return Users;
      case 2:
        return Cpu;
      case 3:
        return Search;
      case 4:
        return Settings;
      case 5:
        return Award;
      case 6:
        return TrendingUp;
      case 7:
        return Briefcase;
      case 8:
        return Sparkles;
      default:
        return Briefcase;
    }
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <DotPattern className="opacity-30" />

      {/* --- HERO SECTION --- */}
      <section className="py-20 px-6 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-secondary/15 to-accent/15 border border-secondary/20 text-secondary"
          >
            CAREER DEVELOPMENT
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gradient-primary font-sans leading-[1.1]"
          >
            Nexa Career Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl"
          >
            Accelerate your professional growth in recruitment, staffing operations, and talent sourcing with our structured specialist programs.
          </motion.p>
        </div>
      </section>

      {/* --- PROGRAMS GRID SECTION --- */}
      <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => {
            const IconComponent = getProgramIcon(program.id);

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlowCard className="flex flex-col h-full gap-6 text-left relative overflow-hidden group hover:border-secondary/35 transition-all duration-300">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/25 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">Program 0{program.id}</span>
                      <h3 className="text-xl font-bold font-sans text-foreground leading-snug group-hover:text-secondary transition-colors duration-300">{program.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-foreground/60 leading-relaxed min-h-[3rem]">
                    {program.description}
                  </p>

                  {/* Benefits */}
                  <div className="flex flex-col gap-3 border-t border-white/5 pt-4 mt-auto">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider block">
                      Program Benefits
                    </span>
                    <div className="flex flex-col gap-2">
                      {program.benefits.map((benefit, benefitIdx) => (
                        <div key={benefitIdx} className="flex gap-2 items-start text-xs text-foreground/80 leading-normal">
                          <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 px-6 relative border-t border-white/5">
        <div className="max-w-5xl mx-auto glass-premium rounded-3xl p-10 md:p-16 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.1),transparent_70%)] pointer-events-none" />

          <h3 className="text-3xl md:text-4xl font-extrabold text-gradient-primary font-sans mb-4">
            Begin Your Career Transformation
          </h3>
          <p className="text-sm sm:text-base text-foreground/60 max-w-xl mx-auto mb-8">
            Connect with our program coordinators to learn more about enrollment schedules, curriculum paths, and placement opportunities.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary rounded-full px-8 py-3.5 flex items-center gap-2">
              Apply For Program <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
