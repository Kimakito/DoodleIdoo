/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@netlify/tailwind-config')],
  content: [
    './*.html', // Assurez-vous que Tailwind scanne vos fichiers HTML
    // Ajoutez d'autres chemins si vous avez des fichiers JS/TS (ex: './src/**/*.{js,ts,jsx,tsx}')
  ],
  theme: {
    extend: {
      colors: {
        darkviolet: {
          50: '#f5f3fa',
          100: '#ddd9f1',
          200: '#b4afff',
          300: '#8a85ff',
          400: '#6459d9',
          500: '#3f2db2',  // Couleur principale violet foncé
          600: '#371f96',
          700: '#2a1772',
          800: '#1f1050',
          900: '#14072d',
        },
        contrastyellow: {
          50: '#fff9e6',
          100: '#fff1b8',
          200: '#ffe787',
          300: '#ffdd56',
          400: '#ffd326',
          500: '#e6b500',  // Couleur jaune vif pour contraste
          600: '#b38a00',
          700: '#806000',
          800: '#4d3900',
          900: '#1f1400',
        },
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