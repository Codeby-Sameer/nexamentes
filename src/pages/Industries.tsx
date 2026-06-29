import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  DollarSign, Activity, Code, ShoppingBag, Settings, 
  Cloud, Shield, Wifi, Truck, Zap, ArrowRight 
} from 'lucide-react';
import { parsedContent } from '../utils/contentParser';
import { DotPattern } from '../components/ui/Patterns';
import { SectionTitle } from '../components/ui/SectionTitle';

// Map ids to appropriate Lucide icons
const iconMap: Record<number, any> = {
  1: DollarSign,
  2: Activity,
  3: Code,
  4: ShoppingBag,
  5: Settings,
  6: Cloud,
  7: Shield,
  8: Wifi,
  9: Truck,
  10: Zap
};

// Map ids to high-resolution Unsplash images
const imageMap: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop', // BFSI
  2: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop', // Healthcare
  3: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop', // IT
  4: 'https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=600&auto=format&fit=crop', // Retail
  5: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop', // Manufacturing
  6: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop', // Cloud
  7: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop', // Cybersecurity
  8: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop', // Telecom
  9: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop', // Logistics
  10: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop' // Energy
};

export function Industries() {
  return (
    <div className="relative min-h-screen">
      <DotPattern className="opacity-25" />

      {/* --- HERO SECTION --- */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-secondary/15 to-accent/15 border border-secondary/20 text-secondary">
            OUR REACH
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gradient-primary font-sans leading-[1.1]">
            Industries We Serve
          </h1>
          <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl">
            Delivering niche technological talent equipped with sector-specific knowledge and compliance familiarity.
          </p>
        </div>
      </section>

      {/* --- INDUSTRIES GRID --- */}
      <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parsedContent.industries.map((ind, idx) => {
            const IconComp = iconMap[ind.id] || Code;
            const imageUrl = imageMap[ind.id] || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop';

            return (
              <motion.div
                key={ind.id}
                id={`industry-${ind.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="group relative flex flex-col rounded-3xl border border-white/5 bg-muted/20 hover:border-secondary/30 transition-all duration-500 overflow-hidden shadow-xl"
              >
                {/* Image Header with Gradient Overlay */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={ind.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-muted/95 via-muted/40 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-6 w-10 h-10 rounded-xl bg-background border border-white/10 flex items-center justify-center text-secondary shadow-lg z-10">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col gap-3 text-left">
                  <h3 className="text-lg font-bold font-sans text-foreground">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-foreground/60 leading-relaxed flex-grow">
                    {ind.description}
                  </p>
                  
                  <div className="border-t border-white/5 pt-4 mt-2 flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="text-xs text-secondary hover:text-white font-semibold flex items-center gap-1 group/btn"
                    >
                      Inquire Sector Staffing <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- BOTTOM CALL TO ACTION --- */}
      <section className="py-24 px-6 border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            title="Need Domain-Specific Technical Experts?"
            subtitle="Connect with a vertical hiring specialist to explore custom talent networks."
            badge="vertical specialists"
            align="center"
          />
          <Link to="/contact" className="btn-primary rounded-full px-8 py-3.5 mt-8 inline-flex items-center gap-2">
            Speak to a Specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Industries;
