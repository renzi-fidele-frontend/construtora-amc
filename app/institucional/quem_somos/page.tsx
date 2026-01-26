import Breadcrumb from "@/components/shared/Breadcrumb";
import Image from "next/image";

const QuemSomos = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image width={1914} height={431} src="/img/banners/quem_somos.jpg" alt="Banner ilustrando a capa da página de empreendimento" />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Institucional", href: "#" },
               { titulo: "AMC Construções", href: "/institucional/quem_somos", ativo: true },
            ]}
         />
      </div>
   );
};
export default QuemSomos;
