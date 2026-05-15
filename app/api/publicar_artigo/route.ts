import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import Artigo from "@/models/Artigo";
import { dbConnect } from "@/lib/dbConnect";

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
   await dbConnect();
   const data = await req.formData();
   const titulo = data.get("titulo") as string;
   const descricao = data.get("descricao") as string;
   const conteudo = data.get("conteudo") as string;
   const thumbnail = data.get("thumbnail") as File;
   const destaque = data.get("destaque") as File;

   try {
      // Enviar o thumbnail para o cloudinary
      const buffer_thumbnail = Buffer.from(await thumbnail.arrayBuffer());
      const carregarThumbnail = await new Promise((resolve, reject) => {
         cloudinary.uploader
            .upload_stream({ folder: "AMC Contruções" }, (error, result) => {
               if (error) reject(error);
               else resolve(result);
            })
            .end(buffer_thumbnail);
      });

      // Enviar a foto de destaque para o cloudinary
      const buffer_destaque = Buffer.from(await destaque.arrayBuffer());
      const carregarDestaque = await new Promise((resolve, reject) => {
         cloudinary.uploader
            .upload_stream({ folder: "AMC Contruções" }, (error, result) => {
               if (error) reject(error);
               else resolve(result);
            })
            .end(buffer_destaque);
      });

      // Salvar o artigo no banco de dados
      const artigo = await Artigo.create({ titulo, descricao, thumbnail: carregarThumbnail, destaque: carregarDestaque, conteudo });

      // Retornar a resposta
      return NextResponse.json({ message: "Artigo publicado com sucesso!", artigo });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error });
   }
}
