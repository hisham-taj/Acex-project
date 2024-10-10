/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "340px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      heading: [ 'Bebas Neue',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Oxygen-Sans',
        'Ubuntu',
        'Cantarell',
        '"Helvetica Neue"',
        'sans-serif',
        'Apple Color Emoji',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',],
    },

    extend: {
      colors: {
        "twitter-blue": "#1DA1F2",
      },
      lineHeight: {
        'custom': '1.15',
      },
    },
  },
  plugins: [],
};
