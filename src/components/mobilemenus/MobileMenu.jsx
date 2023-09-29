import { AnimatePresence } from "framer-motion";
import { PortfolioMenu } from "./PortfolioMenu";
import { BlogMenu } from "./BlogMenu";

export function MobileMenu({ toggleMobileMenu, onBlogPage, signOut }) {
  return (
    <>
      <AnimatePresence>
        <div className="height-mobile-dynamic fixed right-0 top-0 z-10 flex   w-screen flex-col items-center justify-evenly  bg-gray-200/70 backdrop-blur-lg dark:bg-gray-600/70">
          <ul className="absolute z-10  flex h-96   flex-col justify-between gap-14 text-3xl capitalize text-gray-700 dark:text-slate-100 ">
            {!onBlogPage ? (
              <PortfolioMenu toggleMobileMenu={toggleMobileMenu} />
            ) : (
              <BlogMenu toggleMobileMenu={toggleMobileMenu} signOut={signOut} />
            )}
          </ul>
        </div>
      </AnimatePresence>
    </>
  );
}
