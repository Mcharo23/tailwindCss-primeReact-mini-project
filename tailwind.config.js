/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2e9df4",
        
      },
      backgroundImage: {
        "shopping-cart": "url('./src/assets/images/Shopping-cart.jpg')",
        "Shoping-cart2": "url('./src/assets/images/Shoping-cart2.jpg')",
      },
    },
  },
  plugins: [],
};
