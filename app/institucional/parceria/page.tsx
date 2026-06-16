import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionIntro from "@/components/shared/SectionIntro";
import Image from "next/image";
import FormularioDeContato from "./components/formulario";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Parceria",

   description:
      "Seja um parceiro da AMC Construções. Buscamos alianças estratégicas para desenvolver projetos com qualidade, competitividade e excelência.",

   alternates: {
      canonical: "https://amc.eng.br/institucional/parceria",
   },

   openGraph: {
      title: "Parceria | AMC Construções",
      description: "Conheça as oportunidades de parceria com a AMC Construções.",
      url: "https://amc.eng.br/institucional/parceria",
      type: "website",
   },
};

const Parceria = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image width={1914} height={431} src="/img/banners/parceria.jpg" alt="Banner da página de parcerias da AMC Construções" />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Institucional", href: "#" },
               { titulo: "Parceria", href: "/institucional/parceria", ativo: true },
            ]}
         />
         <section>
            <Container className="py-8 sm:py-12 md:py-14 lg:py-18 xl:py-25">
               <SectionIntro
                  heading="h1"
                  className="items-start! mb-2!"
                  titulo="Seja um parceiro da AMC"
                  descricao="O relacionamento da empresa com seus parceiros é essencial. Priorizamos sempre alianças estratégicas que visam gerar ganhos para toda a cadeia de negócios e resultem em mais benefícios para o cliente: produto de qualidade, preços competitivos e excelência na prestação de serviço."
               />
               <FormularioDeContato />
            </Container>
         </section>
      </div>
   );
};
export default Parceria;
