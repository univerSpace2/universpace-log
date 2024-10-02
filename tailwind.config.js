/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['DungGeunMo', 'sans-serif'],
        'coding': ['D2Coding', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

