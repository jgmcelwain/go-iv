const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,jsx}',
  ],
  theme: {
    extend: {},
    colors: {
      ...defaultTheme.colors,
      orange: colors.orange,
      yellow: colors.yellow,
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      title: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
