module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      md: "640px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
