import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Image from "next/image";

const QuemSomos = () => {
   return (
      <div className="pb-25.5">
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
         <Container className="pt-25.5">
            {/* História da AMC */}
            <div className="flex gap-15 *:basis-[calc(50% - 24px)] *:flex-1">
               <div className="flex flex-col justify-center">
                  <h3 className="text-4xl font-bold">Conheça a história da construtora AMC</h3>
                  <div className="flex flex-col gap-8 my-6 text-lg font-light">
                     <p>Há 29 anos atuando em todo o Brasil. Em cada obra você encontra um padrão de qualidade único.</p>
                     <p>
                        Quem tem visão sabe que o Brasil é um dos mercados com maior potencial de crescimento. O mundo já reconhece isso.
                        Contribuir para o desenvolvimento de um país significa gerar empregos, investir em tecnologia, implementar programas
                        sociais e ambientais e gerar valor para seus clientes.
                     </p>
                     <p>
                        Sediada em Londrina-PR e com filial em Palhoça-SC, a AMC Construções reúne a tradição de um grupo com 29 anos de
                        história. Estruturada por áreas de engenharia e atuando em sintonia com uma linha estratégica de mercado, a AMC
                        Construções é uma empresa moderna e diferenciada.
                     </p>
                  </div>
                  <hr className="border " />
               </div>
               <Image
                  width={660}
                  height={495}
                  src="/img/quem_somos.webp"
                  alt="Foto demonstrando um engenheiro professional da AMC Contruções planificando em uma obra"
               />
            </div>
            {/* Certificações da AMC */}
            <div className="text-center pt-14 pb-22">
               <h3 className="text-4xl font-bold mb-7">CERTIFICAÇÕES</h3>
               <hr className="mb-2" />
               <div className="flex items-center justify-center gap-5 *:w-[50%] *:max-w-full">
                  <Image
                     width={803}
                     height={565}
                     src="/img/certificados/1.jpg"
                     alt="Ilustração demostrando o certificado de conformidade adquirido ao longo do tempo pela AMC Construções"
                  />
                  <Image
                     width={803}
                     height={565}
                     src="/img/certificados/2.jpg"
                     alt="Ilustração demostrando o certificado de conformidade adquirido ao longo do tempo pela AMC Construções"
                  />
               </div>
               <hr className="my-4 border" />
               <p className="*:font-bold text-lg">
                  A AMC Construções busca excelência nos processos construtivos e plena satisfação de seus Clientes. A empresa possui
                  certificação <span>PBQP-H NÍVEL A</span> e <span>ABNT NBR ISO 9001</span>, reafirmando a consistência da construtora na
                  execução de empreendimentos imobiliários.
               </p>
            </div>
         </Container>
         {/* Política da empresa */}
         <div className="bg-[url(/img/banners/politica_empresa.jpg)] py-28">
            <Container className="text-center text-white">
               <h3 className="font-semibold text-6xl">POLÍTICA DA EMPRESA</h3>
               <p className="text-xl font-light mt-8">
                  A AMC Construções está presente em obras comerciais, industriais, privadas e públicas. São obras contratadas por terceiros que
                  exigem racionalização de custos, planejamento, tecnologia e mão-de-obra qualificada.
               </p>
            </Container>
         </div>
      </div>
   );
};
export default QuemSomos;
