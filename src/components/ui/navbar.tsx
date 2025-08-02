"use client";

import { useTranslation } from "react-i18next";

//Utils
import { cn, scrollToHash } from "@/utils/utils";

//Types
import { ScrollItemsEnum } from "@/types/header";

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar = ({ isScrolled }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <nav className="z-10">
      <ul className={cn(
        "flex items-center transition-all duration-300",
        isScrolled ? "gap-6 scale-95" : "gap-8"
      )}>
        <li className="group" onClick={() => scrollToHash(ScrollItemsEnum.ABOUT)}>
          <span className="relative px-2 py-1.5 cursor-pointer font-medium text-slate-600 dark:text-slate-300 transition-all duration-300 group-hover:px-4 group-hover:text-slate-900 dark:group-hover:text-white">
            <span className="relative z-10">{t("header.about")}</span>
            <div className="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-teal-500/5 to-teal-400/5 dark:from-teal-400/5 dark:to-teal-300/5" />
            <div className="absolute -inset-1 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 blur-md bg-gradient-to-r from-teal-500/10 to-teal-400/10 dark:from-teal-400/10 dark:to-teal-300/10" />
          </span>
        </li>
        <li className="group" onClick={() => scrollToHash(ScrollItemsEnum.EXPERIENCE)}>
          <span className="relative px-2 py-1.5 cursor-pointer font-medium text-slate-600 dark:text-slate-300 transition-all duration-300 group-hover:px-4 group-hover:text-slate-900 dark:group-hover:text-white">
            <span className="relative z-10">{t("header.experience")}</span>
            <div className="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-teal-500/5 to-teal-400/5 dark:from-teal-400/5 dark:to-teal-300/5" />
            <div className="absolute -inset-1 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 blur-md bg-gradient-to-r from-teal-500/10 to-teal-400/10 dark:from-teal-400/10 dark:to-teal-300/10" />
          </span>
        </li>
        <li className="group" onClick={() => scrollToHash(ScrollItemsEnum.SKILLS)}>
          <span className="relative px-2 py-1.5 cursor-pointer font-medium text-slate-600 dark:text-slate-300 transition-all duration-300 group-hover:px-4 group-hover:text-slate-900 dark:group-hover:text-white">
            <span className="relative z-10">{t("header.skills")}</span>
            <div className="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-teal-500/5 to-teal-400/5 dark:from-teal-400/5 dark:to-teal-300/5" />
            <div className="absolute -inset-1 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 blur-md bg-gradient-to-r from-teal-500/10 to-teal-400/10 dark:from-teal-400/10 dark:to-teal-300/10" />
          </span>
        </li>
        <li className="group" onClick={() => scrollToHash(ScrollItemsEnum.CONTACT)}>
          <span className="relative px-2 py-1.5 cursor-pointer font-medium text-slate-600 dark:text-slate-300 transition-all duration-300 group-hover:px-4 group-hover:text-slate-900 dark:group-hover:text-white">
            <span className="relative z-10">{t("header.contact")}</span>
            <div className="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-teal-500/5 to-teal-400/5 dark:from-teal-400/5 dark:to-teal-300/5" />
            <div className="absolute -inset-1 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 blur-md bg-gradient-to-r from-teal-500/10 to-teal-400/10 dark:from-teal-400/10 dark:to-teal-300/10" />
          </span>
        </li>
      </ul>
    </nav>
  );
};
