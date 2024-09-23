import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    
    extend: {
      colors:{
        primary:'#04aa6d',
        secondary:{
          DEFAULT:colors.neutral[200],
          hover:colors.neutral[300],
          border:colors.neutral[400],
          text:colors.neutral[500],
          dark:colors.neutral[800],
          ["dark-hovers"]:colors.neutral[900]
          
        },
        ["nav-color"]:'#1d2a35'
      }
    },
  },
  plugins: [],
}