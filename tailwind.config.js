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
    extend: {
      maxWidth: {
        '8xl': '96rem',
      },
    },
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
