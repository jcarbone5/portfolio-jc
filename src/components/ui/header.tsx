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
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="sticky top-7 mt-8 z-10"
    >
      <button
        onClick={handleOpenSidebar}
        className={cn(
          "flex md:hidden items-center justify-center cursor-pointer rounded-full p-2 z-10 bg-white/80 dark:bg-slate-800/80 shadow-lg backdrop-blur-sm transition duration-500 hover:scale-110 hover:bg-white dark:hover:bg-slate-700",
          isScrolled && "bg-white/90 dark:bg-slate-800/90"
        )}
      >
        <Menu />
      </button>

      <div className={cn(
        "hidden md:flex flex-row items-center justify-between transition-all duration-500",
        isScrolled 
          ? "scale-[0.93] bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg py-3.5 px-6" 
          : "scale-100 py-4"
      )}>
        <div className="transition-all duration-500 ease-out-expo">
          <ThemeSwitcher />
        </div>

        <Navbar isScrolled={isScrolled} />

        <div className="transition-all duration-500 ease-out-expo">
          <Languages isScrolled={isScrolled} />
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </motion.header>
  );
};
