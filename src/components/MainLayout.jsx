import { Header } from "./Header";
import "../main.css";
import { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Outlet, useLocation } from "react-router";
import { MotionConfig } from "framer-motion";

export function MainLayout() {
  const [theme, setTheme] = useDarkMode();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const location = useLocation();
  const onBlogPage = location.pathname === "/bloghome";

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        id="mainWrapper"
        className={`${theme} ${
          mobileMenuVisible ? "fixed" : ""
        } min-h-screen  w-full flex-col overflow-hidden font-rubik  `}
      >
        <Header
          toggleMobileMenu={toggleMobileMenu}
          mobileMenuVisible={mobileMenuVisible}
          toggleTheme={toggleTheme}
          theme={theme}
          onBlogPage={onBlogPage}
        />

        <Outlet context={[mobileMenuVisible, onBlogPage, theme]} />
      </div>
    </MotionConfig>
  );
}
