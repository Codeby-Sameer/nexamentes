import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Building, Sparkles } from 'lucide-react';
import { parsedContent } from '../utils/contentParser';
import { DotPattern } from '../components/ui/Patterns';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactInfo = parsedContent.contactSections[2] || parsedContent.contactSections[0];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Contact form payload:', data);
    toast.success('Your message has been sent successfully! Our experts will connect shortly.');
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    reset();
    setIsSubmitted(false);
  };

  return (
    <div className="relative min-h-screen">
      <DotPattern className="opacity-25" />

      {/* --- HERO SECTION --- */}
      <section className="py-16 px-6 text-center bg-hero-secondary text-white">
        <div className="max-w-4xl mx-auto glass-dark p-8 md:p-12 rounded-3xl flex flex-col items-center gap-6 shadow-2xl">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 border border-white/20 text-white">
            CONNECT WITH US
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans leading-[1.1]">
            Get In Touch
          </h1>
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
            Let’s start a conversation. Tell us your hiring requirements or talent goals, and our specialists will assist you.
          </p>
        </div>
      </section>

      {/* --- SPLIT GRID SECTION --- */}
      <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT: COMPANY INFORMATION */}
          <div className="lg:col-span-5 flex flex-col gap-10 text-left">
            <div className="flex flex-col gap-4">
              <span className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Nexamentes Hub
              </span>
              <h2 className="text-3xl font-extrabold font-sans text-heading">
                {contactInfo?.title || 'Connect with Our Talent Experts'}
              </h2>
              <p className="text-sm text-body leading-relaxed">
                {contactInfo?.description || 'Looking for skilled IT professionals or reliable staffing support? Our team is ready to assist you with fast, flexible, and AI-enabled hiring solutions.'}
              </p>
            </div>

            {/* Direct Channels */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-body/60 uppercase tracking-widest font-semibold">Email Us</p>
                  <a href="mailto:info@nexamentes.com" className="text-sm font-semibold text-heading hover:text-primary transition-colors">
                    info@nexamentes.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-body/60 uppercase tracking-widest font-semibold">Call Us</p>
                  <a href="tel:+18005553145" className="text-sm font-semibold text-heading hover:text-primary transition-colors">
                    +1 (800) 555-3145
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-body/60 uppercase tracking-widest font-semibold">Headquarters</p>
                  <span className="text-sm font-semibold text-heading">
                    4320 N BELTLINE RD, SUITE A225 IRVING, TX 75038.
                  </span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-body/60 uppercase tracking-widest font-semibold">India Office</p>
                  <span className="text-sm font-semibold text-heading">
                    #407, 4th floor, Capital park, Hitech city, Hyderabad 500081
                  </span>
                </div>
              </div>
            </div>



            {/* Social Links */}
            <div className="flex items-center gap-4 border-t border-border-default pt-6">
              <span className="text-xs text-body/50 font-medium mr-2">Follow Us:</span>
              <a href="https://www.linkedin.com/company/nexamentes-llc/" className="w-10 h-10 rounded-full border border-border-default flex items-center justify-center text-body/60 hover:text-primary hover:border-primary transition-all" aria-label="LinkedIn Profile">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-premium p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-6 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-semibold text-body/90 tracking-wide">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          {...register('name', { required: 'Name is required' })}
                          className={`w-full bg-background border border-border-default rounded-xl py-3 px-4 text-sm text-heading focus:outline-none focus:border-primary transition-all ${errors.name ? 'border-destructive/50 focus:border-destructive' : 'border-border-default'
                            }`}
                        />
                        {errors.name && <span className="text-[10px] text-destructive font-semibold">{errors.name.message}</span>}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-semibold text-body/90 tracking-wide">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="e.g. john@company.com"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                          })}
                          className={`w-full bg-background border border-border-default rounded-xl py-3 px-4 text-sm text-heading focus:outline-none focus:border-primary transition-all ${errors.email ? 'border-destructive/50 focus:border-destructive' : 'border-border-default'
                            }`}
                        />
                        {errors.email && <span className="text-[10px] text-destructive font-semibold">{errors.email.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs font-semibold text-body/90 tracking-wide">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          placeholder="e.g. +1 (555) 019-2834"
                          {...register('phone', { required: 'Phone is required' })}
                          className={`w-full bg-background border border-border-default rounded-xl py-3 px-4 text-sm text-heading focus:outline-none focus:border-primary transition-all ${errors.phone ? 'border-destructive/50 focus:border-destructive' : 'border-border-default'
                            }`}
                        />
                        {errors.phone && <span className="text-[10px] text-destructive font-semibold">{errors.phone.message}</span>}
                      </div>

                      {/* Company */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-xs font-semibold text-body/90 tracking-wide flex items-center gap-1">
                          Company <span className="text-body/60 font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-body/40" />
                          <input
                            id="company"
                            type="text"
                            placeholder="e.g. Acme Tech Inc"
                            {...register('company')}
                            className="w-full bg-background border border-border-default rounded-xl py-3 pl-10 pr-4 text-sm text-heading focus:outline-none focus:border-primary transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-semibold text-body/90 tracking-wide">
                        Your Message / Hiring Brief
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        placeholder="Detail your technology requirements, project timeline or desired developer background..."
                        {...register('message', { required: 'Message is required' })}
                        className={`w-full bg-background border border-border-default rounded-xl py-3 px-4 text-sm text-heading focus:outline-none focus:border-primary transition-all resize-none ${errors.message ? 'border-destructive/50 focus:border-destructive' : 'border-border-default'
                          }`}
                      />
                      {errors.message && <span className="text-[10px] text-destructive font-semibold">{errors.message.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 rounded-xl font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-primary/25 transition-all text-sm mt-2 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Inquiries <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center py-12 px-4 text-center gap-6"
                  >
                    <CheckCircle2 className="w-16 h-16 text-primary animate-pulse" />
                    <div>
                      <h3 className="text-2xl font-extrabold text-heading font-sans">Message Dispatched!</h3>
                      <p className="text-sm text-body leading-relaxed max-w-sm mt-2">
                        We have logged your requirements and will allocate a client manager to email you inside 12-24 business hours.
                      </p>
                    </div>
                    <button
                      onClick={handleResetForm}
                      className="btn-secondary rounded-xl px-6 py-3 cursor-pointer text-xs"
                    >
                      Submit Another Response
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
