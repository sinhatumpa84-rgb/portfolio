import React from 'react';

interface InkStampProps {
  text: string;
  variant?: 'red' | 'green' | 'blue' | 'amber' | 'ink';
  rotation?: number;
  className?: string;
}

export const InkStamp: React.FC<InkStampProps> = ({
  text,
  variant = 'red',
  rotation = -4,
  className = '',
}) => {
  const variantStyles = {
    red: 'text-stamp-red border-stamp-red/80 bg-stamp-red/5',
    green: 'text-stamp-green border-stamp-green/80 bg-stamp-green/5',
    blue: 'text-blueprint-600 border-blueprint-600/80 bg-blueprint-50',
    amber: 'text-kraft-600 border-kraft-600/80 bg-kraft-50',
    ink: 'text-ink-900 border-ink-900/80 bg-ink-100/50',
  };

  return (
    <span
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`inline-flex items-center justify-center font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 text-xs rounded border-2 border-dashed shadow-sm select-none transition-transform hover:rotate-0 ${variantStyles[variant]} ${className}`}
    >
      {text}
    </span>
  );
};
