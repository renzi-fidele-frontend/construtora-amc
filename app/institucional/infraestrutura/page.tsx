import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionIntro from "@/components/shared/SectionIntro";
import Image from "next/image";

const Infraestrutura = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image width={1914} height={431} src="/img/banners/institucional.jpg" alt="Banner ilustrando a capa da página de empreendimento" />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Institucional", href: "#" },
               { titulo: "Infraestrutura", href: "/institucional/infraestrutura", ativo: true },
            ]}
         />
         <section>
            <Container className="py-25">
               <SectionIntro
                  className="items-start! mb-2!"
                  titulo="Infraestrutura"
                  descricao="Conheça um pouco mais sobre cada um dos nossos serviços."
               />
               {/* Listagem */}
               <div className="flex flex-col py-18">
                
               </div>
            </Container>
         </section>
      </div>
   );
};
export default Infraestrutura;
