import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";
const inter = Inter({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "700",
    "800",
    "900",
  ],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Dev OverFlow",
  description: "A community driven platform",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider
    //   appearance={{
    //     elements: {
    //       formButtonPrimary: "primary-gradient",
    //       footerActionLink: "primary-text-gradient hover:text-primary500",
    //     },
    //   }}
    // >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {/* <ThemeProvider> */}
            {children}
            {/* </ThemeProvider> */}
        </body>
      </html>
    // </ClerkProvider>
  );
}
