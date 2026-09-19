import React from 'react';
import { GraduationCap, MapPin, Sparkles, School } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';
import { InkStamp } from '../hand-drawn/InkStamp';
import { DoodleUnderline } from '../hand-drawn/DoodleElements';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-14 sm:py-20 md:py-28 relative scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center space-x-2">
            <InkStamp text="Academic Path" variant="green" rotation={-2} />
            <span className="font-sketch text-base sm:text-lg text-emerald-700">✦ foundation & college</span>
          </div>
          <div className="relative mt-2">
            <h2 className="fluid-section-title font-extrabold text-ink-950 tracking-tight">
              Education & Background
            </h2>
            <DoodleUnderline className="w-44 sm:w-60 max-w-full h-3 text-emerald-500 mt-1" />
          </div>
          <p className="mt-2.5 text-sm sm:text-base text-ink-700 max-w-xl leading-relaxed">
            My formal engineering training in Kalyani and the schooling roots in Barrackpore that built my quantitative and computing foundations.
          </p>
        </div>

        {/* Notebook Spiral-Bound Cards (Single column mobile, 2-cols desktop) */}
        <div className="relative space-y-5 sm:space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 relative z-10">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={edu.institution}
                className="bg-white rounded-2xl border-2 sm:border-3 border-ink-900 shadow-sketch p-4 sm:p-7 flex flex-col justify-between relative overflow-hidden"
                style={{ border: '2.8px solid #191817' }}
              >
                {/* Spiral Notebook Ring Holes */}
                <div className="absolute top-0 inset-x-0 h-5 sm:h-6 bg-paper-200 border-b border-ink-300 flex items-center justify-around px-2 sm:px-4">
                  {[...Array(6)].map((_, i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-paper-100 border-2 border-ink-900 shadow-inner shrink-0"
                    />
                  ))}
                </div>

                <div className="pt-3 sm:pt-4">
                  {/* Card Header */}
                  <div className="flex items-start justify-between pb-3 border-b-2 border-dashed border-ink-200">
                    <div className="flex items-center space-x-2.5 sm:space-x-3">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-paper-100 border border-ink-300 shrink-0">
                        {idx === 0 ? (
                          <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blueprint-600" />
                        ) : (
                          <School className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                        )}
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-kraft-600 block">
                          {edu.statusOrYear}
                        </span>
                        <h3 className="text-base sm:text-xl font-bold text-ink-950 leading-tight">
                          {edu.institution}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Location & Degree */}
                  <div className="mt-3 sm:mt-3.5 space-y-1">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-ink-600">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-ink-900 pt-0.5">
                      {edu.degree}
                    </p>
                  </div>

                  {/* Details Bullet List */}
                  <div className="mt-3 sm:mt-3.5 space-y-1.5">
                    {edu.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-ink-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-kraft-500 shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Handwritten Annotation Footer */}
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t-2 border-dashed border-ink-200 bg-paper-50 -mx-4 -mb-4 sm:-mx-7 sm:-mb-7 p-3 sm:p-4 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-kraft-600 shrink-0" />
                  <p className="font-sketch text-xs sm:text-sm text-kraft-900 font-bold">
                    "{edu.handwrittenAnnotation}"
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
