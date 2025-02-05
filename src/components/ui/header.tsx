"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

//Components
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Navbar } from "@/components/ui/navbar";
import { Languages } from "@/components/ui/languages";
import { Sidebar } from "@/components/ui/sidebar";

//Utils
import { cn } from "@/utils/utils";

//Icons
import Menu from "@/assets/icons/Menu";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
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
      className="sticky top-7 mt-8 z-10"
    >
      <button
        onClick={handleOpenSidebar}
        className={cn(
          "flex md:hidden items-center justify-center cursor-pointer rounded-full p-2 z-10 dark:bg-black/20 transition duration-500 hover:scale-110",
          isScrolled && "backdrop-blur bg-gray-300/50 dark:bg-black/30"
        )}
      >
        <Menu />
      </button>

      <div className="hidden md:flex flex-row items-center justify-between">
        <ThemeSwitcher isScrolled={isScrolled} />

        <Navbar isScrolled={isScrolled} />

        <Languages isScrolled={isScrolled} />
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </motion.header>
  );
};
