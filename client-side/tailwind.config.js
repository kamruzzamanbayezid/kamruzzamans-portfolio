/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary': 'linear-gradient(90deg, #07233b 1.67%, #041d34 39.95%, #04192d 58.24%, #040e18 80.28%, #050c16 101.48%)',
      },
      backgroundColor: {
        'secondary': '#062D4F',
        'btn-primary': '#0788ff'
      },
      colors: {
        'primary': '#fff',
        'secondary': '#0788ff'
      }
    },
  },
  plugins: [],
}
