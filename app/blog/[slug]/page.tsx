import { apanhar_artigo } from "@/lib/api";
import { Calendar1, CalendarClock } from "lucide-react";
import Image from "next/image";
import styles from "@/app/admin/components/RichEditor.module.css";

export default async function PaginaArtigo({ params }: { params: Promise<{ slug: string }> }) {
   const slug = (await params).slug;
   const { artigo } = await apanhar_artigo(slug);

   // TODO: Adicionar todos os artigos que estão no blog antigo da construtora para este blog
   // TODO: Ao escalar, um usuário anônimo deverá ser capaz de adicionar comentários no blog (Investigar se é boa prática ou não)
   // TODO: Investigar a possibilidade de adicionar categorias

   return (
      <div>
         {/* Foto de destaque */}
         <Image
            src={artigo.destaque.secure_url}
            width={artigo.destaque.width}
            height={artigo.destaque.height}
            alt={`Foto de destaque do artigo: ${artigo.titulo}`}
         />

         <div className="flex gap-4">
            {/* Data de publicação */}
            {/* TODO: Melhorar a renderização da data de publicação do artigo usando o dayjs */}
            <div className="flex gap-2 items-center text-white bg-theme2 py-2 px-4 w-fit mt-4 mb-5 border-b-4 border-theme1 rounded">
               <Calendar1 />
               <p>{new Date(artigo.publicadoEm).toLocaleDateString()}</p>
            </div>
            {/* Data de atualização */}
            {artigo.publicadoEm !== artigo.ultimaAtualizacao && (
               <div className="flex items-center gap-2">
                  <CalendarClock className="size-5" />
                  <span>Última vez editado: {new Date(artigo.ultimaAtualizacao).toLocaleDateString()}</span>
               </div>
            )}
         </div>

         {/* Título do artigo */}
         <h1 className="text-4xl font-medium mb-7">{artigo.titulo}</h1>

         {/* Conteúdo */}
         <div className={styles.ct + " text-zinc-800"} dangerouslySetInnerHTML={{ __html: artigo.conteudo }}></div>
      </div>
   );
}
