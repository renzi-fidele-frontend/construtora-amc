import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionIntro from "@/components/shared/SectionIntro";
import { clientes } from "@/data/data";
import Image from "next/image";

const Clientes = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image width={1914} height={431} src="/img/banners/institucional.jpg" alt="Banner ilustrando a capa da página dos clientes" />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Institucional", href: "#" },
               { titulo: "Clientes", href: "/institucional/clientes", ativo: true },
            ]}
         />
         <section>
            <Container className="py-25">
               <SectionIntro className="items-start! mb-2!" titulo="Clientes da AMC" descricao="Veja os clientes que atendemos" />
               {/* Listagem */}
               <div className="flex flex-col gap-12 mt-16">
                  {clientes.map((cliente, k) => (
                     <div key={k} className="flex flex-col gap-2.5 text-xl font-light">
                        <h6 className="text-4xl font-bold">{cliente.titulo}</h6>
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
