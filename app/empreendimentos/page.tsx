import Container from "@/components/layout/Container";
import SectionIntro from "@/components/shared/SectionIntro";
import Image from "next/image";
import ListagemDeEmpreendimentos from "./listing";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Empreendimentos",
   description:
      "Conheça os empreendimentos da AMC Construções. Projetos modernos, bem localizados e pensados para qualidade de vida e valorização imobiliária.",
   alternates: {
      canonical: "https://amc.eng.br/empreendimentos",
   },
   openGraph: {
      title: "Empreendimentos | AMC Construções",
      description: "Conheça os empreendimentos da AMC Construções.",
      url: "https://amc.eng.br/empreendimentos",
      type: "website",
   },
};
export default function Empreendimentos() {
   return (
      <div>
         {/* Banner do topo */}
         <Image
            width={1914}
            height={431}
            src="/img/banners/empreendimentos.jpg"
            alt="Banner ilustrando a capa da página de empreendimento"
            priority
         />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Empreendimentos", href: "/empreendimentos", ativo: true },
            ]}
         />
         <section>
            <Container className="py-10 md:py-16 xl:py-25">
               <SectionIntro className="items-start! mb-2!" titulo="Empreendimentos" />
               <ListagemDeEmpreendimentos />
            </Container>
         </section>
      </div>
   );
}
