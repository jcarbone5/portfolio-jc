"use client";

import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/utils/utils";

interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  register: UseFormRegisterReturn;
}

export const Textarea = ({
  label,
  register,
  error,
  className,
  ...rest
}: TextareaProps) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && (
        <label
          className={cn(
            "text-slate-700 dark:text-slate-300 text-sm font-medium",
            error && "text-red-500 dark:text-red-500"
          )}
        >
          {label}
        </label>
      )}
      <textarea
        cols={30}
        rows={5}
        className={cn(
          "px-4 py-3 rounded-xl w-full text-slate-800 bg-white dark:text-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-400/20 outline-none transition-all duration-200 resize-y",
          className
        )}
        {...register}
        {...rest}
      />
      {error && <p className="text-md text-red-500">{error}</p>}
    </div>
  );
};
