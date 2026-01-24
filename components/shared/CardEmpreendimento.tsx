import { IEmpreendimento } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const CardEmpreendimento = ({ empreendimento }: { empreendimento: IEmpreendimento }) => {
   function analisarCor(categoria: typeof empreendimento.categoria) {
      if (categoria === "Lançamento") return "bg-lancamento";
      if (categoria === "Pré-lançamento") return "bg-prelancamento";
      if (categoria === "Entregue") return "bg-entregue";
      if (categoria === "Urbanismo") return "bg-urbanismo";
   }
   return (
      <Link
         href={`/empreendimentos/${empreendimento.id}`}
         className="text-grey w-fit bg-zinc-50 transition hover:-translate-y-1.5 hover:bg-theme1 hover:text-white group"
      >
         {/* Status */}
         <div className={`uppercase font-semibold ${analisarCor(empreendimento.categoria)} text-white py-2 px-5 relative overflow-hidden`}>
            <p>{empreendimento.categoria}</p>
            {/* Rectângulo overlay */}
            <svg className="absolute end-0 inset-y-0" width="96" height="55" viewBox="0 0 96 55" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 0H63.5H96V55L46 54.5L0 0Z" fill="white" />
            </svg>
         </div>
         <div className="w-fit border border-b-9 border-zinc-300">
            {/* Titulo */}
            <div className="px-5 py-3">
               <h3 className="uppercase text-[17px] font-bold">{empreendimento.nome}</h3>
            </div>
            {/* Imagem */}
            <Image
               className="group-hover:sepia-60"
               width={352}
               height={198}
               src={empreendimento.thumbnail}
               alt={`Imagem demostrando o empreendimento`}
            />
            {/* Corpo */}
            <div className="w-full px-5 font-medium text-[17px] relative">
               {/* Endereço */}
               <div className="py-6">
                  <p>{empreendimento.estado}</p>
                  <p>{empreendimento.endereco_curto}</p>
               </div>
               <hr />
               {/* Descrição */}
               <div className="py-6">
                  <p>{empreendimento.destaque}</p>
                  <p>{empreendimento.descricao_area}</p>
               </div>
               <hr />
               {/* Destaques */}
               <div className="py-4 flex items-center justify-between">
                  {empreendimento.icones.map((v, k) => (
                     <Image
                        className="shrink-0 group-hover:invert-100"
                        width={40}
                        height={40}
                        src={`/icons/features/${v}.png`}
                        alt="Ícone mostrando um destaque do empreendimento"
                        key={k}
                     />
                  ))}
               </div>
               {/* Retângulo */}
               <div className={`absolute ${analisarCor(empreendimento.categoria)} start-0 top-7 h-11 w-1.5`}></div>
            </div>
         </div>
      </Link>
   );
};
export default CardEmpreendimento;
