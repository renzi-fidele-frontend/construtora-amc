import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionIntro from "@/components/shared/SectionIntro";
import Image from "next/image";

const Depoimentos = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image
            width={1914}
            height={431}
            src="/img/banners/institucional.jpg"
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
                  className="items-start! mb-2! [&_p]:font-bold"
                  titulo="Depoimentos"
                  descricao="Identidade Organizacional AMC Construções"
               />

               {/* Conteúdo */}
            </Container>
         </section>
      </div>
   );
};
export default Depoimentos;