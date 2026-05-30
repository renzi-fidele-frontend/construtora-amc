import { apanhar_artigos } from "@/lib/blog";
import { NextResponse } from "next/server";

export async function GET() {
   try {
      const artigos = (await apanhar_artigos(1000, 1)).artigos;
      console.log(artigos);
      return NextResponse.json({ artigos });
   } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
   }
}
