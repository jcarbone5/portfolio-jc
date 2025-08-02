"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

//Components
import { SkillsList } from "@/components/skills/skills-list";
import { SectionTitle } from "@/components/ui/section-title";

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative my-48 pt-20">
      <div className="relative">
        <SectionTitle title={t("header.skills")} />
        <SkillsList />
      </div>
    </section>
  );
};
