/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dae6ff',
          200: '#bdd3ff',
          300: '#8fb5ff',
          400: '#5c8dff',
          500: '#3366ff',
          600: '#1a44f5',
          700: '#1433e1',
          800: '#172cb6',
          900: '#192b8f',
          950: '#141b57',
        },
        ink: {
          50: '#f6f6f7',
          100: '#e2e3e5',
          200: '#c5c6cb',
          300: '#9fa1a8',
          400: '#7a7c85',
          500: '#5f6169',
          600: '#4c4d54',
          700: '#3f4046',
          800: '#36373c',
          900: '#2f3034',
          950: '#1a1b1e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
