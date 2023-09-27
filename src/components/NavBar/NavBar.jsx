import { Link } from "react-router-dom";
import { PortfolioNavBar } from "./PortfolioNavBar";
import { BlogNavBar } from "./BlogNavBar";
export function NavBar({ onBlogPage }) {
  return (
    <nav className="hidden  sm:block">
      <ul className="flex gap-6 text-lg capitalize">
        {!onBlogPage ? <PortfolioNavBar /> : <BlogNavBar />}
      </ul>
    </nav>
  );
}
