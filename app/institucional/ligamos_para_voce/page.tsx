import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionIntro from "@/components/shared/SectionIntro";
import Image from "next/image";
import FormularioDeContato from "../parceria/components/formulario";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Ligamos para Você",

   description:
      "Entre em contato com a AMC Construções. Preencha o formulário e nossa equipe retornará para apresentar nossos empreendimentos e oportunidades.",

   alternates: {
      canonical: "https://amc.eng.br/institucional/ligamos_para_voce",
   },

   openGraph: {
      title: "Ligamos para Você | AMC Construções",
      description: "Solicite um contato da equipe AMC Construções e conheça nossos empreendimentos.",
      url: "https://amc.eng.br/institucional/ligamos_para_voce",
      type: "website",
   },
};

const LigamosParaVoce = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image width={1914} height={431} src="/img/banners/ligamos_para_voce.jpg" alt="Banner da página Ligamos para Você da AMC Construções" />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Institucional", href: "#" },
               { titulo: "Ligamos para você", href: "/institucional/ligamos_para_voce", ativo: true },
            ]}
         />
         <section>
            <Container className="py-8 sm:py-12 md:py-14 lg:py-18 xl:py-25">
               <SectionIntro
                  className="items-start! mb-2!"
                  heading="h1"
                  titulo="Ligamos para você"
                  descricao="Preencha o formulário abaixo e nossa equipe entrará em contato para apresentar nossos empreendimentos e esclarecer suas dúvidas."
               />
               <FormularioDeContato />
            </Container>
         </section>
      </div>
   );
};
export default LigamosParaVoce;
