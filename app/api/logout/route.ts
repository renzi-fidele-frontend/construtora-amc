import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
   //    Deletando o cookie
   (await cookies()).delete("token");
   return NextResponse.json({ message: "Logout realizado com sucesso!" });
}
