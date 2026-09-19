import { useEffect, Suspense, lazy } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { CustomCursor } from './components/ui/CustomCursor';

// Below-the-fold sections dynamically imported to maximize First Contentful Paint
const Skills = lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })));
const Hackathons = lazy(() => import('./components/sections/Hackathons').then(m => ({ default: m.Hackathons })));
const ExperienceTimeline = lazy(() => import('./components/sections/ExperienceTimeline').then(m => ({ default: m.ExperienceTimeline })));
const Education = lazy(() => import('./components/sections/Education').then(m => ({ default: m.Education })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/sections/Footer').then(m => ({ default: m.Footer })));

/* ─────────────────────────────────────────────────
   SCROLL TRANSITION WRAPPER
   The hero section gently recedes (scale + darken)
   as the user scrolls into the content sections.
   NO sticky positioning — hero is a normal block.
   Content sections simply follow in normal flow.
───────────────────────────────────────────────── */
function HeroScrollEffect({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.75]);

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ scale, opacity, transformOrigin: 'center top' }}>
        {children}
      </motion.div>
    </div>
  );
}

export function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen w-full max-w-full bg-[#FAF6EF] text-ink-900 font-sans selection:bg-kraft-200 selection:text-ink-950 overflow-x-clip">
      <CustomCursor />
      <Navbar />

      <main className="w-full max-w-full overflow-x-clip">
        {/* Hero — layered scroll-driven parallax */}
        <HeroScrollEffect>
          <Hero />
        </HeroScrollEffect>

        {/* Content sections — Developer Notebook Paper Sheet Rising */}
        <div className="relative -mt-3 sm:-mt-6 z-10 bg-[#FAF6EF] rounded-t-[26px] sm:rounded-t-[40px] shadow-[0_-22px_60px_-12px_rgba(25,24,23,0.22)] border-t border-ink-900/10">
          
          {/* Notebook Folio Binding Header (Establishes the physical notebook metaphor) */}
          <div className="w-full pt-3 pb-2.5 px-3 sm:px-8 lg:px-12 flex items-center justify-between border-b border-dashed border-ink-300/60 select-none pointer-events-none max-w-7xl mx-auto gap-2">
            {/* Left Folio Tag */}
            <div className="flex items-center space-x-1.5 text-ink-600 font-mono text-[10px] sm:text-xs shrink-0">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-ink-900 bg-amber-400 inline-block" />
              <span className="font-bold">FOLIO // 01</span>
            </div>

            {/* Center Notebook Tab */}
            <div className="flex items-center space-x-1 font-sketch text-[11px] sm:text-sm text-kraft-700 bg-kraft-100/80 px-2.5 sm:px-3 py-0.5 rounded-full border border-kraft-300/60 truncate">
              <span>✦</span>
              <span className="truncate">Engineering Notebook & Field Notes</span>
            </div>

            {/* Right Page Index */}
            <div className="flex items-center space-x-1 font-mono text-[10px] sm:text-xs text-ink-500 font-semibold shrink-0">
              <span>PG. 01</span>
              <span>/ 07</span>
            </div>
          </div>

          <About />
          <Suspense fallback={null}>
            <Skills />
            <Projects />
            <Hackathons />
            <ExperienceTimeline />
            <Education />
            <Contact />
          </Suspense>
        </div>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
