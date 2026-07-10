/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#f7f0e3',
        vellum: '#fffaf1',
        ink: '#23201d',
        espresso: '#4a3329',
        burgundy: '#8f2f45',
        forest: '#245244',
        navy: '#2d4059',
        marigold: '#d29a45',
        sage: '#b8c3a5',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(47, 33, 24, 0.12)',
        lift: '0 24px 70px rgba(47, 33, 24, 0.18)',
      },
    },
  },
  plugins: [],
};
