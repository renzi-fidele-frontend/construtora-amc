import { dbConnect } from "@/lib/dbConnect";
import Artigo from "@/models/Artigo";
import { NextResponse } from "next/server";

export async function GET() {
   await dbConnect();
   try {
      // Buscando os artigos do banco de dados
      const artigos = await Artigo.find().limit(5).sort({ vezesLido: -1 });
      console.log(artigos);
      return NextResponse.json({ artigos });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500 });
   }
}
