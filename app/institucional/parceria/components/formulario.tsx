"use client";
import Btn from "@/components/shared/Btn";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cidadesPorEstado } from "@/data/data";
import { useState } from "react";

const FormularioDeParceria = () => {
   const [cidadesDisponiveis, setCidadesDisponiveis] = useState([""]);
   return (
      <form className="grid grid-cols-3 gap-4 [&_input]:border-theme1 mt-10 text-sm">
         {/* Nome */}
         <fieldset>
            <label htmlFor="nome">Nome</label>
            <Input min={3} name="nome" required />
         </fieldset>
         {/* Email */}
         <fieldset>
            <label htmlFor="email">E-mail</label>
            <Input type="email" name="email" required />
         </fieldset>
         {/* Telefone */}
         <fieldset>
            <label htmlFor="tel">Telefone</label>
            <Input type="tel" name="tel" required />
         </fieldset>
         {/* Estado */}
         <fieldset>
            <label htmlFor="estado">Estado</label>
            <Select
               onValueChange={(novaCidade) => {
                  cidadesPorEstado.forEach((v) => {
                     if (v.nome === novaCidade) {
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
            <Select>
               <SelectTrigger className="border-theme1 w-full">
                  <SelectValue placeholder="Selecione o estado" />
                  <SelectContent className="">
                     {cidadesDisponiveis.map((cidade, k) => (
                        <SelectItem value={cidade} key={k}>
                           {cidade}
                        </SelectItem>
                     ))}
                  </SelectContent>
               </SelectTrigger>
            </Select>
         </fieldset>
         {/* Mensagem */}
         <fieldset className="col-span-2">
            <label htmlFor="msg">Mensagem</label>
            <textarea className="w-full border border-theme1 h-23 p-3" name="" id=""></textarea>
         </fieldset>
         {/* Botão */}
         <div>
            <Btn>Enviar mensagem</Btn>
         </div>
      </form>
   );
};
export default FormularioDeParceria;
