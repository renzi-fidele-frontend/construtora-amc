"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

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

      console.log(user);

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
