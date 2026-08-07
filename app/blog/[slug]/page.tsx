import { apanhar_artigo } from "@/lib/blog";
import { CalendarDays, ClockFading } from "lucide-react";
import Image from "next/image";
import styles from "@/app/admin/components/RichEditor.module.css";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import { Metadata } from "next";
import Link from "next/link";

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
   const { artigo } = await apanhar_artigo(slug, undefined, true);

   const schemaDoArtigo = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: artigo.titulo,
      description: artigo.descricao,
      image: artigo.destaque.secure_url,
      datePublished: artigo.publicadoEm,
      dateModified: artigo.ultimaAtualizacao,
      author: {
         "@type": "Organization",
         name: "AMC Construções",
         url: "https://amc.eng.br",
      },
      publisher: {
         "@type": "Organization",
         name: "AMC Construções",
         logo: {
            "@type": "ImageObject",
            url: "https://amc.eng.br/img/logo.png",
         },
      },
      mainEntityOfPage: {
         "@type": "WebPage",
         "@id": `https://amc.eng.br/blog/${artigo.slug}`,
      },
      // Incrementa o contador de leitura (já existe no modelo, usar aqui)
      interactionStatistic: {
         "@type": "InteractionCounter",
         interactionType: "https://schema.org/ReadAction",
         userInteractionCount: artigo.vezesLido,
      },
   };

   // TODO: Ao escalar, um usuário anônimo deverá ser capaz de adicionar comentários no blog (Investigar se é boa prática ou não)

   return (
      <>
         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDoArtigo) }} />
         <article>
            {/* Foto de destaque */}
            <Image
               src={artigo.destaque.secure_url}
               width={artigo.destaque.width}
               height={artigo.destaque.height}
               alt={`Foto de destaque do artigo: ${artigo.titulo}`}
               priority
            />

            <div className="flex gap-2 sm:gap-4 flex-wrap mt-2 sm:mt-3 mb-2 sm:mb-3 text-sm sm:text-base">
               {/* Data de publicação */}
               <time
                  dateTime={String(artigo.publicadoEm)}
                  className="flex gap-2 items-center text-white bg-theme2 py-1 px-2 sm:px-4 w-fit border-b-4 border-theme1 rounded"
               >
                  <CalendarDays className="size-4 sm:size-5" />
                  <p>{dayjs(artigo.publicadoEm).format("DD [de] MMMM [de] YYYY")}</p>
               </time>
               {/* Data de atualização */}
               <time dateTime={String(artigo.ultimaAtualizacao)} className="flex items-center gap-2">
                  <ClockFading className="size-4 sm:size-5" />
                  <span>Última atualização: {dayjs(artigo.ultimaAtualizacao).fromNow()}</span>
               </time>
            </div>

            {/* Categoria */}
            <Link href={`/blog/categoria/${artigo.categoria.slug}`} className="mb-3">
               <span className="font-medium sm:text-lg me-1">Categoria:</span>{" "}
               <span className="p-0.5 sm:p-1 px-3 text-white underline" style={{ background: artigo.categoria.cor }}>
                  {artigo.categoria.nome}
               </span>
            </Link>

            {/* Título do artigo */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mt-2 sm:mt-4 mb-4 sm:mb-7">{artigo.titulo}</h1>

            {/* Conteúdo */}
            <div className={styles.ct + " text-zinc-800"} dangerouslySetInnerHTML={{ __html: artigo.conteudo }}></div>
         </article>
      </>
   );
}
