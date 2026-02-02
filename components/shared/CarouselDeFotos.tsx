"use client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";

interface CarouselDeFotosProps {
   fotos: string[];
}

const CarouselDeFotos = ({ fotos }: CarouselDeFotosProps) => {
   const AutoplayPlugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }));
   const [api, setApi] = useState<CarouselApi>();
   const [dotAtual, setDotAtual] = useState(0);
   const [largura, setLargura] = useState(0);

   useEffect(() => {
      if (!api) return;

      setLargura(api.scrollSnapList().length);
      setDotAtual(api.selectedScrollSnap() + 1);

      api.on("select", () => {
         setDotAtual(api.selectedScrollSnap() + 1);
      });
   }, [api]);

   return (
      <div className="relative">
         <Carousel setApi={setApi} opts={{ loop: true }} plugins={[AutoplayPlugin.current]}>
            <CarouselContent>
               {fotos?.map((v, k) => (
                  <CarouselItem key={k}>
                     <Image width={1920} height={620} src={v} alt="Foto demostrando um empreendimento" />
                  </CarouselItem>
               ))}
            </CarouselContent>
         </Carousel>
         {/* Navigation Dots */}
         <Container>
            <div className="flex justify-center gap-3 py-2 absolute bottom-5">
               {Array.from({ length: largura }).map((_, index) => (
                  <button
                     key={index}
                     className={`size-4.5 rounded-full border-3 border-white transition cursor-pointer shadow-md/100 ${index + 1 === dotAtual ? "bg-white scale-120" : ""}`}
                     onClick={() => api?.scrollTo(index)}
                  />
               ))}
            </div>
         </Container>
      </div>
   );
};
export default CarouselDeFotos;
