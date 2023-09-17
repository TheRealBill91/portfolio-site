import { MyWork } from "../../components/MyWork";
import { About } from "../../components/About";
import { Footer } from "../../components/Footer";
import "../../main.css";
import { BackToTop } from "../../components/BackToTop";
import { MySkills } from "../../components/MySkills";
import { useOutletContext } from "react-router";
import { useState } from "react";
import { LoadingAnimation } from "../../components/LoadingAnimation";

export function PortfolioHome() {
  const [mobileMenuVisible, theme] = useOutletContext();
  const [loadAnimationStatus, setLoadAnimationStatus] = useState(true);

  const loadHomePage = () => {
    setLoadAnimationStatus(false);
  };

  return (
    <>
      {loadAnimationStatus ? (
        <LoadingAnimation theme={theme} loadHomePage={loadHomePage} />
      ) : (
        <>
          <main className="flex flex-1 flex-col items-center gap-6 bg-gray-200/60   px-6 py-9 dark:bg-gray-800">
            <About />
            <MyWork />
            <MySkills />
            <BackToTop mobileMenuVisible={mobileMenuVisible} />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
