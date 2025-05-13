/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'beige-dark': '#D2B48C', // Beige foncé
        'orange-hover': '#FFA500', // Orange hover
      },
    },
  },
  plugins: [],
};
