/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // "hongosbg": "url('/my-app/public/images/hongosbg.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins","sans-serif"],
        outfit: ["Outfit","sans-serif"]

      },
      transitionProperty: {
        'height': 'height',
      },
      colors: {
        bluebg: "#5fa8d3",
        grayText: '#8d99ae',
        grayBorder: '#ced4da',
        blackText: '#343a40',
        whitebg: '#fdfdff',
      }
    },
  },
  plugins: [],
};
