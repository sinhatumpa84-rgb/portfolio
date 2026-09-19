import React, { useState } from 'react';
import { Send, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { InkStamp } from '../hand-drawn/InkStamp';
import { DoodleStar, DoodleUnderline } from '../hand-drawn/DoodleElements';
import { StickyNote } from '../hand-drawn/StickyNote';
import { LinkedinIcon, GithubIcon, InstagramIcon } from '../ui/BrandIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      import('canvas-confetti')
        .then(({ default: confetti }) => {
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#DE9156', '#2563EB', '#10B981', '#F43F5E'],
          });
        })
        .catch(() => {
          // Fallback silently if blocked
        });

      setFormData({ name: '', email: '', message: '' });
    }, 700);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-28 relative scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2">
            <InkStamp text="Direct Channel" variant="amber" rotation={-2} />
            <span className="font-sketch text-base sm:text-lg text-kraft-600">✦ open for collaborations</span>
          </div>
          <div className="relative mt-2 inline-block">
            <h2 className="fluid-section-title font-extrabold text-ink-950 tracking-tight">
              Have an idea?
            </h2>
            <DoodleUnderline className="w-40 sm:w-56 max-w-full h-3 text-kraft-500 mx-auto mt-1" />
          </div>
          <p className="mt-2.5 text-lg sm:text-2xl font-bold text-kraft-700 font-sketch">
            Let's build something interesting.
          </p>
          <p className="mt-1.5 text-xs sm:text-base text-ink-700 leading-relaxed max-w-md mx-auto">
            Whether you want to collaborate on an AI/ML prototype, discuss hackathons, or chat about tech, feel free to drop a message.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Direct Channels & Sticky Note */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Direct Channels Box */}
            <div
              className="bg-white rounded-2xl border-2 sm:border-3 border-ink-900 shadow-sketch p-4 sm:p-6 space-y-3"
              style={{ border: '2.8px solid #191817' }}
            >
              <h3 className="font-bold text-base sm:text-lg text-ink-950 border-b-2 border-dashed border-ink-200 pb-2.5 flex items-center justify-between">
                <span>Reach Out Directly</span>
                <DoodleStar className="w-5 h-5 text-kraft-500 shrink-0" />
              </h3>

              {/* Email Button */}
              <a
                href={PERSONAL_INFO.socials.email}
                aria-label="Email: sinhatumpa84@gmail.com"
                className="min-h-[48px] p-3 rounded-xl border-2 border-ink-300 bg-paper-50 hover:bg-white hover:border-ink-900 hover:shadow-sketch-sm active:translate-y-0.5 transition-all flex items-center space-x-3 text-ink-900"
              >
                <div className="p-2 rounded-lg bg-kraft-100 text-kraft-700 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-ink-500 block font-bold uppercase">Email</span>
                  <span className="text-xs sm:text-sm font-bold truncate block">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              {/* LinkedIn Button */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="min-h-[48px] p-3 rounded-xl border-2 border-ink-300 bg-paper-50 hover:bg-white hover:border-ink-900 hover:shadow-sketch-sm active:translate-y-0.5 transition-all flex items-center space-x-3 text-ink-900"
              >
                <div className="p-2 rounded-lg bg-blueprint-100 text-blueprint-600 shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-ink-500 block font-bold uppercase">LinkedIn</span>
                  <span className="text-xs sm:text-sm font-bold truncate block">linkedin.com/in/supratik-sinha-923ba637b</span>
                </div>
              </a>

              {/* GitHub Button */}
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="min-h-[48px] p-3 rounded-xl border-2 border-ink-300 bg-paper-50 hover:bg-white hover:border-ink-900 hover:shadow-sketch-sm active:translate-y-0.5 transition-all flex items-center space-x-3 text-ink-900"
              >
                <div className="p-2 rounded-lg bg-ink-100 text-ink-900 shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-ink-500 block font-bold uppercase">GitHub</span>
                  <span className="text-xs sm:text-sm font-bold truncate block">github.com/sinhatumpa84-rgb</span>
                </div>
              </a>

              {/* Instagram Button */}
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="min-h-[48px] p-3 rounded-xl border-2 border-ink-300 bg-paper-50 hover:bg-white hover:border-ink-900 hover:shadow-sketch-sm active:translate-y-0.5 transition-all flex items-center space-x-3 text-ink-900"
              >
                <div className="p-2 rounded-lg bg-rose-100 text-rose-600 shrink-0">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-ink-500 block font-bold uppercase">Instagram</span>
                  <span className="text-xs sm:text-sm font-bold truncate block">@supratiksinha052</span>
                </div>
              </a>
            </div>

            {/* Sticky Note */}
            <StickyNote color="yellow" rotation={1} tape={true} className="p-4">
              <span className="font-sketch text-base text-amber-950 font-bold block">
                ✦ Fast turnaround
              </span>
              <p className="font-sketch text-sm sm:text-base text-amber-900 mt-1 leading-snug">
                "Drop a line anytime. I check emails and GitHub messages daily between coding sessions."
              </p>
            </StickyNote>

          </div>

          {/* Right Column: Simple Mobile-First Form */}
          <div className="lg:col-span-7">
            <div
              className="bg-white rounded-2xl border-2 sm:border-3 border-ink-900 shadow-sketch p-4 sm:p-7 relative"
              style={{ border: '2.8px solid #191817' }}
            >
              <div className="flex items-center justify-between pb-3.5 border-b-2 border-dashed border-ink-200 mb-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-ink-950">
                    Send a Message
                  </h3>
                  <p className="text-xs text-ink-600 font-mono mt-0.5">
                    Validates inputs & ensures swift delivery
                  </p>
                </div>
                <InkStamp text="Quick Send" variant="green" rotation={2} />
              </div>

              {isSubmitted ? (
                <div className="p-6 sm:p-8 rounded-xl bg-paper-50 border-2 border-ink-900 text-center space-y-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 border-2 border-ink-900 shadow-sketch-sm flex items-center justify-center mx-auto text-emerald-700">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-ink-950">
                    Message Dispatched!
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-700 max-w-sm mx-auto leading-relaxed">
                    Thanks for getting in touch! Your note has been prepared for Supratik Sinha. I will get back to you promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="min-h-[44px] px-5 py-2.5 rounded-xl bg-ink-900 text-paper-50 font-bold text-xs sm:text-sm border-2 border-ink-900 shadow-sketch-sm hover:shadow-sketch active:translate-y-0.5 transition-all cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Input with >= 16px Font Size */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-bold text-ink-800 uppercase mb-1">
                      Your Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Supratik Sinha"
                      className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-paper-50 border-2 text-base text-ink-950 placeholder:text-ink-400 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500 bg-rose-50/50'
                          : 'border-ink-300 focus:border-ink-900 focus:bg-white focus:shadow-sketch-sm'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono font-bold text-ink-800 uppercase mb-1">
                      Your Email <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. supratik.dev@gmail.com"
                      className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-paper-50 border-2 text-base text-ink-950 placeholder:text-ink-400 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-500 bg-rose-50/50'
                          : 'border-ink-300 focus:border-ink-900 focus:bg-white focus:shadow-sketch-sm'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono font-bold text-ink-800 uppercase mb-1">
                      Message <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Tell me about your project, hackathon team, or inquiry..."
                      className={`w-full min-h-[110px] px-4 py-3 rounded-xl bg-paper-50 border-2 text-base text-ink-950 placeholder:text-ink-400 focus:outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-rose-500 bg-rose-50/50'
                          : 'border-ink-300 focus:border-ink-900 focus:bg-white focus:shadow-sketch-sm'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Large Send Message Button: Min 48px Touch Target */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-ink-900 text-paper-50 font-bold text-sm sm:text-base border-2 border-ink-900 shadow-sketch hover:shadow-sketch-lg hover:bg-kraft-600 hover:border-kraft-600 active:translate-y-0.5 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="font-mono text-xs flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
