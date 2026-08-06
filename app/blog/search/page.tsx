import BlogSearchBar from "@/components/shared/BlogSearchBar";
import CardArtigoBlog from "@/components/shared/CardArtigoBlog";
import { procurar_artigos } from "@/lib/blog";
import { Metadata } from "next";
import Image from "next/image";

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
   const { artigos } = await procurar_artigos(String(query));

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
                  <CardArtigoBlog key={k} artigo={artigo} />
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
