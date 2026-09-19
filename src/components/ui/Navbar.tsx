import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isHeroSection, setIsHeroSection] = useState<boolean>(true);

  useEffect(() => {
    // 1. Hero observer for navbar background transparency vs blurred state
    const heroEl = document.getElementById('home');
    let heroObserver: IntersectionObserver | null = null;
    if (heroEl) {
      heroObserver = new IntersectionObserver(
        ([entry]) => {
          setIsHeroSection(entry.isIntersecting);
        },
        { threshold: 0.3 }
      );
      heroObserver.observe(heroEl);
    }

    // 2. Section spy using IntersectionObserver (zero scroll layout reflows)
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-15% 0px -65% 0px',
      }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      heroObserver?.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', handleKeyDown);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKeyDown); };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Allow drawer exit and body overflow unlock before smooth scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 80);
  };

  return (
    <>
      {/* ═══════════════════════════════════════
          TOP NAV BAR
          • Hero: transparent with warm text
          • Scrolled: paper-tinted backdrop
      ═══════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeroSection
            ? 'bg-[#FAF6EF]/75 backdrop-blur-sm sm:bg-transparent'
            : 'bg-[#FAF6EF]/92 backdrop-blur-md border-b border-ink-900/10 shadow-xs'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14 sm:h-16">

            {/* ── Logo: "Supratik Sinha" handwritten + underline ── */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="shrink-0 group"
              aria-label="Supratik Sinha — home"
              id="nav-logo"
            >
              <div className="flex flex-col leading-none">
                <span
                  className="font-sketch text-lg sm:text-[22px] font-bold text-ink-950 transition-colors"
                >
                  Supratik Sinha
                </span>
                {/* Handwritten underline */}
                <svg viewBox="0 0 160 8" fill="none" className="w-32 sm:w-40 max-w-full h-1.5 mt-0.5" preserveAspectRatio="none">
                  <path
                    d="M3 5 Q 40 1, 80 5 T 157 4"
                    stroke="#191817"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </a>

            {/* ── Desktop Nav Links ── */}
            <nav className="hidden lg:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  id={`nav-${item.id}`}
                  className={`relative px-3.5 py-1.5 font-sans text-[13px] font-medium tracking-wide transition-colors rounded-md ${
                    activeSection === item.id
                      ? 'text-ink-950 font-bold'
                      : 'text-ink-700 hover:text-ink-950'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-ink-950 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* ── Right: Mobile Hamburger ── */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-11 h-11 flex items-center justify-center rounded-xl border-2 border-ink-900 bg-paper-100 shadow-sketch-sm hover:bg-kraft-100 active:scale-95 transition-all cursor-pointer"
                aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
                aria-expanded={isOpen}
                aria-controls="mobile-nav-drawer"
                id="nav-mobile-toggle"
              >
                {isOpen
                  ? <X className="w-5 h-5 text-ink-900" />
                  : <Menu className="w-5 h-5 text-ink-900" />
                }
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ════════════════════════════
          MOBILE DRAWER
      ════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-ink-950/60 backdrop-blur-xs"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel: Near full-width on mobile */}
            <motion.div
              key="drawer-panel"
              id="mobile-nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(90vw,360px)] bg-[#FAF6EF] border-l-2 sm:border-l-3 border-ink-900 shadow-sketch-xl flex flex-col overflow-hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b-2 border-ink-900 bg-paper-200">
                <div className="flex items-center space-x-2">
                  <span className="font-sketch text-lg text-ink-900 font-bold">Navigation</span>
                  <span className="font-mono text-[11px] text-kraft-700 bg-kraft-100 px-2 py-0.5 rounded border border-kraft-300">
                    Dossier
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-11 h-11 flex items-center justify-center rounded-xl border-2 border-ink-900 bg-paper-100 hover:bg-kraft-100 active:scale-95 transition-all cursor-pointer"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5 text-ink-900" />
                </button>
              </div>

              {/* Drawer links: 48-52px touch targets */}
              <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5" role="navigation" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.035 }}
                      className={`flex items-center justify-between min-h-[50px] px-4 py-3 rounded-xl border-2 font-sans font-bold text-[15px] transition-all active:scale-[0.98] ${
                        isActive
                          ? 'bg-ink-900 text-paper-100 border-ink-900 shadow-sketch-sm'
                          : 'text-ink-800 border-transparent hover:border-ink-200 hover:bg-paper-200'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <span className={`font-mono text-xs ${isActive ? 'text-kraft-300' : 'text-ink-400'}`}>
                          0{i + 1}.
                        </span>
                        <span>{item.label}</span>
                      </div>
                      {isActive && (
                        <span className="font-sketch text-xs text-kraft-300">✦ active</span>
                      )}
                    </motion.a>
                  );
                })}
              </nav>


            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
