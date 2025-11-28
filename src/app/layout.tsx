// CLOZI - Guarda-Roupa Virtual com IA, 3D e AR
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/components/custom/language-provider";
import { BottomNavigation } from "@/components/custom/bottom-navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CLOZI - IA, 3D, Estilo e AR",
  description: "Seu guarda-roupa virtual inteligente com IA, renderização 3D realista e provador AR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script src="/lasy-bridge.js" strategy="beforeInteractive" />
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900`}>
        <LanguageProvider>
          <div className="min-h-screen pb-20">
            {children}
          </div>
          <BottomNavigation />
        </LanguageProvider>
      </body>
    </html>
  );
}
