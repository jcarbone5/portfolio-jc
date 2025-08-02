"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

//Components
import { Timeline } from "@/components/experience/timeline";
import { SectionTitle } from "@/components/ui/section-title";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="relative my-48 pt-20">
      <div className="relative isolate">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 0.15, 0.1] }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -bottom-32 -right-10 w-52 h-52 bg-gradient-to-br from-teal-700 via-emerald-600 to-teal-800 dark:from-teal-600 dark:via-emerald-600 dark:to-teal-700 rounded-full blur-[40px] pointer-events-none"
        />

        <div className="relative z-10">
          <SectionTitle title={t("header.experience")} />
          <Timeline />
        </div>
      </div>
    </section>
  );
};
