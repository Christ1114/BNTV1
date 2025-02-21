import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./style/globals.css";
import { NextAuthProvider } from "./components/nextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BONNE NOUVELLE TV",
  description: "Une plateform de streaming dédié à l'actu Gospel et bien d'autre",
  icons: "/assets/flaticon/logo.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
        {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
