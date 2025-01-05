// tailwind.config.js
module.exports = {
  content: [
    "./index.html",       // This ensures Tailwind looks for classes in your HTML files
    "./src/**/*.{js,jsx,ts,tsx}"  // This ensures Tailwind looks for classes in React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
