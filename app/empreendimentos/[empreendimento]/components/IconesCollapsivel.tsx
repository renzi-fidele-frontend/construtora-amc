"use client";
import { iconesComDescricao } from "@/data/data";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const IconesCollapsivel = () => {
   const [aberto, setAberto] = useState(false);

   return (
      <div className="bg-theme1 gap-10 py-6 px-8 flex items-center text-center">
         {/* Collapsível */}
         <div
            style={{ transition: "all .3s ease-in" }}
            className={`grid grid-cols-5 gap-6 text-white overflow-y-hidden h-20 ${aberto ? "h-fit" : ""}`}
         >
            {iconesComDescricao.map((v, k) => (
               <div className="flex flex-col items-center justify-center gap-2" key={k}>
                  <Image
                     className="invert-100 size-12"
                     width={40}
                     height={40}
                     src={`/icons/features/${v.nome}.png`}
                     alt={`Ilustração demostrando o destaque ${v.descricao} do empreendimento`}
                  />
                  <p className={!aberto ? "line-clamp-1" : ""}>{v.descricao}</p>
               </div>
            ))}
         </div>
         {/* Gatilho */}
         <div
            className="flex flex-col items-center text-white hover:cursor-pointer hover:underline h-fit group"
            onClick={() => {
               setAberto(!aberto);
            }}
         >
            {!aberto ? <Plus className="size-11 transition group-hover:rotate-90" /> : <Minus className="size-11 transition" />}
            <p className="font-medium text-nowrap">{!aberto ? "Ver mais" : "Ver menos"}</p>
         </div>
      </div>
   );
};
export default IconesCollapsivel;
