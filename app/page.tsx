import Barra from "@/components/layout/Barra";
import Container from "@/components/layout/Container";
import { Title, TitleDescription } from "@/components/layout/Typography";
import CardEmpreendimento from "@/components/shared/CardEmpreendimento";
import CarouselDeFotos from "@/components/shared/CarouselDeFotos";
import { empreendimentos, fotosDestaques } from "@/data/data";
import Image from "next/image";

export default function Home() {
   return (
      <div className="overflow-x-hidden">
         {/* Carousel */}
         <CarouselDeFotos fotos={fotosDestaques} />
         {/* Empreendimentos */}
         <div className="pt-25 pb-32.5">
            <Container>
               {/* Introdução */}
               <div className="flex flex-col justify-center items-center gap-2.5 mb-18">
                  <Barra />
                  <Title>Empreendimentos</Title>
                  <TitleDescription>Conheça os nossos imóveis e encontre seu novo lar.</TitleDescription>
               </div>
               <div className="flex gap-14 *:basis-[fit-content] justify-center flex-wrap">
                  {empreendimentos
                     .filter((v) => v.destacado)
                     .map((v, k) => (
                        <CardEmpreendimento empreendimento={v} key={k} />
                     ))}
               </div>
            </Container>
         </div>
      </div>
   );
}
