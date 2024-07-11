"use client";

import { useTranslation } from "react-i18next";

//Components
import { SkillsList } from "@/components/skills/skills-list";
import { SectionTitle } from "@/components/ui/section-title";

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="my-48">
      <SectionTitle title={t("header.skills")} />

      <SkillsList />
    </section>
  );
};
