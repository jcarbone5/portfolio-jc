"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

//Components
import { ContactInformation } from "@/components/about/contact-information";

//Assets
import Jean from "@/assets/images/jean.webp";
import { skills } from "@/helpers/skills";

export const About = () => {
  const { t, i18n } = useTranslation();

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [resetAnimation, setResetAnimation] = useState(false);
  const [sectionDimensions, setSectionDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (sectionRef.current) {
        setSectionDimensions({
          width: sectionRef.current.offsetWidth,
          height: sectionRef.current.offsetHeight,
        });
      }
    };

    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      setIsResizing(true);
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateDimensions();
        setIsResizing(false);
      }, 500);
    };

    window.addEventListener("resize", handleResize);
    updateDimensions();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setResetAnimation(true);
    setTimeout(() => setResetAnimation(false), 50);
  }, [i18n.language]);

  const gridSize = Math.ceil(Math.sqrt(skills.length));
  const spacingX = sectionDimensions.width / gridSize;
  const spacingY = sectionDimensions.height / gridSize;

  return (
    <section id="about" className="relative my-48" ref={sectionRef}>
      {!isResizing && !resetAnimation && (
        <div className="absolute inset-0 -z-10">
          {skills.map((skill, i) => {
            const row = Math.floor(i / gridSize);
            const col = i % gridSize;

            const xPos = col * spacingX + spacingX / 2;
            const yPos = row * spacingY + spacingY / 2;

            return (
              <motion.div
                key={i}
                className="absolute opacity-40"
                initial={{ x: xPos, y: yPos, scale: 0.6, opacity: 0 }}
                animate={{
                  x: [xPos, xPos + Math.sin(i) * 30],
                  y: [yPos, yPos + Math.cos(i) * 30],
                  opacity: 0.6,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              >
                {skill.icon}
              </motion.div>
            );
          })}
        </div>
      )}

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

        <h2 className="font-medium text-4xl mb-4">{t("about.title")}</h2>

        <p className="font-light text-lg tracking-wider mb-8 text-black dark:text-white/80">
          {t("about.description")}
        </p>
      </motion.div>

      <ContactInformation />
    </section>
  );
};
