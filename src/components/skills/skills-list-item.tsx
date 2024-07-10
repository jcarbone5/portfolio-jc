"use client";

import { motion } from "framer-motion";

interface SkillsListItemPros {
  icon: React.ReactElement;
  name: string;
}

export const SkillsListItem = ({ icon, name }: SkillsListItemPros) => {
  return (
    <motion.div
      key={name}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center space-y-5 items-center bg-gray-100 dark:bg-black/30 p-6 rounded-lg"
    >
      <div className="hover:scale-125 transition duration-300">{icon}</div>
      <h3 className="text-lg text-gray-900 dark:text-white/80">{name}</h3>
    </motion.div>
  );
};
