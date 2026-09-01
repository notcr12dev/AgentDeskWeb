"use client";

import { ThemeProvider } from "next-themes";
import { GSAPProvider } from "@/app/components/providers/GSAPProvider";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <GSAPProvider>{children}</GSAPProvider>
    </ThemeProvider>
  );
}
