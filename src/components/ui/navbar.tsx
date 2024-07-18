"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

//Utils
import { cn, scrollToHash } from "@/utils/utils";

//Types
import { ScrollItemsEnum } from "@/types/header";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav
      className={cn(
        "bg-gray-100 text-gray-900 dark:bg-black/20 dark:text-white rounded-full p-1 transition duration-500 z-10",
        isScrolled &&
          "fixed top-7 left-1/2 transform -translate-x-1/2 backdrop-blur bg-gray-300/50 dark:bg-black/30"
      )}
    >
      <ul className="flex space-x-1 sm:space-x-5 font-light text-sm md:text-base cursor-pointer text-nowrap">
        <li
          className="rounded-full px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-100/10"
          onClick={() => scrollToHash(ScrollItemsEnum.ABOUT)}
        >
          <span>{t("header.about")}</span>
        </li>
        <li
          className="rounded-full px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-100/10"
          onClick={() => scrollToHash(ScrollItemsEnum.EXPERIENCE)}
        >
          <span>{t("header.experience")}</span>
        </li>
        <li
          className="rounded-full px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-100/10"
          onClick={() => scrollToHash(ScrollItemsEnum.SKILLS)}
        >
          <span>{t("header.skills")}</span>
        </li>
        <li
          className="rounded-full px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-100/10"
          onClick={() => scrollToHash(ScrollItemsEnum.CONTACT)}
        >
          <span>{t("header.contact")}</span>
        </li>
      </ul>
    </nav>
  );
};
