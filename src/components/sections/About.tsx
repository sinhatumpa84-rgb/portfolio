import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Brain, 
  Cpu, 
  Layers, 
  Bot, 
  Database, 
  Users, 
  BarChart3, 
  BookOpen,
  CheckCircle2,
  Mail
} from 'lucide-react';
import { PERSONAL_INFO, FOCUS_AREAS } from '../../data/portfolioData';
import { DoodleArrow, DoodleStar, DoodleUnderline } from '../hand-drawn/DoodleElements';
import { StickyNote } from '../hand-drawn/StickyNote';
import { InkStamp } from '../hand-drawn/InkStamp';
import { LinkedinIcon, InstagramIcon } from '../ui/BrandIcons';

export const About: React.FC = () => {
  const [selectedFocus, setSelectedFocus] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const getFocusIcon = (title: string) => {
    switch (title) {
      case 'Artificial Intelligence': return <Brain className="w-5 h-5 text-purple-600" />;
      case 'Machine Learning': return <Cpu className="w-5 h-5 text-kraft-600" />;
      case 'Full-Stack Development': return <Layers className="w-5 h-5 text-blueprint-600" />;
      case 'AI-Powered Applications': return <Bot className="w-5 h-5 text-emerald-600" />;
      case 'LLM Automation': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Data-Driven Systems': return <Database className="w-5 h-5 text-rose-500" />;
      case 'Recruitment/HR Tech': return <Users className="w-5 h-5 text-indigo-600" />;
      case 'Intelligent Dashboards': return <BarChart3 className="w-5 h-5 text-teal-600" />;
      default: return <Sparkles className="w-5 h-5 text-kraft-600" />;
    }
  };

  return (
    <section id="about" className="py-14 sm:py-20 md:py-28 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Staggered Editorial Reveal */}
        <div className="flex flex-col items-start mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center space-x-2.5">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 2.2, rotate: -18, y: -16 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ type: "spring", stiffness: 420, damping: 22, delay: 0.08 }}
              className="inline-block"
            >
              <InkStamp text="Field Notes" variant="amber" rotation={-3} />
            </motion.div>
            
            <motion.span
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              className="font-sketch text-base sm:text-lg text-kraft-600"
            >
              ✦ who is supratik?
            </motion.span>
          </div>

          <div className="relative mt-2">
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1 } : { y: 16, opacity: 0 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              className="fluid-section-title font-extrabold text-ink-950 tracking-tight"
            >
              About & Technical Focus
            </motion.h2>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { scaleX: 0, opacity: 0 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              style={{ originX: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
            >
              <DoodleUnderline className="w-44 sm:w-60 max-w-full h-3 text-kraft-500 mt-1" />
            </motion.div>
          </div>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
            className="mt-2.5 text-sm sm:text-base md:text-lg text-ink-700 max-w-2xl leading-relaxed"
          >
            A developer notebook snapshot of my academic journey, core specialization, and where I spend my engineering energy.
          </motion.p>
        </div>

        {/* Responsive Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
          
          {/* Left Column: Identity & College Notebook Profile */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col space-y-4 sm:space-y-6"
          >
            
            {/* Notebook Identity Card */}
            <div className="bg-white rounded-2xl border-2 sm:border-3 border-ink-900 shadow-sketch p-4 sm:p-6 relative overflow-hidden">
              <div className="washi-tape absolute -top-2.5 left-8 sm:left-10 w-20 sm:w-28 h-5 pointer-events-none" />
              
              <div className="pt-2 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-ink-950 truncate">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs sm:text-sm font-mono text-kraft-600 font-semibold mt-0.5">
                    {PERSONAL_INFO.role}
                  </p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-paper-100 border-2 border-ink-900 shadow-sketch-sm flex items-center justify-center font-sketch text-lg sm:text-2xl font-bold text-ink-900 shrink-0">
                  SS
                </div>
              </div>

              {/* Education Block */}
              <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t-2 border-dashed border-ink-200 space-y-2.5 sm:space-y-3">
                <div className="flex items-start space-x-2.5 sm:space-x-3">
                  <GraduationCap className="w-5 h-5 text-blueprint-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-ink-900 text-sm sm:text-base leading-snug">
                      B.Tech in Information Technology
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-700 font-medium">
                      JIS College of Engineering, Kalyani
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5 sm:space-x-3 text-xs sm:text-sm text-ink-700 flex-wrap gap-1">
                  <Calendar className="w-4 h-4 text-kraft-600 shrink-0" />
                  <span className="font-mono text-[11px] sm:text-xs font-semibold bg-kraft-100/70 px-2 py-0.5 rounded border border-ink-300">
                    Current Status: {PERSONAL_INFO.currentStatus}
                  </span>
                </div>

                <div className="flex items-center space-x-2.5 sm:space-x-3 text-xs sm:text-sm text-ink-700">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Kalyani / West Bengal, India</span>
                </div>
              </div>

              {/* Undergrad Verified Badge */}
              <div className="mt-4 sm:mt-5 pt-3 border-t border-ink-100 flex items-center justify-between text-xs">
                <span className="font-mono text-ink-600 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Active Undergrad Builder
                </span>
                <span className="font-sketch text-sm text-kraft-700">
                  Ready to build
                </span>
              </div>

              {/* Social Channels Strip */}
              <div className="mt-3.5 pt-3 border-t-2 border-dashed border-ink-200 flex items-center justify-between text-xs">
                <span className="font-sketch text-sm text-ink-700">✦ Connect:</span>
                <div className="flex items-center space-x-2">
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-8 h-8 rounded-lg border-2 border-ink-900 bg-white hover:bg-blueprint-600 hover:text-white text-blueprint-600 transition-colors flex items-center justify-center shadow-sketch-xs"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="w-8 h-8 rounded-lg border-2 border-ink-900 bg-white hover:bg-rose-600 hover:text-white text-rose-600 transition-colors flex items-center justify-center shadow-sketch-xs"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.email}
                    aria-label="Email"
                    className="w-8 h-8 rounded-lg border-2 border-ink-900 bg-white hover:bg-emerald-600 hover:text-white text-emerald-600 transition-colors flex items-center justify-center shadow-sketch-xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Sticky Note: Personal Philosophy with 16px readable font */}
            <StickyNote color="yellow" rotation={1} tape={true} className="p-4 sm:p-5">
              <div className="flex items-start space-x-2.5">
                <BookOpen className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-ink-900">
                  <p className="font-sketch text-base font-bold text-kraft-800">My Approach to Building:</p>
                  <p className="mt-1 leading-relaxed">
                    "I believe software should feel tactile, fast, and remarkably intelligent. Whether building assistive vibration sensors or training classification models, I bridge theoretical AI with dependable user applications."
                  </p>
                </div>
              </div>
            </StickyNote>

            {/* Hand-drawn arrow note */}
            <div className="flex items-center space-x-2 pl-2">
              <DoodleArrow direction="right" className="w-8 h-8 text-kraft-600 shrink-0" />
              <span className="font-sketch text-sm text-ink-600">
                Explore the 8 focus domains ↳
              </span>
            </div>

          </motion.div>

          {/* Right Column: 8 Focus Areas (Single Column Mobile, 2-Col Tablet/Desktop) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="bg-paper-50 rounded-2xl border-2 sm:border-3 border-ink-900 shadow-sketch p-4 sm:p-6 relative">
              
              <div className="flex items-center justify-between pb-3 border-b-2 border-ink-900 mb-4 sm:mb-5">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-ink-950 flex items-center gap-2">
                    <span>Engineering Focus Areas</span>
                    <span className="text-xs font-mono font-normal bg-kraft-200 px-2 py-0.5 rounded border border-ink-900">
                      8 Pillars
                    </span>
                  </h3>
                  <p className="text-xs text-ink-600 font-sans mt-0.5">
                    Tap any card to inspect active research & development areas
                  </p>
                </div>
                <DoodleStar className="w-5 h-5 text-kraft-500 shrink-0" />
              </div>

              {/* Responsive Cards: 1 Col on small mobile, 2 Cols on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {FOCUS_AREAS.map((area, index) => {
                  const isSelected = selectedFocus === index;
                  return (
                    <div
                      key={area.title}
                      onClick={() => setSelectedFocus(isSelected ? null : index)}
                      className={`min-h-[48px] p-3.5 sm:p-4 rounded-xl border-2 cursor-pointer transition-all duration-150 relative select-none ${
                        isSelected
                          ? 'bg-white border-ink-900 shadow-sketch ring-2 ring-kraft-500/40'
                          : 'bg-white/85 border-ink-800 shadow-sketch-sm active:scale-98 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="p-2 rounded-lg bg-paper-100 border border-ink-300">
                          {getFocusIcon(area.title)}
                        </div>
                        <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-paper-200 text-ink-700">
                          #{area.tag}
                        </span>
                      </div>

                      <h4 className="font-bold text-sm sm:text-base text-ink-900 mt-2.5">
                        {area.title}
                      </h4>
                      <p className="text-xs text-ink-700 mt-1 leading-relaxed">
                        {area.description}
                      </p>

                      {isSelected && (
                        <div className="mt-2.5 pt-2 border-t border-dashed border-ink-200 flex items-center justify-between text-[11px] font-mono text-kraft-700 font-semibold">
                          <span>✦ Actively Developing</span>
                          <span>Applied to Projects</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Note */}
              <div className="mt-5 pt-3 border-t-2 border-dashed border-ink-200 flex flex-wrap items-center justify-between text-xs text-ink-600 gap-2">
                <span className="font-sketch text-sm text-ink-700">
                  Tip: Focus areas are applied directly to projects.
                </span>
                <span className="font-mono text-kraft-700 font-semibold">
                  2nd Year IT @ JIS College of Engineering
                </span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
