import Container from "@/components/layout/Container";
import CarouselDeBannersDoBlog from "@/components/shared/CarouselDeBannersDoBlog";
import { fotosDestaquesBlog } from "@/data/data";
import { apanhar_artigos_mais_lidos } from "@/lib/api";
import { Plus } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default async function BlogLayout({ children }: { children: ReactNode }) {
   const { artigos: artigosMaisLidos } = await apanhar_artigos_mais_lidos();

   return (
      <Container className="flex flex-nowrap gap-25 pt-7.5 pb-12">
         <section className="basis-[70%]">{children}</section>
         <aside className="basis-[30%]">
            {/* Seção dos destaques do blog */}
            <div>
               <h5 className="font-medium text-2xl mb-3 uppercase">Nossos destaques</h5>
               <CarouselDeBannersDoBlog fotos={fotosDestaquesBlog} />
            </div>
            {/* Seção dos artigos mais lidos */}
            <div className="mt-7">
               <h5 className="font-medium text-2xl mb-4 uppercase">
                  Os mais <br />
                  <span className="font-bold text-4xl">Lidos</span>
               </h5>
               <div className="flex flex-col gap-6">
                  {artigosMaisLidos.map((artigo, k) => (
                     <div key={k}>
                        <p className="mb-3 ">{artigo.titulo}</p>
                        <Link
                           className="bg-theme2 flex items-center justify-between text-white font-medium py-2 px-4 uppercase"
                           href={`/blog/${artigo._id}`}
                        >
                           <Plus className="stroke-3 size-5" />
                           <span className="tracking-wide">Ir para artigo</span>
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         </aside>
      </Container>
   );
}
