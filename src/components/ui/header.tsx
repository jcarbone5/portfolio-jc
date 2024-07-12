"use client";

import { motion } from "framer-motion";

//Components
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Navbar } from "@/components/ui/navbar";
import { Languages } from "@/components/ui/languages";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center mt-8"
    >
      <ThemeSwitcher />

      <Navbar />

      <Languages />
    </motion.header>
  );
};
