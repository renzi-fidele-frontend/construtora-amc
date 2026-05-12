import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
   const data = await req.formData();
   const file = data.get("foto") as File;

   if (!file) return NextResponse.json({ error: "Ficheiro não encontrado" }, { status: 400 });

   const buffer = Buffer.from(await file.arrayBuffer());

   const carregarImagem = await new Promise((resolve, reject) => {
      cloudinary.uploader
         .upload_stream({ folder: "AMC Contruções" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
         })
         .end(buffer);
   });

   return NextResponse.json({ message: "Imagem recebida com sucesso no backend!", foto: carregarImagem });
}
