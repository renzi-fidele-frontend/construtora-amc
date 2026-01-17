import { Building, UserRound } from "lucide-react";
import Image from "next/image";
import Btn from "./Btn";
import { IDepoimento } from "@/types/types";

const CardDepoimento = ({ depoimento }: { depoimento: IDepoimento }) => {
   return (
      <div className="text-theme1">
         {/* Foto */}
         <Image
            width={700}
            height={700}
            src={depoimento.foto}
            alt={`Foto demonstrando o cliente ${depoimento.autor} super satisfeito com o nosso serviço após comprar o ${depoimento.empreendimento}`}
         />
         {/* Depoimento */}
         <p className="line-clamp-2 italic text-grey mt-3.5">{depoimento.texto}</p>
         {/* Cliente */}
         <p className="font-bold text-xl mt-3 mb-1 flex items-center gap-2">
            <UserRound className="size-5" /> {depoimento.autor}
         </p>
         {/* Empreendimento adquirido */}
         <p className="mb-5 flex items-center gap-2">
            <Building className="size-5" /> {depoimento.empreendimento}
         </p>
         {/* CTA */}
         <Btn className="uppercase text-[16px]! py-2.5! ">Continue lendo</Btn>
      </div>
   );
};
export default CardDepoimento;
