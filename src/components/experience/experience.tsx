"use client";

import { useTranslation } from "react-i18next";

//Components
import { Timeline } from "@/components/experience/timeline";
import { SectionTitle } from "@/components/ui/section-title";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="my-48">
      <SectionTitle title={t("header.experience")} />

      <Timeline />
    </section>
  );
};
