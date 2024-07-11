"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

//Components
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

//Utils
import { cn } from "@/utils/utils";

//Types
import { ScrollItemsEnum, ScrollItem } from "@/types/header";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToHash = (elementId: ScrollItem) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center mt-8"
    >
      <ThemeSwitcher />

      <nav
        className={cn(
          "bg-gray-100 text-gray-900 dark:bg-black/20 dark:text-white rounded-full p-1 transition duration-500 z-10",
          isScrolled &&
            "fixed top-7 left-1/2 transform -translate-x-1/2 backdrop-blur bg-gray-300/50 dark:bg-black/30"
        )}
      >
        <ul className="flex space-x-0 sm:space-x-5 font-light text-sm md:text-base cursor-pointer">
          <li
            className="rounded-full px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-100/10"
            onClick={() => scrollToHash(ScrollItemsEnum.ABOUT)}
          >
            <span>About</span>
          </li>
          <li
            className="rounded-full px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-100/10"
            onClick={() => scrollToHash(ScrollItemsEnum.EXPERIENCE)}
          >
            <span>Experience</span>
          </li>
          <li
            className="rounded-full px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-100/10"
            onClick={() => scrollToHash(ScrollItemsEnum.SKILLS)}
          >
            <span>Skills</span>
          </li>
          <li
            className="rounded-full px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-100/10"
            onClick={() => scrollToHash(ScrollItemsEnum.CONTACT)}
          >
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};
