/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
      },
      fontFamily: {
        headFont: ['RozhaOne-Regular']
      },
      colors: {
        'reasonBG': '#D0D4CA',
        'FroProRed': '#86130a',
        'BGCream': '#f5eae7',
        // doesnt work: 'BGDarkCream': 'e0d6d3',
        'BGLightCream': '#fdf6f4',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

