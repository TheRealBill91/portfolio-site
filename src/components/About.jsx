import { SocialLinks } from "./SocialLinks";
import portrait from "../assets/photos/portrait.jpeg";
import { memo } from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 80,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
      ease: "ease-in",
    },
  },
};

export const About = memo(function About() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <section
        id="about"
        className=" relative rounded-md rounded-b-none   border-b-2  border-gray-500/80 p-4  pb-7 text-slate-900 dark:border-gray-300/80 dark:text-slate-100 sm:flex sm:flex-col sm:items-center lg:flex-row lg:px-6 lg:mx-6"
      >
        <motion.div variants={cardVariants} className=" lg:flex-1 ">
          <motion.div variants={cardVariants}>
            <h2 className="py-3 pt-2 text-center text-3xl font-bold text-slate-900 dark:text-gray-100 sm:text-4xl">
              About me
            </h2>
          </motion.div>

          <motion.div variants={cardVariants} className="lg:flex flex-1 lg:items-center lg:flex-col ">
            <div className=" relative mb-2  rounded-3xl   ">
              <img
                className=" rounded-3xl border-2 border-slate-900 shadow-lg shadow-slate-900/30 hover:scale-100  dark:border-gray-100 dark:shadow-slate-500/20  "
                src={portrait}
                alt="portrait of Billy"
              />
              <p className="  absolute bottom-3 left-14 rounded-2xl border-2 border-gray-400/70 bg-slate-100/70 p-1 px-2  text-center text-2xl text-black backdrop-blur-3xl dark:bg-slate-600/70 dark:text-gray-100 sm:left-20 sm:text-3xl">
                Billy Cummings
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={cardVariants} className=" lg:flex-1">
          <motion.div variants={cardVariants}>
            <p className="md:wrap-balance mt-4 pb-3 pt-2 lg:pt-6 text-left text-lg leading-8 sm:px-8 sm:text-xl lg:text-2xl lg:leading-9 sm:leading-8  md:text-center">
              Hi there! I&apos;m a tech enthusiast with a passion for
              problem-solving and building projects. I&apos;ve been exploring
              web development and love discovering its many aspects. I&apos;m
              always eager to learn more and take on new challenges
            </p>
          </motion.div>
          <SocialLinks />
        </motion.div>
      </section>
    </motion.div>
  );
});
