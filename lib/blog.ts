"use server";
import Artigo, { IArtigo } from "@/models/Artigo";
import { cache } from "react";
import { dbConnect } from "./dbConnect";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

/** Apanha um artigo do banco de dados com base no slug ou id */
export const apanhar_artigo = cache(async (slug?: string, id?: string) => {
   await dbConnect();
   let artigo;
   if (slug) artigo = await Artigo.findOne({ slug });
   else if (id) {
      artigo = await Artigo.findById(id);
   }

   return { artigo } as { artigo: IArtigo };
});

// TODO: Ao remover um artigo, deverá ser removido também o thumbnail e a destaque do artigo no cloudinary
export async function remover_artigo(slug: string) {
   await dbConnect();
   const remover = await Artigo.deleteOne({ slug });
   console.log("Artigo removido com sucesso");
   return remover.acknowledged;
}

type IArtigoAtualizado = {
   titulo: string;
   descricao: string;
   conteudo: string;
   slug: string;
};
export async function editar_artigo(artigoNovo: IArtigoAtualizado, artigoAnterior: IArtigo) {
   await dbConnect();
   //  TODO: Caso as imagens sejam alteradas publicar no cloudinary
   const editar = await Artigo.updateOne({ slug: artigoAnterior.slug }, { ...artigoNovo });
   console.log("Artigo editado com sucesso");
   return editar.acknowledged;
}

type IArtigoNovo = {
   titulo: string;
   descricao: string;
   conteudo: string;
   slug: string;
   thumbnail?: File;
   destaque?: File;
};
export async function publicar_artigo(artigoNovo: IArtigoNovo) {
   await dbConnect();

   // Enviar o thumbnail para o cloudinary
   if (!artigoNovo.thumbnail || !artigoNovo.destaque) return;
   const buffer_thumbnail = Buffer.from(await artigoNovo.thumbnail.arrayBuffer());
   const carregarThumbnail = await new Promise((resolve, reject) => {
      cloudinary.uploader
         .upload_stream({ folder: "AMC Contruções" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
         })
         .end(buffer_thumbnail);
   });

   // Enviar a foto de destaque para o cloudinary
   const buffer_destaque = Buffer.from(await artigoNovo.destaque.arrayBuffer());
   const carregarDestaque = await new Promise((resolve, reject) => {
      cloudinary.uploader
         .upload_stream({ folder: "AMC Contruções" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
         })
         .end(buffer_destaque);
   });

   const data = {
      ...artigoNovo,
      thumbnail: carregarThumbnail,
      destaque: carregarDestaque,
   };

   const publicar = await Artigo.create(data);
   console.log("Artigo publicado com sucesso", publicar);
   return { slug: publicar.slug };
}
