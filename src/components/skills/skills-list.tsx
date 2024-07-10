//Components
import { SkillsListItem } from "@/components/skills/skills-list-item";

//Helpers
import { skills } from "@/helpers";

export const SkillsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <SkillsListItem key={skill.name} {...skill} />
      ))}
    </div>
  );
};
