/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('https://i.pinimg.com/originals/49/66/b1/4966b15f13064321f12e9baa1322abe1.jpg')",
      },
      height: {
        'banner-height': '530px',
        'detail-img-height': '400px',
      },
      width: {
        'detail-img-width': '350px',
      },
      colors: {
        'header-bottom': '#ec1d25',
        'header-top': '#210b00'
      }
    },
  },
  plugins: [],
}

