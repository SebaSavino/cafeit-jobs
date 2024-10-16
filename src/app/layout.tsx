import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { mainFont } from "@/utils/fonts";
import { LayoutProps } from "@/types";
import "./styles.css";

export const metadata: Metadata = {
  title: "Café IT",
  description: "Comunidad IT de Santiago del Estero",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es">
      <body className={`${mainFont.className} antialiased`}>
        <ThemeProvider
          disableTransitionOnChange
          defaultTheme="dark"
          attribute="class"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
