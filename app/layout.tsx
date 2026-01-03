import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "AMC Contruções",
   description:
      "Sediada em Londrina-PR e com filial em Palhoça-SC, a AMC Construções reúne a tradição de um grupo com 29 anos de história. Estruturada por áreas de engenharia e atuando em sintonia com uma linha estratégica de mercado, a AMC Construções é uma empresa moderna e diferenciada.",
   authors: [{ name: "Renzi Fidele", url: "https://github.com/renzi-fidele-frontend/" }],
   keywords: ["amc", "amc construções"],
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR">
         <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
      </html>
   );
}
