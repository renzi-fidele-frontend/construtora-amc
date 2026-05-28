import { CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Btn from "./Btn";
import { IArtigo } from "@/models/Artigo";
import dayjs from "dayjs";
import { Skeleton } from "../ui/skeleton";

dayjs.locale("pt-br");

const CardBlog = ({ artigo }: { artigo?: IArtigo }) => {
   return artigo ? (
      <div className="flex flex-col sm:flex-row border border-b-7 py-2 px-3 sm:py-0 sm:px-0">
         <Image
            className="w-full sm:w-[50%] lg:w-60 xl:w-75 sm:h-full object-cover sm:object-left shrink-0 sm:mx-0"
            unoptimized
            width={224}
            height={250}
            src={artigo.thumbnail.secure_url}
            alt={`Ilustração do artigo sobre ${artigo.titulo}`}
         />
         <div className="py-3 sm:py-5 sm:px-6 flex flex-col gap-2">
            <p className="font-medium flex items-center">
               <CalendarClock className="size-5 shrink-0 me-1" /> {dayjs(artigo.publicadoEm).format("DD/MMMM/YYYY")}
            </p>
            <h6 className="font-medium text-lg sm:text-xl line-clamp-2">{artigo.titulo}</h6>
            <p className="line-clamp-4 text-grey my-1.5 text-sm sm:text-base">{artigo.descricao}</p>
            <Link className="w-fit mt-2 sm:mt-0" href={`/blog/${artigo.slug}`}>
               <Btn className="text-sm uppercase py-2.5!">Ver mais</Btn>
            </Link>
         </div>
      </div>
   ) : (
      <div className="flex flex-col sm:flex-row border border-b-7 py-2 px-3 sm:py-0 sm:px-0">
         {/* Foto */}
         <Skeleton className="w-full sm:w-56 h-62.5" />
         <div className="py-3 sm:py-5 sm:px-6 flex flex-col gap-2">
            <p className="flex items-center">
               <CalendarClock className="size-5 shrink-0 me-1" /> <Skeleton className="w-40 h-4" />
            </p>
            <h6 className="w-65">
               <Skeleton className="w-full h-8" />
            </h6>
            <p className="my-1.5 *:h-4 space-y-1">
               <Skeleton />
               <Skeleton />
               <Skeleton />
               <Skeleton />
            </p>
            <Btn className="w-fit text-sm uppercase mt-2 sm:mt-0 py-2.5!">Ver mais</Btn>
         </div>
      </div>
   );
};
export default CardBlog;
