import { z } from "zod";
import { useTranslation } from "react-i18next";

export const useContactFormSchema = () => {
  const { t } = useTranslation();

  const contactFormSchema = z.object({
    name: z.string().min(1, t("inputs.errors.name")),
    email: z.string().email(t("inputs.invalid.email")),
    message: z.string().min(1, t("inputs.errors.message")),
  });

  return { contactFormSchema };
};
