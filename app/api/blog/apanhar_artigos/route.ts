import { dbConnect } from "@/lib/dbConnect";
import Artigo from "@/models/Artigo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
   await dbConnect();
   try {
      // Definindo o offset e o limite da query para paginação
      const page = req.nextUrl.searchParams.get("page") || 1;
      const limit = 5;
      const offset = (Number(page) - 1) * limit;

      // Buscando os artigos do banco de dados
      const artigos = await Artigo.find().skip(offset).limit(limit).sort({ publicadoEm: -1 });

      // Calculando o total de documentos e o total de páginas
      const totalDocs = await Artigo.countDocuments();
      const totalPaginas = Math.ceil(totalDocs / limit);

      return NextResponse.json({ artigos, totalPaginas });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500 });
   }
}
