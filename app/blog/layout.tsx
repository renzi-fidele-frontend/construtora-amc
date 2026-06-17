import Container from "@/components/layout/Container";
import CarouselDeBannersDoBlog from "@/components/shared/CarouselDeBannersDoBlog";
import { fotosDestaquesBlog } from "@/data/data";
import { apanhar_artigos_mais_lidos } from "@/lib/blog";
import { MessageSquareText, Phone, Plus } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default async function BlogLayout({ children }: { children: ReactNode }) {
   const { artigos: artigosMaisLidos } = await apanhar_artigos_mais_lidos();

   return (
      <Container className="flex flex-col lg:flex-row flex-nowrap gap-10 md:gap-16 xl:gap-25 border-t-2 lg:border-t-0 pt-4 lg:pt-7.5 pb-12">
         <section className="basis-[70%]">{children}</section>
         <aside className="basis-[30%] text-center lg:text-start">
            {/* Seção dos destaques do blog */}
            <div>
               <h5 className="font-medium text-2xl mb-3 uppercase">Nossos destaques</h5>
               <CarouselDeBannersDoBlog fotos={fotosDestaquesBlog} />
            </div>
            {/* Seção dos artigos mais lidos */}
            <div className="mt-7">
               <hr className="sm:hidden mb-5 border-2" />
               <h5 className="font-medium text-2xl mb-6 sm:mb-4 uppercase">
                  Os mais <br />
                  <span className="font-bold text-4xl">Lidos</span>
               </h5>
               <div className="flex flex-col gap-6">
                  {artigosMaisLidos.map((artigo, k) => (
                     <div key={k}>
                        <p className="mb-3">{artigo.titulo}</p>
                        <Link
                           className="bg-theme2 flex items-center justify-between text-white font-medium py-2 px-4 uppercase text-sm sm:text-base"
                           href={`/blog/${artigo.slug}`}
                        >
                           <Plus className="stroke-3 size-5" />
                           <span className="tracking-wide">Ir para artigo</span>
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
            {/* Seção de contato */}
            <div className="mt-10 *:bg-theme1 *:text-white *:flex *:p-4 space-y-3 lg:space-y-5 lg:text-lg *:items-center *:gap-4 uppercase font-semibold *:justify-center lg:*:justify-start">
               <Link href="/institucional/ligamos-para-voce">
                  <MessageSquareText className="size-10" />
                  <div className="border-white border h-10"></div>
                  <p>Fale com o corretor</p>
               </Link>
               {/* Fale com a AMC */}
               <Link href="/institucional/ligamos-para-voce">
                  <Phone className="size-10" />
                  <div className="border-white border h-10"></div>
                  <p>A AMC LIGA PARA VOCÊ</p>
               </Link>
            </div>
         </aside>
      </Container>
   );
}
