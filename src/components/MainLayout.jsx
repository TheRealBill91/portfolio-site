import { Header } from "./Header";
import "../main.css";
import { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Outlet, useLocation } from "react-router";
import { LoadingAnimation } from "../components/LoadingAnimation";
import { MotionConfig } from "framer-motion";

export function MainLayout() {
  const [theme, setTheme] = useDarkMode();
  const [loadAnimationStatus, setLoadAnimationStatus] = useState(true);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const location = useLocation();
  const onBlogPage = location.pathname === "/bloghome";

  console.log(location.pathname);

  const loadHomePage = () => {
    setLoadAnimationStatus(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="">
        {loadAnimationStatus ? (
          <LoadingAnimation theme={theme} loadHomePage={loadHomePage} />
        ) : (
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

            <Outlet context={[mobileMenuVisible, onBlogPage]} />
          </div>
        )}
      </div>
    </MotionConfig>
  );
}
