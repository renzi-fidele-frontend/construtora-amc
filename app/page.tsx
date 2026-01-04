import CarouselDeFotos from "@/components/shared/CarouselDeFotos";

const fotos = [
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
         <CarouselDeFotos fotos={fotos} />
      </div>
   );
}
