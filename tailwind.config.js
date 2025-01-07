/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "960px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
      },
      colors: {
        primary: "#007AFF",
        secondary: "#64748B",
      },
    },
  },
  plugins: [],
};
