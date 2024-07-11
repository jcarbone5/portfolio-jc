import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { EN_TRANSLATION, ES_TRANSLATION } from "@/lib/translations";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: {
        translation: EN_TRANSLATION,
      },
      es: {
        translation: ES_TRANSLATION,
      },
    },
  });

export default i18next;
