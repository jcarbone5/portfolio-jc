"use client";

import { motion } from "framer-motion";

//Components
import { TimelineItem } from "@/components/experience/timeline-item";

//Helpers
import { timelineItems } from "@/helpers";

export const Timeline = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <motion.ol
      className="relative border-s-2 border-slate-200 dark:border-slate-700"
    >
      {timelineItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "100px" }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <TimelineItem {...item} />
        </motion.div>
      ))}
    </motion.ol>
  </motion.div>
);

export default Timeline;
