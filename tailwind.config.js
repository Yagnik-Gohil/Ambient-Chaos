/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-gradient': 'linear-gradient(135deg, #86efac, #16a34a 75%);',
      },
    },
  },
  plugins: [],
};
