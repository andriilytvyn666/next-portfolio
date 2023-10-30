/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      title: [
        '1.5rem',
        {
          lineHeight: '1.75rem',
          fontWeight: '600'
        }
      ],
      subtitle: [
        '1.25rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '600'
        }
      ],
      body: [
        '1rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '500',
        }
      ],
    },
    colors: {
      bg: {
        DEFAULT: '#0E0E0E',
        active: '#252525'
      },
      fg: {
        DEFAULT: '#8B8B8B',
        active: '#F8F8F8'
      },
      border: {
        DEFAULT: '#494949',
        active: '#AEAEAE'
      }
    },
    extend: {
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [],
}
