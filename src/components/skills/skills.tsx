//Components
import { SkillsList } from "@/components/skills/skills-list";
import { SectionTitle } from "@/components/ui/section-title";

export const Skills = () => {
  return (
    <section id="skills" className="my-48">
      <SectionTitle title="Skills" />

      <SkillsList />
    </section>
  );
};
