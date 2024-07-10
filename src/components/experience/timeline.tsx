"use client";

import { motion } from "framer-motion";

//Components
import { TimelineItem } from "@/components/experience/timeline-item";

//Helpers
import { timelineItems } from "@/helpers";

export const Timeline = () => (
  <motion.ol
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative border-s border-gray-200/50"
  >
    {timelineItems.map((item, index) => (
      <TimelineItem key={index} {...item} />
    ))}
  </motion.ol>
);

export default Timeline;
