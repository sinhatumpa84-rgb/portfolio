import React from 'react';

interface DoodleArrowProps {
  className?: string;
  direction?: 'right' | 'down-right' | 'up-right' | 'curved-left';
  color?: string;
}

export const DoodleArrow: React.FC<DoodleArrowProps> = ({
  className = "w-12 h-12",
  direction = 'down-right',
  color = "#C26A20"
}) => {
  if (direction === 'curved-left') {
    return (
      <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M85 10 C60 10, 20 25, 25 65 M15 50 L25 67 L38 53"
          stroke={color}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'up-right') {
    return (
      <svg className={className} viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 55 C35 50, 65 40, 75 18 M58 16 L76 17 L78 35"
          stroke={color}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Default down-right
  return (
    <svg className={className} viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 15 C30 18, 55 25, 75 52 M60 55 L78 54 L75 38"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DoodleStar: React.FC<{ className?: string; color?: string }> = ({
  className = "w-6 h-6",
  color = "#DE9156"
}) => (
  <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25 5 L28 20 L43 23 L31 32 L35 47 L23 37 L12 45 L17 31 L6 21 L21 19 Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={`${color}22`}
    />
  </svg>
);

export const DoodleSparkle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-6 h-6",
  color = "#C26A20"
}) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 2 C20 12, 28 20, 38 20 C28 20, 20 28, 20 38 C20 28, 12 20, 2 20 C12 20, 20 12, 20 2 Z"
      fill={color}
    />
  </svg>
);

export const DoodleCircle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-16 h-16",
  color = "#DC2626"
}) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 12 C78 10, 92 32, 90 60 C88 84, 65 92, 42 90 C18 88, 8 68, 10 42 C12 18, 38 8, 70 12"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="300"
      strokeDashoffset="0"
    />
  </svg>
);

export const DoodleUnderline: React.FC<{ className?: string; color?: string }> = ({
  className = "w-36 h-4",
  color = "#DE9156"
}) => (
  <svg className={className} viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 18 Q 45 4, 95 16 T 196 10"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

export const DoodleBracket: React.FC<{ className?: string; color?: string }> = ({
  className = "w-4 h-16",
  color = "#191817"
}) => (
  <svg className={className} viewBox="0 0 30 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25 5 C10 8, 8 20, 10 45 C12 50, 4 52, 2 52 C4 52, 12 54, 10 59 C8 84, 10 94, 25 97"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);
