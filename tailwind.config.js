module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    enabled: true,
    content:['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.js', './src/**/*.svelte'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading1: ['Alegreya'],
        heading2: ['Caveat Brush' ],
        body: ['Source Sans Pro']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
