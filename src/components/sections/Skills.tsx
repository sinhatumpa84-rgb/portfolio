import React, { useState } from 'react';
import { 
  Terminal, 
  Code, 
  FileCode, 
  Layers, 
  Atom, 
  Layout, 
  Palette, 
  Wind, 
  Server, 
  Cpu, 
  Brain, 
  Sparkles, 
  Workflow, 
  Database, 
  Zap, 
  GitBranch, 
  GitPullRequest, 
  Monitor, 
  Box,
  Wrench
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { SketchyCard3D } from '../3d/SketchyCard3D';
import { DoodleUnderline } from '../hand-drawn/DoodleElements';
import { InkStamp } from '../hand-drawn/InkStamp';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Code': return <Code className="w-5 h-5" />;
      case 'FileCode': return <FileCode className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Atom': return <Atom className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Wind': return <Wind className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Workflow': return <Workflow className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5" />;
      case 'GitPullRequest': return <GitPullRequest className="w-5 h-5" />;
      case 'Monitor': return <Monitor className="w-5 h-5" />;
      case 'Box': return <Box className="w-5 h-5" />;
      default: return <Wrench className="w-5 h-5" />;
    }
  };

  const getAccentStyles = (accent: string) => {
    switch (accent) {
      case 'kraft': return { badge: 'bg-kraft-100 text-kraft-900 border-kraft-300' };
      case 'blue': return { badge: 'bg-blueprint-100 text-blueprint-900 border-blueprint-300' };
      case 'emerald': return { badge: 'bg-emerald-100 text-emerald-900 border-emerald-300' };
      case 'amber': return { badge: 'bg-amber-100 text-amber-900 border-amber-300' };
      case 'purple': return { badge: 'bg-purple-100 text-purple-900 border-purple-300' };
      case 'coral': return { badge: 'bg-rose-100 text-rose-900 border-rose-300' };
      default: return { badge: 'bg-ink-100 text-ink-900 border-ink-300' };
    }
  };

  const filteredCategories = activeCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="skills" className="py-14 sm:py-20 md:py-28 relative scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 md:mb-12 gap-5 sm:gap-6">
          <div>
            <div className="flex items-center space-x-2">
              <InkStamp text="Tech Arsenal" variant="green" rotation={-2} />
              <span className="font-sketch text-base sm:text-lg text-emerald-700">✦ verified toolbox</span>
            </div>
            <div className="relative mt-2">
              <h2 className="fluid-section-title font-extrabold text-ink-950 tracking-tight">
                Skills & Technologies
              </h2>
              <DoodleUnderline className="w-44 sm:w-60 max-w-full h-3 text-emerald-500 mt-1" />
            </div>
            <p className="mt-2.5 text-sm sm:text-base md:text-lg text-ink-700 max-w-xl leading-relaxed">
              From low-level systems programming in C to modern AI model pipelines and full-stack React frameworks.
            </p>
          </div>

          {/* Touch-Friendly Filter Buttons: Horizontally scrollable on mobile, wrapped on tablet/desktop */}
          <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-visible no-scrollbar gap-1.5 sm:gap-2 p-1.5 bg-paper-200/90 rounded-2xl border border-ink-400 max-w-full self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`min-h-[44px] px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-ink-900 text-white shadow-sketch-sm'
                  : 'text-ink-800 hover:text-ink-950 hover:bg-paper-100'
              }`}
            >
              All (6)
            </button>
            {SKILL_CATEGORIES.map(cat => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`min-h-[44px] px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer shrink-0 ${
                  activeCategory === cat.category
                    ? 'bg-ink-900 text-white shadow-sketch-sm'
                    : 'text-ink-800 hover:text-ink-950 hover:bg-paper-100'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards: Single Column Mobile, 2-Cols Tablet, 3-Cols Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredCategories.map((category) => {
            const styles = getAccentStyles(category.accent);
            return (
              <SketchyCard3D key={category.category} tiltStrength={3}>
                <div className="h-full bg-white rounded-2xl border-2 sm:border-3 border-ink-900 shadow-sketch hover:shadow-sketch-lg transition-all p-4 sm:p-6 flex flex-col justify-between group">
                  
                  {/* Category Header */}
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b-2 border-dashed border-ink-200">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-ink-950 flex items-center gap-2">
                          <span>{category.category}</span>
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${styles.badge}`}>
                            {category.skills.length} techs
                          </span>
                        </h3>
                        <p className="text-xs text-ink-600 mt-0.5 font-sans">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Items List (Full Width Touch Items) */}
                    <div className="mt-3.5 sm:mt-4 grid grid-cols-1 gap-2 sm:gap-2.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="min-h-[44px] p-2 sm:p-2.5 rounded-xl border border-ink-200 bg-paper-50/80 hover:bg-white hover:border-ink-900 hover:shadow-sketch-sm transition-all flex items-center justify-between gap-2"
                        >
                          <div className="flex items-center space-x-2.5 min-w-0">
                            <div className="p-1.5 rounded-lg bg-white border border-ink-300 text-ink-800 shrink-0">
                              {renderIcon(skill.iconName)}
                            </div>
                            <div className="min-w-0">
                              <span className="font-bold text-xs sm:text-sm text-ink-900 block leading-tight truncate">
                                {skill.name}
                              </span>
                              {skill.note && (
                                <span className="font-mono text-[10px] sm:text-[11px] text-ink-500 block truncate">
                                  {skill.note}
                                </span>
                              )}
                            </div>
                          </div>

                          {skill.level && (
                            <span className="font-sketch text-xs text-kraft-700 bg-kraft-100/60 px-2 py-0.5 rounded border border-kraft-300/40 shrink-0">
                              {skill.level}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Status */}
                  <div className="mt-4 sm:mt-5 pt-3 border-t border-ink-100 flex items-center justify-between text-xs text-ink-500 font-mono">
                    <span className="font-sketch text-sm text-ink-600">✦ Production tested</span>
                    <span>Ready</span>
                  </div>

                </div>
              </SketchyCard3D>
            );
          })}
        </div>

      </div>
    </section>
  );
};
