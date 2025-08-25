import type { Metadata } from "next";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Senior Frontend Developer - Jean Carbone",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-body dark:bg-body-dark">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
