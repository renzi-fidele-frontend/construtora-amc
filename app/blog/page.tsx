import Paginacao from "@/components/shared/Paginacao";
import { apanhar_artigos } from "@/lib/blog";
import { IArtigo } from "@/models/Artigo";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import BlogSearchBar from "@/components/shared/BlogSearchBar";
import CardArtigoBlog from "@/components/shared/CardArtigoBlog";

dayjs.locale("pt-br");

type Props = { searchParams: Promise<{ [key: string]: string | string[] | undefined }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
   const search = await searchParams;
   const page = Number(search.page) || 1;
   const titulo = page === 1 ? "Blog" : `Blog - Página ${page}`;
   const canonical = page === 1 ? "https://amc.eng.br/blog" : `https://amc.eng.br/blog?page=${page}`;

   return {
      title: titulo,
      description: "Acompanhe artigos sobre construção civil, engenharia e mercado imobiliário.",
      alternates: {
         canonical,
      },
      openGraph: {
         title: `${titulo} | AMC Construções`,
         description: "Conteúdos sobre construção civil, imóveis e engenharia.",
         url: canonical,
         type: "website",
      },
   };
}

export default async function Blog({ searchParams }: Props) {
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
         {/* Barra de pesquisa */}
         <BlogSearchBar />

         {/* Título do blog */}
         {Number(page) > 1 && (
            <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-5 underline">
               Blog AMC - Página {page} de {totalPaginas}
            </h1>
         )}
         {/* Seção do hero do blog */}
         {Number(page) === 1 && (
            <div className="relative border">
               {/* Foto do artigo */}
               <Image
                  src={artigos[0].thumbnail.secure_url}
                  width={artigos[0].thumbnail.width}
                  height={artigos[0].thumbnail.height}
                  alt={artigos[0].titulo}
                  className="object-cover object-left h-80 sm:h-105 md:h-130"
               />
               <div className="bg-zinc-900/50 absolute bottom-0 text-white py-3.5 sm:py-5 lg:py-8 px-3 sm:px-5.5 text-sm sm:text-base md:text-lg">
                  {/* Data de publicação */}
                  <p className="uppercase">{dayjs(artigos[0].publicadoEm).format("DD/MMMM/YYYY")}</p>
                  {/* Titulo */}
                  <Link className="hover:underline" href={`/blog/${artigos[0].slug}`}>
                     <h1 className="font-bold text-lg sm:text-xl md:text-2xl mb-2 line-clamp-2">{artigos[0].titulo}</h1>
                  </Link>
                  {/* Descrição */}
                  <p className="line-clamp-2">{artigos[0].descricao}</p>
               </div>
            </div>
         )}
         {/* Seção da listagem dos artigos */}
         <div className={`grid sm:grid-cols-2 gap-5 ${page === 1 && "pt-7.5"}`}>
            {analisarArray(artigos).map((artigo, k) => (
               <CardArtigoBlog artigo={artigo} key={k} />
            ))}
         </div>

         {/* Paginação */}
         <div className="mt-8">
            <Paginacao paginaAtual={page} totalPaginas={totalPaginas} />
         </div>
      </>
   );
}
