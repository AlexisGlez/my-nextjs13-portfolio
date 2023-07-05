import { useEffect, useState, useRef } from "react";

const prefersDarkThemeMediaQuery = "(prefer-color-scheme: dark)";

type Theme = "light" | "dark";

function toggleThemeInDocument(theme: Theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  const isMounted = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersDarkThemeMediaQuery);

    const handleThemeChange = () => {
      const userSavedTheme = window.localStorage.getItem("theme") as Theme;

      console.log(userSavedTheme);

      const newTheme: Theme =
        userSavedTheme ?? (mediaQuery.matches ? "dark" : "light");

      setTheme(newTheme);

      toggleThemeInDocument(newTheme);
    };

    handleThemeChange();

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      window.localStorage.setItem("theme", theme);
      toggleThemeInDocument(theme);
    } else {
      isMounted.current = true;
    }
  }, [theme]);

  return { theme, setTheme };
}
