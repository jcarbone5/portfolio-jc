"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

//Icons
import Sun from "@/assets/icons/Sun";
import Moon from "@/assets/icons/Moon";

//Utils
import { cn } from "@/utils/utils";

interface ThemeSwitcherProps {
  isScrolled: boolean;
}

export const ThemeSwitcher = ({ isScrolled }: ThemeSwitcherProps) => {
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
    <div
      className={cn(
        "flex items-center justify-center cursor-pointer rounded-full p-2 z-10 dark:bg-black/20 transition duration-500 hover:scale-110",
        isScrolled && "backdrop-blur bg-gray-300/50 dark:bg-black/30"
      )}
      onClick={toggleTheme}
    >
      {resolvedTheme === "light" ? <Sun /> : <Moon />}
    </div>
  );
};
