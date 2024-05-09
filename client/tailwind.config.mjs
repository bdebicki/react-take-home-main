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
      }
    }
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('from-2nd', '&:nth-child(n+2)')
    })
  ]
}
