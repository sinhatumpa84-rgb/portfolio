/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FDFBF7',
          100: '#FAF6EF',
          200: '#F2EBE0',
          300: '#E4DACB',
          400: '#C7B9A5',
          800: '#2A2521',
          900: '#1D1A18',
        },
        ink: {
          DEFAULT: '#191817',
          950: '#0F0E0D',
          900: '#191817',
          800: '#292724',
          700: '#3D3934',
          600: '#5C564F',
          500: '#7D756C',
          400: '#A39A8F',
          300: '#C9C2B8',
          200: '#E6E1D9',
          100: '#F3EFE9',
        },
        kraft: {
          DEFAULT: '#C26A20',
          50: '#FDF8F3',
          100: '#FAECE0',
          200: '#F4D4BB',
          300: '#EAB68C',
          400: '#DE9156',
          500: '#C26A20',
          600: '#A35114',
          700: '#823D10',
          800: '#643011',
          900: '#4D240E',
        },
        blueprint: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        stamp: {
          red: '#DC2626',
          coral: '#F43F5E',
          green: '#059669',
          amber: '#D97706',
          purple: '#7C3AED',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sketch: ['"Caveat"', '"Architects Daughter"', 'cursive'],
        hand: ['"Architects Daughter"', '"Caveat"', 'cursive'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'sketch-sm': '2px 2px 0px #191817',
        'sketch': '3.5px 3.5px 0px #191817',
        'sketch-md': '5px 5px 0px #191817',
        'sketch-lg': '7px 7px 0px #191817',
        'sketch-xl': '10px 10px 0px #191817',
        'sketch-hover': '6px 6px 0px #191817',
        'sketch-kraft': '4px 4px 0px #C26A20',
        'sketch-blue': '4px 4px 0px #2563EB',
        'sketch-red': '4px 4px 0px #DC2626',
        'paper-float': '0 20px 30px -10px rgba(42, 37, 33, 0.12), 4px 4px 0px #191817',
      },
      borderRadius: {
        'wobbly-1': '255px 15px 225px 15px/15px 225px 15px 255px',
        'wobbly-2': '20px 255px 20px 25px/225px 25px 225px 25px',
        'wobbly-3': '25px 25px 225px 25px/255px 20px 255px 20px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(1deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(6px) rotate(-1deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
        'dash-draw': {
          to: { strokeDashoffset: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'float-reverse 6s ease-in-out infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
