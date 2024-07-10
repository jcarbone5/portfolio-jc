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
      className="flex flex-row items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 dark:bg-black/20 dark:text-white rounded-full hover:scale-110 transition duration-200"
    >
      {icon}
      <span>{title}</span>
    </motion.a>
  );
};
