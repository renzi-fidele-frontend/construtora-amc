import Container from "@/components/layout/Container";
import SectionIntro from "@/components/shared/SectionIntro";
import { apanhar_artigos } from "@/lib/api";
import dayjs from "dayjs";
import { Edit, Eye, Trash2 } from "lucide-react";
import Link from "next/link";

dayjs.locale("pt-br");

const page = async () => {
   const artigos = await apanhar_artigos(1000, 1);
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
               {artigos.artigos.length > 0 &&
                  artigos.artigos.map((artigo) => (
                     <tr key={artigo._id} className="*:p-2 hover:bg-zinc-100">
                        <td className="">{dayjs(artigo.publicadoEm).format("DD/MM/YYYY")}</td>
                        <td className="">{artigo.titulo}</td>
                        <td className="">
                           <div className="text-base flex gap-3 text-white *:px-2.5 *:py-1 *:hover:scale-105 *:transition *:flex *:items-center *:gap-1 *:cursor-pointer">
                              <Link href={`/blog/${artigo.slug}`} target="_blank" className="bg-theme1">
                                 <Eye className="size-4" /> Ver
                              </Link>
                              <button className="bg-theme2">
                                 <Edit className="size-4" /> Editar
                              </button>
                              <button className="bg-red-700">
                                 <Trash2 className="size-4" /> Remover
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
export default page;
