"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
   const email = formData.get("email");
   const password = formData.get("password");
   const admin_email = process.env.ADMIN_EMAIL;
   const admin_password = process.env.ADMIN_PASSWORD;

   // Caso não exista o secret no env
   if (!process.env.JWT_SECRET) {
      throw new Error("Não existe um secret no env!");
   }

   //  Caso o email ou a password sejam diferentes
   if (email !== admin_email || password !== admin_password) {
      return console.log("Erro de credenciais!");
   }

   //  Gerando o token
   const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "30d",
   });

   // Adicionando o cookie ao response
   (await cookies()).set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
   });

   return true;
}

export async function logout() {
   (await cookies()).delete("token");
   redirect("/admin");
}

export async function getLogedUser() {
   try {
      const token = (await cookies()).get("token")?.value;
      if (!token) return null;

      return jwt.verify(String(token), String(process.env.JWT_SECRET));
   } catch (error) {
      console.log(error);
      return null;
   }
}
