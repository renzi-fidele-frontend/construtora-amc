"use client";
import { remover_artigo } from "@/lib/blog";
import { IArtigo } from "@/models/Artigo";
import dayjs from "dayjs";
import { Edit, Eye, Loader, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

dayjs.locale("pt-br");

const LinhaArtigo = ({ artigo }: { artigo: IArtigo }) => {
   const [loading, setLoading] = useState(false);
   const router = useRouter();

   async function handleDelete(slug: string) {
      setLoading(true);
      const remover = await remover_artigo(slug);
      if (remover) {
         toast("Artigo removido com sucesso!");
      } else {
         toast.error("Erro ao remover o artigo!");
      }
      setLoading(false);
      router.push("/");
   }

   return (
      <tr key={artigo._id} className="*:p-2 hover:bg-zinc-100">
         <td>{dayjs(artigo.publicadoEm).format("DD/MM/YYYY")}</td>
         <td>{artigo.titulo}</td>
         <td>
            <div className="text-base flex gap-3 text-white *:px-2.5 *:py-1 *:hover:scale-105 *:transition *:flex *:items-center *:gap-1 *:cursor-pointer">
               <Link href={`/blog/${artigo.slug}`} target="_blank" className="bg-theme1">
                  <Eye className="size-4" /> Ver
               </Link>
               <Link href={`/admin/editar_post/${artigo._id}`} className="bg-theme2">
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
   );
};
export default LinhaArtigo;
