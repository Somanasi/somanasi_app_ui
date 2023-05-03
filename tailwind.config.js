/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f5f8de',
        'secondary': '#ffc933',
        'secondary_light': '#ffc9334d',
        'tertiary': '#949494',
        'information': '#0000df',
        'warning': '#faab00',
        'warning_light': '#faab004d',
      }
    },
  },
  plugins: [],
}

