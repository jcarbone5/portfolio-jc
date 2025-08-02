"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

//Components
import { ContactInformation } from "@/components/about/contact-information";
// import { IconCloud } from "@/components/ui/icon-cloud";

//Assets
import Jean from "@/assets/images/jeanProfile.webp";

// import { skills } from "@/helpers/skills";

export const About = () => {
  const { t } = useTranslation();

  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="relative my-24 mb-48 pt-20" ref={sectionRef}>
      <div className="relative isolate">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative inline-block group"
          >
            <div className="relative">
              <Image
                src={Jean}
                alt="Jean Carbone"
                className="h-24 w-24 object-cover rounded-full relative z-10 transition-transform duration-300 group-hover:scale-105 mb-5"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 0.3, 0.2] }}
                transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 bg-gradient-to-br from-teal-700 via-emerald-600 to-teal-800 dark:from-teal-600 dark:via-emerald-600 dark:to-teal-700 rounded-full blur-md"
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-semibold text-4xl mb-4 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent"
          >
            {t("about.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-light text-lg tracking-wider mb-8 text-slate-700 dark:text-slate-300 leading-relaxed relative backdrop-blur-sm"
          >
            {t("about.description")}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 0.15, 0.1] }}
          transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-5 -right-10 w-52 h-52 bg-gradient-to-br from-teal-700 via-emerald-600 to-teal-800 dark:from-teal-600 dark:via-emerald-600 dark:to-teal-700 rounded-full blur-[40px] pointer-events-none"
        />
      </div>

      <ContactInformation />
    </section>
  );
};
