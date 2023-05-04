module.exports = {
  darkMode: 'class',
  content: [
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
    fontFamily: {
      title: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
