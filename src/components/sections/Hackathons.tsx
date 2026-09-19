import React from 'react';
import { Flame, Clock, Users, Zap, ShieldCheck, Target } from 'lucide-react';
import { HACKATHON_BUILDS } from '../../data/portfolioData';
import { InkStamp } from '../hand-drawn/InkStamp';
import { DoodleUnderline } from '../hand-drawn/DoodleElements';
import { StickyNote } from '../hand-drawn/StickyNote';

export const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="py-14 sm:py-20 md:py-28 relative bg-[#F5EFEB]/60 border-y-2 border-ink-900 overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      
      {/* Background Notebook Graph Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30 notebook-grid" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center space-x-2">
            <InkStamp text="Sprint War Room" variant="red" rotation={-2} />
            <span className="font-sketch text-base sm:text-lg text-rose-700">✦ 24-36 hr builds</span>
          </div>
          <div className="relative mt-2">
            <h2 className="fluid-section-title font-extrabold text-ink-950 tracking-tight flex items-center gap-2 sm:gap-3">
              <span>Built Under Pressure.</span>
              <Flame className="w-6 h-6 sm:w-9 sm:h-9 text-rose-500 fill-rose-500 animate-pulse shrink-0" />
            </h2>
            <DoodleUnderline className="w-48 sm:w-80 max-w-full h-3 text-rose-500 mt-1" />
          </div>
          <p className="mt-2.5 text-sm sm:text-base md:text-lg text-ink-700 max-w-2xl leading-relaxed">
            Where ideas transform into tested software under strict countdown clocks. Hackathons are where I hone rapid prototyping, leadership, and resilient systems design.
          </p>
        </div>

        {/* 5 Core Pressure Pillars: Responsive Grid */}
        <div className="mb-8 sm:mb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
          {[
            { label: "Team Leadership", icon: <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kraft-600" /> },
            { label: "Rapid Prototyping", icon: <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" /> },
            { label: "Problem Solving", icon: <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500" /> },
            { label: "Collaboration", icon: <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" /> },
            { label: "Time Constraints", icon: <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blueprint-600" /> },
          ].map((pillar, idx) => (
            <div
              key={pillar.label}
              className={`p-2 sm:p-2.5 bg-white rounded-xl border-2 border-ink-900 shadow-sketch-sm flex items-center space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs font-bold text-ink-900 ${
                idx === 4 ? 'col-span-2 sm:col-span-1 justify-center sm:justify-start' : ''
              }`}
            >
              <div className="p-1 sm:p-1.5 rounded-lg bg-paper-100 border border-ink-300 shrink-0">
                {pillar.icon}
              </div>
              <span className="truncate">{pillar.label}</span>
            </div>
          ))}
        </div>

        {/* Hackathon Cards (Single Column Mobile, 3-Cols Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8">
          {HACKATHON_BUILDS.map((hack, index) => (
            <div
              key={hack.id}
              className="relative bg-white rounded-2xl border-2 sm:border-3 border-ink-900 shadow-sketch p-4 sm:p-6 flex flex-col justify-between"
              style={{ border: '2.8px solid #191817' }}
            >
              {/* Masking Tape */}
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-5 pointer-events-none opacity-90 ${
                  index === 0 ? 'washi-tape-red' : index === 1 ? 'washi-tape-blue' : 'washi-tape'
                }`}
              />

              <div>
                {/* Event & Badge */}
                <div className="flex items-start justify-between pb-3 border-b-2 border-dashed border-ink-200 pt-1">
                  <div>
                    <span className="font-mono text-xs font-bold text-rose-600 uppercase flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {hack.timeframe}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-ink-950 mt-1">
                      {hack.event}
                    </h3>
                  </div>
                  <InkStamp
                    text={hack.badge}
                    variant={index === 0 ? 'red' : index === 1 ? 'green' : 'amber'}
                    rotation={2}
                  />
                </div>

                {/* Role & Built */}
                <div className="mt-3.5 p-3 rounded-xl bg-paper-100 border border-ink-300 space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-ink-600 font-medium">Role:</span>
                    <span className="font-bold text-ink-950">{hack.role}</span>
                  </div>
                  <div className="pt-1 border-t border-ink-200 flex items-center justify-between text-xs font-mono">
                    <span className="text-ink-600 font-medium">Built:</span>
                    <span className="font-bold text-kraft-700 truncate ml-2">{hack.projectBuilt}</span>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="mt-3.5 space-y-2 text-xs text-ink-800">
                  <div>
                    <strong className="text-ink-950 block font-mono text-[11px] uppercase">The Challenge:</strong>
                    <p className="mt-0.5 text-ink-700 leading-relaxed">{hack.problem}</p>
                  </div>
                  <div>
                    <strong className="text-ink-950 block font-mono text-[11px] uppercase text-emerald-700">Sprint Delivery:</strong>
                    <p className="mt-0.5 text-ink-700 leading-relaxed">{hack.solution}</p>
                  </div>
                </div>

                {/* Takeaway */}
                <div className="mt-3.5 p-2.5 rounded-lg bg-amber-50/80 border border-amber-300 text-xs font-sketch text-amber-950">
                  "{hack.takeaway}"
                </div>
              </div>

              {/* Skills Tags */}
              <div className="mt-5 pt-3.5 border-t-2 border-dashed border-ink-200">
                <span className="font-mono text-[10px] uppercase font-bold text-ink-500 block mb-2">
                  Skills Proven Under Pressure
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {hack.skillsDemonstrated.map((sk) => (
                    <span
                      key={sk}
                      className="px-2 py-0.5 bg-paper-100 rounded text-[11px] font-mono font-medium text-ink-800 border border-ink-300"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Sticky Note Callout */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <StickyNote color="yellow" rotation={-1} tape={true} className="max-w-xl text-center p-4">
            <span className="font-sketch text-sm sm:text-base text-amber-950">
              "Under a 36-hour countdown, perfectionism is the enemy of shipping. You learn to prioritize core architecture, automate tests, and pitch with conviction."
            </span>
          </StickyNote>
        </div>

      </div>
    </section>
  );
};
