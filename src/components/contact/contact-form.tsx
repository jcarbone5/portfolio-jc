"use client";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

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
        alert(dataJSON.message);
        reset();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <label className="text-black dark:text-white text-md">
          {t("contact.labels.name")}
        </label>
        <input
          type="text"
          placeholder={t("contact.placeholders.name")}
          className="p-3 rounded-lg w-full text-black bg-gray-100 dark:text-white dark:bg-black/20"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-md text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-black dark:text-white text-md">
          {t("contact.labels.email")}
        </label>
        <input
          type="email"
          placeholder={t("contact.placeholders.email")}
          className="p-3 rounded-lg w-full text-black bg-gray-100 dark:text-white dark:bg-black/20"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-md text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-black dark:text-white text-md">
          {t("contact.labels.message")}
        </label>
        <textarea
          placeholder={t("contact.placeholders.message")}
          cols={30}
          rows={5}
          className="p-3 rounded-lg w-full text-black bg-gray-100 dark:text-white dark:bg-black/20"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-md text-red-500">{errors.message.message}</p>
        )}
      </div>

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
