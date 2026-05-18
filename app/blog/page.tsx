import Container from "@/components/layout/Container";
import { apanhar_artigos } from "@/lib/api";
import Image from "next/image";

export default async function Blog() {
   const { artigos, totalPaginas } = await apanhar_artigos();
   console.log(artigos);
   return (
      <Container className="flex flex-nowrap gap-25 py-7.5">
         <section className="basis-[65%]">
            {/* Seção do hero do blog */}
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
            {/* TODO: Adicionar a listagem dos artigos */}
            {/* TODO: Adicionar a seção da paginação */}
         </section>
         <aside>
            {/* TODO: Adicionar a seção dos destaques do blog */}
            {/* TODO: Adicionar a seção dos artigos mais lidos */}
         </aside>
      </Container>
   );
}
