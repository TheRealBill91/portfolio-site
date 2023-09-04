import { useEffect, useState } from "react";

export function useDarkMode() {
  const preferDarkMode = "(prefers-color-scheme: dark)";
  const [theme, setTheme] = useState(
    () =>
      window.localStorage.getItem("theme") ||
      (window.matchMedia(preferDarkMode).matches ? "dark" : "light")
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkMode);
    const handleThemeChange = () =>
      setTheme(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleThemeChange);
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  // listens and overrides theme change based on user selection
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
