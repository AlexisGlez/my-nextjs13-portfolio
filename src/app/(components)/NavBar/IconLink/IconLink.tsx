"use client";

import { motion } from "framer-motion";

import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
} from "./Icons";

export type IconLinkProps = {
  type: "Twitter" | "GitHub" | "LinkedIn" | "Pinterest" | "Dribbble";
  className?: string;
};

const data: Record<
  IconLinkProps["type"],
  { url: string; Icon: React.FunctionComponent }
> = {
  Twitter: { url: "https://twitter.com", Icon: TwitterIcon },
  GitHub: { url: "https://github.com/AlexisGlez", Icon: GitHubIcon },
  LinkedIn: {
    url: "https://www.linkedin.com/in/alexisgonzalezgomez",
    Icon: LinkedInIcon,
  },
  Pinterest: {
    url: "https://www.pinterest.com/AlexisGlezGomez",
    Icon: PinterestIcon,
  },
  Dribbble: { url: "https://dribbble.com", Icon: DribbbleIcon },
};

export const IconLink: React.FunctionComponent<IconLinkProps> = ({
  type,
  className,
}) => {
  const { url, Icon } = data[type];

  return (
    <motion.a
      href={url}
      target="_blank"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={className}
    >
      <Icon />
    </motion.a>
  );
};
