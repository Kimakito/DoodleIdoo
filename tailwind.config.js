/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,css}",
    "./src/**/*.{js,css}",
  ],
  theme: {
    extend: {
      colors: {
        darkviolet: {
          50: '#f8f6fb',
          100: '#e9e2f0',
          200: '#d1c1da',
          300: '#a68bab',
          400: '#6f4b7d',
          500: '#351C4D', 
          600: '#29163c',
          700: '#1e0f2f',
          800: '#160924',
          900: '#0d0513',
        },
        contrastyellow: {
          50: '#fff9e6',
          100: '#fff1b8',
          200: '#ffe787',
          300: '#ffdd56',
          400: '#ffd326',
          500: '#e6b500', 
          600: '#b38a00',
          700: '#806000',
          800: '#4d3900',
          900: '#1f1400',
        },
      },
      // --- NOUVELLES EXTENSIONS ---
      fontFamily: {
        k2d: ['K2D', 'sans-serif'], // Vous avez déjà K2D dans votre HTML
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'], // Ajout de Plus Jakarta Sans
      },
      // Ajout des keyframes et animations
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bg-pan': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
        'pulse-light': {
          '0%, 100%': { 'box-shadow': '0 0 0 0 rgba(230, 181, 0, 0.7)' },
          '50%': { 'box-shadow': '0 0 0 10px rgba(230, 181, 0, 0)' },
        },
        'draw-line': { // Keyframe pour l'animation SVG de dessin
          to: {
            strokeDashoffset: '0',
          },
        },
        'slide-up': { // Pour les éléments qui glissent du bas
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': { // Pour les éléments qui glissent de la droite
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': { // Pour les éléments qui glissent de la gauche
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'fade-in-down': 'fade-in-down 1s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'bg-pan': 'bg-pan 20s ease-in-out infinite alternate',
        'pulse-light': 'pulse-light 2s infinite',
        'draw': 'draw-line 2s ease-out forwards', // Animation pour le SVG
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
      },
      // Customiser la taille des icones si besoin (ex: icon-lg, icon-xl)
      // Vous pourriez les ajouter ici si vous voulez des tailles spécifiques pour des classes génériques
      // fontSize: {
      //   'icon-lg': '2rem', // pour vos icones icomoon
      //   'icon-xl': '3rem',
      // },
    },
  },
  plugins: [],
}