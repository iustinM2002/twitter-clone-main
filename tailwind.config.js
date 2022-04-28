module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      gridTemplateColumns: {
       
        'auto': 'repeat(auto-fit, minmax(300px, 1fr))',

      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1296.5px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mdx': {'max': '867px'},
      // => @media (max-width: 767px) { ... }
      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '539px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}