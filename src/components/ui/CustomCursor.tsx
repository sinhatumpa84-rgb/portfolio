import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return hasPointer && !prefersReducedMotion && window.innerWidth >= 768;
  });

  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorOpacity = useMotionValue(0);

  // Outer ring spring physics
  const ringX = useSpring(mouseX, { damping: 24, stiffness: 320, mass: 0.4 });
  const ringY = useSpring(mouseY, { damping: 24, stiffness: 320, mass: 0.4 });

  // Center dot snappy spring physics
  const dotX = useSpring(mouseX, { damping: 35, stiffness: 700 });
  const dotY = useSpring(mouseY, { damping: 35, stiffness: 700 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkSupport = () => {
      const hasPointer = window.matchMedia('(pointer: fine)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const valid = hasPointer && !prefersReducedMotion && window.innerWidth >= 768;
      setIsEnabled(valid);
    };

    const updatePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (cursorOpacity.get() === 0) {
        cursorOpacity.set(1);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, input, textarea, [role="button"], .cursor-pointer');
      setIsHovered(!!interactive);
    };

    const handleMouseLeave = () => {
      cursorOpacity.set(0);
    };

    const handleMouseEnter = () => {
      cursorOpacity.set(1);
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('resize', checkSupport, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', checkSupport);
    };
  }, [mouseX, mouseY, cursorOpacity]);

  if (!isEnabled) return null;

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity: cursorOpacity }}
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      {/* Outer Sketch Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-ink-900 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? '#C26A20' : '#191817',
          backgroundColor: isHovered ? 'rgba(222, 145, 86, 0.12)' : 'rgba(255, 255, 255, 0)',
        }}
        transition={{
          duration: 0.15,
          ease: 'easeOut',
        }}
      >
        {/* Subtle crosshair dot */}
        {isHovered && (
          <span className="w-1 h-1 rounded-full bg-kraft-600" />
        )}
      </motion.div>

      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-kraft-600 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          duration: 0.1,
          ease: 'easeOut',
        }}
      />
    </motion.div>
  );
};
