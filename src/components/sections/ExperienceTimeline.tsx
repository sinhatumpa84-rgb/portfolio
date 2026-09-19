import React from 'react';
import { Trophy, Award, Users, GraduationCap, Sparkles } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../../data/portfolioData';
import { InkStamp } from '../hand-drawn/InkStamp';
import { DoodleUnderline } from '../hand-drawn/DoodleElements';
import { SketchyCard3D } from '../3d/SketchyCard3D';

export const ExperienceTimeline: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hackathon': return <Award className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />;
      case 'competition': return <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />;
      case 'leadership': return <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blueprint-600" />;
      default: return <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="experience" className="py-14 sm:py-20 md:py-28 relative scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2">
            <InkStamp text="Milestone Track" variant="blue" rotation={-2} />
            <span className="font-sketch text-base sm:text-lg text-blueprint-600">✦ verified record</span>
          </div>
          <div className="relative mt-2 inline-block">
            <h2 className="fluid-section-title font-extrabold text-ink-950 tracking-tight">
              Experience & Achievements
            </h2>
            <DoodleUnderline className="w-44 sm:w-72 max-w-full h-3 text-blueprint-500 mx-auto mt-1" />
          </div>
          <p className="mt-2.5 text-sm sm:text-base text-ink-700 leading-relaxed">
            A chronological timeline of hackathon recognitions, competitive quiz awards, and collaborative team leadership.
          </p>
        </div>

        {/* Timeline Container: Left-aligned Vertical on Mobile, Centered Alternating on Desktop */}
        <div className="relative">
          
          {/* Hand-Drawn Timeline Line (Left on mobile, Center on md+) */}
          <div className="absolute left-3.5 sm:left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 sm:w-1 pointer-events-none z-0">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 10 1000" fill="none">
              <path
                d="M5 0 Q 8 250, 4 500 T 5 1000"
                stroke="#191817"
                strokeWidth="2.5"
                strokeDasharray="6 5"
              />
            </svg>
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-6 sm:space-y-12">
            {TIMELINE_MILESTONES.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-3 sm:gap-8`}
                >
                  {/* Timeline Center Badge / Node */}
                  <div className="absolute left-3.5 sm:left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl bg-white border-2 border-ink-900 shadow-sketch-sm flex items-center justify-center z-10 mt-1">
                    {getCategoryIcon(item.category)}
                  </div>

                  {/* Spacer for Alternate Desktop Layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card (Spans full width on mobile, half width on md+) */}
                  <div className="pl-8 sm:pl-12 md:pl-0 w-full md:w-1/2">
                    <SketchyCard3D tiltStrength={3}>
                      <div className="bg-white rounded-2xl border-2 sm:border-3 border-ink-900 shadow-sketch p-3.5 sm:p-6 relative">
                        
                        {/* Washi Tape */}
                        <div className="washi-tape absolute -top-2.5 right-4 sm:right-6 w-14 sm:w-20 h-5 pointer-events-none opacity-80" />

                        <div className="flex flex-wrap items-center justify-between gap-1.5 pb-2.5 border-b-2 border-dashed border-ink-200">
                          <span className="font-mono text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-paper-200 text-ink-800 border border-ink-400">
                            {item.year}
                          </span>
                          <InkStamp
                            text={item.badgeText}
                            variant={item.category === 'hackathon' ? 'red' : item.category === 'competition' ? 'amber' : 'green'}
                            rotation={1}
                          />
                        </div>

                        <div className="mt-2.5 sm:mt-3">
                          <h3 className="text-base sm:text-xl font-bold text-ink-950 leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs font-mono font-semibold text-kraft-600 mt-0.5">
                            {item.event}
                          </p>
                          <p className="text-xs sm:text-sm text-ink-700 mt-1.5 sm:mt-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Handwritten Comment */}
                        {item.handwrittenComment && (
                          <div className="mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-ink-100 flex items-start space-x-2">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span className="font-sketch text-xs sm:text-sm text-kraft-800 font-bold">
                              "{item.handwrittenComment}"
                            </span>
                          </div>
                        )}

                      </div>
                    </SketchyCard3D>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Section Target Anchor for Navigation */}
        <div id="achievements" className="h-1 -mt-10 scroll-mt-20" />

      </div>
    </section>
  );
};
