"use client";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/shared/SectionIntro";
import { IArticlesResponse, remover_artigo } from "@/lib/blog";
import dayjs from "dayjs";
import { Edit, Eye, Loader, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

dayjs.locale("pt-br");

const GerirPosts = () => {
   const [artigos, setArtigos] = useState<IArticlesResponse | null>(null);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      async function apanharArtigos() {
         const res = await fetch("/api/apanhar_artigos");
         const data = (await res.json()) as IArticlesResponse;
         console.log(data);
         setArtigos(data);
      }
      if (!artigos) apanharArtigos();
   }, [artigos]);

   async function handleDelete(slug: string) {
      setLoading(true);
      await remover_artigo(slug);
      setLoading(false);
   }

   return (
      <Container className="py-25 flex flex-col items-center">
         <SectionIntro titulo="Gerencie os artigos do Blog" descricao="Edite ou remova um artigo do blog da construtora AMC" />
         <table className="border border-collapse border-theme1 table-auto [&_th]:border [&_td]:border text-lg">
            <thead className="bg-theme1 text-white">
               <tr className="*:p-2">
                  <th className="whitespace-nowrap">Data de publicação</th>
                  <th>Artigo</th>
                  <th>Ações</th>
               </tr>
            </thead>
            <tbody>
               {artigos?.artigos?.length &&
                  artigos?.artigos?.map((artigo) => (
                     <tr key={artigo._id} className="*:p-2 hover:bg-zinc-100">
                        <td>{dayjs(artigo.publicadoEm).format("DD/MM/YYYY")}</td>
                        <td>{artigo.titulo}</td>
                        <td>
                           <div className="text-base flex gap-3 text-white *:px-2.5 *:py-1 *:hover:scale-105 *:transition *:flex *:items-center *:gap-1 *:cursor-pointer">
                              <Link href={`/blog/${artigo.slug}`} target="_blank" className="bg-theme1">
                                 <Eye className="size-4" /> Ver
                              </Link>
                              <Link href={`/admin/editar_post/${artigo.slug}`} className="bg-theme2">
                                 <Edit className="size-4" /> Editar
                              </Link>
                              <button onClick={() => handleDelete(artigo.slug)} className="bg-red-700">
                                 {loading ? (
                                    <Loader className="size-4 animate-spin" />
                                 ) : (
                                    <>
                                       <Trash2 className="size-4" /> Remover
                                    </>
                                 )}
                              </button>
                           </div>
                        </td>
                     </tr>
                  ))}
            </tbody>
         </table>
      </Container>
   );
};
export default GerirPosts;
