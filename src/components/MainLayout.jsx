import { Header } from "./Header";
import "../main.css";
import { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Outlet, useLocation } from "react-router";
import { MotionConfig } from "framer-motion";
import { LoadingAnimation } from "../components/portfolio/LoadingAnimation";

export function MainLayout() {
  const [theme, setTheme] = useDarkMode();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [loadAnimationStatus, setLoadAnimationStatus] = useState(true);
  const [auth, setAuth] = useState(false);

  const loadHomePage = () => {
    setLoadAnimationStatus(false);
  };

  const location = useLocation();
  // check if bloghome is the base route for displaying
  // different nav items
  const pathParts = location.pathname.split("/");
  const onBlogPage = pathParts[1] === "bloghome";

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <MotionConfig reducedMotion="user">
      {loadAnimationStatus && !onBlogPage ? (
        <LoadingAnimation theme={theme} loadHomePage={loadHomePage} />
      ) : (
        <div
          id="mainWrapper"
          className={`${theme} ${
            mobileMenuVisible ? "fixed" : ""
          } flex  min-h-screen w-full flex-col overflow-hidden font-rubik  `}
        >
          <Header
            toggleMobileMenu={toggleMobileMenu}
            mobileMenuVisible={mobileMenuVisible}
            toggleTheme={toggleTheme}
            theme={theme}
            onBlogPage={onBlogPage}
          />

          <Outlet
            context={[auth, setAuth, mobileMenuVisible, onBlogPage, theme]}
          />
        </div>
      )}
    </MotionConfig>
  );
}
