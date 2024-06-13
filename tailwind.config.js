// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#EF753E',
        secondary: '#e66a37',
        gray: {
          500: '#6b7280',
          900: '#111827',
        },
      },
      fontFamily: {
        chivo: ['Chivo', 'sans-serif'],
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(239, 117, 62, 0.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
