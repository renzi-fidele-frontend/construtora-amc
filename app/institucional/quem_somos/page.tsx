import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Image from "next/image";

export const metadata = {
   title: "Quem Somos",
   description: "Conheça a história da AMC Construções, sua trajetória, certificações e atuação em obras em todo o Brasil.",
   alternates: {
      canonical: "https://amc.eng.br/institucional/quem_somos",
   },
   openGraph: {
      title: "Quem Somos | AMC Construções",
      description: "Conheça a história e atuação da AMC Construções.",
      url: "https://amc.eng.br/institucional/quem_somos",
   },
};

const QuemSomos = () => {
   return (
      <div className="pb-10 sm:pb-15 lg:pb-20 xl:pb-25.5">
         {/* Banner do topo */}
         <Image width={1914} height={431} src="/img/banners/institucional.jpg" alt="Banner ilustrando a capa da página de empreendimento" />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Institucional", href: "#" },
               { titulo: "AMC Construções", href: "/institucional/quem_somos", ativo: true },
            ]}
         />
         <Container className="pt-6 sm:pt-8 md:pt-13 xl:pt-25.5">
            {/* História da AMC */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-15">
               <div className="flex flex-col justify-center">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Conheça a história da construtora AMC</h1>
                  <div className="flex flex-col gap-3 sm:gap-4 lg:gap-8 my-6 lg:text-lg font-light">
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
                  <hr className="border" />
               </div>
               <Image
                  width={660}
                  height={495}
                  className="object-cover object-right h-full"
                  src="/img/quem_somos.webp"
                  alt="Engenheiro profissional da AMC Construções planejando em uma obra"
               />
            </div>
            {/* Certificações da AMC */}
            <div className="text-center p-10 sm:pt-14 pb-9 sm:pb-14 md:pb-22">
               <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-7">CERTIFICAÇÕES</h3>
               <hr className="mb-2" />
               <div className="flex items-center justify-center md:gap-5 w-full flex-wrap md:flex-nowrap md:*:w-[50%] *:max-w-full">
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
               <p className="*:font-bold lg:text-lg">
                  A AMC Construções busca excelência nos processos construtivos e plena satisfação de seus Clientes. A empresa possui
                  certificação <span>PBQP-H NÍVEL A</span> e <span>ABNT NBR ISO 9001</span>, reafirmando a consistência da construtora na
                  execução de empreendimentos imobiliários.
               </p>
            </div>
         </Container>
         {/* Política da empresa */}
         <div className="bg-[url(/img/banners/politica_empresa.jpg)] py-15 md:py-22 lg:py-28">
            <Container className="text-center text-white">
               <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">POLÍTICA DA EMPRESA</h3>
               <p className="sm:text-lg md:text-xl font-light mt-4 sm:mt-5 md:mt-8">
                  A AMC Construções está presente em obras comerciais, industriais, privadas e públicas. São obras contratadas por terceiros que
                  exigem racionalização de custos, planejamento, tecnologia e mão-de-obra qualificada.
               </p>
            </Container>
         </div>
      </div>
   );
};
export default QuemSomos;
