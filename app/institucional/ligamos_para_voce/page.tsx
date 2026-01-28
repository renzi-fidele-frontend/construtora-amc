import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionIntro from "@/components/shared/SectionIntro";
import Image from "next/image";

const LigamosParaVoce = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image width={1914} height={431} src="/img/banners/ligamos_para_voce.jpg" alt="Banner ilustrando a capa da página de empreendimento" />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Institucional", href: "#" },
               { titulo: "Ligamos para você", href: "/institucional/ligamos_para_voce", ativo: true },
            ]}
         />
         <section>
            <Container className="py-25">
               <SectionIntro
                  className="items-start! mb-2!"
                  titulo="Ligamos para você"
                  descricao="Para saber mais sobre nossos empreendimentos, preencha o formulário que entraremos em contato com você."
               />
               {/* TODO: Adicionar o formulário da página do ligamos para você */}
            </Container>
         </section>
      </div>
   );
};
export default LigamosParaVoce;
