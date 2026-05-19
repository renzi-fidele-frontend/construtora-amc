import Container from "@/components/layout/Container";
import CarouselDeBannersDoBlog from "@/components/shared/CarouselDeBannersDoBlog";
import CarouselDeFotos from "@/components/shared/CarouselDeFotos";
import { fotosDestaquesBlog } from "@/data/data";
import { apanhar_artigos } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function Blog({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
   const search = await searchParams;
   const page = Number(search.page) || 1;
   const itemsPorPagina = page === 1 ? 5 : 6;
   const { artigos, totalPaginas } = await apanhar_artigos(itemsPorPagina, page);

   return (
      <Container className="flex flex-nowrap gap-25 py-7.5">
         <section className="basis-[70%]">
            {/* Seção do hero do blog */}
            {Number(page) === 1 && (
               <div className="relative">
                  {/* Foto do artigo */}
                  <Image
                     src={artigos[0].thumbnail.secure_url}
                     width={artigos[0].thumbnail.width}
                     height={artigos[0].thumbnail.height}
                     alt="Último artigo do blog da construtora"
                     className="object-cover h-120"
                  />
                  <div className="bg-zinc-900/50 absolute bottom-0 text-white py-8 px-5.5 text-lg">
                     {/* Data de publicação */}
                     <p className="uppercase">{new Date(artigos[0].publicadoEm).toLocaleDateString()}</p>
                     {/* Titulo */}
                     <h3 className="font-bold text-2xl mb-2">{artigos[0].titulo}</h3>
                     {/* Descrição */}
                     <p className="line-clamp-2">{artigos[0].descricao}</p>
                  </div>
               </div>
            )}
            {/* Seção da listagem dos artigos */}
            <div className="grid grid-cols-2 gap-5 pt-7.5">
               {artigos.slice(1).map((artigo, k) => (
                  <Link href="/blog/" className="border" key={k}>
                     <Image
                        src={artigo.thumbnail.secure_url}
                        width={artigo.thumbnail.width}
                        height={artigo.thumbnail.height}
                        alt="Ilustração do artigo"
                        className="h-80 object-cover"
                     />
                     <div className="py-7 px-5">
                        {/* Data de publicação */}
                        <p className="uppercase">{new Date(artigo.publicadoEm).toLocaleDateString()}</p>
                        {/* Titulo */}
                        <h3 className="font-bold text-xl">{artigo.titulo}</h3>
                        {/* Descrição */}
                        <p className="line-clamp-4 mt-2">{artigo.descricao}</p>
                     </div>
                  </Link>
               ))}
            </div>
            {/* TODO: Adicionar a seção da paginação */}
         </section>
         <aside className="basis-[30%]">
            {/* Seção dos destaques do blog */}
            <div>
               <h5 className="font-medium text-2xl mb-3">Nossos destaques</h5>
               <CarouselDeBannersDoBlog fotos={fotosDestaquesBlog} />
            </div>
            {/* TODO: Adicionar a seção dos artigos mais lidos */}
            <div>
               <h5 className="font-medium text-xl mb-3">
                  Os mais <br />
                  <span className="font-bold">Lidos</span>
               </h5>
            </div>
         </aside>
      </Container>
   );
}
