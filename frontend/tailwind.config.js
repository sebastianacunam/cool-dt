/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: [
    './pages/**/*.{js, ts, jsx, tsx}',
    './components/**/*.{js, ts, jsx, tsx}'
  ],
  darkMode: false,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  variants:{
    extend: {},
  },
  plugins: [],
}