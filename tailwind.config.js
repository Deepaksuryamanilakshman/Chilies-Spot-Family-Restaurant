/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#151311',
          cream: '#F4EBDD',
          red: '#B52A1D',
          'red-hover': '#982216',
          orange: '#D66B32',
          olive: '#646448',
          beige: '#D8C7AC',
          card: '#1D1A18',
          'card-light': '#24201D',
          border: 'rgba(216, 199, 172, 0.15)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        telugu: ['"Noto Sans Telugu"', '"Ramabhadra"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
