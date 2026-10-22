/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F4EDE0',
          50: '#FCF9F5',
          100: '#F4EDE0',
          200: '#E8DCBF',
          300: '#DCCB9F',
        },
        dark: {
          DEFAULT: '#121212',
          surface: '#1A1A1A',
          card: '#222222',
          border: '#2E2E2E',
        },
        ketchup: {
          DEFAULT: '#D62828',
          hover: '#BA1E1E',
          dark: '#931212',
        },
        mustard: {
          DEFAULT: '#F6B21B',
          hover: '#E09F0E',
          light: '#FDE68A',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Anton', 'Impact', 'sans-serif'],
        body: ['"DM Sans"', 'Work Sans', 'system-ui', '-apple-system', 'sans-serif'],
        marker: ['"Permanent Marker"', 'cursive'],
        hand: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #121212',
        'brutal-lg': '6px 6px 0px 0px #121212',
        'brutal-ketchup': '4px 4px 0px 0px #D62828',
        'brutal-mustard': '4px 4px 0px 0px #F6B21B',
        'brutal-white': '4px 4px 0px 0px #F4EDE0',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float-slow': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(var(--rot, -3deg))' },
          '50%': { transform: 'translateY(-6px) rotate(var(--rot, -3deg))' },
        },
      },
    },
  },
  plugins: [],
}
