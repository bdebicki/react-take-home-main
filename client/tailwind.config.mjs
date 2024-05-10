/** @type {import('tailwindcss').Config} */
let plugin = require('tailwindcss/plugin')

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 60px -35px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"]
      },
      borderRadius: {
        inherit: 'inherit'
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    }
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('from-2nd', '&:nth-child(n+2)')
    })
  ]
}
