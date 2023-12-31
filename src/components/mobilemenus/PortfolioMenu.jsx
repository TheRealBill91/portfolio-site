import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { itemVariants } from "../../utils/FramerVariants/MobileMenuVariants";

export function PortfolioMenu({ toggleMobileMenu }) {
  const [mounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      <a
        href="#about"
        className={`${
          mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        } transition-all delay-100 duration-500 `}
      >
        <li className=" " onClick={toggleMobileMenu}>
          about me
        </li>
      </a>
      <a
        href="#myWork"
        className={`${
          mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        } transition-all delay-300 duration-500 `}
      >
        <li className=" " onClick={toggleMobileMenu}>
          my work
        </li>
      </a>
      <a
        href="#mySkills"
        className={`${
          mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        } transition-all delay-500 duration-500 `}
      >
        <li className=" " onClick={toggleMobileMenu}>
          my skills
        </li>
      </a>
      <a
        href="#contact"
        className={`  ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        } transition-all delay-700 duration-500 `}
      >
        <li
          className=" "
          style={{ transitionDelay: "1500ms" }}
          onClick={toggleMobileMenu}
        >
          contact
        </li>
      </a>{" "}
      <AnimatePresence>
        <Link
          className="border-t border-gray-500 pt-12"
          onClick={toggleMobileMenu}
          to="/blog"
        >
          <motion.div
            key={1}
            initial={itemVariants.initial}
            exit={itemVariants.exit}
            animate={itemVariants.animate}
          >
            Blog
          </motion.div>
        </Link>
      </AnimatePresence>
    </>
  );
}
