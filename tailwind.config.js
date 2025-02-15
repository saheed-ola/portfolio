
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bodyFont:["Poppins", "sans-serif"],
        titleFont:["Montserrat", "sans-serif"],
      },
      colors:{
        // bodyColor: "linear-gradient(90deg, #213a57, #0B6477, #14919b,#0ad1c8,#45dfb1,#80ed99)",
        // bodyColor:"#212428",
        // bodyColor: "blue",
        lightText:"#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
      backgroundImage: {
        'bodyColor': 'linear-gradient(90deg, #213a57, #0B6477, #14919b, #0ad1c8, #0B6477, #14919B)',
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
