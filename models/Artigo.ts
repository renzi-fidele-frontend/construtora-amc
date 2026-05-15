import { UploadApiResponse } from "cloudinary";
import { Schema, model, models } from "mongoose";

interface IArtigo {
   titulo: string;
   descricao: string;
   thumbnail: UploadApiResponse;
   destaque: UploadApiResponse;
   conteudo: string;
   publicadoEm: Date;
}

const ArtigoSchema = new Schema<IArtigo>(
   {
      titulo: { type: String, required: true },
      descricao: { type: String, required: true },
      thumbnail: { type: Object, required: true },
      destaque: { type: Object, required: true },
      conteudo: { type: String, required: true },
      publicadoEm: { type: Date, default: Date.now },
   },
   { collection: "artigos" },
);

export const Artigo = models.Artigo ?? model<IArtigo>("Artigo", ArtigoSchema);

export default Artigo;
