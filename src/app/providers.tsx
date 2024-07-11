"use client";

import { ThemeProvider } from "next-themes";

//i18n
import "@/lib/i18next";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
