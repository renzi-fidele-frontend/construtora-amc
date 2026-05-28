"use client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import Link from "next/link";

interface CarouselDeFotosProps {
   foto: string;
   url: string;
}

const CarouselDeFotos = ({ fotos }: { fotos: CarouselDeFotosProps[] }) => {
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
                     <Link href={v.url}>
                        <Image
                           className="object-cover"
                           width={1920}
                           height={620}
                           src={v.foto}
                           loading={k + 1 === 1 ? "eager" : "lazy"}
                           priority={k + 1 === 1}
                           alt="Foto demostrando um empreendimento"
                        />
                     </Link>
                  </CarouselItem>
               ))}
            </CarouselContent>
         </Carousel>
         {/* Navigation Dots */}
         <Container>
            <div className="flex justify-center gap-2.5 sm:gap-3 py-2 absolute bottom-0 sm:bottom-3 lg:bottom-5">
               {Array.from({ length: largura }).map((_, index) => (
                  <button
                     key={index}
                     className={`size-2 sm:size-2.5 lg:size-4 rounded-full border-2 lg:border-3 border-white transition cursor-pointer ${index + 1 === dotAtual ? "scale-160 sm:scale-130" : ""}`}
                     onClick={() => api?.scrollTo(index)}
                  />
               ))}
            </div>
         </Container>
      </div>
   );
};
export default CarouselDeFotos;
