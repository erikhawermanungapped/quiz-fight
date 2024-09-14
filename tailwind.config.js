/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "app.{js,jsx,ts,tsx}",
    "app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
    "./scripts/**/*.{js,jsx,ts,tsx}",
    "./assets/**/*.{js,jsx,ts,tsx}",
    "./web/**/*.{js,jsx,ts,tsx}",
    "app(tabs)index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#1E40AF", // Primär mörkblå
          300: "#60A5FA", // Ljusblå för accenter
        },
        teal: {
          500: "#14B8A6", // Turkos accentfärg
        },
        green: {
          500: "#10B981", // Primär grön
        },
        yellow: {
          500: "#F59E0B", // Accentgul
        },
        gray: {
          900: "#374151", // Mörkgrå för text och bakgrunder
          100: "#F3F4F6", // Ljusgrå för bakgrunder
        },
        white: "#FFFFFF", // Ren vit
      },
    },
  },
  plugins: [],
};
