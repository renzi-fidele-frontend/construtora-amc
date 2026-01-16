import { IEmpreendimento } from "@/types/types";
import Image from "next/image";

const CardEmpreendimento = ({ empreendimento }: { empreendimento: IEmpreendimento }) => {
   return (
      <div className="text-grey  w-fit bg-zinc-50">
         {/* Status */}
         <div className="uppercase font-semibold bg-[#DE274A] text-white py-2 px-5 relative overflow-hidden">
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
            <Image width={352} height={198} src={empreendimento.thumbnail} alt={`Imagem demostrando o empreendimento`} />
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
                        className="shrink-0"
                        width={40}
                        height={40}
                        src={`/icons/features/${v}.png`}
                        alt="Ícone mostrando um destaque do empreendimento"
                        key={k}
                     />
                  ))}
               </div>
               {/* Retângulo */}
               <div className="absolute bg-[#DE274A] start-0 top-7 h-11 w-1.5"></div>
            </div>
         </div>
      </div>
   );
};
export default CardEmpreendimento;
