//Components
import { motion } from "framer-motion";
import { ContactInformationItem } from "@/components/about/contact-information-item";

//Helpers
import { contactInformation } from "@/helpers";

export const ContactInformation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-row flex-wrap gap-5 cursor-pointer font-light"
    >
      {contactInformation.map((contact, index) => (
        <motion.div
          key={contact.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.5 + (index * 0.1),
            ease: "easeOut"
          }}
        >
          <ContactInformationItem {...contact} />
        </motion.div>
      ))}
    </motion.div>
  );
};
