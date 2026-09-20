/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mc: {
          grass: '#5b8731',
          'grass-light': '#72b036',
          dirt: '#866043',
          'dirt-dark': '#573d26',
          stone: '#606060',
          'stone-dark': '#383838',
          'stone-light': '#8a8a8a',
          obsidian: '#151324',
          'obsidian-dark': '#0c0b14',
          bedrock: '#161616',
          diamond: '#4dedf4',
          'diamond-dark': '#29b8c0',
          redstone: '#ff2200',
          'redstone-glow': '#ff5533',
          gold: '#fdb813',
          'gold-light': '#ffe043',
          emerald: '#17dd62',
          'emerald-light': '#55ff55',
          xp: '#7fff00',
          'xp-glow': '#a6ff00',
          ender: '#a855f7',
          'ender-dark': '#6b21a8',
          wood: '#9c6e3b',
          'wood-dark': '#66451e',
          iron: '#d8d8d8',
          slot: '#262626',
          gui: '#c6c6c6',
          'gui-dark': '#1e1e1e',
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        silkscreen: ['"Silkscreen"', 'monospace'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'mc-bevel': 'inset 2px 2px 0px rgba(255,255,255,0.25), inset -2px -2px 0px rgba(0,0,0,0.6)',
        'mc-bevel-btn': 'inset 3px 3px 0px rgba(255,255,255,0.3), inset -3px -3px 0px rgba(0,0,0,0.7)',
        'mc-bevel-pressed': 'inset 3px 3px 0px rgba(0,0,0,0.8), inset -2px -2px 0px rgba(255,255,255,0.2)',
        'mc-slot': 'inset 2px 2px 0px #000, inset -2px -2px 0px #4a4a4a',
        'glow-diamond': '0 0 20px rgba(77, 237, 244, 0.5)',
        'glow-redstone': '0 0 20px rgba(255, 34, 0, 0.6)',
        'glow-xp': '0 0 20px rgba(127, 255, 0, 0.6)',
        'glow-gold': '0 0 20px rgba(253, 184, 19, 0.5)',
        'glow-emerald': '0 0 20px rgba(23, 221, 98, 0.5)',
      },
      animation: {
        'float-block': 'floatBlock 4s ease-in-out infinite',
        'pulse-redstone': 'pulseRedstone 2s ease-in-out infinite',
        'xp-twinkle': 'xpTwinkle 1.5s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        floatBlock: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseRedstone: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 5px #ff2200)' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 15px #ff2200)' },
        },
        xpTwinkle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
