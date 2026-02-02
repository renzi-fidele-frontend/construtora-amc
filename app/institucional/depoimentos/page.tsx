import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import CardDepoimento from "@/components/shared/CardDepoimento";
import SectionIntro from "@/components/shared/SectionIntro";
import { depoimentos } from "@/data/data";
import Image from "next/image";

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
            <Container className="py-25">
               <SectionIntro
                  className="items-start! mb-2!"
                  titulo="Depoimentos"
                  descricao="Leia os depoimentos de quem realizou seus sonhos com a AMC"
               />
               {/* Conteúdo */}
               <div className="flex flex-wrap justify-between *:basis-[30%] pt-10">
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
