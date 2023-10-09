import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { blogLinkObjects } from "../../utils/blogLinkObjects";
import { itemVariants } from "../../utils/FramerVariants/MobileMenuVariants";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function BlogMenu({ toggleMobileMenu, signOut }) {
  let updatedblogLinkObjects;
  const { auth } = useContext(AuthContext);
  // If user is authenticated, remove the sign in blog link object
  // otherwise, remove the sign out blog link object
  if (auth === true) {
    updatedblogLinkObjects = blogLinkObjects.toSpliced(1, 1);
  } else {
    updatedblogLinkObjects = blogLinkObjects.toSpliced(2, 1);
  }

  return (
    <>
      <AnimatePresence>
        {updatedblogLinkObjects.map((blogLinkObj) =>
          blogLinkObj.name === "Sign Out" ? (
            <button onClick={signOut} key={blogLinkObj.id}>
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
            </button>
          ) : (
            <Link
              onClick={toggleMobileMenu}
              to={blogLinkObj.path}
              key={blogLinkObj.id}
              className={`${
                blogLinkObj.path === "/"
                  ? "border-t border-gray-500 pt-12 dark:border-slate-100"
                  : ""
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
          )
        )}
      </AnimatePresence>
    </>
  );
}
