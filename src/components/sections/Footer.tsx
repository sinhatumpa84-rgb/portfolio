import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { DoodleStar } from '../hand-drawn/DoodleElements';
import { InkStamp } from '../hand-drawn/InkStamp';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-paper-200 border-t-3 border-ink-900 pt-12 pb-8 relative overflow-hidden" style={{ borderTop: '2.8px solid #191817' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b-2 border-dashed border-ink-300">
          
          {/* Identity & Tagline */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-bold text-xl text-ink-950">
                {PERSONAL_INFO.name}
              </span>
              <InkStamp text="2026 Edition" variant="amber" rotation={-2} />
            </div>
            <p className="font-sketch text-lg sm:text-xl text-kraft-700 font-bold">
              "{PERSONAL_INFO.footerTagline}"
            </p>
            <p className="font-mono text-xs text-ink-600">
              B.Tech IT Student @ JIS College of Engineering, Kalyani
            </p>
          </div>

          {/* Social Icons & Back to Top (Min 44px touch targets) */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-2.5">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl bg-white border-2 border-ink-900 shadow-sketch-sm hover:shadow-sketch hover:bg-kraft-100 active:scale-95 transition-all text-ink-900 flex items-center justify-center"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl bg-white border-2 border-ink-900 shadow-sketch-sm hover:shadow-sketch hover:bg-kraft-100 active:scale-95 transition-all text-blueprint-600 flex items-center justify-center"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl bg-white border-2 border-ink-900 shadow-sketch-sm hover:shadow-sketch hover:bg-kraft-100 active:scale-95 transition-all text-rose-600 flex items-center justify-center"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.email}
                aria-label="Email"
                className="w-11 h-11 rounded-xl bg-white border-2 border-ink-900 shadow-sketch-sm hover:shadow-sketch hover:bg-kraft-100 active:scale-95 transition-all text-emerald-600 flex items-center justify-center"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Back To Top Button */}
            <button
              onClick={scrollToTop}
              className="min-h-[44px] px-4 rounded-xl bg-ink-900 border-2 border-ink-900 shadow-sketch-sm hover:shadow-sketch text-paper-50 hover:bg-kraft-600 active:translate-y-0.5 transition-all flex items-center space-x-1.5 text-xs font-bold font-mono cursor-pointer"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright & Technical Colophon */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-600 font-mono gap-2 text-center sm:text-left">
          <div>
            © {PERSONAL_INFO.year} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Handcrafted with React, Three.js & Tailwind CSS</span>
            <DoodleStar className="w-4 h-4 text-kraft-500 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
