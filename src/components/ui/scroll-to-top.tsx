"use client";

import { useEffect, useState } from "react";

//Icons
import ArrowUp from "@/assets/icons/ArrowUp";

//Utils
import { cn } from "@/utils/utils";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const detectUserScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.body.offsetHeight - 30;

    setIsVisible(scrollPosition >= threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", detectUserScroll);

    return () => {
      window.removeEventListener("scroll", detectUserScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "absolute bottom-20 right-8 sm:right-3 transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <button
        className="rounded-full bg-teal-700 h-10 w-10 text-white flex items-center justify-center transition duration-400 hover:scale-125"
        aria-labelledby="Scroll to top"
        onClick={handleScrollToTop}
      >
        <ArrowUp />
      </button>
    </div>
  );
};
