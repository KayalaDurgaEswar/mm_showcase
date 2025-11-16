/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0C0C0C",
        "light-bg": "#F7F7F7",
        "card-bg": "#FFFFFF",
        "accent-1": "#E5EAF0",
        "accent-2": "#DDE2E8",
        "accent-soft": "#FAFAFA",
        border: "#E1E1E1",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "1.2rem",
        xl: "2rem",
      },
      boxShadow: {
        neumorphic: "0 10px 30px rgba(0, 0, 0, 0.06)",
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease-out",
        fadeLeft: "fadeLeft 0.5s ease-out",
        fadeScale: "fadeScale 0.5s ease-out",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeLeft: {
          from: { opacity: 0, transform: "translateX(-20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        fadeScale: {
          from: { opacity: 0, transform: "scale(0.95)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};
