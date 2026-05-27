import Artigo, { IArtigo } from "@/models/Artigo";
import { cache } from "react";
import { dbConnect } from "./dbConnect";

// Aqui estão todas as funcionalidades que fazer as requisições públicas ao back-end
interface IResponse {
   artigos: IArtigo[];
   totalPaginas: number;
}
export async function apanhar_artigos(limite: number, pagina: number) {
   await dbConnect();

   // Definindo o offset e o limite da query para paginação
   const offset = (pagina - 1) * limite;

   // Buscando os artigos do banco de dados
   const artigos = await Artigo.find().skip(offset).limit(limite).sort({ publicadoEm: -1 });

   // Calculando o total de documentos e o total de páginas
   const totalDocs = await Artigo.countDocuments();
   const totalPaginas = Math.ceil(totalDocs / limite);

   return { artigos, totalPaginas } as IResponse;
}

export async function apanhar_artigos_mais_lidos() {
   const res = await fetch(`${process.env.DOMAIN}/api/blog/apanhar_artigos_mais_lidos`);
   const data = await res.json();
   return data as { artigos: IArtigo[] };
}

export const apanhar_artigo = cache(async (slug: string) => {
   const res = await fetch(`${process.env.DOMAIN}/api/blog/apanhar_artigo?slug=${slug}`);
   const data = await res.json();
   return data as { artigo: IArtigo };
});
