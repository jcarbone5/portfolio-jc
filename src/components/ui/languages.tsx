"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// Images
import usa from "@/assets/images/usa-flag.webp";
import spain from "@/assets/images/spain-flag.webp";

//Utils
import { cn } from "@/utils/utils";

type LanguageKey = "en" | "es";

type Langs = { key: LanguageKey; name: string; icon: StaticImageData }[];

export const Languages = () => {
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
    <div className="flex flex-row bg-gray-100 dark:bg-black/20 rounded-full px-3 py-2 space-x-3">
      {languages.map((lang) => (
        <button
          key={lang.key}
          onClick={() => changeLanguage(lang.key)}
          className={cn(
            "border rounded-full transition duration-200",
            language === lang.key
              ? "border-gray-900 dark:border-white"
              : "border-transparent"
          )}
        >
          <Image width={23} height={23} src={lang.icon} alt={lang.name} />
        </button>
      ))}
    </div>
  );
};
