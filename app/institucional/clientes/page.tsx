import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionIntro from "@/components/shared/SectionIntro";
import { clientes } from "@/data/data";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
   title: "Clientes",

   description:
      "Conheça alguns dos clientes atendidos pela AMC Construções ao longo de sua trajetória, incluindo concessionárias, órgãos públicos, empresas de infraestrutura e saneamento.",

   alternates: {
      canonical: "https://amc.eng.br/institucional/clientes",
   },

   openGraph: {
      title: "Clientes | AMC Construções",
      description:
         "Conheça alguns dos clientes e projetos atendidos pela AMC Construções em diferentes segmentos de infraestrutura, saneamento, pavimentação e construção civil.",
      url: "https://amc.eng.br/institucional/clientes",
   },
};

const Clientes = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image width={1914} height={431} src="/img/banners/institucional.jpg" alt="Banner da página de clientes da AMC Construções" />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Institucional", href: "#" },
               { titulo: "Clientes", href: "/institucional/clientes", ativo: true },
            ]}
         />
         <section>
            <Container className="py-8 sm:py-12 md:py-14 lg:py-18 xl:py-25">
               <SectionIntro
                  className="items-start! mb-2!"
                  titulo="Clientes da AMC"
                  heading="h1"
                  descricao="Conheça algumas empresas, concessionárias e órgãos públicos que confiaram seus projetos à AMC Construções."
               />
               {/* Listagem */}
               <div className="flex flex-col  gap-6 sm:gap-8 md:gap-12 mt-7 sm:mt-10 md:mt-16">
                  {clientes.map((cliente, k) => (
                     <div key={k} className="flex flex-col gap-2.5 text-sm sm:text-lg lg:text-xl font-light">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{cliente.titulo}</h2>
                        {!!cliente.descricao && <p>{cliente.descricao}</p>}
                        {!!cliente.destaques && (
                           <ul className="list-disc ps-6">
                              {cliente.destaques.map((destaque, k) => (
                                 <li key={k}>{destaque}</li>
                              ))}
                           </ul>
                        )}
                     </div>
                  ))}
               </div>
            </Container>
         </section>
      </div>
   );
};
export default Clientes;
