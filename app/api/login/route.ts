import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
   const { email, password } = await req.json();

   const admin_email = process.env.ADMIN_EMAIL;
   const admin_password = process.env.ADMIN_PASSWORD;

   // Caso não exista o secret no env
   if (!process.env.JWT_SECRET) {
      throw new Error("Não existe um secret no env!");
   }

   //  Caso o email ou a password sejam diferentes
   if (email !== admin_email || password !== admin_password) {
      return NextResponse.json({ error: "Não autorizado!" }, { status: 401 });
   }

   //  Gerando o token
   const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "30d",
   });

   const response = NextResponse.json({ success: true });

   //    Adicionando o cookie ao response
   response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
   });

   return response;
}
