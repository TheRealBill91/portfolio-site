import { MyWork } from "./components/MyWork";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import "./main.css";
import { BackToTop } from "./components/BackToTop";
import { useState } from "react";

function App() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
    // changeMobileMenuStyles();
  };

  return (
    <div
      id="mainWrapper"
      className={`${
        mobileMenuVisible ? "fixed" : ""
      } flex min-h-screen w-screen flex-col font-rubik `}
    >
      <Header
        toggleMobileMenu={toggleMobileMenu}
        mobileMenuVisible={mobileMenuVisible}
      />
      <main className="flex h-screen flex-1 flex-col items-center gap-6 bg-gray-200/40 px-6 py-9">
        <About />
        <MyWork />
        <BackToTop mobileMenuVisible={mobileMenuVisible} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
