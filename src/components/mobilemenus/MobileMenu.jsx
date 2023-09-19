import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { generateKeys } from "../../utils/generateKeys";
import { PortfolioMenu } from "./PortfolioMenu";
import { BlogMenu } from "./BlogMenu";

const itemVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  exit: {
    opacity: 0,
    y: -8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      ease: "easeIn",
    },
  },
};

export function MobileMenu({ toggleMobileMenu, onBlogPage }) {
  const location = useLocation();
  const animationKeys = generateKeys();

  return (
    <>
      <AnimatePresence>
        <div className="height-mobile-dynamic fixed right-0 top-0 z-10 flex   w-screen flex-col items-center justify-evenly  bg-gray-200/70 backdrop-blur-lg dark:bg-gray-600/70">
          <ul className="absolute z-10  flex h-96   flex-col justify-evenly gap-14 text-3xl capitalize text-gray-700 dark:text-slate-100 ">
            {!onBlogPage ? (
              <PortfolioMenu toggleMobileMenu={toggleMobileMenu} />
            ) : (
              <BlogMenu toggleMobileMenu={toggleMobileMenu} />
            )}
          </ul>
        </div>
      </AnimatePresence>
    </>
  );
}
