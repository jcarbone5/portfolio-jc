"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

//Icons
import Sun from "@/assets/icons/Sun";
import Moon from "@/assets/icons/Moon";

//Utils
import { cn } from "@/utils/utils";

const useThemeMode = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const getCurrentTheme = () => theme === "system" ? systemTheme : resolvedTheme;
  
  const toggleTheme = () => {
    const currentTheme = getCurrentTheme();
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return { mounted, getCurrentTheme, toggleTheme };
};

export const ThemeSwitcher = () => {
  const { mounted, getCurrentTheme, toggleTheme } = useThemeMode();

  if (!mounted) return null;

  const isLight = getCurrentTheme() === "light";
  
  const buttonStyles = {
    base: "group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
    icon: cn(
      "relative z-10 transition-transform duration-500 text-slate-600 dark:text-slate-300",
      "group-hover:text-slate-900 dark:group-hover:text-slate-50 group-hover:rotate-45"
    ),
    glow: {
      inner: cn(
        "absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100",
        "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r",
        isLight
          ? "before:from-amber-500/10 before:to-yellow-400/10"
          : "before:from-indigo-500/10 before:to-blue-400/10"
      ),
      outer: cn(
        "absolute -inset-1 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 blur-sm",
        isLight
          ? "bg-gradient-to-r from-amber-500/20 to-yellow-400/20"
          : "bg-gradient-to-r from-indigo-500/20 to-blue-400/20"
      )
    }
  };

  return (
    <button className={buttonStyles.base} onClick={toggleTheme}>
      <div className={buttonStyles.icon}>
        {isLight ? <Sun /> : <Moon />}
      </div>
      <div className={buttonStyles.glow.inner} />
      <div className={buttonStyles.glow.outer} />
    </button>
  );
};
