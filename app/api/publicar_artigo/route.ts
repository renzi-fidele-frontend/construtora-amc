import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export async function POST(req: NextRequest) {
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

      
      
      

      // Enviar o destaque para o cloudinary
      // Salvar o artigo no banco de dados
      // Retornar a resposta
   } catch (error) {
      return NextResponse.json({ error });
   }
}
