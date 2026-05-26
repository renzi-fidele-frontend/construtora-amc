import { IInfraestrutura } from "@/types/types";
import Image from "next/image";

const CardInfraestrutura = ({ infraestrutura }: { infraestrutura: IInfraestrutura }) => {
   return (
      <div className="flex *:basis-[50%] flex-col lg:flex-row *:flex-1 gap-3 sm:gap-7">
         <Image
            width={430}
            height={285}
            src={infraestrutura.foto}
            className="sm:shadow-xl/40 rounded object-cover "
            alt={`Foto demonstrando a infraestrutura ${infraestrutura.titulo} construída pela AMC`}
         />
         <div className="flex flex-col justify-center gap-3">
            <h6 className="text-2xl sm:text-3xl font-bold">{infraestrutura.titulo}</h6>
            <ul className="list-disc ps-7 xl:text-lg space-y-2">
               {infraestrutura.destaques.map((v, k) => (
                  <li key={k}>{v}</li>
               ))}
            </ul>
         </div>
      </div>
   );
};
export default CardInfraestrutura;
