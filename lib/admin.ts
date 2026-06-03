"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { UploadApiResponse } from "cloudinary";

// Aqui estão todas as funcionalidades que fazm as requisições privadas ao back-end

export async function login(formData: FormData) {
   const email = formData.get("email");
   const password = formData.get("password");

   if (email && password) {
      const res = await fetch(`${process.env.DOMAIN}/api/login`, {
         method: "POST",
         body: JSON.stringify({ email, password }),
         headers: { "Content-Type": "application/json" },
      });
      const user = await res.json();

      if (!user) {
         throw new Error("Erro de credenciais!");
      }

      return user;
   }
}

export async function logout() {
   await fetch("/api/logout", { method: "POST" });
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

interface IImageResponse {
   message: string;
   foto: UploadApiResponse;
}
export async function carregarImagemNoCloudinary(body: FormData) {
   const res = await fetch(`${process.env.DOMAIN}/api/adicionar_imagem`, {
      method: "POST",
      body,
   });
   const data = (await res.json()) as IImageResponse;
   return data;
}

export async function removerImagemNoCloudinary(publicId: string) {
   const res = await fetch(`${process.env.DOMAIN}/api/remover_imagem`, {
      method: "DELETE",
      body: JSON.stringify({ publicId }),
      headers: { "Content-Type": "application/json" },
   });
   const data = await res.json();
   return data;
}
