/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        mono: ['"VT323"', 'monospace'],
      },
      colors: {
        retro: {
          // Azul marino clásico
          black: '#0a0f1e',
          white: '#f0f4f8',
          gray: '#64748b',
          darkgray: '#1e293b',
          primary: '#1e3a8a',
          secondary: '#3b82f6',
          accent: '#60a5fa',
          warning: '#f59e0b',
          danger: '#ef4444',
          success: '#10b981',  // Verde para mensajes de éxito
        },
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px currentColor',
        'pixel-sm': '2px 2px 0px 0px currentColor',
        'pixel-lg': '6px 6px 0px 0px currentColor',
        'pixel-inset': 'inset 4px 4px 0px 0px currentColor',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'bounce-pixel': 'bounce-pixel 0.5s infinite',
        'slide-in': 'slide-in 0.3s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'glitch': 'glitch 0.3s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'bounce-pixel': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
        },
      },
    },
  },
  plugins: [],
}
