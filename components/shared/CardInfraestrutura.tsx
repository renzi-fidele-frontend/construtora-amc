import { IInfraestrutura } from "@/types/types";
import Image from "next/image";

const CardInfraestrutura = ({ infraestrutura }: { infraestrutura: IInfraestrutura }) => {
   return (
      <div className="flex *:basis-[50%] *:flex-1 gap-7 flex-nowrap">
         <Image
            width={430}
            height={285}
            src={infraestrutura.foto}
            className="shadow-xl/40 rounded"
            alt={`Foto demonstrando a infraestrutura ${infraestrutura.titulo} construída pela AMC`}
         />
         <div className="flex flex-col justify-center gap-3">
            <h6 className="text-3xl font-bold">{infraestrutura.titulo}</h6>
            <ul className="list-disc ps-7 text-lg space-y-2">
               {infraestrutura.destaques.map((v, k) => (
                  <li key={k}>{v}</li>
               ))}
            </ul>
         </div>
      </div>
   );
};
export default CardInfraestrutura;
