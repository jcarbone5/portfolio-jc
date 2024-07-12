"use client";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

//Components
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

//Schema
import { useContactFormSchema } from "@/lib/schemas";

export const ContactForm = () => {
  const { t } = useTranslation();

  const { contactFormSchema } = useContactFormSchema();
  type ContactFormSchema = z.infer<typeof contactFormSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormSchema> = async (data, e) => {
    e?.preventDefault();

    try {
      const response = await fetch("/api/send/", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const dataJSON = await response.json();

      if (dataJSON) {
        toast.success(dataJSON.message);
        reset();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label={t("contact.labels.name")}
        placeholder={t("contact.placeholders.name")}
        register={register("name")}
        error={errors?.name?.message}
      />

      <Input
        type="text"
        label={t("contact.labels.email")}
        placeholder={t("contact.placeholders.email")}
        register={register("email")}
        error={errors?.email?.message}
      />

      <Textarea
        label={t("contact.labels.message")}
        placeholder={t("contact.placeholders.message")}
        register={register("message")}
        error={errors?.message?.message}
      />

      <button
        type="submit"
        className="py-2 px-4 bg-teal-700 text-white shadow rounded-md disabled:bg-teal-700/30"
        disabled={isSubmitting}
        aria-labelledby={t("contact.button.text")}
      >
        {isSubmitting ? t("contact.button.loading") : t("contact.button.text")}
      </button>
    </form>
  );
};
