"use client";

import { useTranslation } from "react-i18next";

//Components
import { ContactForm } from "@/components/contact/contact-form";
import { SectionTitle } from "@/components/ui/section-title";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="my-48 max-w-3xl">
      <div className="space-y-8">
        <SectionTitle title={t("header.contact")} />

        <div className="relative bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 p-8 animate-fade-up">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
