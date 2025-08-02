"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//Components
import { Languages } from "@/components/ui/languages";

//Utils
import { scrollToHash } from "@/utils/utils";

//Types
import { ScrollItemsEnum } from "@/types/header";

//Assets
import Jean from "@/assets/images/jeanProfile.webp";
import { ThemeSwitcher } from "./theme-switcher";

interface SidebarProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { t } = useTranslation();

  const menuOptions = [
    { id: 1, section: ScrollItemsEnum.ABOUT, label: t("header.about") },
    {
      id: 2,
      section: ScrollItemsEnum.EXPERIENCE,
      label: t("header.experience"),
    },
    { id: 3, section: ScrollItemsEnum.SKILLS, label: t("header.skills") },
    { id: 4, section: ScrollItemsEnum.CONTACT, label: t("header.contact") },
  ];

  const handleItemClick = (section: ScrollItemsEnum) => {
    scrollToHash(section);
    onClose();
  };

  return (
    <>
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={{ 
          x: isOpen ? 0 : -400,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8
        }}
        className="fixed inset-y-0 left-0 w-72 bg-white/90 dark:bg-slate-900/90 shadow-xl backdrop-blur-lg z-20 border-r border-slate-200 dark:border-slate-700"
      >
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Image
              src={Jean}
              alt="Jean Carbone"
              className="h-20 w-20 object-cover rounded-full shadow-xl ring-2 ring-slate-200 dark:ring-slate-700 my-8"
            />
          </motion.div>
        </div>

        <nav className="p-6">
          <motion.ul
            initial="closed"
            animate="open"
            variants={{
              open: {
                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
              },
              closed: {}
            }}
          >
            {menuOptions.map((option) => (
              <motion.li
                key={option.id}
                variants={{
                  open: { x: 0, opacity: 1 },
                  closed: { x: -20, opacity: 0 }
                }}
                className="rounded-xl px-6 py-3 hover:bg-white dark:hover:bg-slate-800 cursor-pointer mb-3 transition-all duration-300 hover:shadow-md"
                onClick={() => handleItemClick(option.section)}
              >
                <span className="text-slate-700 dark:text-slate-200 font-medium">
                  {option.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <div className="flex flex-row justify-center gap-5">
          <ThemeSwitcher />
          <Languages />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className={`fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-10 ${!isOpen && 'pointer-events-none'}`}
      />
    </>
  );
};
