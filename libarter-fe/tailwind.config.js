/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customColors:{
          white: '#F1EFE2',
          lightBrown: '#97633D',
          darkBrown: '#382619',
        }
      }
    },
  },
  plugins: [],
}