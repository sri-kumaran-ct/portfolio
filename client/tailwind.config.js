/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        accent: { DEFAULT: '#00D4AA', dark: '#00B894', light: '#7FFFD4' },
        surface: { light: '#F8F9FA', dark: '#0D1117' },
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease forwards',
        'slide-up':   'slideUp 0.6s ease forwards',
        'slide-right':'slideRight 0.5s ease forwards',
        'pulse-slow': 'pulse 3s infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:     { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp:    { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        slideRight: { from: { opacity: 0, transform: 'translateX(-20px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
        float:      { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
    },
  },
  plugins: [],
};
