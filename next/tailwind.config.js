/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
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
        DEFAULT: '#f1f1f1',
        active: '#dadada',
        dark: '#0E0E0E',
        'active-dark': '#252525'
      },
      fg: {
        DEFAULT: '#747474',
        dark: '#8B8B8B',
        active: '#070707',
        'active-dark': '#F8F8F8'
      },
      border: {
        DEFAULT: '#b6b6b6',
        dark: '#494949',
        active: '#515151',
        'active-dark': '#AEAEAE'
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
