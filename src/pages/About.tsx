import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Target, Compass, Sparkles, User, Briefcase, Cpu, Award } from 'lucide-react';
import { parsedContent } from '../utils/contentParser';
import { DotPattern } from '../components/ui/Patterns';
import { SectionTitle } from '../components/ui/SectionTitle';
import { GlowCard } from '../components/ui/GlowCard';
import { AnimatedBackground } from '../components/ui/AnimatedBackground';

export function About() {
  // Use About paragraphs from content.md
  // Section 0, 1, 2, 3, etc. are available
  const mainStory = parsedContent.aboutSections;

  const timelineSteps = [
    { number: '01', title: 'Consultation & Planning', desc: 'Working with your managers to analyze skill gaps and project workloads.' },
    { number: '02', title: 'AI-Enhanced Sourcing', desc: 'Scanning our pre-screened technical network of 10,000+ candidates.' },
    { number: '03', title: 'Structured Verification', desc: 'Validating candidates through expert technical testing and reviews.' },
    { number: '04', title: 'Seamless Integration', desc: 'Handling background reviews, payroll, and compliance onboarding.' },
    { number: '05', title: 'On-Going Alignment', desc: 'Conducting regular performance tracking to ensure delivery quality.' },
  ];

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <DotPattern className="opacity-30" />

      {/* --- HERO SECTION --- */}
      <section className="py-20 px-6 relative overflow-hidden text-center bg-hero-secondary text-white">
        <div className="max-w-4xl mx-auto glass-dark p-8 md:p-12 rounded-3xl flex flex-col items-center gap-6 relative z-10 shadow-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 border border-white/20 text-white"
          >
            OUR STORIES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans leading-[1.1]"
          >
            Empowering Teams Through Strategic Talent
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl"
          >
            Nexamentes is dedicated to delivering next-generation IT staffing and workforce solutions that empower businesses to innovate and grow.
          </motion.p>
        </div>
      </section>

      {/* --- COMPANY STORY SECTION --- */}
      <section className="py-16 px-6 relative">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          {mainStory.slice(0, 3).map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              <div className="flex-1 flex flex-col gap-6 text-left">
                <span className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Focus Area 0{idx + 1}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-heading font-sans">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-4 text-sm text-body leading-relaxed">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="flex-1 max-w-[400px] w-full">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border-default shadow-xl relative">
                  <img
                    src={
                      idx === 0
                        ? 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=600&auto=format&fit=crop'
                        : idx === 1
                          ? 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'
                          : 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop'
                    }
                    alt={section.title}
                    className="w-full h-full object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MISSION & VISION & COMMITMENT --- */}
      <section className="py-24 px-6 bg-surface border-y border-border-default relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <GlowCard className="flex flex-col gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/15 to-accent/15 border border-primary/20 flex items-center justify-center text-primary">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-sans text-heading">Our Mission</h3>
            <p className="text-sm text-body leading-relaxed flex-grow">
              To connect businesses with highly capable professionals who possess the technical expertise, industry knowledge, and leadership qualities required to deliver meaningful results.
            </p>
          </GlowCard>

          {/* Vision */}
          <GlowCard className="flex flex-col gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/15 to-accent/15 border border-primary/20 flex items-center justify-center text-primary">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-sans text-heading">Our Vision</h3>
            <p className="text-sm text-body leading-relaxed flex-grow">
              To become a trusted global talent partner known for delivering smart, scalable, and AI-driven staffing solutions that help organizations thrive in an evolving digital economy.
            </p>
          </GlowCard>

          {/* Commitment */}
          <GlowCard className="flex flex-col gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/15 to-accent/15 border border-primary/20 flex items-center justify-center text-primary">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-sans text-heading">Our Commitment</h3>
            <p className="text-sm text-body leading-relaxed flex-grow">
              To maintain the highest standards of quality, transparency, and accountability in every hiring engagement to build lasting trust with our clients.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* --- OUR PROCESS TIMELINE --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Our Workforce Delivery Process"
            subtitle="A systematic, quality-focused framework that combines human sourcing expertise with AI efficiency."
            badge="ENGAGEMENT TIMELINE"
            align="center"
            className="mb-20"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-border-default -z-10" />

            {timelineSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4"
              >
                <div className="w-20 h-20 rounded-card glass-premium flex items-center justify-center text-2xl font-bold font-sans text-primary group hover:border-primary/35 transition-all shadow-lg relative">
                  {step.number}
                  <div className="absolute inset-0 rounded-card bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-bold text-base text-heading mt-2">{step.title}</h4>
                <p className="text-xs text-body leading-relaxed max-w-[220px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DETAILED WHY CHOOSE US GRID --- */}
      <section className="py-24 px-6 bg-surface border-t border-border-default relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Strategic Hiring Advantages"
            subtitle="Every resource is qualified and verified to fit your organizational model."
            badge="BENEFITS MATRIX"
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {parsedContent.whyChooseUs.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="p-6 rounded-card border border-border-default bg-card flex flex-col gap-4 text-left hover:border-primary/20 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-base text-heading font-sans">{item.title}</h4>
                <p className="text-xs text-body leading-relaxed flex-grow">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* --- CALL TO ACTION --- */}
      <section className="py-24 px-6 relative border-t border-border-default">
        <div className="max-w-5xl mx-auto glass-premium rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in srgb,var(--primary)10%,transparent),transparent_70%)] pointer-events-none" />

          <h3 className="text-3xl md:text-4xl font-extrabold text-gradient-primary font-sans mb-4">
            Create an Agile Workforce Framework
          </h3>
          <p className="text-sm sm:text-base text-body max-w-xl mx-auto mb-8">
            Collaborate with Nexamentes to address critical skill gaps, optimize budgets, and accelerate deployment schedules.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary rounded-full px-8 py-3.5 flex items-center gap-2">
              Speak With an Advisor <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
