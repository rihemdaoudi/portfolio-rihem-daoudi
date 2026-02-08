import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Light mode - joyful green theme
        mint: '#d1fae5',
        lime: '#a7f3d0',
        emerald: '#34d399',
        forest: '#059669',
        sage: '#10b981',
        leaf: '#22c55e',
        // Dark mode
        darkBg: '#0f1419',
        darkCard: '#1a2332',
        darkGreen: '#22c55e',
        darkMint: '#86efac',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-joy': 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 50%, #86efac 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f1419 0%, #1a2332 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(34, 197, 94, 0.2)',
        'glow-dark': '0 0 40px rgba(34, 197, 94, 0.1)',
        'card': '0 4px 20px rgba(34, 197, 94, 0.08)',
        'card-dark': '0 4px 20px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
