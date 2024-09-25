/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#1DA1F2',
      },
      screens: {
        'sx':'340px',
        'sm': '480px', 
        'md':'768px',
        'lg': '976px', // large screen
        'xl': '1440px', // extra large screen
      },
    },
  },
  plugins: [],
}
