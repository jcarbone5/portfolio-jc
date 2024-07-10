"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="font-bold mb-8 text-3xl"
    >
      {title}
    </motion.h1>
  );
};
