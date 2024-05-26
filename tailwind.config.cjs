/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000000",       // Black
        "secondary": "#007BFF",     // Vivid blue
        "primary-text": "#FFFFFF",  // White for high contrast text
        "secondary-text": "#B0B0B0",// Light gray for secondary text
        "highlight": "#FF7F00",     // Orange for complementary accent
        "background": "#121212",    // Very dark gray
        "accent": "#00BFFF",        // Light blue
        "gray-20": "#fefefe",
        "gray-50": "#cfe2ee",
        "gray-100": "#a0c5dc",
        "gray-500": "#132b3a",
        "primary-100": "#72a8cb",
        "primary-300": "#448cba",
        "primary-500": "#040a0e",
        "secondary-400": "#2f6c92",
        "secondary-500": "#224c67",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
