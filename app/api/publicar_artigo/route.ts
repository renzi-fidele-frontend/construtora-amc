import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
   const data = await req.formData();
   const titulo = data.get("titulo") as string;
   const descricao = data.get("descricao") as string;
   const conteudo = data.get("conteudo") as string;
   const thumbnail = data.get("thumbnail") as File;
   const destaque = data.get("destaque") as File;

   try {
      // Enviar o thumbnail para o cloudinary
      // Enviar o destaque para o cloudinary
      // Salvar o artigo no banco de dados
      // Retornar a resposta
   } catch (error) {
      return NextResponse.json({ error });
   }
}
