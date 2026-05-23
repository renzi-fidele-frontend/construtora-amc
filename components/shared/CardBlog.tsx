import { CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Btn from "./Btn";
import { IArtigo } from "@/models/Artigo";
import dayjs from "dayjs";

dayjs.locale("pt-br");

const CardBlog = ({ artigo }: { artigo: IArtigo }) => {
   return (
      <div className="flex border border-b-7">
         <Image
            className="w-75 h-full object-cover object-left shrink-0"
            unoptimized
            width={224}
            height={250}
            src={artigo.thumbnail.secure_url}
            alt={`Ilustração do artigo sobre ${artigo.titulo}`}
         />
         <div className="py-5 px-6 flex flex-col gap-2">
            <p className="font-medium flex items-center">
               <CalendarClock className="size-5 shrink-0 me-1" /> {dayjs(artigo.publicadoEm).format("DD/MMMM/YYYY")}
            </p>
            <h6 className="font-medium text-xl line-clamp-2">{artigo.titulo}</h6>
            <p className="line-clamp-4 text-grey my-1.5">{artigo.descricao}</p>
            <Link href={`/blog/${artigo.slug}`}>
               <Btn className="text-sm uppercase py-2.5!">Ver mais</Btn>
            </Link>
         </div>
      </div>
   );
};
export default CardBlog;
