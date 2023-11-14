/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headFont: ['RozhaOne-Regular']
      },
      colors: {
        'reasonBG': '#D0D4CA'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

