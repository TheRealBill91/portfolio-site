import { MyWork } from "../../components/portfolio/MyWork";
import { About } from "../../components/portfolio/About";
import { Footer } from "../../components/Footer";
import "../../main.css";
import { BackToTop } from "../../components/BackToTop";
import { MySkills } from "../../components/portfolio/MySkills";
import { useOutletContext } from "react-router";

export function PortfolioHome() {
  const [mobileMenuVisible] = useOutletContext();

  return (
    <>
      <>
        <main className="flex flex-1 flex-col items-center gap-6 bg-gray-200/60   px-6 py-9 dark:bg-gray-800">
          <About />
          <MyWork />
          <MySkills />
          <BackToTop mobileMenuVisible={mobileMenuVisible} />
        </main>
        <Footer />
      </>
    </>
  );
}
