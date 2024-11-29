/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orchid: {
          50: "#fffcf1",
          100: "#fef2c7",
          200: "#fde48a",
          300: "#fcd14d",
          400: "#fbbc24",
          500: "#f59b0b",
          600: "#d97406",
          700: "#b45109",
          800: "#923e0e",
          900: "#78340f",
          950: "#451903",
        },
        periwinkle: {
          50: "#f4f6fa",
          100: "#e6ebf3",
          200: "#d4dbe9",
          300: "#c3cee1",
          400: "#92a4c8",
          500: "#788ab9",
          600: "#6674aa",
          700: "#5a649b",
          800: "#4d5480",
          900: "#414767",
          950: "#2b2e40",
        },
      },
    },
  },
  plugins: [],
};
