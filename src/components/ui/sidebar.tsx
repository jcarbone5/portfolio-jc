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
        initial={{ x: -400 }}
        animate={{ x: isOpen ? 0 : -400 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 shadow-lg z-20"
      >
        <div className="flex justify-center">
          <Image
            src={Jean}
            alt="Jean Carbone"
            className="h-16 w-16 object-cover rounded-full shadow-md my-5"
          />
        </div>

        <nav className="p-4">
          <ul>
            {menuOptions.map((option) => (
              <li
                key={option.id}
                className="rounded-full px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-100/10 cursor-pointer mb-5"
                onClick={() => handleItemClick(option.section)}
              >
                <span className="text-gray-700 dark:text-gray-200">
                  {option.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-row justify-center gap-5">
          <ThemeSwitcher />
          <Languages />
        </div>
      </motion.div>

      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
        />
      )}
    </>
  );
};
