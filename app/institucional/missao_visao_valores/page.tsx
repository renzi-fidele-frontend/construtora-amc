import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionIntro from "@/components/shared/SectionIntro";
import Image from "next/image";

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
                  className="items-start! mb-2! [&_p]:font-bold"
                  titulo="Missão, Visão e Valores"
                  descricao="Identidade Organizacional AMC Construções"
               />

               {/* Conteúdo */}
               <div className="mt-9 space-y-16 [&_h3]:text-3xl [&_h3]:font-bold [&_h3]:mb-4 text-xl">
                  <div className="bg-linear-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-8 border-l-4 border-theme2">
                     <p className="text-lg text-gray-800 font-semibold">
                        Na AMC Construções, acreditamos que construir vai além de estruturas. É sobre criar legados, impactar comunidades e
                        estabelecer padrões de excelência que transcendem gerações. Nossa missão, visão e valores são o alicerce que nos guia em
                        cada projeto.
                     </p>
                  </div>
                  {/* Missão */}
                  <div>
                     <h3>Missão</h3>
                     <p>Desenvolver produtos com excelência, responsabilidade e ética, garantindo a satisfação de nossos cliente.</p>
                  </div>

                  {/* Visão */}
                  <div>
                     <h3>Visão</h3>
                     <p>
                        Estar entre as principais Construtoras do Brasil em 5 anos, trazendo sempre soluções inovadoras para o setor, entregando
                        produtos com qualidade e rentabilidade para a empresa.
                     </p>
                  </div>

                  {/* Valores */}
                  <div>
                     <h3>Valores</h3>
                     <ul className="space-y-2 list-disc list-inside">
                        <li>Atuação ética e transparente</li>
                        <li>Respeito e valorização das pessoas</li>
                        <li>Gestão ágil e compartilhada</li>
                        <li>Excelência no serviço do cliente</li>
                        <li>Responsabilidade com o meio ambiente e a comunidade</li>
                        <li>Valorização da saúde e segurança</li>
                        <li>Compromisso com resultados</li>
                     </ul>
                  </div>

                  {/* Política de Qualidade */}
                  <div>
                     <h3>Política de Qualidade</h3>
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
