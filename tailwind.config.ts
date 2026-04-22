import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F19',
        surface: '#111827',
        'surface-2': '#0F172A',
        border: 'rgba(148, 163, 184, 0.12)',
        accent: {
          DEFAULT: '#6366F1',
          indigo: '#6366F1',
          violet: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(99, 102, 241, 0.45)',
        card: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-accent':
          'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        'gradient-radial':
          'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.25), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
