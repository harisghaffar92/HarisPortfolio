/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#07090e",
        cardDark: "rgba(15, 23, 42, 0.75)",
        glassBorder: "rgba(255, 255, 255, 0.08)",
        accentCyan: "#38bdf8",
        accentBlue: "#6366f1",
        accentTeal: "#2dd4bf",
        accentPurple: "#a855f7",
        textMuted: "#94a3b8",
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glowCyan: '0 0 25px -5px rgba(56, 189, 248, 0.3)',
        glowBlue: '0 0 25px -5px rgba(99, 102, 241, 0.3)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
