"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//Components
import { ContactInformation } from "@/components/about/contact-information";

//Assets
import Jean from "@/assets/images/jean.webp";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="my-48">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={Jean}
          alt="Jean Carbone"
          className="h-20 w-20 object-cover rounded-full shadow-md mb-3"
        />

        <h2 className="font-medium text-4xl mb-4">{t("about.title")}</h2>

        <p className="font-light text-lg tracking-wider mb-8 text black dark:text-white/80">
          {t("about.description")}
        </p>
      </motion.div>

      <ContactInformation />
    </section>
  );
};
