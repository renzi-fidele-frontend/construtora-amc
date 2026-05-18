import Container from "@/components/layout/Container";
import { apanhar_artigos } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function Blog({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
   const { artigos, totalPaginas } = await apanhar_artigos();
   const search = await searchParams;
   const page = Number(search.page) || 1;
   const itemsPorPagina = page === 1 ? 5 : 6;

   console.log(page);
   return (
      <Container className="flex flex-nowrap gap-25 py-7.5">
         <section className="basis-[62%]">
            {/* Seção do hero do blog */}
            {/* TODO: Somente renderizar o hero quando */}
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
                     <div className="py-9 px-6.5">
                        {/* Data de publicação */}
                        <p className="uppercase">{new Date(artigo.publicadoEm).toLocaleDateString()}</p>
                        {/* Titulo */}
                        <h3 className="font-bold text-xl">{artigo.titulo}</h3>
                        {/* Descrição */}
                        <p className="line-clamp-5">{artigo.descricao}</p>
                     </div>
                  </Link>
               ))}
            </div>
            {/* TODO: Adicionar a seção da paginação */}
         </section>
         <aside>
            {/* TODO: Adicionar a seção dos destaques do blog */}
            {/* TODO: Adicionar a seção dos artigos mais lidos */}
         </aside>
      </Container>
   );
}
