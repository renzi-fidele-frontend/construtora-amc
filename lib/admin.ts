"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function login(formData: FormData) {
   const email = formData.get("email");
   const password = formData.get("password");

   if (email && password) {
      const res = await fetch("/api/login", {
         method: "POST",
         body: JSON.stringify({ email, password }),
         headers: { "Content-Type": "application/json" },
      });
      const user = await res.json();

      console.log(user);

      if (!user) {
         throw new Error("Erro de credenciais!");
      }

      return user;
   }
}

export async function logout() {
   await fetch("/api/logout", { method: "POST" });
   window.location.href = "/admin";
}

export async function getLogedUser() {
   const res = await fetch("/api/me", {
      method: "GET",
      credentials: "include",
   });

   const user = await res.json();

   return user;
}

export async function getUserFromServer() {
   try {
      const token = (await cookies()).get("token")?.value;
      if (!token) return null;
      const user = jwt.verify(token, process.env.JWT_SECRET!);
      return user;
   } catch (error) {
      console.error("Token inválido ou expirado!", error);
      return null;
   }
}
