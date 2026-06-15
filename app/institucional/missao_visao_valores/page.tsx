import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionIntro from "@/components/shared/SectionIntro";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
   title: "Missão, Visão e Valores",

   description:
      "Conheça a missão, visão e valores da AMC Construções, que orientam nossas práticas, projetos e compromisso com qualidade, ética e inovação.",

   alternates: {
      canonical: "https://amc.eng.br/institucional/missao_visao_valores",
   },

   openGraph: {
      title: "Missão, Visão e Valores | AMC Construções",
      description: "Entenda os princípios que guiam a AMC Construções em seus projetos de infraestrutura e construção civil.",
      url: "https://amc.eng.br/institucional/missao_visao_valores",
   },
};

const MissaoVissaoEValores = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image
            width={1914}
            height={431}
            src="/img/banners/institucional.jpg"
            alt="Banner ilustrando a capa da página de missão, visão e valores"
         />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Institucional", href: "#" },
               { titulo: "Missão, Visão e Valores", href: "/institucional/missao_visao_valores", ativo: true },
            ]}
         />
         <section>
            <Container className="py-25">
               <SectionIntro
                  heading="h1"
                  className="items-start! mb-2! [&_p]:font-bold"
                  titulo="Missão, Visão e Valores"
                  descricao="Identidade Organizacional AMC Construções"
               />

               {/* Conteúdo */}
               <div className="mt-9 space-y-16 [&_h3]:text-3xl [&_h3]:font-bold [&_h3]:mb-4 text-xl">
                  <div className="bg-linear-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-8 border-l-4 border-theme2">
                     <p className="text-lg text-gray-800 font-semibold">
                        Na AMC Construções, acreditamos que construir vai além de estruturas. Criamos soluções que impactam comunidades e
                        estabelecem padrões de excelência em cada projeto executado.
                     </p>
                  </div>
                  {/* Missão */}
                  <div>
                     <h2>Missão</h2>
                     <p>Desenvolver produtos com excelência, responsabilidade e ética, garantindo a satisfação de nossos clientes.</p>
                  </div>

                  {/* Visão */}
                  <div>
                     <h2>Visão</h2>
                     <p>
                        Estar entre as principais Construtoras do Brasil em 5 anos, trazendo sempre soluções inovadoras para o setor, entregando
                        produtos com qualidade e rentabilidade para a empresa.
                     </p>
                  </div>

                  {/* Valores */}
                  <div>
                     <h2>Valores</h2>
                     <ul className="space-y-2 list-disc list-inside">
                        <li>Ética e transparência em todas as operações</li>
                        <li>Respeito e valorização das pessoas</li>
                        <li>Gestão ágil e compartilhada</li>
                        <li>Excelência na entrega de projetos</li>
                        <li>Responsabilidade com o meio ambiente e a comunidade</li>
                        <li>Valorização da saúde e segurança</li>
                        <li>Compromisso com resultados sustentáveis</li>
                     </ul>
                  </div>

                  {/* Política de Qualidade */}
                  <div>
                     <h2>Política de Qualidade</h2>
                     <p>
                        Atuar buscando plena satisfação do cliente por meio da melhoria contínua no processo de qualidade e com nossos
                        escritórios e canteiros de obras comprometidos com a sustentabilidade.
                     </p>
                  </div>
               </div>
            </Container>
         </section>
      </div>
   );
};
export default MissaoVissaoEValores;
