/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./component/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        mpopOneReg:["MochiyPopOne-Regular", "sans serif"],
        pthin:["Poppins-Thin", "sans serif"],
        pextralight:["Poppins-ExtraLight", "sans serif"],
        pbold:["Poppins-Bold", "sans serif"],
        pextrabold:["Poppins-ExtraBold", "sans serif"],
        preg:["Poppins-Regular", "sans serif"],
      }
    },
  },
  plugins: [],
} 