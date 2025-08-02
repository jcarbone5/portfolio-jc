"use client";

import { motion } from "framer-motion";

interface SkillsListItemPros {
  icon: React.ReactElement;
  name: string;
}

export const SkillsListItem = ({ icon, name }: SkillsListItemPros) => {
  return (
    <div className="flex flex-col justify-center space-y-5 items-center bg-white/80 dark:bg-slate-800/80 p-6 rounded-xl shadow-md backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700/90 transition-all duration-500 group hover:shadow-lg">
      <motion.div 
        className="relative z-10"
        whileHover={{ 
          scale: 1.15,
          transition: { 
            type: "spring",
            stiffness: 400,
            damping: 17
          }
        }}
      >
        {icon}
      </motion.div>
      <motion.h3 
        className="text-lg font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.h3>
    </div>
  );
};
