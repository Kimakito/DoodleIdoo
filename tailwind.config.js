/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Assurez-vous que Tailwind scanne vos fichiers HTML
    // Ajoutez d'autres chemins si vous avez des fichiers JS/TS (ex: './src/**/*.{js,ts,jsx,tsx}')
  ],
  theme: {
    extend: {
      colors: {
        'purple-primary': '#5A2E8A', // Votre violet profond
        'yellow-accent': '#FFD93D',  // Votre jaune poussin
        'gray-light': '#E0E0E0',     // Gris clair pour le texte secondaire
        'gray-dark': '#333333',      // Gris foncé pour le fond principal ou les cartes
        // Vous pouvez ajouter des nuances si besoin
        // 'purple-primary-light': '#7B4ED8',
      },
      // Ici vous pouvez aussi étendre d'autres aspects de votre thème comme :
      // fontFamily: {
      //   sans: ['Roboto', 'sans-serif'],
      //   serif: ['Merriweather', 'serif'],
      // },
      // spacing: {
      //   '128': '32rem',
      // },
    },
  },
  plugins: [],
}