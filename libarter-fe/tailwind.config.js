/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'custom-1': '620px',
        'custom-2':'400px',
      },
      colors:{
        customColors:{
          primary: '#AD8B73',
          accent: '#FFFBE9',
          secondary: '#CEAB93',
          complementary: '#FFFFFF',
          form_bg: '#E3CAA5',
          chatImageBg: '#5b332b',
          homeImageBg: '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
}