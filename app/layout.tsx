import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/NavHeader";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Conjucat — Catalan & Spanish verb conjugator",
  description:
    "Conjugate any Catalan or Spanish verb. Switch languages with one tap and compare conjugations side by side.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <NavHeader />
          <main className="flex-1">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
