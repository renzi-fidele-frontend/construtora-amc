import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

/** Este código é uma função de middleware que verifica se um utilizador está autenticado antes de permitir que ele aceda a uma rota protegida. Ele verifica se há um token nos cookies e o verifica usando o segredo JWT. Se o token for inválido ou estiver ausente, ele redireciona o utilizador para a página de login.
 *
 * NB: O nome middleware foi alterado para proxy!
 */
export function proxy(req: NextRequest) {
   const token = req.cookies.get("token");
   console.log(token);

   function explulsar() {
      return NextResponse.redirect(new URL("/admin", req.url));
   }

   if (!token) return explulsar();

   try {
      jwt.verify(String(token), String(process.env.JWT_SECRET));
      return NextResponse.next();
   } catch {
      explulsar();
   }
}

export const config = {
   // Rotas que serão protegidas
   // TODO: Mais tarde bloquear as devidas rotas
   matcher: ["/admin/criar_post", "/admin/editar_post", "/admin/gerir_posts"],
};
