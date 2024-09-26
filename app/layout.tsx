import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PiPo",
  description: "PiPo is an E-commerce website",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/pipo_logo_black.svg",
        href: "/pipo_logo_black.svg"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/pipo_logo_white.svg",
        href: "/pipo_logo_white.svg"
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
