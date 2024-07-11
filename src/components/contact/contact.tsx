"use client";

import { useTranslation } from "react-i18next";

//Components
import { ContactForm } from "@/components/contact/contact-form";
import { SectionTitle } from "@/components/ui/section-title";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="my-48">
      <SectionTitle title={t("header.contact")} />

      <ContactForm />
    </section>
  );
};
