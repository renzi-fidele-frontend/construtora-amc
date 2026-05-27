"use client";
import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CardDestaque from "./CardDestaque";
import { Calendar, HardHat, SquareArrowOutUpRightIcon, Store, UserStar } from "lucide-react";

const CarouselDeCTAsHome = () => {
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
      <div className="relative sm:hidden">
         <Carousel className="border-2" setApi={setApi} opts={{ loop: true }} plugins={[AutoplayPlugin.current]}>
            <CarouselContent>
               {/* Blog */}
               <CarouselItem>
                  <CardDestaque
                     Icone={Calendar}
                     titulo={<span className="uppercase">Blog AMC</span>}
                     descricao="Dicas sobre mercado imobiliário, educação financeira, decoração e mais!"
                     link="/blog"
                     className="bg-orange-400"
                  />
               </CarouselItem>
               {/* Quem somos */}
               <CarouselItem>
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
               </CarouselItem>
               {/* Contato */}
               <CarouselItem>
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
               </CarouselItem>
               {/* Empreendimentos */}
               <CarouselItem>
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
               </CarouselItem>
            </CarouselContent>
         </Carousel>
         {/* Navigation Dots */}
         <div className="flex justify-center gap-3 mt-2.5">
            {Array.from({ length: largura }).map((_, index) => (
               <button
                  key={index}
                  className={`h-2 w-4  border-2 border-theme1 transition cursor-pointer ${index + 1 === dotAtual ? "bg-theme1 scale-120" : ""}`}
                  onClick={() => api?.scrollTo(index)}
               />
            ))}
         </div>
         {/* Barra de opacidade */}
         <div className="absolute inset-x-0 top-0 bg-white opacity-30 h-5"></div>
         {/* CTA para click no mobile */}
         <p className="flex items-center flex-nowrap gap-2 absolute text-sm text-white end-3 bottom-10 sm:hidden">Clique para navegar <SquareArrowOutUpRightIcon className="size-5" /></p>
      </div>
   );
};
export default CarouselDeCTAsHome;
