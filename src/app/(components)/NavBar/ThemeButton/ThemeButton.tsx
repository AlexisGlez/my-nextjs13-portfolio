"use client";

import { useTheme } from "@/shared/hooks/useTheme";
import { MoonIcon, SunIcon } from "../IconLink/Icons";

export const ThemeButton: React.FunctionComponent<{}> = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="ml-3 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
      onClick={() => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      }}
    >
      {theme === "dark" ? (
        <SunIcon className="fill-dark" />
      ) : (
        <MoonIcon className="fill-dark" />
      )}
    </button>
  );
};
