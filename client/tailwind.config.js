

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#753899",
          secondary: "#9955be",
          dark: "#2a1635",
          light: "#F8E2FF",
          highlight: "#FFE6DD",
          info: "#DEE8FF",
        },
        fontFamily: {
          tahoma: ['Tahoma', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  
  export default config;
  