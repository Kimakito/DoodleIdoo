// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // C'est ici que le changement doit être fait
    autoprefixer: {}, // Gardez autoprefixer si vous l'utilisez
  },
};