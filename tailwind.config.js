/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-gradient': 'linear-gradient(135deg, #67e8f9, #0891b2 75%);',
      },
    },
  },
  plugins: [],
};
