"use client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface CarouselDeFotosProps {
   foto: string;
   url: string;
}

const CarouselDeBannersDoBlog = ({ fotos }: { fotos: CarouselDeFotosProps[] }) => {
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
      <div>
         <Carousel className="border-2" setApi={setApi} opts={{ loop: true }} plugins={[AutoplayPlugin.current]}>
            <CarouselContent>
               {fotos?.map((v, k) => (
                  <CarouselItem key={k}>
                     <Link href={v.url}>
                        <Image className="w-full" width={288} height={419} src={v.foto} alt="Foto demostrando um empreendimento" />
                     </Link>
                  </CarouselItem>
               ))}
            </CarouselContent>
         </Carousel>
         {/* Navigation Dots */}
         <div className="flex justify-center gap-3 mt-2.5">
            {Array.from({ length: largura }).map((_, index) => (
               <button
                  key={index}
                  className={`size-4 rounded-full border-3 transition cursor-pointer  ${index + 1 === dotAtual ? " border-theme1 scale-120" : ""}`}
                  onClick={() => api?.scrollTo(index)}
               />
            ))}
         </div>
      </div>
   );
};
export default CarouselDeBannersDoBlog;
