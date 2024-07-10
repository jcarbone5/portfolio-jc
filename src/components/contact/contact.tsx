//Components
import { ContactForm } from "@/components/contact/contact-form";
import { SectionTitle } from "@/components/ui/section-title";

export const Contact = () => {
  return (
    <section id="contact" className="my-48">
      <SectionTitle title="Contact" />

      <ContactForm />
    </section>
  );
};
