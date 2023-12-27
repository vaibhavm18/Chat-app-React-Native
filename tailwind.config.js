/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{tsx}',
    './src/App.{js,jsx,ts,tsx}',
    './src/<custom-folder>/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
