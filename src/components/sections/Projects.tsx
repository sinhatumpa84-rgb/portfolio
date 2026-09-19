import React, { useState } from 'react';
import { 
  ExternalLink, 
  Volume2, 
  Compass, 
  HeartPulse, 
  ShieldAlert, 
  ArrowUpRight, 
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import type { ProjectItem } from '../../types';
import { ProjectModal } from './ProjectModal';
import { SketchyCard3D } from '../3d/SketchyCard3D';
import { DoodleUnderline } from '../hand-drawn/DoodleElements';
import { InkStamp } from '../hand-drawn/InkStamp';
import { GithubIcon } from '../ui/BrandIcons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const renderProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Volume2': return <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />;
      case 'Compass': return <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-blueprint-600" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />;
      default: return <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-kraft-600" />;
    }
  };

  const categories = ['all', 'AI/ML', 'Full-Stack', 'Assistive Tech', 'Embedded / Systems'];

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-14 sm:py-20 md:py-28 relative scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 md:mb-12 gap-5 sm:gap-6">
          <div>
            <div className="flex items-center space-x-2">
              <InkStamp text="Flagship Works" variant="red" rotation={-3} />
              <span className="font-sketch text-base sm:text-lg text-rose-600">✦ core builds & systems</span>
            </div>
            <div className="relative mt-2">
              <h2 className="fluid-section-title font-extrabold text-ink-950 tracking-tight">
                Featured Projects
              </h2>
              <DoodleUnderline className="w-44 sm:w-64 max-w-full h-3 text-rose-500 mt-1" />
            </div>
            <p className="mt-2.5 text-sm sm:text-base md:text-lg text-ink-700 max-w-2xl leading-relaxed">
              Engineered solutions tackling speech accessibility, AI-guided exploration, clinical healthcare, and high-noise defence communications.
            </p>
          </div>

          {/* Touch-Friendly Filter Pills (Min 44px touch targets) */}
          <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-visible no-scrollbar gap-1.5 sm:gap-2 p-1.5 bg-paper-200/90 rounded-2xl border border-ink-400 max-w-full self-start md:self-auto shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`min-h-[44px] px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl capitalize transition-all cursor-pointer shrink-0 ${
                  filter === cat
                    ? 'bg-ink-900 text-white shadow-sketch-sm'
                    : 'text-ink-800 hover:text-ink-950 hover:bg-paper-100'
                }`}
              >
                {cat === 'all' ? 'All Builds (4)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Single-Column on Mobile, 2-Columns on Large Displays */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <SketchyCard3D key={project.id} tiltStrength={4}>
              <div
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white rounded-2xl border-2 sm:border-3 border-ink-900 shadow-sketch hover:shadow-sketch-lg active:scale-[0.99] transition-all duration-200 p-4 sm:p-7 md:p-8 flex flex-col justify-between cursor-pointer overflow-hidden"
                style={{ border: '2.8px solid #191817' }}
              >
                {/* Washi Tape Accent on Card Top */}
                <div
                  className={`absolute -top-3 right-4 sm:right-8 w-18 sm:w-24 h-5 pointer-events-none z-10 opacity-90 ${
                    idx % 2 === 0 ? 'washi-tape' : 'washi-tape-blue'
                  }`}
                />

                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-start justify-between pb-3 sm:pb-4 border-b-2 border-dashed border-ink-200 gap-2">
                    <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-paper-100 border border-ink-300 group-hover:scale-105 transition-transform shrink-0">
                        {renderProjectIcon(project.sketchIcon)}
                      </div>
                      <div className="min-w-0">
                        <span className="font-mono text-xs font-bold text-kraft-600 block truncate">
                          {project.category}
                        </span>
                        <h3 className="text-lg sm:text-2xl font-extrabold text-ink-950 tracking-tight leading-tight group-hover:text-kraft-600 transition-colors truncate">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-ink-300 flex items-center justify-center text-ink-600 group-hover:bg-ink-900 group-hover:text-white transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Subtitle & Description (Always Visible - No Hover Dependency) */}
                  <div className="mt-3 sm:mt-3.5 space-y-1">
                    <p className="text-xs sm:text-sm font-semibold text-ink-800">
                      {project.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-ink-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem Solved Snapshot */}
                  <div className="mt-3 sm:mt-3.5 p-2.5 sm:p-3 rounded-xl bg-paper-50 border border-ink-300">
                    <span className="font-mono text-[11px] font-bold text-rose-600 uppercase block mb-0.5">
                      Problem Solved
                    </span>
                    <p className="text-xs text-ink-800 line-clamp-2">
                      {project.problemSolved}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-3 sm:mt-3.5 space-y-1.5">
                    <span className="font-mono text-[11px] font-bold text-ink-500 uppercase block">
                      Key Highlights
                    </span>
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-ink-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Handwritten Annotation Banner */}
                  <div className="mt-3.5 sm:mt-4 p-2 rounded-lg bg-amber-50/90 border border-dashed border-amber-300 flex items-center space-x-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="font-sketch text-xs sm:text-sm text-amber-950 font-semibold truncate">
                      "{project.handwrittenNote}"
                    </span>
                  </div>
                </div>

                {/* Card Footer: Tech Tags & Large Touch Action Buttons */}
                <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t-2 border-dashed border-ink-200">
                  {/* Technologies (Wrapping cleanly) */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5 sm:mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-paper-100 border border-ink-300 text-[11px] sm:text-xs font-mono font-medium text-ink-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Primary [ View Project ] and Direct Links */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
                    {/* Primary Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="min-h-[48px] px-5 py-2.5 rounded-xl bg-ink-900 text-white font-bold text-sm border-2 border-ink-900 shadow-sketch-sm hover:bg-kraft-600 hover:border-kraft-600 active:translate-y-0.5 transition-all flex items-center justify-center space-x-2 cursor-pointer w-full sm:w-auto"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {/* Quick Repository Links */}
                    <div className="flex items-center justify-center space-x-2 w-full sm:w-auto" onClick={(e) => e.stopPropagation()}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 sm:flex-none min-h-[46px] px-3.5 py-2 rounded-xl bg-paper-100 hover:bg-white border border-ink-900 text-xs font-bold text-ink-900 flex items-center justify-center space-x-1.5 transition-all shadow-xs"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 sm:flex-none min-h-[46px] px-3.5 py-2 rounded-xl bg-paper-100 hover:bg-white border border-ink-900 text-xs font-bold text-ink-900 flex items-center justify-center space-x-1.5 transition-all shadow-xs"
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </SketchyCard3D>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
