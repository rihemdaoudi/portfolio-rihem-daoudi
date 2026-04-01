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
        // ── Main palette ─────────────────────────
        mint: '#f5f3ff',        // very pale violet bg
        lime: '#c4b5fd',        // violet-300
        emerald: '#0ea5e9',     // sky-500 — cool secondary
        forest: '#1a0f3a',      // deep purple-black text
        sage: '#6d28d9',        // violet-800
        leaf: '#7c3aed',        // violet-700 — primary CTA
        accent: '#ec4899',      // pink-500
        warm: '#f59e0b',        // amber-500
        // ── Dark mode ─────────────────────────────
        darkBg: '#080615',
        darkCard: '#130f2a',
        darkGreen: '#a78bfa',   // violet-400 for dark accents
        darkMint: '#f0e8ff',    // light lavender text
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'float': 'float 7s ease-in-out infinite',
        'orb': 'orbPulse 8s ease-in-out infinite',
        'orb-slow': 'orbPulse 12s ease-in-out infinite 1.5s',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'marquee2': 'marquee2 28s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        orbPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.2)', opacity: '0.8' },
        },
        shimmer: {
          '0%': { opacity: '0.5' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.5' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #7c3aed, #ec4899)',
        'gradient-cool': 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
        'gradient-warm': 'linear-gradient(135deg, #ec4899, #f59e0b)',
      },
      boxShadow: {
        'glow': '0 0 0 1px rgba(124,58,237,0.2), 0 8px 32px rgba(124,58,237,0.25)',
        'glow-pink': '0 0 0 1px rgba(236,72,153,0.2), 0 8px 32px rgba(236,72,153,0.2)',
        'glow-dark': '0 0 0 1px rgba(167,139,250,0.2), 0 8px 32px rgba(124,58,237,0.3)',
        'card': '0 1px 3px rgba(26,15,58,0.06), 0 4px 20px rgba(124,58,237,0.07)',
        'card-dark': '0 1px 3px rgba(0,0,0,0.4), 0 4px 24px rgba(0,0,0,0.3)',
        'btn': '0 4px 20px rgba(124,58,237,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
