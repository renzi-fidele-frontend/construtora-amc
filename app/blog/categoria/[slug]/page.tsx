import BlogSearchBar from "@/components/shared/BlogSearchBar";
import CardArtigoBlog from "@/components/shared/CardArtigoBlog";
import { apanhar_artigos_de_categoria } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export default async function Page({ params }: Props) {
   const { slug } = await params;
   // TODO: Apanhar artigos da categoria no banco de dados
   const { artigos, categoria } = await apanhar_artigos_de_categoria(slug);

   console.log(slug, artigos, categoria);
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
         <div className="grid sm:grid-cols-2 gap-5">
            {artigos.map((artigo, k) => (
               <CardArtigoBlog key={k} artigo={artigo} />
            ))}
         </div>
      </div>
   );
}
