import Container from "@/components/layout/Container";
import Btn from "@/components/shared/Btn";
import CardBlog from "@/components/shared/CardBlog";
import CardDepoimento from "@/components/shared/CardDepoimento";
import CardDestaque from "@/components/shared/CardDestaque";
import CardEmpreendimento from "@/components/shared/CardEmpreendimento";
import CarouselDeFotos from "@/components/shared/CarouselDeFotos";
import SectionIntro from "@/components/shared/SectionIntro";
import { depoimentos, empreendimentos, fotosDestaques } from "@/data/data";
import { apanhar_artigos } from "@/lib/api";
import { Calendar, HardHat, Store, UserStar } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// TODO: Adicionar o favicon
// TODO: Gerar o og-image.jpg em 1200x630

const descricao =
   "Sediada em Londrina-PR e com filial em Palhoça-SC, a AMC Construções reúne a tradição de um grupo com 29 anos de história, atuando com excelência em construção civil e desenvolvimento imobiliário.";

export const metadata: Metadata = {
   applicationName: "AMC Construções",
   creator: "Renzi Fidele",
   publisher: "Renzi Fidele",
   metadataBase: new URL("https://amc.eng.br"),
   title: {
      default: "AMC Construções",
      template: "%s | AMC Construções",
   },
   description: descricao,
   keywords: [
      "AMC Construções",
      "Construtora AMC",
      "Construção civil",
      "Venda de imóveis",
      "Construtora em Londrina",
      "Construtora em Palhoça",
      "Empreendimentos imobiliários",
   ],
   authors: [
      {
         name: "Renzi Fidele",
         url: "https://github.com/renzi-fidele-frontend/",
      },
   ],
   alternates: {
      canonical: "https://amc.eng.br/",
   },
   openGraph: {
      title: "AMC Construções",
      description: descricao,
      url: "https://amc.eng.br/",
      siteName: "AMC Construções",
      locale: "pt_BR",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "AMC Construções",
      description: descricao,
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-video-preview": -1,
         "max-image-preview": "large",
         "max-snippet": -1,
      },
   },
   category: "Real Estate",
};

// TODO: Adicionar a tag do facebook pixel

export default async function Home() {
   const ultimosArtigos = await apanhar_artigos(4, 1);

   return (
      <main className="overflow-x-hidden">
         {/* Seção do carousel de apresentação dos banners dos empreendimentos */}
         <CarouselDeFotos fotos={fotosDestaques} />
         {/* Seção dos empreendimentos */}
         <section className="pt-25 pb-32.5">
            <Container>
               <SectionIntro titulo="Empreendimentos" descricao="Conheça os nossos imóveis e encontre seu novo lar." />
               <div className="flex gap-14 *:basis-[fit-content] justify-center flex-wrap">
                  {empreendimentos
                     .filter((v) => v.destacado)
                     .map((v, k) => (
                        <CardEmpreendimento empreendimento={v} key={k} />
                     ))}
               </div>
               {/* Separador */}
               <hr className="mt-16 mb-7" />
               <div className="flex justify-center">
                  <Link href="/empreendimentos">
                     <Btn className="uppercase">Ver mais imóveis</Btn>
                  </Link>
               </div>
            </Container>
         </section>
         {/* Seção do CTA para outras páginas */}
         <section className="grid grid-cols-4 relative">
            <CardDestaque
               Icone={Calendar}
               titulo={<span className="uppercase">Blog AMC</span>}
               descricao="Dicas sobre mercado imobiliário, educação financeira, decoração e mais!"
               link="/blog"
               className="bg-orange-400"
            />
            <CardDestaque
               Icone={UserStar}
               titulo={
                  <p>
                     Setor dedicado de <br />
                     <span>Qualidade</span>
                  </p>
               }
               descricao="O compromisso da AMC com o cliente."
               link="/institucional/quem_somos"
               className="bg-blue-800"
            />
            <CardDestaque
               Icone={Store}
               titulo={
                  <p className="uppercase">
                     Plantão de <br />
                     <span>Vendas</span>
                  </p>
               }
               descricao="Saiba onde encontrar um plantão de vendas perto de você."
               link="/contato"
               className="bg-emerald-600"
            />
            <CardDestaque
               Icone={HardHat}
               titulo={
                  <p className="uppercase">
                     Acompanhe sua <br />
                     <span>Obra</span>
                  </p>
               }
               descricao="Confira o status dos empreendimentos e acompanhe sua obra."
               className="bg-amber-400"
               link="/empreendimentos"
            />
            {/* Barra de opacidade */}
            <div className="absolute inset-x-0 top-0 bg-white opacity-30 h-5"></div>
         </section>
         {/* Seção do blog */}
         <section className="pt-24 pb-24.5">
            <Container>
               <SectionIntro titulo="Blog" descricao="Fique por dentro dos últimos artigos da AMC" />
               <div className="grid grid-cols-2 gap-8">
                  {ultimosArtigos.artigos.map((v, k) => (
                     <CardBlog key={k} artigo={v} />
                  ))}
               </div>
            </Container>
         </section>
         {/* Seção dos depoimentos */}
         <section className="py-24 relative">
            <Container>
               <SectionIntro
                  className="*:text-white!"
                  titulo="DEPOIMENTOS"
                  descricao="Leia os depoimentos de quem realizou seus sonhos com a AMC"
               />
               <div className="flex flex-wrap justify-between *:basis-[30%]">
                  {depoimentos.map((v, k) => (
                     <CardDepoimento depoimento={v} key={k} />
                  ))}
               </div>
            </Container>
            {/* Imagem de fundo */}
            <Image
               className="-z-1 absolute top-0 inset-x-0"
               width={1918}
               height={520}
               src="/img/fundoDepoimentos.jpg"
               alt="Imagem de fundo demostrando uma família muito feliz após adquirir um empreendimento com a AMC Construções"
            />
         </section>
      </main>
   );
}
