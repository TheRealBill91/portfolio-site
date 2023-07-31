import { MyWork } from "./components/MyWork";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import "./main.css";
import { BackToTop } from "./components/BackToTop";
import { useState } from "react";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [theme, setTheme] = useDarkMode();

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      id="mainWrapper"
      className={`${theme} ${
        mobileMenuVisible ? "fixed" : ""
      } flex min-h-screen w-screen flex-col font-rubik `}
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
        <BackToTop mobileMenuVisible={mobileMenuVisible} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
