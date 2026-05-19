import { UploadApiResponse } from "cloudinary";
import { Schema, model, models } from "mongoose";

export interface IArtigo {
   _id: string;
   slug: string;
   titulo: string;
   descricao: string;
   thumbnail: UploadApiResponse;
   destaque: UploadApiResponse;
   conteudo: string;
   vezesLido: number;
   ultimaAtualizacao: Date;
   publicadoEm: Date;
}

const ArtigoSchema = new Schema<IArtigo>(
   {
      titulo: { type: String, required: true },
      descricao: { type: String, required: true },
      thumbnail: { type: Schema.Types.Mixed, required: true },
      destaque: { type: Schema.Types.Mixed, required: true },
      conteudo: { type: String, required: true },
      vezesLido: { type: Number, default: 0 },
      slug: { type: String, required: true, index: true, unique: true },
   },
   { collection: "artigos", timestamps: { createdAt: "publicadoEm", updatedAt: "ultimaAtualizacao" } },
);

export const Artigo = models.Artigo ?? model<IArtigo>("Artigo", ArtigoSchema);

export default Artigo;
