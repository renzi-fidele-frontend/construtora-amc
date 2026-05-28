import Container from "@/components/layout/Container";
import SectionIntro from "@/components/shared/SectionIntro";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IEmpreendimento } from "@/types/types";
import dynamic from "next/dynamic";

const LightBoxCarousel = dynamic(() => import("@/components/shared/LightboxCarousel"), { ssr: false });

const GaleriaDoEmpreendimento = ({ empreendimento }: { empreendimento: IEmpreendimento }) => {
   function preverValue() {
      if (empreendimento?.detalhes.apartamento1) return "apto1";
      if (empreendimento?.detalhes.apartamento2) return "apto2";
      if (empreendimento?.detalhes.ilustracoes) return "fotos";
      if (empreendimento?.detalhes.plantas) return "plantas";
      if (empreendimento?.detalhes.implantacao) return "implantacao";
      return "";
   }

   return (
      <section id="imagens" className="relative py-14 sm:py-17.5 text-center">
         <Container className="flex flex-col items-center">
            <SectionIntro className="xl:[&_h2]:text-8xl md:[&_h2]:mt-4 text-white! mb-3! md:mb-6!" titulo="IMAGENS" />
            {/* Categorias */}
            <Tabs defaultValue={preverValue()} className="w-fit items-center not-first:mx-10">
               <TabsList className="flex-wrap *:bg-zinc-50 *:hover:cursor-pointer sm:*:text-xl **:px-4! sm:**:px-5! md:*:text-2xl md:**:px-8!">
                  {empreendimento.detalhes.apartamento1 && <TabsTrigger value="apto1">Apto 1</TabsTrigger>}
                  {empreendimento.detalhes.apartamento2 && <TabsTrigger value="apto2">Apto 2</TabsTrigger>}
                  {empreendimento.detalhes.ilustracoes && <TabsTrigger value="fotos">Fotos</TabsTrigger>}
                  {empreendimento.detalhes.plantas && <TabsTrigger value="plantas">Plantas</TabsTrigger>}
                  {empreendimento.detalhes.implantacao && <TabsTrigger value="implantacao">Implantação</TabsTrigger>}
               </TabsList>
               {/* Apartamento 1 */}
               {empreendimento.detalhes.apartamento1 && (
                  <TabsContent value="apto1">
                     <div className="mt-10">
                        <LightBoxCarousel fotos={empreendimento.detalhes.apartamento1} />
                     </div>
                  </TabsContent>
               )}
               {/* Apartamento 2 */}
               {empreendimento.detalhes.apartamento2 && (
                  <TabsContent value="apto2">
                     <div className="mt-10">
                        <LightBoxCarousel fotos={empreendimento.detalhes.apartamento2} />
                     </div>
                  </TabsContent>
               )}
               {/* Ilustrações */}
               {empreendimento.detalhes.ilustracoes && (
                  <TabsContent value="fotos">
                     <div className="mt-10">
                        <LightBoxCarousel fotos={empreendimento.detalhes.ilustracoes} />
                     </div>
                  </TabsContent>
               )}
               {/* Plantas */}
               {empreendimento.detalhes.plantas && (
                  <TabsContent value="plantas">
                     <div className="mt-10">
                        <LightBoxCarousel fotos={empreendimento.detalhes.plantas} />
                     </div>
                  </TabsContent>
               )}
               {/* Implantação */}
               {empreendimento.detalhes.implantacao && (
                  <TabsContent value="implantacao">
                     <div className="mt-10">
                        <LightBoxCarousel fotos={empreendimento.detalhes.implantacao} />
                     </div>
                  </TabsContent>
               )}
            </Tabs>
            {/* Aviso de uso de imagens ilustrativas */}
            <p className="text-[12px] mt-6">
               As imagens aqui constantes são ilustrativas. As perspectivas dos ambientes apresentam sugestões de decoração, não fazendo parte do
               projeto em execução ou que será executado. Os acabamentos serão conforme memorial descritivo. Registro de Incorporação no Cartório
               de Registro de Imóveis competente. Para mais informações Fale conosco com a construtora.
            </p>
         </Container>
         {/* Rectângulo verde claro */}
         <div className="absolute w-full inset-y-0 top-0 h-128 bg-theme1 -z-1"></div>
      </section>
   );
};
export default GaleriaDoEmpreendimento;
