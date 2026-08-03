import { model, models, Schema } from "mongoose";

const CategoriaSchema = new Schema(
   {
      nome: { type: String, required: true, index: true, unique: true },
   },
   { collection: "categorias" },
);

export const Categoria = models.Categoria ?? model("Categoria", CategoriaSchema);

export default Categoria;
