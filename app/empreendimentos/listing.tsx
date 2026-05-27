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
         handleChange("Todos");
      }
   }, [categoriaViaUrl]);

   return (
      <>
         <Tabs defaultValue={categoriaViaUrl || "Todos"} value={tabAtivo} className="mb-12" onValueChange={handleChange}>
            <TabsList className="flex-wrap *:cursor-pointer text-sm sm:*:text-lg lg:*:text-xl *:px-2 md:*:px-4  md:*:py-2 *:aria-selected:font-medium *:bg-zinc-50 *:border *:border-zinc-300 **:rounded">
               <TabsTrigger value="Todos">Todos</TabsTrigger>
               <TabsTrigger value="Lançamento">Lançamento</TabsTrigger>
               <TabsTrigger value="Pré-lançamento">Pré-lançamento</TabsTrigger>
               <TabsTrigger value="Entregue">Entregue</TabsTrigger>
               <TabsTrigger value="Urbanismo">Urbanismo</TabsTrigger>
            </TabsList>
         </Tabs>
         <div className="pt-3 sm:pt-0 xl:pt-8 flex gap-8 lg:gap-12 md:*:basis-[calc(50%-32px)] lg:*:basis-[calc(33.3%-48px)] justify-start flex-wrap">
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
