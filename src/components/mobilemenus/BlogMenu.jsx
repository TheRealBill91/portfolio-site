import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { blogLinkObjects } from "../../utils/blogLinkObjects";
import { itemVariants } from "../../utils/FramerVariants/MobileMenuVariants";

export function BlogMenu({ toggleMobileMenu, auth, signOut }) {
  let updatedblogLinkObjects;
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
        {updatedblogLinkObjects.map((blogLinkObj) => (
          <Link
            onClick={
              blogLinkObj.name === "Sign Out" ? signOut : toggleMobileMenu
            }
            key={blogLinkObj.id}
            to={blogLinkObj.path}
            className={`${
              blogLinkObj.path === "/"
                ? "border-t border-gray-500 pt-12 dark:border-slate-100"
                : ""
            }`}
            state={{
              message: "Signout successful",
            }}
            replace={true}
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
