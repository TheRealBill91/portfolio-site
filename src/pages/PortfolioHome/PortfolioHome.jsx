import { MyWork } from "../../components/MyWork";
import { About } from "../../components/About";
import { Footer } from "../../components/Footer";
import "../../main.css";
import { BackToTop } from "../../components/BackToTop";
import { useDarkMode } from "../../hooks/useDarkMode";
import { MySkills } from "../../components/MySkills";
import { useOutletContext } from "react-router";

export function PortfolioHome() {
  const [mobileMenuVisible, onBlogPage] = useOutletContext();
  return (
    <>
      <main className="flex flex-1 flex-col items-center gap-6 bg-gray-200/60   px-6 py-9 dark:bg-gray-800">
        <About />
        <MyWork />
        <MySkills />
        <BackToTop mobileMenuVisible={mobileMenuVisible} />
      </main>
      <Footer />
    </>
  );
}
