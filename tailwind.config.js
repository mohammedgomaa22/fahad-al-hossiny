/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d1af58',
        secondary: '#fdf1a7',
        main_bg: '#F5F6FA',
      },

    },
  },
  plugins: [],
}