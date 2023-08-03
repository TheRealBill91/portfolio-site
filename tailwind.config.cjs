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
          "0%": { transform: "translateX(-950px)" },
          "100%": { transform: "translateX(400px)" },
        },
        skillsCarouselSm: {
          "0%": { transform: "translateX(-1200px)" },
          "100%": { transform: "translateX(600px)" },
        },
        skillsCarouselLg: {
          "0%": {transform: "translateX(-1400px)"},
          "100%": {transform: "translateX(800px)"}
        },
        lightThemeFadeOut: {
          "0%": { opacity: "100" },
          "100%": { opacity: "0", rotate: "180deg" },
        },
        lightThemeFadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        darkModeToggleRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation: {
        headerLogoFade: "headerLogoFade 1.5s ease-in 1 ",
        mobileMenuFadeIn: "mobileMenuFadeIn 800ms ease-in",
        mobileMenuFadeOut: "mobileMenuFadeOut 4s ease-out",
        skillsCarousel: "skillsCarousel 12s linear infinite",
        skillsCarouselSm: "skillsCarouselSm 14s linear infinite",
        skillsCarouselLg: "skillsCarouselLg 14s linear infinite",
        lightThemeFadeOut: "lightThemeFadeOut 1s ease-out 1",
        lightThemeFadeIn: "lightThemeFadeIn 1s ease-in 1s 1",
        darkModeToggleRotate: "darkModeToggleRotate 1s ease-in"
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
