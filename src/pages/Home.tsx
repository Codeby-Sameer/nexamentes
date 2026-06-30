import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, Users, Award, Shield, Check, Clock, Code, Cloud, Database, Brain, Globe, MessageSquare } from 'lucide-react';
import { parsedContent } from '../utils/contentParser';
import { DotPattern, GridPattern } from '../components/ui/Patterns';
import { NumberTicker } from '../components/ui/NumberTicker';
import { SectionTitle } from '../components/ui/SectionTitle';
import { GlowCard } from '../components/ui/GlowCard';
import { AnimatedBackground } from '../components/ui/AnimatedBackground';
import TrustStrip from '@/components/TrustStrip';

interface AccordionItemType {
  id: number;
  title: string;
  imageUrl: string;
}

const accordionItems: AccordionItemType[] = [
  {
    id: 1,
    title: 'Voice Assistant',
    imageUrl: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'AI Image Generation',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'AI Chatbot + Local RAG',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'AI Agent',
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Visual Understanding',
    imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop',
  },
];

interface AccordionItemProps {
  item: AccordionItemType;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[320px] sm:h-[380px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out flex-shrink-0
        ${isActive ? 'w-[220px] sm:w-[320px] md:w-[400px]' : 'w-[50px] sm:w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error';
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${isActive
            ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
            // Inactive state: vertical, positioned at the bottom, for all screen sizes
            : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

const heroSlides = [
  {
    title: "Fueling Digital Growth with Exceptional IT Talent.",
    description: "Nexamentes bridges the gap between top-tier technical expertise and forward-thinking enterprises with premium IT staffing."
  },
  {
    title: "Discover your next career adventure! Shape the future with Nexamentes",
    description: "Join a workplace that values creativity, collaboration, and cutting-edge tech."
  },
  {
    title: "Turning Hiring Challenges into Growth Opportunities.",
    description: "Transforming workforce deployment and recruitment velocity to scale enterprise capabilities on demand."
  },
  {
    title: "Empowering Organizations Through Strategic Talent.",
    description: "We provide custom staffing and workforce process outsourcing designed to transform hiring velocity and quality."
  },
  {
    title: "Accelerate Gen-AI Tasks on Any Device",
    description: "Build high-performance AI apps on-device without the hassle of model compression or edge deployment."
  }
];

export function Home() {
  const [activeIndex, setActiveIndex] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  // Auto rotate accordion items and corresponding titles every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % accordionItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const stats = [
    { label: 'Specialists Placed', value: 1250, suffix: '+' },
    { label: 'Client Retention Rate', value: 98, suffix: '%' },
    { label: 'Average Time to Fill', value: 24, suffix: 'h' },
    { label: 'Skill Verticals Covered', value: 15, suffix: '+' },
  ];

  // Pick first 3 services for preview
  const servicesPreview = parsedContent.services.slice(0, 3);
  // Pick first 4 industries for preview
  const industriesPreview = parsedContent.industries.slice(0, 4);

  return (
    <div className="relative min-h-screen">
      {/* Decorative floating grids/blobs */}
      <DotPattern className="opacity-90" />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden px-6 bg-hero-secondary text-white">
        <AnimatedBackground />
        <GridPattern className="opacity-10 text-white/10" />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

          {/* Left Side: Text Content */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 border border-white/20 text-white w-max"
            >
              <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
              AI-Augmented Talent Solutions
            </motion.div>

            {/* Rotating Hero Title & Description */}
            <div className="relative min-h-[220px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex flex-col gap-4"
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white font-sans">
                    {heroSlides[activeIndex]?.title}
                  </h1>
                  <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl">
                    {heroSlides[activeIndex]?.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Link
                to="/contact"
                className="bg-white text-secondary hover:bg-blue-50 flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-transform hover:scale-[1.02]"
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="border border-white/30 text-white hover:bg-white/10 flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-transform hover:scale-[1.02]"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Image Accordion */}
          <div
            className="lg:col-span-6 w-full flex items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 overflow-x-auto p-4 w-full">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row inside Hero Section */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 relative z-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-card bg-white/5 border border-white/10 text-center group hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-white flex items-center justify-center font-sans tracking-tight">
                <NumberTicker value={stat.value} />
                <span>{stat.suffix}</span>
              </span>
              <span className="text-xs sm:text-sm text-blue-100/70 mt-2 font-medium tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MARQUEE TRUSTED BY --- */}
      <TrustStrip />

      {/* --- ABOUT PREVIEW --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-[400px] mx-auto border border-border-default shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                alt="Nexamentes team collaboration"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <SectionTitle
              title="Transforming the Future of Workforce Hiring"
              badge="WHO WE ARE"
              align="left"
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base text-body leading-relaxed"
            >
              {parsedContent.aboutSections[0]?.paragraphs[0]}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-body/70 leading-relaxed"
            >
              {parsedContent.aboutSections[0]?.paragraphs[1]}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-4 mt-2"
            >
              <Link to="/about" className="btn-primary flex items-center gap-2 rounded-full px-5 py-3">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES PREVIEW --- */}
      <section className="py-24 px-6 bg-surface border-y border-border-default relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Intelligent Staffing, Engineered for Performance"
            subtitle="Tailored resource alignment to match technical requirements and timelines."
            badge="OUR CORE SOLUTIONS"
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesPreview.map((service, idx) => (
              <GlowCard key={service.id} className="flex flex-col gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30">
                  {idx === 0 ? <Users className="w-5 h-5 text-primary" /> : idx === 1 ? <Cpu className="w-5 h-5 text-accent" /> : <Clock className="w-5 h-5 text-primary" />}
                </div>
                <h3 className="text-xl font-bold font-sans text-heading">{service.title}</h3>
                <p className="text-sm text-body leading-relaxed flex-grow">{service.description}</p>
                <Link
                  to={`/services#service-${service.id}`}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-semibold group mt-4 w-max"
                >
                  Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </GlowCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary rounded-full px-6 py-3 inline-flex items-center gap-2">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- AI STAFFING HIGHLIGHT --- */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto glass-premium rounded-3xl p-8 md:p-16 relative z-10 flex flex-col lg:flex-row items-center gap-12 text-left">
          <div className="flex-grow flex flex-col gap-6 lg:max-w-xl">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent/20 border border-accent/30 text-accent w-max">
              NEXT-GEN RECRUITMENT
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gradient-accent font-sans">
              AI & Generative AI Specialized Staffing
            </h3>
            <p className="text-base text-body leading-relaxed">
              We connect organizations with niche intelligence engineers specializing in Generative AI, Large Language Models (LLMs), Prompt Engineering, Machine Learning, and NLP architectures. Scale your cognitive infrastructure with the right expertise.
            </p>
            <div className="grid grid-cols-2 gap-4 my-2">
              <div className="flex items-center gap-2 text-sm text-body">
                <Check className="w-4 h-4 text-accent" /> LLM Fine-Tuning
              </div>
              <div className="flex items-center gap-2 text-sm text-body">
                <Check className="w-4 h-4 text-accent" /> Prompt Engineering
              </div>
              <div className="flex items-center gap-2 text-sm text-body">
                <Check className="w-4 h-4 text-accent" /> AI Pipeline DevOps
              </div>
              <div className="flex items-center gap-2 text-sm text-body">
                <Check className="w-4 h-4 text-accent" /> NLP Specialists
              </div>
            </div>
            <Link to="/contact" className="btn-gradient rounded-full px-6 py-3.5 mt-2 flex items-center gap-2 w-max">
              Consult an AI Talent Architect <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="w-full lg:w-[450px] aspect-video sm:aspect-square rounded-2xl overflow-hidden relative border border-border-default">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
              alt="Artificial Intelligence vector graphics coding"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent" />
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES GRID PREVIEW --- */}
      <section className="py-24 px-6 bg-surface border-t border-border-default relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Verticals We Power"
            subtitle="Industry-specific recruitment solutions designed to meet highly specialized vertical compliance standards."
            badge="SECTOR SPECIALIZATION"
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesPreview.map((ind, idx) => (
              <GlowCard key={ind.id} className="flex flex-col gap-4 text-left">
                <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-border-default text-primary">
                  {idx === 0 ? <Award className="w-5 h-5" /> : idx === 1 ? <Users className="w-5 h-5" /> : idx === 2 ? <Code className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
                </div>
                <h4 className="font-bold text-base font-sans text-heading">{ind.title}</h4>
                <p className="text-xs text-body/80 leading-relaxed flex-grow">{ind.description}</p>
                <Link to="/industries" className="text-xs text-primary hover:text-primary/80 font-medium flex items-center gap-1 group mt-2">
                  Explore <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US & CORE VALUES --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Why Leading Enterprises Choose Nexamentes"
            subtitle="Bridging the execution gap through specialized technology networks and metrics-focused delivery."
            badge="THE NEXAMENTES DIFFERENCE"
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parsedContent.whyChooseUs.slice(0, 4).map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4 p-6 rounded-card bg-card border border-border-default text-left items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 flex-shrink-0 mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-lg font-sans text-heading">{item.title}</h4>
                  <p className="text-sm text-body leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISION & COMMITMENTS SPLIT --- */}
      <section className="py-24 px-6 bg-surface border-y border-border-default relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Commitments */}
          <div className="flex flex-col gap-6 text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold font-sans text-gradient-primary">
              Our Core Commitment
            </h3>
            <p className="text-sm text-body leading-relaxed">
              We pledge execution excellence and transparency at each tier of talent delivery. Here is how we follow through:
            </p>
            <div className="flex flex-col gap-4">
              {parsedContent.commitments.slice(0, 4).map((c) => (
                <div key={c.id} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-body leading-relaxed">{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col gap-6 text-left lg:border-l lg:border-border-default lg:pl-16">
            <h3 className="text-2xl md:text-3xl font-extrabold font-sans text-gradient-primary">
              Our Vision
            </h3>
            <p className="text-sm text-body leading-relaxed">
              Reshaping the ecosystem where business potential and technical capability intersect seamlessly.
            </p>
            <div className="flex flex-col gap-6 mt-2">
              {parsedContent.visions.map((v) => (
                <div key={v.id} className="flex gap-4 items-start">
                  <div className="text-xs font-semibold text-primary px-2.5 py-1 rounded bg-primary/10 border border-primary/20 mt-0.5">
                    0{v.id}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-body leading-relaxed font-medium">
                      {v.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- GLOBAL CALL TO ACTION --- */}
      <section className="py-28 px-6 relative overflow-hidden text-center">
        <GridPattern className="opacity-15" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-8">
          <SectionTitle
            title="Ready to Build a High-Performing Tech Team?"
            subtitle="Talk to our technical talent placement professionals today and accelerate your deployment timelines."
            badge="GET STARTED"
            align="center"
          />
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="/contact"
              className="btn-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2 text-sm shadow-xl"
            >
              Contact Our Advisors <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="btn-secondary px-8 py-4 rounded-full font-semibold text-sm"
            >
              View Service Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
