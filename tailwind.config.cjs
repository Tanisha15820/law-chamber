/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#000000",
        // secondary: "#d8b151",
         secondary: "#9a8121",
        light: "#ffffff",
      },

      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Montserrat", "sans-serif"],
      },

      boxShadow: {
        gold: "0 10px 40px rgba(216, 177, 81, 0.25)",
      },
    },
  },

  plugins: [],
};