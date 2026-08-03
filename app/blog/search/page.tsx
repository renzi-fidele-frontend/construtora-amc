import BlogSearchBar from "@/components/shared/BlogSearchBar";
import Artigo from "@/models/Artigo";
import dayjs from "dayjs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

dayjs.locale("pt-br");

export async function generateMetadata({
   searchParams,
}: {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
   const query = (await searchParams).text;

   return {
      title: `Resultados da busca por "${query}"`,

      description: `Confira os artigos encontrados para a pesquisa "${query}" no blog da AMC Construções.`,
      alternates: {
         canonical: `https://amc.eng.br/blog/search?text=${encodeURIComponent(String(query))}`,
      },

      openGraph: {
         title: `Resultados para "${query}" | Blog AMC Construções`,
         description: `Veja os artigos relacionados à pesquisa ${query}.`,
         url: `https://amc.eng.br/blog/pesquisa?text=${encodeURIComponent(String(query))}`,
         type: "website",
      },
      robots: {
         index: false,
         follow: true,
      },
   };
}

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
         {artigos.length > 0 ? (
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
         ) : (
            <>
               <div className="pt-4 flex flex-col items-center text-center gap-6">
                  <Image width={474} height={414} src="/img/ilustracao/noSearch.png" alt="Nenhum artigo encontrado" />
                  <p className="text-lg bg-theme1 text-white px-6 py-2">Nenhum artigo encontrado!</p>
               </div>
            </>
         )}
      </div>
   );
}
