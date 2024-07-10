//Components
import { ContactInformationItem } from "@/components/about/contact-information-item";

//Helpers
import { contactInformation } from "@/helpers";

export const ContactInformation = () => {
  return (
    <div className="flex flex-row flex-wrap gap-5 cursor-pointer font-light">
      {contactInformation.map((contact) => (
        <ContactInformationItem key={contact.title} {...contact} />
      ))}
    </div>
  );
};
