"use client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface CarouselDeFotosProps {
   fotos: string[];
}

const CarouselDeFotos = ({ fotos }: CarouselDeFotosProps) => {
   const AutoplayPlugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }));

   return (
      <Carousel plugins={[AutoplayPlugin.current]}>
         <CarouselContent>
            {fotos?.map((v, k) => (
               <CarouselItem key={k}>
                  <Image width={1920} height={620} src={v} alt="Foto demostrando um empreendimento" />
               </CarouselItem>
            ))}
         </CarouselContent>
      </Carousel>
   );
};
export default CarouselDeFotos;
