"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// Images
import usa from "@/assets/images/usa-flag.webp";
import spain from "@/assets/images/spain-flag.webp";

//Utils
import { cn } from "@/utils/utils";

//Types
import { Langs, LanguageKey } from "@/types/languages";

interface LanguagesProps {
  isScrolled?: boolean;
}

export const Languages = ({ isScrolled = false }: LanguagesProps) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<LanguageKey>("en");

  const languages: Langs = [
    { key: "en", name: t("account.english"), icon: usa },
    { key: "es", name: t("account.spanish"), icon: spain },
  ];

  const changeLanguage = (lng: LanguageKey) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.key}
          onClick={() => changeLanguage(lang.key)}
          className="group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300"
          title={lang.name}
        >
          <div className={cn(
            "relative z-10 transition-all duration-300",
            language === lang.key 
              ? "scale-105" 
              : "opacity-70 group-hover:opacity-100 group-hover:scale-105"
          )}>
            <Image 
              width={24} 
              height={24} 
              src={lang.icon} 
              alt={lang.name}
              className="rounded-full"
            />
          </div>

          <div className={cn(
            "absolute inset-0 rounded-full transition-all duration-300",
            language === lang.key
              ? "bg-gradient-to-r from-teal-500/10 to-teal-400/10 dark:from-teal-400/10 dark:to-teal-300/10"
              : "opacity-0 group-hover:opacity-100 bg-gradient-to-r from-slate-200/50 to-slate-300/50 dark:from-slate-700/50 dark:to-slate-600/50"
          )} />

          {language === lang.key && (
            <div className={cn(
              "absolute -inset-1 rounded-full transition-all duration-300 blur-sm bg-gradient-to-r",
              "from-teal-500/20 via-teal-400/20 to-teal-500/20 dark:from-teal-400/20 dark:via-teal-300/20 dark:to-teal-400/20",
              "animate-pulse-subtle"
            )} />
          )}
        </button>
      ))}
    </div>
  );
};
