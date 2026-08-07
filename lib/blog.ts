"use server";
import Artigo, { IArtigo } from "@/models/Artigo";
import { cache } from "react";
import { dbConnect } from "./dbConnect";
import { carregar_imagem } from "./cloudinary";
import Categoria from "@/models/Categoria";

// Aqui estão todas as funcionalidades server actions públicas do blog
export interface IArticlesResponse {
   artigos: IArtigo[];
   totalPaginas: number;
}
export async function apanhar_artigos(limite: number, pagina: number) {
   await dbConnect();
   // Definindo o offset e o limite da query para paginação
   const offset = (pagina - 1) * limite;

   const [artigos, totalDocs] = await Promise.all([
      // Buscando os artigos do banco de dados
      await Artigo.find().skip(offset).limit(limite).sort({ publicadoEm: -1 }).populate("categoria"),
      // Calculando o total de documentos e o total de páginas
      await Artigo.countDocuments(),
   ]);

   const totalPaginas = Math.ceil(totalDocs / limite);

   return { artigos, totalPaginas } as IArticlesResponse;
}

export async function apanhar_artigos_mais_lidos() {
   await dbConnect();
   const artigos = await Artigo.find().limit(5).sort({ vezesLido: -1 }).populate("categoria");
   return { artigos } as { artigos: IArtigo[] };
}

export async function procurar_artigos(query: string) {
   await dbConnect();
   const artigos = await Artigo.find({ $text: { $search: query } });
   return { artigos } as { artigos: IArtigo[] };
}

/** Apanha um artigo do banco de dados com base no slug ou id */
export const apanhar_artigo = cache(async (slug?: string, id?: string, aumentarContagem?: boolean) => {
   await dbConnect();
   // Incrementar o número de visualizações
   if (aumentarContagem) await Artigo.updateOne({ slug }, { $inc: { vezesLido: 1 } });

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

   if (!artigoNovo.thumbnail || !artigoNovo.destaque) return;

   // Enviando as imagens para o cloudinary
   const thumbnail = await carregar_imagem(artigoNovo.thumbnail);
   const destaque = await carregar_imagem(artigoNovo.destaque);

   const data = {
      ...artigoNovo,
      thumbnail,
      destaque,
   };

   const publicar = await Artigo.create(data);
   console.log("Artigo publicado com sucesso", publicar);
   return { slug: publicar.slug };
}

export type ICategoria = {
   _id: string;
   nome: string;
   cor: string;
   slug: string;
   descricao: string;
};
export async function apanhar_categorias() {
   await dbConnect();
   const categorias = await Categoria.find();
   return { categorias } as { categorias: ICategoria[] };
}

export async function apanhar_artigos_de_categoria(slug: string, pagina: number, limite: number) {
   await dbConnect();
   // Definindo o offset e o limite da query para paginação
   const offset = (pagina - 1) * limite;

   // Encontrando a categoria
   const categoria = await Categoria.findOne({ slug });

   const [artigos, totalDocs] = await Promise.all([
      // Buscando os artigos do banco de dados
      await Artigo.find({ categoria: categoria._id }).skip(offset).limit(limite).sort({ publicadoEm: -1 }).populate("categoria"),
      // Calculando o total de documentos
      await Artigo.countDocuments({ categoria: categoria._id }),
   ]);

   // Calculando o total de páginas
   const totalPaginas = Math.ceil(totalDocs / limite);

   return { artigos, categoria, totalPaginas } as { artigos: IArtigo[]; categoria: ICategoria; totalPaginas: number };
}
