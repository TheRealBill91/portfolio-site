import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { blogLinkObjects } from "../../utils/blogLinkObjects";
import { itemVariants } from "../../utils/FramerVariants/MobileMenuVariants";

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
              blogLinkObj.path === "/" ? "border-t border-gray-500 pt-12" : ""
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
