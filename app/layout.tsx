import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { AdminPanel } from "@/components/shared/AdminPanel";
import { TooltipProvider } from "@/components/ui/tooltip";

const fontRubik = Rubik({
   variable: "--font-rubik",
   subsets: ["latin"],
});

// Meta dados globais
export const metadata: Metadata = {
   metadataBase: new URL("https://amc.eng.br"),
   applicationName: "AMC Construções",
   title: { default: "AMC Construções", template: "%s | AMC Construções" },
   description:
      "AMC Construções é uma empresa especializada em construção civil, empreendimentos imobiliários e desenvolvimento urbano em Londrina e Palhoça.",
   creator: "Renzi Fidele",
   publisher: "Renzi Fidele",
   authors: [
      {
         name: "Renzi Fidele",
         url: "https://github.com/renzi-fidele-frontend/",
      },
   ],
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-video-preview": -1,
         "max-image-preview": "large",
         "max-snippet": -1,
      },
   },
   openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "AMC Construções",
      title: "AMC Construções",
      description: "Construção civil e empreendimentos imobiliários.",
      url: "https://amc.eng.br",
   },
   twitter: {
      card: "summary_large_image",
      title: "AMC Construções",
      description: "Construção civil e empreendimentos imobiliários.",
   },
   icons: {
      icon: "/icon.png",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR">
         <body className={`${fontRubik.variable} font-rubik antialiased text-theme1 min-h-dvh select-none`}>
            <Header />
            <TooltipProvider>{children}</TooltipProvider>
            <Footer />
            {/* Painel do administrador */}
            <AdminPanel />
            <Toaster />
         </body>
      </html>
   );
}
