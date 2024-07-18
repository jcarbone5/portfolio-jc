"use client";

import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/utils/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: string;
  error?: string;
  register: UseFormRegisterReturn;
}

export const Input = ({
  label,
  type,
  register,
  error,
  className,
  ...rest
}: InputProps) => {
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
      <input
        type={type}
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
