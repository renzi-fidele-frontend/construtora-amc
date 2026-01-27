import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionIntro from "@/components/shared/SectionIntro";
import { infraestruturas } from "@/data/data";
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
               <div className="flex flex-col gap-10 pt-18">
                  {infraestruturas.map((v, k) => (
                     <>
                        <div className="flex *:basis-[50%] *:flex-1 gap-7 flex-nowrap">
                           <Image
                              width={430}
                              height={285}
                              src={v.foto}
                              className="shadow-xl/40 rounded"
                              alt={`Foto demonstrando a infraestrutura ${v.titulo} construída pela AMC`}
                           />
                           <div className="flex flex-col justify-center gap-3">
                              <h6 className="text-3xl font-bold">{v.titulo}</h6>
                              <ul className="list-disc ps-7 text-lg space-y-2">
                                 {v.destaques.map((v, k) => (
                                    <li key={k}>{v}</li>
                                 ))}
                              </ul>
                           </div>
                        </div>
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
