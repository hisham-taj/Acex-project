/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    screens : {
      xs : '340px',
      sm : '480px',
      md : '768px',
      lg : '976px',
      xl : '1440px'
    },
    extend: {colors:{
   'twitter-blue':'#1DA1F2'
    }},
  },
  plugins: [],
}