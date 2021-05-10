module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:
        {
          'purple-gray':'#5F5D7D',
          'purple-black' :'#2F2E41',
          'purple-white':'#EFEEF2'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
    ],
  }