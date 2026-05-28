import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { empreendimentos } from "@/data/data";
import { analisarCor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import IconesCollapsivel from "./components/IconesCollapsivel";
import SectionIntro from "@/components/shared/SectionIntro";
import { MapPin } from "lucide-react";
import Mapa from "./components/Mapa";
import MapProvider from "./components/MapProvider";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import GaleriaDoEmpreendimento from "./components/GaleriaDoEmpreendimento";

function encontrarEmpreendimento(idEmpreendimento: string) {
   return empreendimentos.find((v) => v.id === idEmpreendimento);
}

type Props = { params: Promise<{ empreendimento: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { empreendimento: id } = await params;
   const empreendimento = encontrarEmpreendimento(id);

   if (!empreendimento)
      return {
         title: "Empreendimento não encontrado",
         description: "Nenhum empreendimento encontrado",
      };

   const url = `https://amc.eng.br/empreendimentos/${empreendimento.id}`;
   const description = `${empreendimento.nome} em ${empreendimento.estado}. Conheça este empreendimento da AMC Construções com excelente localização e infraestrutura moderna.`;

   return {
      title: empreendimento.nome,
      description,
      alternates: {
         canonical: url,
      },
      openGraph: {
         title: empreendimento.nome,
         description,
         url,
         type: "website",
         images: [
            {
               url: empreendimento.ogImage,
               width: 1200,
               height: 630,
               alt: empreendimento.nome,
            },
         ],
      },
      twitter: {
         card: "summary_large_image",
         title: empreendimento.nome,
         description,
         images: [{ url: empreendimento.ogImage, alt: empreendimento.nome, width: 1200, height: 630 }],
      },
   };
}

const Empreendimento = async ({ params }: Props) => {
   const { empreendimento: id } = await params;
   const empreendimento = encontrarEmpreendimento(id);

   const evolucaoDaObra = [
      { titulo: "Fundação", foto: "fundacao.png", percentagem: empreendimento?.detalhes.evolucao_da_obra?.fundacao },
      { titulo: "Estrutura", foto: "estrutura.png", percentagem: empreendimento?.detalhes.evolucao_da_obra?.estrutura },
      { titulo: "Acabamento", foto: "acabamento.png", percentagem: empreendimento?.detalhes.evolucao_da_obra?.acabamento },
      { titulo: "Área Comum", foto: "area-comum.png", percentagem: empreendimento?.detalhes.evolucao_da_obra?.areaComum },
      { titulo: "Concluido", foto: "percentual.png", percentagem: empreendimento?.detalhes.evolucao_da_obra?.percentualConcluido },
   ];

   return (
      empreendimento && (
         <main>
            <Breadcrumb
               links={[
                  { titulo: "Início", href: "/" },
                  { titulo: "Empreendimentos", href: "/empreendimentos" },
                  { titulo: String(empreendimento?.nome), href: `/empreendimentos/${id}`, ativo: true },
               ]}
            />
            {/* Seção da Vitrine */}
            <section className="pt-8 pb-5 md:py-8 text-zinc-500">
               <Container>
                  {/* Status */}
                  <div
                     className={`sm:text-lg md:text-xl xl:text-2xl uppercase font-medium ${analisarCor(empreendimento.categoria)} text-white py-2 px-4 sm:px-6 xl:px-8 relative overflow-hidden sm:w-115`}
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
                  <div id="detalhes" className="border">
                     {/* Heading */}
                     <div className="bg-zinc-50 py-3 px-4 sm:px-6 xl:px-8 flex md:items-center justify-between flex-col md:flex-row">
                        {/* Título */}
                        <div className="md:border-e grow mb-3 md:mb-0">
                           <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl xl:text-4xl text-theme1">{empreendimento?.nome}</h1>
                        </div>
                        {/* Navegação */}
                        <nav className="grid grid-cols-2 sm:flex gap-2 sm:gap-5 lg:gap-10 xl:gap-15 justify-between text-sm lg:text-base xl:text-lg md:ps-8 xl:px-14 *:hover:underline basis-[50%] *:text-center *:border *:border-theme1 *:flex-1 *:py-0.5 sm:*:py-1.5 md:*:border-0 md:*:flex-0 md:*:border-zinc-200 mb-2 sm:mb-0">
                           <Link href="#detalhes">Detalhes</Link>
                           <Link href="#imagens">Imagens</Link>
                           <Link href="#diferenciais">Diferenciais</Link>
                           <Link href="#localizacao">Localização</Link>
                        </nav>
                     </div>
                     {/* Demonstração do empreendimento */}
                     <div className="sm:h-105 relative flex flex-col justify-end md:justify-center items-end">
                        {/* Detalhes de área */}
                        <div className="bg-zinc-50 sm:relative flex w-fit bottom-5 md:bottom-0 sm:end-8 md:end-20 lg:end-25 shadow-xl/50">
                           <div className="text-sm sm:text-base flex items-center gap-4 md:gap-6 p-3 md:p-5 lg:p-8 border [&_span]:text-2xl sm:[&_span]:text-3xl md:[&_span]:text-4xl lg:[&_span]:text-5xl [&_span]:font-medium font-light text-center">
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
                              className="size-25 md:size-35 lg:size-46"
                              src={empreendimento.detalhes.logomarca}
                              alt={`Logomarca do empreendimento ${empreendimento?.nome}`}
                           />
                        </div>
                        {/* Imagem de fundo */}
                        <Image
                           src={String(empreendimento.detalhes?.fundoDestaque)}
                           width={1920}
                           height={1080}
                           priority
                           className="inset-0 sm:absolute object-cover h-full -z-1"
                           alt={`Image do empreendimento ${empreendimento.nome}`}
                        />
                     </div>
                  </div>
                  {/* Ícones de destaques */}
                  <div id="diferenciais" className="mt-0 sm:mt-3 lg:mt-5">
                     <IconesCollapsivel icones={empreendimento.icones} />
                  </div>
               </Container>
            </section>
            {/* Seção da Bio do empreendimento */}
            <section className="mb-13 sm:mb-19">
               <Container className="flex flex-col lg:flex-row items-start gap-8 lg:gap-15 xl:gap-25 relative">
                  <div className="sm:text-lg xl:text-xl flex flex-col gap-3 xl:gap-4.5">
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
                        className="lg:sticky top-5"
                     />
                  )}
               </Container>
            </section>
            {/* Seção da Galeria */}
            <GaleriaDoEmpreendimento empreendimento={empreendimento} />
            {/* Seção da evolução da obra */}
            {empreendimento?.detalhes?.evolucao_da_obra && (
               <section className="py-12 sm:py-17.5 bg-zinc-200">
                  <Container>
                     <SectionIntro titulo="EVOLUÇÃO DA OBRA" descricao="Acompanhe o progresso atual da obra" />
                     <div className="lg:px-20 text-center text-xl flex justify-center gap-y-8 sm:gap-y-13 flex-wrap w-full [&_h6]:font-bold">
                        {/* Fundação */}
                        {evolucaoDaObra.map((v, k) => (
                           <div className="basis-1/2 sm:basis-[33.3%] flex flex-col items-center gap-2 sm:gap-3" key={k}>
                              <Image
                                 className="size-12 sm:size-15 md:size-20 lg:size-35"
                                 src={`/icons/evolucao-da-obra/${v.foto}`}
                                 width={140}
                                 height={140}
                                 alt={`Ícone ilustrando a ${v.titulo}`}
                              />
                              <h6>{v.titulo}</h6>
                              <p>{v.percentagem}%</p>
                           </div>
                        ))}
                     </div>
                  </Container>
               </section>
            )}
            {/* Seção de Localização */}
            <section id="localizacao" className="relative py-12 sm:py-17.5 text-center">
               <Container className="flex flex-col items-center">
                  <SectionIntro className="xl:[&_h2]:text-8xl md:[&_h2]:mt-4 text-white! mb-3! md:mb-6!" titulo="LOCALIZAÇÃO" />
                  {/* Endereço */}
                  <div className="border border-white text-white py-2 sm:py-3 lg:py-4.5 xl:py-6.5 sm:text-lg md:text-xl w-full sm:w-fit px-5 sm:px-20 md:px-40 mb-9 md:mb-13">
                     <p className="flex items-center justify-center gap-2 sm:gap-3">
                        <MapPin className="size-4.5 sm:size-6" /> {empreendimento.detalhes.endereco_em_texto}
                     </p>
                  </div>
                  {/* Mapa */}
                  <MapProvider>
                     <Mapa empreendimento={empreendimento} />
                  </MapProvider>
               </Container>
               {/* Rectângulo verde claro */}
               <div className="absolute w-full inset-y-0 top-0 h-100 sm:h-128 bg-theme1 -z-1"></div>
            </section>
         </main>
      )
   );
};
export default Empreendimento;
