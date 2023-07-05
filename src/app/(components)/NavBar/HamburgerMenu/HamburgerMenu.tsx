"use client";

import { useCallback, useState, Suspense } from "react";

import { StyledLink } from "../StyledLink";
import { IconLink } from "../IconLink";
import { ThemeButton } from "../ThemeButton";
import { NavigationEvents } from "./NavigationEvents";
import { motion } from "framer-motion";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onRouteChange = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <NavigationEvents onRouteChange={onRouteChange} />
      </Suspense>
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={onClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {isOpen && (
        <motion.div
          className="min-w-[70vw] flex flex-col justify-between items-center fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex flex-col items-center justify-center text-light dark:text-dark">
            <StyledLink href="/" className="my-2" isInverted>
              Home
            </StyledLink>
            <StyledLink href="/about" className="my-2" isInverted>
              About
            </StyledLink>
            <StyledLink href="/projects" className="my-2" isInverted>
              Projects
            </StyledLink>
            <StyledLink href="/articles" className="my-2" isInverted>
              Articles
            </StyledLink>
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <IconLink
              type="GitHub"
              className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
            />
            <IconLink type="LinkedIn" className="w-6 mx-3 sm:mx-1" />
            <IconLink
              type="Pinterest"
              className="w-6 mx-3 bg-light rounded-full"
            />

            <ThemeButton />
          </nav>
        </motion.div>
      )}
    </>
  );
};
