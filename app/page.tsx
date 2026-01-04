import Barra from "@/components/layout/Barra";
import { Title, TitleDescription } from "@/components/layout/Typography";
import CarouselDeFotos from "@/components/shared/CarouselDeFotos";

const fotosDestaques = [
   "/img/slides-home/0.png",
   "/img/slides-home/1.jpg",
   "/img/slides-home/2.jpg",
   "/img/slides-home/3.jpg",
   "/img/slides-home/4.jpg",
   "/img/slides-home/5.jpg",
   "/img/slides-home/6.jpg",
   "/img/slides-home/7.jpg",
];
export default function Home() {
   return (
      <div className="overflow-x-hidden">
         {/* Carousel */}
         <CarouselDeFotos fotos={fotosDestaques} />
         {/* Empreendimentos */}
         <div className="pt-25 pb-32.5">
            {/* Introdução */}
            <div className="flex flex-col justify-center items-center gap-2.5">
               <Barra />
               <Title>Empreendimentos</Title>
               <TitleDescription>Conheça os nossos imóveis e encontre seu novo lar.</TitleDescription>
            </div>
         </div>
      </div>
   );
}
