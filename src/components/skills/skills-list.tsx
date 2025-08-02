//Components
import { motion } from "framer-motion";
import { SkillsListItem } from "@/components/skills/skills-list-item";
import { useState, useEffect } from "react";

//Helpers
import { skills } from "@/helpers";

export const SkillsList = () => {
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setColumns(4);
      } else if (window.innerWidth >= 768) {
        setColumns(3);
      } else {
        setColumns(2);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-1"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "100px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 1,
            delay: Math.floor(index / columns) * 0.1
          }}
        >
          <SkillsListItem {...skill} />
        </motion.div>
      ))}
    </motion.div>
  );
};
