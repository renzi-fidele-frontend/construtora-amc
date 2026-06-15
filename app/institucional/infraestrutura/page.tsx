import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import CardInfraestrutura from "@/components/shared/CardInfraestrutura";
import SectionIntro from "@/components/shared/SectionIntro";
import { infraestruturas } from "@/data/data";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
   title: "Infraestrutura",

   description:
      "Conheça os serviços de infraestrutura realizados pela AMC Construções, incluindo saneamento, terraplanagem, manutenção de rodovias e iluminação pública.",

   alternates: {
      canonical: "https://amc.eng.br/institucional/infraestrutura",
   },

   openGraph: {
      title: "Infraestrutura | AMC Construções",
      description: "Projetos de infraestrutura realizados pela AMC Construções em saneamento, rodovias, terraplanagem e iluminação pública.",
      url: "https://amc.eng.br/institucional/infraestrutura",
   },
};

const Infraestrutura = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image width={1914} height={431} src="/img/banners/institucional.jpg" alt="Banner da página de infraestrutura da AMC Construções" />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Institucional", href: "#" },
               { titulo: "Infraestrutura", href: "/institucional/infraestrutura", ativo: true },
            ]}
         />
         <section>
            <Container className="py-8 sm:py-12 md:py-14 lg:py-18 xl:py-25">
               <SectionIntro
                  className="items-start! mb-2!"
                  heading="h1"
                  titulo="Infraestrutura"
                  descricao="A AMC Construções atua em obras de infraestrutura pesada, incluindo saneamento, terraplenagem, manutenção de rodovias e iluminação pública em projetos públicos e privados."
               />
               {/* Listagem */}
               <div className="flex flex-col gap-10 pt-5 sm:pt-10 md:pt-13 xl:pt-18">
                  {infraestruturas.map((v, k) => (
                     <>
                        <CardInfraestrutura infraestrutura={v} />
                        {k + 1 < infraestruturas.length && <hr className="border border-dashed border-theme1" />}
                     </>
                  ))}
               </div>
            </Container>
         </section>
      </div>
   );
};
export default Infraestrutura;
