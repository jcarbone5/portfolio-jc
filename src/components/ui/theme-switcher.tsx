"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

//Icons
import Sun from "@/assets/icons/Sun";
import Moon from "@/assets/icons/Moon";

//Utils
import { cn } from "@/utils/utils";

interface ThemeSwitcherProps {
  isScrolled?: boolean;
}

export const ThemeSwitcher = ({ isScrolled = false }: ThemeSwitcherProps) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300"
      onClick={toggleTheme}
    >
      <div className={cn(
        "relative z-10 transition-transform duration-500 text-slate-600 dark:text-slate-300",
        "group-hover:text-slate-900 dark:group-hover:text-slate-50 group-hover:rotate-45"
      )}>
        {resolvedTheme === "light" ? <Sun /> : <Moon />}
      </div>
      
      <div className={cn(
        "absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100",
        "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r",
        resolvedTheme === "light"
          ? "before:from-amber-500/10 before:to-yellow-400/10"
          : "before:from-indigo-500/10 before:to-blue-400/10"
      )} />

      <div className={cn(
        "absolute -inset-1 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 blur-sm",
        resolvedTheme === "light"
          ? "bg-gradient-to-r from-amber-500/20 to-yellow-400/20"
          : "bg-gradient-to-r from-indigo-500/20 to-blue-400/20"
      )} />
    </button>
  );
};
