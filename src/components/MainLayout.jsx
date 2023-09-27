import { Header } from "./Header";
import "../main.css";
import { useState, useContext } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Outlet, useLocation, useNavigation } from "react-router";
import { MotionConfig } from "framer-motion";
import { LoadingAnimation } from "../components/portfolio/LoadingAnimation";
import { ToastProvider } from "../contexts/ToastContext";
import { BounceAnimation } from "./BounceAnimation";
import { AuthContext } from "../contexts/AuthContext";

export function MainLayout() {
  const [theme, setTheme] = useDarkMode();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [loadAnimationStatus, setLoadAnimationStatus] = useState(true);
  const { auth, setAuth } = useContext(AuthContext);

  const loadHomePage = () => {
    setLoadAnimationStatus(false);
  };

  const navigation = useNavigation();

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
          } sm:overflow-unset  flex min-h-screen w-full flex-col overflow-hidden font-rubik  `}
        >
          <ToastProvider>
            <Header
              toggleMobileMenu={toggleMobileMenu}
              mobileMenuVisible={mobileMenuVisible}
              toggleTheme={toggleTheme}
              theme={theme}
              onBlogPage={onBlogPage}
              auth={auth}
              setAuth={setAuth}
            />
            {navigation.state === "loading" ? (
              <BounceAnimation />
            ) : (
              <Outlet context={[auth, setAuth, onBlogPage, theme]} />
            )}
          </ToastProvider>
        </div>
      )}
    </MotionConfig>
  );
}
