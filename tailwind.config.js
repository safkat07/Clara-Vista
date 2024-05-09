/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "ubuntu": ["Ubuntu Sans", " sans-serif"],
      "banner": ["Caveat", "cursive"],
      "banner2": ["Macondo", "cursive"],
    }
  },
  plugins: [],
}

