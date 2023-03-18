/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      itemTitle: [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "500",
        },
      ],
      itemSubtitle: [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "500",
        },
      ],
      itemNav: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "700",
        },
      ],
      footer: [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "500",
        },
      ],
      body: [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "500",
        },
      ],
      header: [
        "2rem",
        {
          lineHeight: "2.375rem",
          fontWeight: "700",
        },
      ],
      headerXl: [
        "2.25rem",
        {
          lineHeight: "2.5rem",
          fontWeight: "700",
        },
      ],
      headerSm: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "600",
        },
      ],
    },
    colors: {
      bg: {
        DEFAULT: "#050505",
        active: "#212121",
      },
      fg: {
        DEFAULT: "#FFFFFF",
        secondary: "#838383",
      },
    },
    extend: {},
  },
  plugins: [],
};
