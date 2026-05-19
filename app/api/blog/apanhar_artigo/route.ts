import { dbConnect } from "@/lib/dbConnect";
import Artigo from "@/models/Artigo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
   await dbConnect();
   const slug = req.nextUrl.searchParams.get("slug");
   try {
      const artigo = await Artigo.findOne({ slug });
      return NextResponse.json({ artigo });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500 });
   }
}
