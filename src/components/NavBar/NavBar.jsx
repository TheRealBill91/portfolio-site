import { PortfolioNavBar } from "./PortfolioNavBar";
import { BlogNavBar } from "./BlogNavBar";
export function NavBar({ onBlogPage, signOut }) {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-6 text-lg capitalize">
        {!onBlogPage ? <PortfolioNavBar /> : <BlogNavBar signOut={signOut} />}
      </ul>
    </nav>
  );
}
