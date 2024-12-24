/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        primary:"#d42c37",
        secondary:"#f42c37",
        brandYellow:"#fdc52e",
        brandGreen:"#2dcc6f",
        brandBlue:"#1376f4",
        brandWhite:"#eeeeee",
      },
      container:{
        center:true,
        padding:{
          default:'1rem',
          sm:'2rem',
        }
      }
    },
  },
  plugins: [],
}