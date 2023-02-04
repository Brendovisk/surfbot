/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ["Alice", "serif"],
      text: ["Nunito", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        "blue-200": "#269BFF",
        "blue-400": "#1188EE",
        "blue-600": "#0467CC",
        white: "#ffffff",
        "white-200": "#EFF4F9",
        "white-400": "#BBCCDD",
        "white-600": "#99AABB",
        "black-200": "#667788",
        "black-400": "#445566",
        "black-600": "#17222D",
        "red-200": "#FF3726",
        "red-400": "#EE2211",
        "red-600": "#D91504",
      },  
      backgroundImage: {
        hero: "url('/src/assets/intro.jpg')",
        gallery: "url('/src/assets/foto-galeria.jpg')",
        map: "url('/src/assets/mapa.jpg')",
        quote: "url('/src/assets/quote.jpg')",
        waves: "url('/src/assets/ondas.svg')",
        logo: "url('/src/assets/surfbot-icon.svg')",
      },
      height: {
        "full-mobile": "calc(100vh - 64px)",
      },
      screens: {
        "-2xl": { max: "1535px" },
        "-xl": { max: "1279px" },
        "-lg": { max: "1023px" },
        "-md": { max: "767px" },
        "-sm": { max: "639px" },
      },
    },
  },
  plugins: [],
};
