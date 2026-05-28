import Container from "@/components/layout/Container";
import BlogHome from "@/components/shared/BlogHome";
import BlogHomeSkeleton from "@/components/shared/BlogHomeSkeleton";
import Btn from "@/components/shared/Btn";
import CardDepoimento from "@/components/shared/CardDepoimento";
import CardDestaque from "@/components/shared/CardDestaque";
import CardEmpreendimento from "@/components/shared/CardEmpreendimento";
import CarouselDeCTAsHome from "@/components/shared/CarouselDeCTAsHome";
import CarouselDeFotos from "@/components/shared/CarouselDeFotos";
import SectionIntro from "@/components/shared/SectionIntro";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { depoimentos, empreendimentos, fotosDestaques } from "@/data/data";
import { Calendar, HardHat, Store, UserStar } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const descricao =
   "Sediada em Londrina-PR e com filial em Palhoça-SC, a AMC Construções reúne a tradição de um grupo com 29 anos de história, atuando com excelência em construção civil e desenvolvimento imobiliário.";

export const metadata: Metadata = {
   title: "AMC Construções",
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
   category: "Real Estate",
};

// TODO: Adicionar a tag do facebook pixel

export default function Home() {
   return (
      <main className="overflow-x-hidden">
         {/* Seção do carousel de apresentação dos banners dos empreendimentos */}
         <CarouselDeFotos fotos={fotosDestaques} />
         {/* Seção dos empreendimentos */}
         <section className="pt-8 sm:pt-17 xl:pt-25 pb-16 xl:pb-32.5">
            <Container>
               <SectionIntro className="text-center" titulo="Empreendimentos" descricao="Conheça os nossos imóveis e encontre seu novo lar." />
               {/* Listagem desktop */}
               <div className="hidden lg:flex gap-14 *:basis-[fit-content] justify-center flex-wrap">
                  {empreendimentos
                     .filter((v) => v.destacado)
                     .map((v, k) => (
                        <CardEmpreendimento empreendimento={v} key={k} />
                     ))}
               </div>
               {/* Slider Mobile */}
               <Carousel className="lg:hidden">
                  <CarouselContent>
                     {empreendimentos
                        .filter((v) => v.destacado)
                        .map((v, k) => (
                           <CarouselItem className="basis-[90%] sm:basis-auto" key={k}>
                              <CardEmpreendimento empreendimento={v} />
                           </CarouselItem>
                        ))}
                  </CarouselContent>
               </Carousel>
               {/* Separador */}
               <hr className="mt-6 sm:mt-10 md:mt-16 mb-7" />
               <div className="flex justify-center">
                  <Link href="/empreendimentos">
                     <Btn className="uppercase">Ver mais imóveis</Btn>
                  </Link>
               </div>
            </Container>
         </section>
         {/* Seção do CTA para outras páginas */}
         <section>
            {/* Listagem desktop */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 relative">
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
                  link="/institucional/ligamos_para_voce"
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
            </div>
            {/* Slider Mobile */}
            <CarouselDeCTAsHome />
         </section>
         {/* Seção do blog */}
         <Suspense fallback={<BlogHomeSkeleton />}>
            <BlogHome />
         </Suspense>
         {/* Seção dos depoimentos */}
         <section className="py-14 sm:py-24 relative">
            <Container>
               <SectionIntro
                  className="*:text-white! text-center"
                  titulo="DEPOIMENTOS"
                  descricao="Leia os depoimentos de quem realizou seus sonhos com a AMC"
               />
               {/* Listagem desktop */}
               <div className="hidden xl:flex flex-wrap justify-between *:basis-[30%]">
                  {depoimentos.map((v, k) => (
                     <CardDepoimento depoimento={v} key={k} />
                  ))}
               </div>
               {/* Slider mobile */}
               <Carousel className="xl:hidden">
                  <CarouselContent>
                     {depoimentos.map((v, k) => (
                        <CarouselItem className="basis-[85%] md:basis-[65%] lg:basis-1/3" key={k}>
                           <CardDepoimento depoimento={v} />
                        </CarouselItem>
                     ))}
                  </CarouselContent>
               </Carousel>
               {/* Separador */}
               <hr className="mt-6 sm:mt-10 md:mt-16 mb-7" />
               <div className="flex justify-center">
                  <Link href="/blog">
                     <Btn className="uppercase">Ver mais Depoimentos</Btn>
                  </Link>
               </div>
            </Container>
            {/* Imagem de fundo */}
            <Image
               className="-z-1 absolute top-0 inset-x-0 h-110 xl:h-130 object-cover"
               width={1918}
               height={520}
               src="/img/fundoDepoimentos.jpg"
               alt="Imagem de fundo demostrando uma família muito feliz após adquirir um empreendimento com a AMC Construções"
            />
         </section>
      </main>
   );
}
