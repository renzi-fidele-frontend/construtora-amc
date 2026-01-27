import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionIntro from "@/components/shared/SectionIntro";
import Image from "next/image";

const Parceria = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image width={1914} height={431} src="/img/banners/parceria.jpg" alt="Banner ilustrando a capa da página de empreendimento" />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Institucional", href: "#" },
               { titulo: "Parceria", href: "/institucional/parceria", ativo: true },
            ]}
         />
         <section>
            <Container className="py-25">
               <SectionIntro
                  className="items-start! mb-2!"
                  titulo="INSTITUCIONAL PARCERIA"
                  descricao="O relacionamento da empresa com seus parceiros é essencial. Priorizamos sempre alianças estratégicas que visam gerar ganhos para toda a cadeia de negócios e resultem em mais benefícios para o cliente: produto de qualidade, preços competitivos e excelência na prestação de serviço."
               />
               
            </Container>
         </section>
      </div>
   );
};
export default Parceria;
