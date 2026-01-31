import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const fontRubik = Rubik({
   variable: "--font-rubik",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "AMC Contruções",
   description:
      "Sediada em Londrina-PR e com filial em Palhoça-SC, a AMC Construções reúne a tradição de um grupo com 29 anos de história. Estruturada por áreas de engenharia e atuando em sintonia com uma linha estratégica de mercado, a AMC Construções é uma empresa moderna e diferenciada.",
   authors: [{ name: "Renzi Fidele", url: "https://github.com/renzi-fidele-frontend/" }],
   keywords: ["amc", "amc construções", "construtora amc", "venda de imóveis"],
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR">
         <body className={`${fontRubik.variable} font-rubik antialiased text-theme1 min-h-dvh`}>
            <Header />
            {children}
            <Footer />
            <Toaster />
         </body>
      </html>
   );
}
