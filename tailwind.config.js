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
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        pastel: {
          blue: '#E0F2FE',
          sky: '#F0F9FF',
          green: '#DCFCE7',
          mint: '#F0FDF4',
          yellow: '#FEF9C3',
          amber: '#FFFBEB',
          purple: '#F3E8FF',
          rose: '#FFE4E6',
          peach: '#FFEDD5',
          indigo: '#E0E7FF',
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
