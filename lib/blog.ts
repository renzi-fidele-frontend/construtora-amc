"use server";

import Artigo, { IArtigo } from "@/models/Artigo";
import { cache } from "react";
import { dbConnect } from "./dbConnect";

// Aqui estão todas as funcionalidades que fazer as requisições públicas ao back-end
export interface IArticlesResponse {
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

   return { artigos, totalPaginas } as IArticlesResponse;
}

export async function apanhar_artigos_mais_lidos() {
   await dbConnect();
   const artigos = await Artigo.find().limit(5).sort({ vezesLido: -1 });
   return { artigos } as { artigos: IArtigo[] };
}

export const apanhar_artigo = cache(async (slug: string) => {
   await dbConnect();
   const artigo = await Artigo.findOne({ slug });
   return { artigo } as { artigo: IArtigo };
});

// TODO: Ao remover um artigo, deverá ser removido também o thumbnail e a destaque do artigo no cloudinary
export async function remover_artigo(slug: string) {
   await dbConnect();
   const remover = await Artigo.deleteOne({ slug });
   console.log("Artigo removido com sucesso");
   return remover.acknowledged;
}
