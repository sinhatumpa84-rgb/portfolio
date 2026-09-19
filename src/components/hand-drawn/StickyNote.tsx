import React from 'react';
import { motion } from 'framer-motion';

interface StickyNoteProps {
  color?: 'yellow' | 'pink' | 'blue' | 'green';
  rotation?: number;
  className?: string;
  tape?: boolean;
  pin?: boolean;
  children: React.ReactNode;
}

export const StickyNote: React.FC<StickyNoteProps> = ({
  color = 'yellow',
  rotation = -2,
  className = '',
  tape = true,
  pin = false,
  children,
}) => {
  const colorMap = {
    yellow: 'bg-[#FEF9C3] text-[#713F12] border-[#EAB308]',
    pink: 'bg-[#FFE4E6] text-[#881337] border-[#FB7185]',
    blue: 'bg-[#E0F2FE] text-[#0C4A6E] border-[#38BDF8]',
    green: 'bg-[#DCFCE7] text-[#14532D] border-[#4ADE80]',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, rotate: rotation + 1 }}
      style={{ rotate: `${rotation}deg` }}
      className={`relative p-4 rounded-sm border-2 shadow-sketch transition-shadow hover:shadow-sketch-md ${colorMap[color]} ${className}`}
    >
      {/* Washi Tape */}
      {tape && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 washi-tape pointer-events-none z-10 opacity-90" />
      )}

      {/* Push Pin */}
      {pin && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 border border-ink shadow-sm z-10 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
        </div>
      )}

      <div className="font-sketch text-lg leading-snug">
        {children}
      </div>
    </motion.div>
  );
};
