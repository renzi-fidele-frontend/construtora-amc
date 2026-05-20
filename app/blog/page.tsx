import Paginacao from "@/components/shared/Paginacao";
import { apanhar_artigos } from "@/lib/api";
import { IArtigo } from "@/models/Artigo";
import Image from "next/image";
import Link from "next/link";

export default async function Blog({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
   const search = await searchParams;
   const page = Number(search.page) || 1;
   const itemsPorPagina = page === 1 ? 5 : 6;
   const { artigos, totalPaginas } = await apanhar_artigos(itemsPorPagina, page);

   function analisarArray(artigos: IArtigo[]) {
      if (page === 1) {
         return artigos.slice(1);
      } else {
         return artigos;
      }
   }

   return (
      <>
         {/* Seção do hero do blog */}
         {Number(page) === 1 && (
            <div className="relative border">
               {/* Foto do artigo */}
               <Image
                  src={artigos[0].thumbnail.secure_url}
                  width={artigos[0].thumbnail.width}
                  height={artigos[0].thumbnail.height}
                  alt="Último artigo do blog da construtora"
                  className="object-cover object-left h-130"
               />
               <div className="bg-zinc-900/50 absolute bottom-0 text-white py-8 px-5.5 text-lg">
                  {/* Data de publicação */}
                  <p className="uppercase">{new Date(artigos[0].publicadoEm).toLocaleDateString()}</p>
                  {/* Titulo */}
                  <Link className="hover:underline" href={`/blog/${artigos[0].slug}`}>
                     <h3 className="font-bold text-2xl mb-2">{artigos[0].titulo}</h3>
                  </Link>
                  {/* Descrição */}
                  <p className="line-clamp-2">{artigos[0].descricao}</p>
               </div>
            </div>
         )}
         {/* Seção da listagem dos artigos */}
         <div className="grid grid-cols-2 gap-5 pt-7.5">
            {analisarArray(artigos).map((artigo, k) => (
               <Link
                  href={`/blog/${artigo.slug}`}
                  className="border transition hover:bg-theme1 hover:text-white hover:outline-2 outline-theme1"
                  key={k}
               >
                  <Image
                     src={artigo.thumbnail.secure_url}
                     width={artigo.thumbnail.width}
                     height={artigo.thumbnail.height}
                     alt="Ilustração do artigo"
                     className="h-60 object-left object-cover"
                  />
                  <div className="py-7 px-5">
                     {/* Data de publicação */}
                     <p className="uppercase">{new Date(artigo.publicadoEm).toLocaleDateString()}</p>
                     {/* Titulo */}
                     <h3 className="font-bold text-xl line-clamp-2">{artigo.titulo}</h3>
                     {/* Descrição */}
                     <p className="line-clamp-4 mt-2">{artigo.descricao}</p>
                  </div>
               </Link>
            ))}
         </div>

         {/* Paginação */}
         <div className="mt-8">
            <Paginacao paginaAtual={page} totalPaginas={totalPaginas} />
         </div>
      </>
   );
}
