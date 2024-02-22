/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "red":"#FF2626 ",
      "white":"#FFFFFF",
      "lightgreen":"#EFFFEF",
      "green":"#75A774",
      "gray":"#F2F2F2"
    },
    extend: {
      fontFamily: {
        'Baloo': ['"Baloo Da 2"', 'sans-serif']
      },
    },
  },
  plugins: [],
}