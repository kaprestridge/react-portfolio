module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'olive': '#7B7E64'
      },
      backgroundImage: theme => ({
        'hero-pattern': "url(/src/img/print-bg.png)",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
