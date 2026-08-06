import BlogSearchBar from "@/components/shared/BlogSearchBar";
import CardArtigoBlog from "@/components/shared/CardArtigoBlog";
import Paginacao from "@/components/shared/Paginacao";
import { apanhar_artigos_de_categoria } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ [key: string]: string | string[] | undefined }> };

export default async function Page({ params, searchParams }: Props) {
   const { slug } = await params;
   const search = await searchParams;
   const page = Number(search.page) || 1;
   const { artigos, categoria, totalPaginas } = await apanhar_artigos_de_categoria(slug, page, 6);
   console.log(categoria);

   return (
      <div>
         <BlogSearchBar />
         <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-3">
            Artigos da categoria:{" "}
            <span style={{ color: categoria.cor }} className="underline">
               {categoria.nome}
            </span>
         </h1>
         <p className="text-lg mb-6">{categoria.descricao}</p>
         {/* Listagem dos artigos */}
         <div className="grid sm:grid-cols-2 gap-5 mb-7">
            {artigos.map((artigo, k) => (
               <CardArtigoBlog key={k} artigo={artigo} />
            ))}
         </div>
         {/* Paginação */}
         {totalPaginas > 1 && <Paginacao totalPaginas={totalPaginas} paginaAtual={page} />}
      </div>
   );
}
