/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      black:"#000000",
      white:"#ffffff",
      smokeWhite: "#f0ffff",
      green:"#d2ffd2",
      gray:"#b2b2b2",
      blue:"#bfffff",
      red:"#800000",
    },
    fontFamily:{
      oswald:"Oswald,sans-serif",
      urbanist:"Urbanist,sans-serif"
    },
    extend: {},
  },
  plugins: [],
};
