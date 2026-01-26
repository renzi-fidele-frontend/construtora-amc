"use client";
import CardEmpreendimento from "@/components/shared/CardEmpreendimento";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { empreendimentos } from "@/data/data";
import { useState } from "react";

const ListagemDeEmpreendimentos = () => {
   const [listaDeEmpreendimentos, setListaDeEmpreendimentos] = useState(empreendimentos);

   function handleChange(categoria: string) {
      setListaDeEmpreendimentos(empreendimentos.filter((v) => (categoria === "Todos" ? true : categoria === v.categoria)));
   }

   return (
      <>
         <Tabs defaultValue="Todos" className="mb-16" onValueChange={handleChange}>
            <TabsList className="*:cursor-pointer *:text-xl *:p-4 *:font-light *:aria-selected:font-medium **:rounded">
               <TabsTrigger value="Todos">Todos</TabsTrigger>
               <TabsTrigger value="Lançamento">Lançamento</TabsTrigger>
               <TabsTrigger value="Pré-lançamento">Pré-lançamento</TabsTrigger>
               <TabsTrigger value="Entregue">Entregue</TabsTrigger>
               <TabsTrigger value="Urbanismo">Urbanismo</TabsTrigger>
            </TabsList>
         </Tabs>
         <div className="flex gap-12 *:basis-[calc(33.3%-48px)] justify-start flex-wrap">
            {listaDeEmpreendimentos.map((v, k) => (
               <CardEmpreendimento largura="w-full" empreendimento={v} key={k} />
            ))}
         </div>
      </>
   );
   {
   }
};
export default ListagemDeEmpreendimentos;
