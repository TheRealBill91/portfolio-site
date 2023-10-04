import { Header } from "./Header";
import "../main.css";
import { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Outlet, useLocation, useNavigation } from "react-router";
import { MotionConfig } from "framer-motion";
import { LoadingAnimation } from "../components/portfolio/LoadingAnimation";
import { ToastProvider } from "../contexts/ToastContext";
import { BounceAnimation } from "./BounceAnimation";
import { Footer } from "./Footer";

export function MainLayout() {
  const [theme, setTheme] = useDarkMode();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [loadAnimationStatus, setLoadAnimationStatus] = useState(true);

  const loadHomePage = () => {
    setLoadAnimationStatus(false);
  };

  const navigation = useNavigation();
  const location = useLocation();
  // check if bloghome is the base route for displaying
  // different nav items
  const pathParts = location.pathname.split("/");
  const onBlogPage = pathParts[1] === "blog";

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
          } sm:overflow-unset  flex min-h-screen w-full flex-col overflow-hidden font-rubik  `}
        >
          <ToastProvider>
            <Header
              toggleMobileMenu={toggleMobileMenu}
              mobileMenuVisible={mobileMenuVisible}
              toggleTheme={toggleTheme}
              theme={theme}
              onBlogPage={onBlogPage}
            />
            {navigation.state === "loading" ? (
              <BounceAnimation />
            ) : (
              <Outlet context={[onBlogPage, theme]} />
            )}
            <Footer />
          </ToastProvider>
        </div>
      )}
    </MotionConfig>
  );
}
