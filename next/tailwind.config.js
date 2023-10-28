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
          fontWeight: '600',
        }
      ],

      itemTitle: [
        '1.125rem',
        {
          lineHeight: '1.375rem',
          fontWeight: '500',
        },
      ],
      itemSubtitle: [
        '1rem',
        {
          lineHeight: '1.375rem',
          fontWeight: '500',
        },
      ],
      itemNav: [
        '1rem',
        {
          lineHeight: '1.75rem',
          fontWeight: '500',
        },
      ],
      footer: [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '500',
        },
      ],
      body: [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '500',
        },
      ],
      header: [
        '2rem',
        {
          lineHeight: '2.375rem',
          fontWeight: '700',
        },
      ],
      headerXl: [
        '2.25rem',
        {
          lineHeight: '2.5rem',
          fontWeight: '700',
        },
      ],
      headerSm: [
        '1.25rem',
        {
          lineHeight: '1.75rem',
          fontWeight: '600',
        },
      ],
      skillChip: [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '400',
        },
      ],
    },
    colors: {
      bg: {
        DEFAULT: '#0E0E0E',
        active: '#252525',
      },
      fg: {
        DEFAULT: '#8B8B8B',
        active: '#F8F8F8',
        secondary: '#838383',
      },
      border: {
        DEFAULT: '#494949',
        active: '#AEAEAE',
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
