module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    fontFamily: {
      'titres' : ['Helvetica'],
      'textes' : ['Bangers'],
    },
    extend: {
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
      },
      colors: {
        'regal-yellow': '#fbbf13',
      }
    }
  },
  variants: {},
  plugins: [],
};
