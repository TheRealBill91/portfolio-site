import { MyWork } from "./components/MyWork";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import "./main.css";
import { BackToTop } from "./components/BackToTop";
import { useState } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import { MySkills } from "./components/MySkills";
import { LoadingAnimation } from "./components/LoadingAnimation";

function App() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [theme, setTheme] = useDarkMode();
  const [loadAnimationStatus, setLoadAnimationStatus] = useState(true);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const loadHomePage = () => {
    setLoadAnimationStatus(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {loadAnimationStatus ? (
        <LoadingAnimation theme={theme} loadHomePage={loadHomePage} />
      ) : (
        <div
          id="mainWrapper"
          className={`${theme} ${
            mobileMenuVisible ? "fixed" : ""
          } flex min-h-screen w-full flex-col overflow-x-hidden font-rubik  `}
        >
          <Header
            toggleMobileMenu={toggleMobileMenu}
            mobileMenuVisible={mobileMenuVisible}
            toggleTheme={toggleTheme}
            theme={theme}
          />
          <main className="flex h-screen flex-1 flex-col items-center gap-6 bg-gray-200/60   px-6 py-9 dark:bg-gray-800">
            <About />
            <MyWork />
            <MySkills />
            <BackToTop mobileMenuVisible={mobileMenuVisible} />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
