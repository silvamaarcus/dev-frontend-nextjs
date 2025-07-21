import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeaderComponent } from "@/components/Header";
import { FooterComponent } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextStore - CRUD de Produtos",
  description:
    "Aplicação de CRUD de produtos usando Next.js, TypeScript e FakeStore API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background min-h-screen antialiased`}
      >
        <HeaderComponent />
        <main className="container mx-auto flex-grow p-4">{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
