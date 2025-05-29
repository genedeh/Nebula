/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Nebula-inspired core colors
        primary: '#6A0DAD',        // Nebula Purple
        primaryDark: '#4B0082',    // Deep Space Indigo
        dark: '#121212',           // Deep Dark Mode Background
        darkLight: '#1E1E2E',      // Slightly lighter for surfaces
        gray: '#2D2D3A',           // Neutral dark gray

        // Text colors
        text: '#E0E0E0',           // Light text on dark
        textLight: '#B0B0C3',      // Muted text (e.g. subtitles)
        textDark: '#F5F5F5',       // Headings or high contrast

        // Accent colors
        blueGlow: '#3A9BDC',       // Electric Blue accent
        purpleGlow: '#C084FC',     // Glowing purple
        nebulaRose: '#FF5D8F',     // Soft cosmic pink

        // Additional tone variations
        rose: '#FF4F81',
        roseLight: '#FFA0B6',
      },

      fontSize: {
        medium: '500',
        semibold: '600',
        bold: '700',
        extraBold: '800',
      },
    },
  },
  plugins: [],
}