export const itemVariants = {
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
