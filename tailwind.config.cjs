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
        mobileMenuFade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        skillsCarousel: {
          "0%": { transform: "translateX(-550px)" },
          "100%": { transform: "translateX(500px)" },
        },
      },
      animation: {
        headerLogoFade: "headerLogoFade 1.5s ease-in 1 ",
        mobileMenuFade: "mobileMenuFade 1.5s ease-in",
        skillsCarousel: "skillsCarousel 16s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
