/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        bgGradient: `linear-gradient(180deg, #04a49cff 10%, #025854 100%)`
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

