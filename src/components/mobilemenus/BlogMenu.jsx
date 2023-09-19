import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { blogLinkObjects } from "../../utils/blogLinkObjects";
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

export function BlogMenu({ toggleMobileMenu }) {
  return (
    <>
      <AnimatePresence>
        {blogLinkObjects.map((blogLinkObj) => (
          <Link
            onClick={toggleMobileMenu}
            key={blogLinkObj.id}
            to={blogLinkObj.path}
            className={`${
              blogLinkObj.path === "/" ? "border-t border-gray-500 pt-8" : ""
            }`}
          >
            <motion.div
              key={blogLinkObj.id}
              initial={itemVariants.initial}
              exit={itemVariants.exit}
              animate={{
                ...itemVariants.animate,
                transition: { delay: blogLinkObj.delay, duration: 0.5 },
              }}
            >
              {blogLinkObj.name}
            </motion.div>
          </Link>
        ))}
      </AnimatePresence>
    </>
  );
}
