import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { empreendimentos } from "@/data/data";
import { analisarCor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import IconesCollapsivel from "./components/IconesCollapsivel";
import SectionIntro from "@/components/shared/SectionIntro";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LightBoxCarousel from "@/components/shared/LightboxCarousel";
import { MapPin } from "lucide-react";
import Mapa from "./components/Mapa";
import MapProvider from "./components/MapProvider";

const Empreendimento = async ({ params }: { params: Promise<{ empreendimento: string }> }) => {
   const { empreendimento: id } = await params;
   const empreendimento = encontrarEmpreendimento(id);

   function encontrarEmpreendimento(idEmpreendimento: string) {
      return empreendimentos.find((v) => v.id === idEmpreendimento);
   }

   return (
      empreendimento && (
         <div>
            <Breadcrumb
               links={[
                  { titulo: "Início", href: "/" },
                  { titulo: "Empreendimentos", href: "/empreendimentos" },
                  { titulo: String(empreendimento?.nome), href: `/empreendimentos/${id}`, ativo: true },
               ]}
            />
            {/* Seção da Vitrine */}
            <section className="py-8 text-zinc-500">
               <Container>
                  {/* Status */}
                  <div
                     className={`text-2xl uppercase font-medium ${analisarCor(empreendimento.categoria)} text-white py-2 px-8 relative overflow-hidden w-115`}
                  >
                     <p>{empreendimento.categoria}</p>
                     {/* Rectângulo overlay */}
                     <svg
                        className="absolute end-0 inset-y-0"
                        width="96"
                        height="55"
                        viewBox="0 0 96 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M0 0H63.5H96V55L46 54.5L0 0Z" fill="white" />
                     </svg>
                  </div>
                  {/* Detalhes */}
                  <div className="border">
                     {/* Heading */}
                     <div className="bg-zinc-50 py-3 px-8 flex items-center justify-between">
                        <div className="border-e grow">
                           <h1 className="font-semibold text-4xl text-theme1">{empreendimento?.nome}</h1>
                        </div>
                        <nav className="flex gap-15 justify-between text-lg px-14 *:hover:underline basis-[50%]">
                           <Link href="#detalhes">Detalhes</Link>
                           <Link href="#imagens">Imagens</Link>
                           <Link href="#diferenciais">Diferenciais</Link>
                           <Link href="#localizacao">Localização</Link>
                        </nav>
                     </div>
                     {/* Demonstração do empreendimento */}
                     <div className="h-105 relative flex flex-col justify-center items-end">
                        {/* Detalhes de área */}
                        <div className="bg-zinc-50 relative flex w-fit end-25 shadow-xl/50">
                           <div className="flex items-center gap-6 p-8 border [&_span]:text-5xl [&_span]:font-medium font-light text-center">
                              <p className="flex flex-col justify-center" dangerouslySetInnerHTML={{ __html: empreendimento?.destaque }}></p>
                              <div className="border h-18 border-dashed"></div>
                              <p
                                 className="flex flex-col justify-center"
                                 dangerouslySetInnerHTML={{ __html: empreendimento?.descricao_area }}
                              ></p>
                           </div>
                           {/* Logo do empreendimento */}
                           <Image
                              width={1080}
                              height={1080}
                              className="size-46"
                              src={empreendimento.detalhes.logomarca}
                              alt={`Logomarca do empreendimento ${empreendimento?.nome}`}
                           />
                        </div>
                        {/* Imagem de fundo */}
                        <Image
                           src={String(empreendimento.detalhes?.fundoDestaque)}
                           width={1920}
                           height={1080}
                           className="inset-0 absolute object-cover h-full -z-1"
                           alt="Ilustração demonstrando o empreendimento ${empreedimento.} "
                        />
                     </div>
                  </div>
                  {/* Ícones de destaques */}
                  <div className="mt-5">
                     <IconesCollapsivel />
                  </div>
               </Container>
            </section>
            {/* Seção da Bio do empreendimento */}
            <section className="mb-19">
               <Container className="flex items-start gap-25 relative">
                  <div className="text-xl flex flex-col gap-4.5">
                     {empreendimento.detalhes.bio.map((v, k) => (
                        <p key={k}>{v}</p>
                     ))}
                  </div>

                  {empreendimento.detalhes.minhaCasa && (
                     <Image
                        width={380}
                        height={112}
                        src="/img/minha-casa-full.webp"
                        alt="Ilustração da logomarca da empresa Minha casa Minha vida"
                        className="sticky top-3"
                     />
                  )}
               </Container>
            </section>
            {/* Seção da Galeria */}
            <section className="relative py-17.5 text-center">
               <Container className="flex flex-col items-center">
                  <SectionIntro className="[&_h2]:text-8xl [&_h2]:mt-4 text-white! mb-6!" titulo="IMAGENS" />
                  {/* Categorias */}
                  <Tabs defaultValue="fotos" className="w-fit items-center">
                     <TabsList className="*:hover:cursor-pointer *:text-2xl **:px-8!">
                        <TabsTrigger value="fotos">Fotos</TabsTrigger>
                        <TabsTrigger value="plantas">Plantas</TabsTrigger>
                        <TabsTrigger value="implantacao">Implantação</TabsTrigger>
                     </TabsList>
                     <TabsContent value="fotos">
                        <div className="mt-10">
                           <LightBoxCarousel fotos={empreendimento.detalhes.ilustracoes} />
                        </div>
                     </TabsContent>
                     <TabsContent value="plantas">
                        <div className="mt-10">
                           <LightBoxCarousel fotos={empreendimento.detalhes.plantas} />
                        </div>
                     </TabsContent>
                     <TabsContent value="implantacao">
                        <div className="mt-10">
                           <LightBoxCarousel fotos={empreendimento.detalhes.implantacao} />
                        </div>
                     </TabsContent>
                  </Tabs>
                  {/* Aviso de uso de imagens ilustrativas */}
                  <p className="text-[12px] mt-6">
                     As imagens aqui constantes são ilustrativas. As perspectivas dos ambientes apresentam sugestões de decoração, não fazendo
                     parte do projeto em execução ou que será executado. Os acabamentos serão conforme memorial descritivo. Registro de
                     Incorporação no Cartório de Registro de Imóveis competente. Para mais informações Fale conosco com a construtora.
                  </p>
               </Container>
               {/* Rectângulo verde claro */}
               <div className="absolute w-full inset-y-0 top-0 h-128 bg-theme1 -z-1"></div>
            </section>
            {/* Seção de Localização */}
            <section className="relative py-17.5 text-center">
               <Container className="flex flex-col items-center">
                  <SectionIntro className="[&_h2]:text-8xl [&_h2]:mt-4 text-white! mb-6!" titulo="LOCALIZAÇÃO" />
                  {/* Endereço */}
                  <div className="border border-white text-white p-6.5 text-xl w-fit px-40 mb-13">
                     <p className="flex items-center gap-3">
                        <MapPin /> {empreendimento.detalhes.endereco_em_texto}
                     </p>
                  </div>
                  {/* Mapa */}
                  <MapProvider>
                     <Mapa empreendimento={empreendimento} />
                  </MapProvider>
               </Container>
               {/* Rectângulo verde claro */}
               <div className="absolute w-full inset-y-0 top-0 h-128 bg-theme1 -z-1"></div>
            </section>
            {/*  */}
         </div>
      )
   );
};
export default Empreendimento;
