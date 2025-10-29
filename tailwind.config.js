/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0b0603",
        gold: "#d1b573",
        goldSoft: "#e8d9b0",
      },
    },
  },
  plugins: [],
};
