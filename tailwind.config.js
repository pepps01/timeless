/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        afriSubHeader: "#8274ED",
        afriText: "#8487A3",
        Purple: "#6B5DD3",
        PrimaryTextColor: "#090F47",
        SecondaryTextColor: "#8487A3",
      },
      rotate: {
        '14': '14deg',
      }
    }
  },
  plugins: [],
};
