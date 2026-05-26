import { Building, UserRound } from "lucide-react";
import Image from "next/image";
import { IDepoimento } from "@/types/types";

const CardDepoimento = ({ depoimento }: { depoimento: IDepoimento }) => {
   return (
      <div>
         {/* Foto */}
         <Image
            width={700}
            height={700}
            src={depoimento.foto}
            alt={`Foto demonstrando o cliente ${depoimento.autor} super satisfeito com o nosso serviço após comprar o ${depoimento.empreendimento}`}
         />
         {/* Depoimento */}
         <p className="italic text-grey mt-3.5">{depoimento.texto}</p>
         {/* Cliente */}
         <p className="font-bold text-xl mt-3 mb-1 flex items-center gap-2">
            <UserRound className="size-5" /> {depoimento.autor}
         </p>
         {/* Empreendimento adquirido */}
         <p className="flex items-center gap-2">
            <Building className="size-5" /> {depoimento.empreendimento}
         </p>
      </div>
   );
};
export default CardDepoimento;
