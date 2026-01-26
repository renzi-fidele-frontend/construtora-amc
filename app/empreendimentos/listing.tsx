"use client";
import CardEmpreendimento from "@/components/shared/CardEmpreendimento";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { empreendimentos } from "@/data/data";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ListagemDeEmpreendimentos = () => {
   const [listaDeEmpreendimentos, setListaDeEmpreendimentos] = useState(empreendimentos);
   const categoriaViaUrl = useSearchParams().get("categoria");
   const [tabAtivo, setTabAtivo] = useState("");

   function handleChange(categoria: string) {
      setTabAtivo(categoria);
      setListaDeEmpreendimentos(empreendimentos.filter((v) => (categoria === "Todos" ? true : decodeURI(categoria) === v.categoria)));
   }

   // Caso se filtre via url
   useEffect(() => {
      if (categoriaViaUrl) {
         // eslint-disable-next-line react-hooks/set-state-in-effect
         handleChange(categoriaViaUrl);
      } else {
         handleChange("Todos")
      }
   }, [categoriaViaUrl]);

   return (
      <>
         <Tabs defaultValue={categoriaViaUrl || "Todos"} value={tabAtivo} className="mb-16" onValueChange={handleChange}>
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
