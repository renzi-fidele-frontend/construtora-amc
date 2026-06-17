import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { AdminPanel } from "@/components/shared/AdminPanel";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getLogedUser } from "@/lib/admin";

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

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const user = await getLogedUser();
   const schemaDaConstrutora = {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "AMC Construções",
      url: "https://amc.eng.br",
      logo: "https://amc.eng.br/img/logo.png",
      contactPoint: {
         "@type": "ContactPoint",
         telephone: "+55-47-99152-0164",
         contactType: "sales",
         areaServed: "BR",
         availableLanguage: "Portuguese",
      },
      address: [
         {
            "@type": "PostalAddress",
            streetAddress: "Av. Tiradentes, 501 Torre 1 (14º Andar - Sala 1401)",
            addressLocality: "Londrina",
            addressRegion: "PR",
            postalCode: "86070-545",
            addressCountry: "BR",
         },
         {
            "@type": "PostalAddress",
            streetAddress: "R. Monza, 226 - Sala 704",
            addressLocality: "Palhoça",
            addressRegion: "SC",
            postalCode: "88132-147",
            addressCountry: "BR",
         },
      ],
      sameAs: [
         "https://www.facebook.com/people/AMC-Constru%C3%A7%C3%B5es/100063671165105/",
         "https://www.instagram.com/construcoesamc/",
         "https://www.youtube.com/@AMCConstrucoes",
      ],
   };
   const schemaDoSite = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "AMC Construções",
      url: "https://amc.eng.br",
      potentialAction: {
         "@type": "SearchAction",
         target: {
            "@type": "EntryPoint",
            urlTemplate: "https://amc.eng.br/empreendimentos?categoria={search_term_string}",
         },
         "query-input": "required name=search_term_string",
      },
   };

   return (
      <html lang="pt-BR">
         <body className={`${fontRubik.variable} font-rubik antialiased text-theme1 min-h-dvh select-none`}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDaConstrutora) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDoSite) }} />
            <Header />
            <TooltipProvider>{children}</TooltipProvider>
            <Footer />
            {/* Painel do administrador */}
            {user && <AdminPanel />}
            <Toaster />
         </body>
      </html>
   );
}
