/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', "sans-serif", "Helvetica", "Times New Roman"],
      },
      keyframes: {
        headerLogoFade: {
          "0%": { opacity: 0, transform: "scale(0.75)" },

          "100%": { opacity: 100 },
        },
        mobileMenuFadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        mobileMenuFadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        skillsCarousel: {
          "0%": { transform: "translateX(-600px)" },
          "100%": { transform: "translateX(600px)" },
        },
        lightThemeFadeOut: {
          "0%": { opacity: "100" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        headerLogoFade: "headerLogoFade 1.5s ease-in 1 ",
        mobileMenuFadeIn: "mobileMenuFadeIn 800ms ease-in",
        mobileMenuFadeOut: "mobileMenuFadeOut 4s ease-out",
        skillsCarousel: "skillsCarousel 14s ease-in infinite",
        lightThemeFadeOut: "lightThemeFadeOut 1s ease-in 1",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
