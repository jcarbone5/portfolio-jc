"use client";

import Image from "next/image";
import { motion } from "framer-motion";

//Components
import { ContactInformation } from "@/components/about/contact-information";

//Assets
import Jean from "@/assets/images/jean.webp";

export const About = () => {
  return (
    <section id="about" className="my-48">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={Jean}
          alt="Jean Carbone"
          className="h-20 w-20 object-cover rounded-full shadow-md mb-3"
        />

        <h2 className="font-medium text-4xl mb-4">Hi, I am Jean Carbone</h2>

        <p className="font-light text-lg tracking-wider mb-8 text black dark:text-white/80">
          Committed and goal-oriented Software Developer, specializing in mobile
          and front-end application development. I focus on delivering
          innovative and high-quality solutions. I&apos;ve successfully thrived
          in various industries, allowing me to adapt easily to different
          projects and teams. My goal is to continuously expand and enhance my
          knowledge to build better solutions.
        </p>
      </motion.div>

      <ContactInformation />
    </section>
  );
};
