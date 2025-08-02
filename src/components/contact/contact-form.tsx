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
    <form 
      className="space-y-4" 
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          type="text"
          label={t("contact.labels.name")}
          placeholder={t("contact.placeholders.name")}
          register={register("name")}
          error={errors?.name?.message}
          className="transition-all duration-200 focus-within:scale-[1.02]"
        />

        <Input
          type="text"
          label={t("contact.labels.email")}
          placeholder={t("contact.placeholders.email")}
          register={register("email")}
          error={errors?.email?.message}
          className="transition-all duration-200 focus-within:scale-[1.02]"
        />
      </div>

      <Textarea
        label={t("contact.labels.message")}
        placeholder={t("contact.placeholders.message")}
        register={register("message")}
        error={errors?.message?.message}
        className="transition-all duration-200 focus-within:scale-[1.02]"
      />

      <div className="pt-4">
        <button
          type="submit"
          className="group relative w-full md:w-auto px-8 py-3 bg-teal-500 dark:bg-teal-400 text-white dark:text-slate-900 font-medium rounded-xl overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-teal-400 dark:focus:ring-offset-slate-800"
          disabled={isSubmitting}
          aria-labelledby={t("contact.button.text")}
        >
          <span className="flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {t("contact.button.loading")}
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t("contact.button.text")}
              </>
            )}
          </span>
        </button>
      </div>
    </form>
  );
};
