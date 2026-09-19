import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface SketchyCard3DProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tiltStrength?: number;
}

// Module-level capability check so 15+ cards don't register duplicate listeners
let isTouchCapable: boolean | null = null;
const checkTouchCapability = () => {
  if (typeof window === 'undefined') return true;
  if (isTouchCapable === null) {
    const touchQuery = window.matchMedia('(pointer: coarse)').matches;
    const hoverQuery = !window.matchMedia('(hover: hover)').matches;
    const smallScreen = window.innerWidth < 768;
    isTouchCapable = touchQuery || hoverQuery || smallScreen;
  }
  return isTouchCapable;
};

if (typeof window !== 'undefined') {
  window.addEventListener('resize', () => {
    isTouchCapable = null;
  }, { passive: true });
}

export const SketchyCard3D: React.FC<SketchyCard3DProps> = ({
  children,
  className = '',
  onClick,
  tiltStrength = 10,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<{ left: number; top: number; width: number; height: number } | null>(null);

  const rotateXVal = useMotionValue(0);
  const rotateYVal = useMotionValue(0);
  const scaleVal = useMotionValue(1);

  const springRotateX = useSpring(rotateXVal, { stiffness: 280, damping: 22, mass: 0.5 });
  const springRotateY = useSpring(rotateYVal, { stiffness: 280, damping: 22, mass: 0.5 });
  const springScale = useSpring(scaleVal, { stiffness: 280, damping: 22, mass: 0.5 });

  const isTouch = useRef<boolean>(false);

  useEffect(() => {
    isTouch.current = checkTouchCapability();
  }, []);

  const handleMouseEnter = () => {
    if (isTouch.current || !cardRef.current) return;
    const domRect = cardRef.current.getBoundingClientRect();
    rectRef.current = {
      left: domRect.left,
      top: domRect.top,
      width: domRect.width,
      height: domRect.height,
    };
    scaleVal.set(1.015);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch.current) return;
    if (!rectRef.current) {
      if (!cardRef.current) return;
      const domRect = cardRef.current.getBoundingClientRect();
      rectRef.current = {
        left: domRect.left,
        top: domRect.top,
        width: domRect.width,
        height: domRect.height,
      };
    }

    const rect = rectRef.current;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -tiltStrength;
    const rY = ((x - centerX) / centerX) * tiltStrength;

    rotateXVal.set(rX);
    rotateYVal.set(rY);
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    rotateXVal.set(0);
    rotateYVal.set(0);
    scaleVal.set(1);
  };

  return (
    <div style={{ perspective: '1000px' }} className="w-full">
      <motion.div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          scale: springScale,
          transformStyle: 'preserve-3d',
        }}
        className={`relative ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
