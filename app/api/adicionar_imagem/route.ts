import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
   const data = await req.formData();
   const file = data.get("foto");
   console.log(file);

   return NextResponse.json({ message: "Imagem recebida com sucesso no backend!" });
}
