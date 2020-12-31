const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...defaultTheme.colors,
      orange: colors.orange,
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      title: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      padding: ['first'],
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
