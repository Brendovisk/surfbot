/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Alice", "serif"],
      secondary: ["Nunito", "sans-serif"],
    },
    colors: {
      "blue-200": "#269BFF",
      "blue-400": "#1188EE",
      "blue-600": "#0467CC",
      "grey-200": "#EFF4F9",
      "grey-400": "#BBCCDD",
      "grey-600": "#99AABB",
      "black-200": "#667788",
      "black-400": "#445566",
      "black-600": "#17222D",
      "red-200": "#FF3726",
      "red-400": "#EE2211",
      "red-600": "#D91504",
    },
  },
  plugins: [],
};
