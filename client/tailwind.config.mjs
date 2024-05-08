/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"]
      }
    }
  },
  plugins: []
}
