import { apanhar_artigo } from "@/lib/api";
import { CalendarDays, ClockFading } from "lucide-react";
import Image from "next/image";
import styles from "@/app/admin/components/RichEditor.module.css";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import { Metadata } from "next";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { slug } = await params;
   const { artigo } = await apanhar_artigo(slug);
   const url = `https://amc.eng.br/blog/${artigo.slug}`;

   return {
      title: artigo.titulo,
      description: artigo.descricao,
      alternates: {
         canonical: url,
      },
      openGraph: {
         title: artigo.titulo,
         description: artigo.descricao,
         url,
         type: "article",
         publishedTime: String(artigo.publicadoEm),
         modifiedTime: String(artigo.ultimaAtualizacao),
         images: [
            {
               url: artigo.destaque.secure_url,
               width: artigo.destaque.width,
               height: artigo.destaque.height,
               alt: artigo.titulo,
            },
         ],
      },
      twitter: {
         card: "summary_large_image",
         title: artigo.titulo,
         description: artigo.descricao,
         images: [artigo.destaque.secure_url],
      },
   };
}

export default async function PaginaArtigo({ params }: Props) {
   const slug = (await params).slug;
   const { artigo } = await apanhar_artigo(slug);

   // TODO: Ao escalar, um usuário anônimo deverá ser capaz de adicionar comentários no blog (Investigar se é boa prática ou não)
   // TODO: Investigar a possibilidade de adicionar categorias

   return (
      <article>
         {/* Foto de destaque */}
         <Image
            src={artigo.destaque.secure_url}
            width={artigo.destaque.width}
            height={artigo.destaque.height}
            alt={`Foto de destaque do artigo: ${artigo.titulo}`}
            priority
         />

         <div className="flex gap-4">
            {/* Data de publicação */}
            <time
               dateTime={String(artigo.publicadoEm)}
               className="flex gap-2 items-center text-white bg-theme2 py-1.5 px-4 w-fit mt-4 mb-5 border-b-4 border-theme1 rounded"
            >
               <CalendarDays />
               <p>{dayjs(artigo.publicadoEm).format("DD [de] MMMM [de] YYYY")}</p>
            </time>
            {/* Data de atualização */}
            <time dateTime={String(artigo.ultimaAtualizacao)} className="flex items-center gap-2">
               <ClockFading className="size-5" />
               <span>Última atualização: {dayjs(artigo.ultimaAtualizacao).fromNow()}</span>
            </time>
         </div>

         {/* Título do artigo */}
         <h1 className="text-4xl font-medium mb-7">{artigo.titulo}</h1>

         {/* Conteúdo */}
         <div className={styles.ct + " text-zinc-800"} dangerouslySetInnerHTML={{ __html: artigo.conteudo }}></div>
      </article>
   );
}
