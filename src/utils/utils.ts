import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { ScrollItem } from "@/types/header";

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export const scrollToHash = (elementId: ScrollItem) => {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 70,
      behavior: "smooth",
    });
  }
};
