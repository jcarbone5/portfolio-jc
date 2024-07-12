"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

//i18n
import "@/lib/i18next";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster richColors />
      {children}
    </ThemeProvider>
  );
}
