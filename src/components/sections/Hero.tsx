import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/BrandIcons';

/* ─── Stagger animation helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay },
});

/* ─── Hand-drawn underline SVG ─── */
const KraftUnderline: React.FC = () => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
    className="origin-left max-w-full"
    aria-hidden="true"
  >
    <svg viewBox="0 0 240 12" fill="none" className="w-44 sm:w-56 max-w-full h-2.5 mt-1" preserveAspectRatio="none">
      <path
        d="M3 9 Q 60 2, 120 8 T 237 6"
        stroke="#C26A20"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  </motion.div>
);

/* ─── Code → Build → Improve badge ─── */
const CodeBuildImprove: React.FC = () => (
  <motion.div {...fadeUp(0.42)} className="flex items-center gap-1.5 flex-wrap">
    <span className="inline-flex items-center px-2 py-1 border-2 border-ink-800 rounded font-mono text-[11px] font-bold text-ink-800 bg-white/30 backdrop-blur-sm">
      &lt;/&gt;
    </span>
    <span className="font-mono text-[13px] text-ink-800">Code</span>
    <span className="text-kraft-600 font-bold text-base leading-none">→</span>
    <span className="font-mono text-[13px] text-ink-800">Build</span>
    <span className="text-kraft-600 font-bold text-base leading-none">→</span>
    <span className="font-mono text-[13px] text-ink-800">Improve</span>
  </motion.div>
);

/* ─── Handwritten eyebrow tag with curved arrow ─── */
const EyebrowTag: React.FC = () => (
  <motion.div {...fadeIn(0.1)} className="flex items-center gap-1 flex-wrap">
    <span className="font-sketch text-sm sm:text-base text-ink-700 leading-none select-none">
      Developer × Problem Solver × Dreamer
    </span>
    {/* Tiny curved arrow doodle */}
    <svg
      viewBox="0 0 42 28"
      fill="none"
      className="w-7 h-5 ml-0.5 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M5 7 C12 3, 28 5, 36 22"
        stroke="#6B5E4E"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M30 18 L36 22 L31 14"
        stroke="#6B5E4E"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </motion.div>
);

/* ─── Mobile Hero Portrait Card (Visible on < lg screens) ─── */
const MobileHeroPortrait: React.FC = () => (
  <motion.div
    {...fadeUp(0.24)}
    className="relative w-full max-w-[340px] xs:max-w-[370px] sm:max-w-[400px] md:max-w-[360px] mx-auto md:mx-0 my-2 sm:my-3 select-none"
  >
    {/* Outer Polaroid / Sketch Framing */}
    <div className="relative bg-white rounded-2xl border-2 border-ink-900 shadow-[4px_4px_0px_#191817] p-2.5 sm:p-3 overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
      {/* Hand-drawn Washi Tape Accent */}
      <div className="washi-tape absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 pointer-events-none z-20 opacity-90" />

      {/* Decorative corner draft marker */}
      <div className="absolute top-2.5 right-2.5 z-10">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-paper-100/90 backdrop-blur-xs border border-ink-900/30 font-mono text-[10px] font-bold text-ink-800">
          ✦ PORTRAIT
        </span>
      </div>

      {/* Responsive Image Frame */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-paper-200 border border-ink-900/15">
        <img
          src="/hero-photo.jpg"
          alt="Supratik Sinha — AI/ML & Full-Stack Developer"
          className="w-full h-full object-cover pointer-events-none"
          style={{
            /* Centered on Supratik: face, expression, hoodie & workspace */
            objectPosition: '64% 28%',
          }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        {/* Subtle bottom edge shade */}
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-ink-950/20 to-transparent pointer-events-none" />
      </div>

      {/* Hand-drawn Bottom Caption */}
      <div className="pt-2 px-1 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-sketch text-xs sm:text-sm text-ink-900 font-bold">Supratik @ work</span>
        </div>
        <span className="font-mono text-[10px] sm:text-[11px] text-ink-600 font-medium">Developer &amp; Builder</span>
      </div>
    </div>
  </motion.div>
);

/* ─── Scroll indicator ─── */
const ScrollIndicator: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.8, duration: 0.6 }}
    className="hidden sm:flex absolute bottom-8 sm:bottom-10 left-6 sm:left-10 z-30 flex-col items-center gap-1 pointer-events-none"
    aria-hidden="true"
  >
    <svg viewBox="0 0 22 36" fill="none" className="w-5 h-8" strokeWidth="1.8" stroke="#3D3934">
      <rect x="1.5" y="1.5" width="19" height="33" rx="9.5" />
      <motion.circle
        cx="11"
        cy="10"
        r="2.5"
        fill="#3D3934"
        animate={{ cy: [10, 20, 10] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
    <span className="font-sketch text-[10px] text-ink-600 mt-0.5">Scroll</span>
  </motion.div>
);

/* ══════════════════════════════════════════════════
   MAIN HERO
   Layout:
   • Desktop (lg+): Full-viewport background image with
     left gradient mask & left text column.
   • Tablet (md): 2-column layout with text on left
     and framed portrait card on right.
   • Mobile (<md): Intentional responsive portrait card
     stacked naturally with the headline.
══════════════════════════════════════════════════ */
export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport, { passive: true });
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  /* ─── Scroll Parallax Transforms ─── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Layer 0: Background Photo Parallax & Slow Zoom (Active on desktop lg+)
  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, isMobile ? 1.04 : 1.1]
  );
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ['0%', '0%'] : ['0%', isMobile ? '8%' : '15%']
  );

  // Layer 2: Hero Foreground Content Dissolve & Lift
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.65],
    prefersReducedMotion ? [0, 0] : [0, isMobile ? -20 : -45]
  );
  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.65],
    prefersReducedMotion ? [1, 1] : [1, 0.96]
  );

  // Layer 3: Hand-drawn Micro Marks in the transition boundary
  const microDetailsOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.7, 0.95], [0, 1, 1, 0]);
  const microDetailsY = useTransform(
    scrollYProgress,
    [0.15, 0.85],
    prefersReducedMotion ? [0, 0] : [14, -8]
  );

  // Layer 3: Morphing Organic Paper Curve
  const curveScaleY = useTransform(
    scrollYProgress,
    [0, 0.8],
    prefersReducedMotion ? [1, 1] : [0.75, 1.35]
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh' }}
      aria-label="Supratik Sinha — Portfolio Hero"
    >
      {/* ══════════════════════════════════════
          LAYER 0 — Full-bleed background photo
          (Desktop lg+ only)
      ══════════════════════════════════════ */}
      <motion.div
        style={{
          scale: bgScale,
          y: bgY,
          transformOrigin: 'center center',
        }}
        className="hidden lg:block absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <img
          src="/hero-photo.jpg"
          alt="Supratik Sinha — developer workspace"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            /* Pan right: show developer & desk; push the image's
               baked-in text (left side of mockup) further off-frame */
            objectPosition: '68% center',
          }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        {/* Bottom darkening for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111008]/55 via-transparent to-transparent" />

        {/* Top subtle darkening behind nav */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#FAF6EF]/40 to-transparent" />
      </motion.div>

      {/* ══════════════════════════════════════
          LAYER 1 — Left gradient mask
          (Desktop lg+ only)
      ══════════════════════════════════════ */}
      <div
        className="hidden lg:block absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            linear-gradient(
              to right,
              #F5EFE4 0%,
              #F5EFE4 22%,
              rgba(245,239,228,0.96) 30%,
              rgba(245,239,228,0.82) 38%,
              rgba(245,239,228,0.50) 46%,
              rgba(245,239,228,0.15) 56%,
              transparent 65%
            )
          `,
        }}
      />

      {/* ══════════════════════════════════════
          LAYER 2 — Hero content
          With scroll-driven dissolve & upward float
      ══════════════════════════════════════ */}
      <motion.div
        style={{
          opacity: contentOpacity,
          y: contentY,
          scale: contentScale,
        }}
        className="relative z-20 flex flex-col justify-center min-h-[100svh]"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

          {/* Responsive Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-0 items-center">

            {/* Text Content Column */}
            <div
              className="
                md:col-span-7 lg:col-span-6
                pt-20 pb-12
                sm:pt-24 sm:pb-16
                lg:pt-28 lg:pb-24
                flex flex-col gap-3.5 sm:gap-5
                w-full
                sm:max-w-[440px]
                lg:max-w-[480px]
              "
            >
              {/* 1. Eyebrow tag */}
              <EyebrowTag />

              {/* 2. Main heading — SINGLE INSTANCE with fluid clamp */}
              <div className="space-y-0">
                <motion.h1
                  {...fadeUp(0.18)}
                  className="font-sans font-extrabold text-ink-950 tracking-tight leading-[1.08]"
                  style={{ fontSize: 'clamp(2.15rem, 8.5vw, 5.25rem)' }}
                >
                  Hi, I'm<br />
                  <span className="relative inline-block">
                    Supratik.
                  </span>
                </motion.h1>
                <KraftUnderline />
              </div>

              {/* Mobile Portrait (Positioned intentionally right after headline on mobile <md) */}
              <div className="md:hidden">
                <MobileHeroPortrait />
              </div>

              {/* 3. Subtitle */}
              <motion.h2
                {...fadeUp(0.28)}
                className="font-sans font-bold text-ink-900 leading-snug"
                style={{ fontSize: 'clamp(1.1rem, 3.8vw, 1.45rem)' }}
              >
                Building intelligent digital<br className="hidden sm:block" /> experiences.
              </motion.h2>

              {/* 4. Body paragraph */}
              <motion.p
                {...fadeUp(0.35)}
                className="text-ink-800 leading-relaxed max-w-[38ch]"
                style={{ fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)' }}
              >
                {PERSONAL_INFO.shortIntro}
              </motion.p>

              {/* 5. Code → Build → Improve */}
              <CodeBuildImprove />

              {/* 6. CTA — Stacked thumb-friendly buttons on mobile, row on desktop */}
              <motion.div {...fadeUp(0.52)} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href="#projects"
                  id="hero-cta-explore"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="
                    group
                    inline-flex items-center justify-center gap-3
                    min-h-[50px] px-6 py-3
                    bg-ink-950 text-paper-50
                    font-sans font-bold
                    rounded-xl
                    border-2 border-ink-950
                    shadow-[4px_4px_0px_#3D3934]
                    hover:shadow-[6px_6px_0px_#3D3934]
                    hover:-translate-y-0.5 hover:-translate-x-0.5
                    active:translate-x-0 active:translate-y-0
                    active:shadow-[2px_2px_0px_#3D3934]
                    transition-all duration-150
                    select-none
                    cursor-pointer
                    text-center
                  "
                  style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}
                >
                  <span>Explore My Work</span>
                  <ArrowRight
                    className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform duration-150"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={PERSONAL_INFO.socials.email}
                  id="hero-cta-contact"
                  aria-label="Get in Touch via Email"
                  className="
                    inline-flex items-center justify-center gap-2
                    min-h-[50px] px-5 py-3
                    bg-white/80 hover:bg-white text-ink-900
                    font-sans font-bold
                    rounded-xl
                    border-2 border-ink-900
                    shadow-[3px_3px_0px_#191817]
                    hover:shadow-[5px_5px_0px_#191817]
                    hover:-translate-y-0.5
                    active:translate-y-0
                    active:shadow-[1.5px_1.5px_0px_#191817]
                    transition-all duration-150
                    select-none
                    cursor-pointer
                    text-center
                  "
                  style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}
                >
                  <Mail className="w-4 h-4 text-kraft-700" aria-hidden="true" />
                  <span>Get in Touch</span>
                </a>
              </motion.div>

              {/* 7. Social Quick Links in Hero */}
              <motion.div {...fadeUp(0.58)} className="pt-1 flex items-center gap-2">
                <span className="font-sketch text-xs text-ink-700 font-bold mr-1">Connect:</span>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/90 border-2 border-ink-900 shadow-sketch-xs hover:bg-ink-900 hover:text-white text-ink-900 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/90 border-2 border-ink-900 shadow-sketch-xs hover:bg-blueprint-600 hover:text-white text-blueprint-600 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/90 border-2 border-ink-900 shadow-sketch-xs hover:bg-rose-600 hover:text-white text-rose-600 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.email}
                  aria-label="Email"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/90 border-2 border-ink-900 shadow-sketch-xs hover:bg-emerald-600 hover:text-white text-emerald-600 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </motion.div>

            </div>

            {/* Tablet Portrait Column (md to <lg only) */}
            <div className="hidden md:flex lg:hidden md:col-span-5 items-center justify-center pt-20 pb-12">
              <MobileHeroPortrait />
            </div>

          </div>
        </div>
      </motion.div>

      {/* Scroll indicator (fades on scroll) */}
      <motion.div style={{ opacity: contentOpacity }}>
        <ScrollIndicator />
      </motion.div>

      {/* ══════════════════════════════════════
          LAYER 3 — DYNAMIC PAPER SHEET BOUNDARY
          Organic paper wave morphing & rising
          with hand-drawn micro marks into notebook
      ══════════════════════════════════════ */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Animated Hand-Drawn Micro Marks (Emerge during transition) */}
        <motion.div
          style={{ opacity: microDetailsOpacity, y: microDetailsY }}
          className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between pb-1.5 text-ink-700/85 font-mono text-[11px]"
        >
          {/* Left Drafting Folio Label */}
          <div className="flex items-center space-x-2">
            <span className="font-sketch text-xs sm:text-sm text-kraft-700 font-bold">✦ SECTION 01 //</span>
            <span className="hidden sm:inline tracking-wider text-[11px] text-ink-700 font-semibold">DEVELOPER DOSSIER</span>
          </div>

          {/* Center Pulsing Notebook Indicator */}
          <div className="flex items-center space-x-1.5 text-kraft-700">
            <span className="w-1.5 h-1.5 rounded-full bg-kraft-500 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-kraft-500 animate-pulse" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-kraft-500 animate-pulse" style={{ animationDelay: '300ms' }} />
            <span className="font-sketch text-xs sm:text-sm text-ink-900 font-bold ml-1">opening notebook ↓</span>
          </div>

          {/* Right Registration Cross */}
          <div className="hidden sm:flex items-center space-x-2 text-ink-600 font-mono text-[11px]">
            <span>+ 01 / FOLIO</span>
          </div>
        </motion.div>

        {/* Morphing Organic Paper Curve SVG */}
        <motion.div
          style={{
            scaleY: curveScaleY,
            transformOrigin: 'bottom center',
          }}
          className="w-full relative"
        >
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-16 block -mb-0.5"
            preserveAspectRatio="none"
          >
            {/* Delicate sketch guideline */}
            <path
              d="M0 40 C320 16, 720 12, 1440 34"
              stroke="#DE9156"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              opacity="0.45"
            />
            {/* Cream Paper Wave Fill */}
            <path
              d="M0 38 C260 18, 640 12, 980 24 C1220 32, 1360 20, 1440 22 L1440 64 L0 64 Z"
              fill="#FAF6EF"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
