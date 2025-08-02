"use client";

import { motion } from "framer-motion";

interface ContactInformationItem {
  link?: string;
  icon: React.ReactElement;
  title: string;
}

export const ContactInformationItem = ({
  link = "",
  icon,
  title,
}: ContactInformationItem) => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="flex flex-row items-center gap-2.5 px-5 py-2.5 bg-white/80 text-slate-700 dark:bg-slate-800/80 dark:text-slate-200 rounded-full hover:scale-105 hover:bg-white dark:hover:bg-slate-700/90 transition-all duration-300 shadow-md backdrop-blur-sm"
    >
      {icon}
      <span>{title}</span>
    </motion.a>
  );
};
