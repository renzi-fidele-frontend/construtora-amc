import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import CardDepoimento from "@/components/shared/CardDepoimento";
import SectionIntro from "@/components/shared/SectionIntro";
import { depoimentos } from "@/data/data";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
   title: "Depoimentos",

   description:
      "Veja depoimentos de clientes da AMC Construções que realizaram o sonho da casa própria e registram suas experiências com nossos empreendimentos.",

   alternates: {
      canonical: "https://amc.eng.br/institucional/depoimentos",
   },

   openGraph: {
      title: "Depoimentos | AMC Construções",
      description: "Depoimentos reais de clientes da AMC Construções sobre a experiência de compra e entrega de empreendimentos.",
      url: "https://amc.eng.br/institucional/depoimentos",
   },
};

const Depoimentos = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image
            width={1914}
            height={431}
            src="/img/banners/depoimentos.jpg"
            alt="Banner ilustrando a capa da página dos depoimentos dos clientes"
         />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Institucional", href: "#" },
               { titulo: "Depoimentos", href: "/institucional/depoimentos", ativo: true },
            ]}
         />
         <section>
            <Container className="py-8 sm:py-12 md:py-14 lg:py-18 xl:py-25">
               <SectionIntro
                  className="items-start! mb-2!"
                  heading="h1"
                  titulo="Depoimentos"
                  descricao="Confira experiências reais de clientes que confiaram na AMC Construções para realizar o sonho da casa própria."
               />
               {/* Conteúdo */}
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-15 pt-10">
                  {depoimentos.map((v, k) => (
                     <CardDepoimento depoimento={v} key={k} />
                  ))}
               </div>
            </Container>
         </section>
      </div>
   );
};
export default Depoimentos;
