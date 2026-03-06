import Container from "@/components/layout/Container";
import Btn from "@/components/shared/Btn";
import SectionIntro from "@/components/shared/SectionIntro";
import { Input } from "@/components/ui/input";

export default function Admin() {
   return (
      <Container className="py-22">
         <SectionIntro
            titulo="Entre como administrador"
            descricao="Faça login para poder gerenciar o conteúdo do site"
            className="text-center"
         />
         <form className="max-w-xl mx-auto flex flex-col gap-4">
            {/* Email */}
            <fieldset>
               <label htmlFor="email">Seu E-mail</label>
               <Input type="email" name="email" required placeholder="usuario@dominio.com" />
            </fieldset>
            {/* Password */}
            <fieldset>
               <label htmlFor="password">Sua palavra-passe</label>
               <Input type="password" name="password" required placeholder="*******************" />
            </fieldset>
            {/* Botão */}
            <div className="mt-3">
               <Btn className="w-full">Entrar como administrador</Btn>
            </div>
         </form>
      </Container>
   );
}
