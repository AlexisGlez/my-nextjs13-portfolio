"use client";

import { motion } from "framer-motion";

import { CursorMovingImage } from "@/shared/components/CursorMovingImage";

export const ArticleItem: React.FunctionComponent<{
  title: string;
  date: string;
  link: string;
  img: any;
}> = ({ title, date, link, img }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light sm:flex-col"
    >
      <CursorMovingImage
        title={title}
        img={img}
        link={link}
        width={200}
        height={200}
      />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};
