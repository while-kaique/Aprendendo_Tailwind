/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors:{
        'brand': '#c5c5c5'
      },
      backgroundImage:{
        'sectionURL': "url('./images/section_img.jpg')",
        'sectionGradient': 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
        'expandSVG': "URL('./images/icons/expand.svg')",
        'searchSVG': "URL('./images/icons/search.svg')"
      },
      borderWidth:{
        '10': '20px'
      },
      backgroundSize:{
        'selectionSize': '24px',
        'searchSize': '30px'
      },
      backgroundPosition:{
        'sectionPosition': 'calc(100% - 8px) center',
        'searchPosition': '6px center'
      }

    },
  },
  plugins: [],
}

