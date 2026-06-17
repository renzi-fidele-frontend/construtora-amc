"use client";
import Btn from "@/components/shared/Btn";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cidadesPorEstado } from "@/data/data";
import { enviarContato } from "@/lib/email";
import { useMask } from "@react-input/mask";
import { FormEvent, useState } from "react";

const FormularioDeContato = () => {
   const [cidadesDisponiveis, setCidadesDisponiveis] = useState([""]);
   const [cidade, setCidade] = useState("");
   const [estado, setEstado] = useState("");
   const telefoneRef = useMask({
      mask: "+55 (__) _____-____",
      replacement: { _: /\d/ },
   });

   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      data.append("cidade", cidade);
      data.append("estado", estado);
      const enviar = await enviarContato(data);
      console.log(enviar);
   }

   return (
      <form
         onSubmit={handleSubmit}
         className="grid md:grid-cols-3 gap-4 [&_input]:border-theme1 [&_button]:cursor-pointer **:data-placeholder:text-theme1! mt-7 md:mt-10 text-sm"
      >
         {/* Nome */}
         <fieldset>
            <label htmlFor="nome">Nome</label>
            <Input minLength={3} id="nome" name="nome" required />
         </fieldset>
         {/* Email */}
         <fieldset>
            <label htmlFor="email">E-mail</label>
            <Input type="email" id="email" name="email" required />
         </fieldset>
         {/* Telefone */}
         <fieldset>
            <label htmlFor="tel">Telefone</label>
            <Input type="tel" name="tel" id="tel" ref={telefoneRef} placeholder="+55 (XX) XXXXX-XXXX" required />
         </fieldset>
         {/* Estado */}
         <fieldset>
            <label htmlFor="estado">Estado</label>
            <Select
               onValueChange={(novoEstado) => {
                  setEstado(novoEstado);
                  cidadesPorEstado.forEach((v) => {
                     if (v.nome === novoEstado) {
                        setCidadesDisponiveis(v.cidades);
                     }
                  });
               }}
            >
               <SelectTrigger className="border-theme1 w-full">
                  <SelectValue placeholder="Selecione o estado" />
               </SelectTrigger>
               <SelectContent className="">
                  {cidadesPorEstado.map((cidade, k) => (
                     <SelectItem value={cidade.nome} key={k}>
                        {cidade.nome}
                     </SelectItem>
                  ))}
               </SelectContent>
            </Select>
         </fieldset>
         {/* Cidade */}
         <fieldset>
            <label htmlFor="cidade">Cidade</label>
            <Select onValueChange={(novaCidade) => setCidade(novaCidade)} disabled={cidadesDisponiveis[0] === ""}>
               <SelectTrigger className="border-theme1 w-full">
                  <SelectValue placeholder="Selecione a cidade" />
                  <SelectContent className="">
                     {cidadesDisponiveis[0] !== "" &&
                        cidadesDisponiveis.map((cidade, k) => (
                           <SelectItem value={cidade} key={k}>
                              {cidade}
                           </SelectItem>
                        ))}
                  </SelectContent>
               </SelectTrigger>
            </Select>
         </fieldset>
         {/* Mensagem */}
         <fieldset className="md:col-span-2">
            <label htmlFor="msg">Mensagem</label>
            <textarea className="w-full border border-theme1 h-23 p-3" name="msg" id="msg"></textarea>
         </fieldset>
         {/* Botão */}
         <div>
            <Btn type="submit">Enviar mensagem</Btn>
         </div>
      </form>
   );
};
export default FormularioDeContato;
