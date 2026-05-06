import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
   const { email, password } = await req.json();

   const admin_email = process.env.ADMIN_EMAIL;
   const admin_password = process.env.ADMIN_PASSWORD;

   //  Caso o email ou a password sejam diferentes
   if (email !== admin_email || password !== admin_password) {
      return NextResponse.json({ error: "Não autorizado!" }, { status: 401 });
   }

   //  Gerando o token
   const token = jwt.sign({ email }, String(process.env.JWT_SECRET), {
      expiresIn: "1d",
   });

   const response = NextResponse.json({ sucess: true });

   //    Adicionando o cookie ao response
   response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
   });

   return response;
}
