"use client";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const categorias = [
   {
      nome: "Empreendimentos",
      url: "/empreendimentos",
   },
   {
      nome: "Pré-lançamentos",
      url: "/empreendimentos?categoria=Pré-lançamento",
   },
   {
      nome: "Lançamentos",
      url: "/empreendimentos?categoria=Lançamento",
   },
   {
      nome: "Pronto para morar",
      url: "/empreendimentos?categoria=Entregue",
   },
];

const SubHeader = () => {
   const sentinelaRef = useRef(null);
   const [isAtTop, setIsAtTop] = useState(false);

   useEffect(() => {
      const elemento = sentinelaRef.current;
      const observer = new IntersectionObserver(
         (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && entry.intersectionRatio === 1) {
               setIsAtTop(true);
            } else {
               setIsAtTop(false);
            }
         },
         {
            root: null,
            threshold: 1.0,
         },
      );

      if (elemento) {
         observer.observe(elemento);
      }

      // Cleanup function
      return () => {
         if (elemento) {
            observer.unobserve(elemento);
         }
      };
   }, []);

   return (
      <>
         {/* Sentinela */}
         <div ref={sentinelaRef}></div>
         {/* Parte inferior do cabeçalho */}
         <div className={`py-3 bg-theme1 text-white text-lg font-medium uppercase ${!isAtTop ? "fixed inset-x-0 top-0 z-5" : ""} `}>
            <Container className="flex items-center justify-center gap-20">
               {categorias.map((v, k) => (
                  <Link href={v.url} key={k}>
                     {v.nome}
                  </Link>
               ))}
               {/* CTA para o minha casa minha vida */}
               <div className="flex gap-10 items-center">
                  <div className="border-s border-dashed h-6"></div>
                  <Link href="https://www.caixa.gov.br/voce/habitacao/minha-casa-minha-vida/Paginas/default.aspx" target="_blank">
                     <div className="flex items-center gap-2 text-[11px] font-bold">
                        <Image
                           width={105}
                           height={74}
                           className="w-auto object-contain h-7"
                           src="/img/minha-casa.webp"
                           alt="Ilustração da logo marca do minha casa minha vida"
                        />
                        <div className="leading-2">
                           <p>Minha Casa</p>
                           <br />
                           <p>Minha Vida</p>
                        </div>
                     </div>
                  </Link>
               </div>
            </Container>
         </div>
      </>
   );
};
export default SubHeader;
