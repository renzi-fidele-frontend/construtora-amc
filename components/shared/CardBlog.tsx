import { CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Btn from "./Btn";
import { ICardArtigo } from "@/types/types";

const CardBlog = ({ thumbnail, titulo, data, descricao, link }: ICardArtigo) => {
   return (
      <div className="flex border border-b-7">
         <Image
            className="w-60 h-full object-cover shrink-0"
            unoptimized
            width={224}
            height={250}
            src={thumbnail}
            alt={`Ilustração do artigo sobre ${titulo}`}
         />
         <div className="py-5 px-6 flex flex-col gap-2">
            <p className="font-medium flex items-center">
               <CalendarClock className="size-5 shrink-0 me-1" /> {data.toLocaleDateString()}
            </p>
            <h6 className="font-medium text-xl line-clamp-2">{titulo}</h6>
            <p className="line-clamp-4 text-grey my-1.5">{descricao}</p>
            <Link href={`/blog/${encodeURIComponent(titulo)}`}>
               <Btn className="text-sm uppercase py-2.5!">Ver mais</Btn>
            </Link>
         </div>
      </div>
   );
};
export default CardBlog;
