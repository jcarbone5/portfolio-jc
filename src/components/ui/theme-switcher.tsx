"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

//Icons
import Sun from "@/assets/icons/Sun";
import Moon from "@/assets/icons/Moon";

//Utils
import { cn } from "@/utils/utils";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-center cursor-pointer rounded-full p-2 z-10 bg-gray-100/20 transition duration-500 hover:scale-110",
        isScrolled &&
          "fixed hidden md:block top-7 transform translate-x-[120px] transform backdrop-blur bg-gray-300/50 dark:bg-black/30"
      )}
      onClick={toggleTheme}
    >
      {resolvedTheme === "light" ? <Sun /> : <Moon />}
    </div>
  );
};
