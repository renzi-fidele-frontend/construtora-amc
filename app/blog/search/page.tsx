import BlogSearchBar from "@/components/shared/BlogSearchBar";
import Artigo from "@/models/Artigo";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

dayjs.locale("pt-br");

export default async function BlogSearchPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
   const query = (await searchParams).text;
   const artigos = await Artigo.find({ $text: { $search: query } });

   return (
      <div>
         <BlogSearchBar />
         <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-5">
            Resultados da busca por: <span className="underline">{query}</span>
         </h1>
         {/* Listagem */}
         <div className={`grid sm:grid-cols-2 gap-5`}>
            {artigos.map((artigo, k) => (
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
                  <div className="py-5 xl:py-7 px-5 text-sm sm:text-base">
                     {/* Data de publicação */}
                     <p className="uppercase">{dayjs(artigo.publicadoEm).format("DD/MMMM/YYYY")}</p>
                     {/* Titulo */}
                     <h3 className="font-bold text-lg md:text-xl line-clamp-2">{artigo.titulo}</h3>
                     {/* Descrição */}
                     <p className="line-clamp-4 mt-2">{artigo.descricao}</p>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   );
}
