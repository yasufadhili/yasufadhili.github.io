/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-right': 'fadeInRight 1s ease-out',
        'fade-in-left': 'fadeInLeft 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'text-shimmer': 'textShimmer 2.5s ease-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        textShimmer: {
          '0%': { backgroundPosition: 'top left' },
          '100%': { backgroundPosition: 'top right' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  variants: {},
  plugins: [],
};