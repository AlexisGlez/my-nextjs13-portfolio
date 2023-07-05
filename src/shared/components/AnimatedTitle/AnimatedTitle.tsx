"use client";

import { motion } from "framer-motion";

const titleVariant = {
  initial: { opacity: 1 },
  animate: {
    transition: { delay: 0.5, staggerChildren: 0.08 },
  },
};

const wordVariant = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

export const AnimatedTitle: React.FunctionComponent<{
  text: string;
  className?: string;
}> = ({ text, className }) => (
  <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
    <motion.h1
      className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className}`}
      variants={titleVariant}
      initial="initial"
      animate="animate"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={word + "-" + index}
          className="inline-block"
          variants={wordVariant}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  </div>
);
