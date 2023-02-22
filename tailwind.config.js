/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1500px' },
      // => @media (max-width: 1279px) { ... }

      xllg: { max: '1200px' },
      // => @media (max-width: 1023px) { ... }

      lg: { max: '1100px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '750px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '500px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}
