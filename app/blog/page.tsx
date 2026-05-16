import { apanhar_artigos } from "@/lib/api";

export default async function Blog() {
   // TODO: Apanhar os artigos do blog no backend
   const artigos = await apanhar_artigos();
   console.log(artigos);
   return (
      <div className="flex flex-nowrap gap-25">
         <section>
            {/* TODO: Adicionar a seção do hero do blog */}
            {/* TODO: Adicionar a listagem dos artigos */}
            {/* TODO: Adicionar a seção da paginação */}
         </section>
         <aside>
            {/* TODO: Adicionar a seção dos destaques do blog */}
            {/* TODO: Adicionar a seção dos artigos mais lidos */}
         </aside>
      </div>
   );
}
