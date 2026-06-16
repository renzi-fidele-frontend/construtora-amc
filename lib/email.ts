"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function enviarContato(formData: FormData) {
   const nome = formData.get("nome") as string;
   const email = formData.get("email") as string;
   const telefone = formData.get("telefone") as string;
   const cidade = formData.get("cidade") as string;
   const estado = formData.get("estado") as string;
   const mensagem = formData.get("msg") as string;

   //    Enviar para AMC
   await resend.emails
      .send({
         from: "Site AMC <noreply@amc.eng.br>",
         to: process.env.ADMIN_EMAIL!,
         subject: "Novo contato pelo site",
         html: `
         <h2>Novo contato</h2>

         <p><strong>Nome:</strong> ${nome}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Telefone:</strong> ${telefone}</p>
         <p><strong>Estado:</strong> ${estado}</p>
         <p><strong>Cidade:</strong> ${cidade}</p>

         <h3>Mensagem</h3>
         <p>${mensagem}</p>
         `,
      })
      .catch((error) => console.log(error))
      .then((res) => console.log(res));

   //    Enviar para cliente
   await resend.emails
      .send({
         from: "AMC Construções <noreply@amc.eng.br>",
         to: email,
         subject: "Recebemos seu mensagem",
         html: `
         <h2>Olá ${nome}!</h2>

         <p>
            Recebemos sua mensagem com sucesso.
         </p>

         <p>
            Nossa equipe analisará sua solicitação e entrará em contato em breve.
         </p>

         <br />

         <p>
            Atenciosamente,<br />
            AMC Construções
         </p>
      `,
      })
      .catch((error) => console.log(error))
      .then((res) => console.log(res));

   return { success: true };
}
