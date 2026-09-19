import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Cpu, ArrowRight } from 'lucide-react';
import type { ProjectItem } from '../../types';
import { InkStamp } from '../hand-drawn/InkStamp';
import { DoodleStar } from '../hand-drawn/DoodleElements';
import { GithubIcon } from '../ui/BrandIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 md:p-6 overflow-hidden"
        >
        {/* Backdrop (Desktop & Tablet) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink-950/75 backdrop-blur-xs"
        />

        {/* Modal Window Container: Full-screen on mobile (<sm), Dialog on sm+ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-3xl lg:max-w-4xl bg-paper-50 sm:rounded-2xl border-0 sm:border-3 border-ink-900 shadow-sketch-xl z-10 flex flex-col overflow-hidden"
          style={{ border: '2.8px solid #191817' }}
        >
          {/* Top Sticky Header Bar */}
          <div className="bg-paper-200 border-b-2 border-ink-900 px-4 sm:px-6 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-2 truncate mr-3">
              <span className="w-3 h-3 rounded-full bg-rose-400 border border-ink-900 shrink-0" />
              <span className="w-3 h-3 rounded-full bg-amber-400 border border-ink-900 shrink-0" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 border border-ink-900 shrink-0" />
              <span id="modal-title" className="font-mono text-xs sm:text-sm font-bold text-ink-800 truncate pl-2">
                {project.title} — Dossier
              </span>
            </div>

            {/* Large 44x44px Touch Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-11 h-11 rounded-xl border-2 border-ink-900 bg-white hover:bg-rose-100 active:scale-95 text-ink-900 shadow-sketch-sm flex items-center justify-center cursor-pointer transition-all shrink-0 focus-visible:ring-2 focus-visible:ring-kraft-600 outline-none"
              aria-label="Close project modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 flex-1 [overscroll-behavior:contain]">
            
            {/* Header & Meta */}
            <div className="space-y-2 pb-5 border-b-2 border-dashed border-ink-200">
              <div className="flex flex-wrap items-center gap-2">
                <InkStamp text={project.category} variant="amber" rotation={-2} />
                <span className="font-sketch text-base text-kraft-700 font-bold">
                  ✦ Comprehensive Case Study
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-ink-950 tracking-tight leading-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-kraft-700">
                {project.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-ink-700 leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Action Links: Large Touch-Friendly Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[46px] px-4 py-2.5 rounded-xl bg-white border-2 border-ink-900 shadow-sketch-sm hover:shadow-sketch active:translate-y-0.5 text-sm font-bold text-ink-900 flex items-center justify-center space-x-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[46px] px-4 py-2.5 rounded-xl bg-ink-900 border-2 border-ink-900 shadow-sketch-sm hover:shadow-sketch hover:bg-kraft-600 active:translate-y-0.5 text-sm font-bold text-paper-50 flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Live Demo / Preview</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Handwritten Note Banner */}
            <div className="bg-[#FEF9C3] p-3.5 rounded-xl border-2 border-ink-900 shadow-sketch-sm flex items-center space-x-2.5">
              <DoodleStar className="w-5 h-5 text-amber-600 shrink-0" />
              <p className="font-sketch text-base sm:text-lg text-amber-950">
                "{project.handwrittenNote}"
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* The Problem */}
              <div className="p-4 rounded-xl bg-white border-2 border-ink-900 shadow-sketch-sm">
                <div className="flex items-center space-x-2 text-rose-600 font-bold text-xs font-mono uppercase mb-1.5">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-ink-800 leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>

              {/* The Solution */}
              <div className="p-4 rounded-xl bg-white border-2 border-ink-900 shadow-sketch-sm">
                <div className="flex items-center space-x-2 text-emerald-600 font-bold text-xs font-mono uppercase mb-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>The Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-ink-800 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* System Architecture Flow Diagram (Responsive Chips without Horizontal Overflow) */}
            <div className="p-4 sm:p-5 rounded-xl bg-paper-100 border-2 border-ink-900 shadow-sketch-sm">
              <div className="flex items-center space-x-2 font-mono text-xs font-bold text-ink-800 uppercase mb-3">
                <Cpu className="w-4 h-4 text-blueprint-600" />
                <span>Architecture & Data Flow</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {project.architecture.split('→').map((node, i, arr) => (
                  <React.Fragment key={i}>
                    <span className="px-2.5 py-1.5 bg-white rounded-lg border border-ink-300 font-mono text-xs sm:text-sm text-ink-900 font-semibold shadow-xs">
                      {node.trim()}
                    </span>
                    {i < arr.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-kraft-600 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm sm:text-base text-ink-950 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                <span>Key Features & Engineering Details</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-xl border border-ink-300 flex items-start space-x-2.5 text-xs sm:text-sm text-ink-800"
                  >
                    <span className="w-5 h-5 rounded-full bg-kraft-100 text-kraft-800 border border-kraft-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-mono text-xs font-bold text-ink-600 uppercase mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-paper-200 border border-ink-400 text-xs font-mono font-semibold text-ink-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="p-4 rounded-xl bg-white border-2 border-ink-900 shadow-sketch-sm">
              <span className="font-mono text-xs font-bold text-kraft-700 uppercase block mb-1">
                Results & Empirical Verification
              </span>
              <p className="text-xs sm:text-sm text-ink-800 leading-relaxed">
                {project.results}
              </p>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-3.5 sm:p-4 bg-paper-100 border-t-2 border-ink-900 flex items-center justify-between text-xs text-ink-600 font-mono shrink-0">
            <span className="truncate mr-2">Supratik Sinha ✦ Developer Portfolio</span>
            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] px-5 py-2 rounded-xl bg-ink-900 text-white font-bold text-xs hover:bg-ink-800 shrink-0"
            >
              Close Dossier [Esc]
            </button>
          </div>

        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
};
