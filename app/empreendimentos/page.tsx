import Container from "@/components/layout/Container";
import SectionIntro from "@/components/shared/SectionIntro";
import Image from "next/image";
import ListagemDeEmpreendimentos from "./listing";
import Breadcrumb from "@/components/shared/Breadcrumb";

// TODO: Implementar a funcionalidade de paginação a página dos empreendimentos
export default function Empreendimentos() {
   return (
      <div>
         {/* Banner do topo */}
         <Image width={1914} height={431} src="/img/banners/empreendimentos.jpg" alt="Banner ilustrando a capa da página de empreendimento" />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Empreendimentos", href: "/empreendimentos", ativo: true },
            ]}
         />
         <section>
            <Container className="py-25">
               <SectionIntro className="items-start! mb-2!" titulo="Empreendimentos" />
               <ListagemDeEmpreendimentos />
            </Container>
         </section>
      </div>
   );
}
