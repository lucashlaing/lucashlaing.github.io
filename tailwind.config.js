/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0c",
        night: "#000000",
        silver: "#c7ccd2",
        silverlight: "#eceff3",
        wood: "#b9824c",
        woodDark: "#5e3c20",
      },
      fontFamily: {
        display: ["'Clash Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
