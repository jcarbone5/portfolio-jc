//Components
import { Timeline } from "@/components/experience/timeline";
import { SectionTitle } from "@/components/ui/section-title";

export const Experience = () => {
  return (
    <section id="experience" className="my-48">
      <SectionTitle title="Experience" />

      <Timeline />
    </section>
  );
};
