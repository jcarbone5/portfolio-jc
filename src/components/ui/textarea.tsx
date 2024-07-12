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
            "text-black dark:text-white text-md",
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
          "p-3 rounded-lg w-full text-black bg-gray-100 dark:text-white dark:bg-black/20",
          className
        )}
        {...register}
        {...rest}
      />
      {error && <p className="text-md text-red-500">{error}</p>}
    </div>
  );
};
