import { LucideProps } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

interface ICardDestaque {
   titulo: string | ReactNode;
   descricao: string;
   Icone: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
   link: string;
   className?: string;
}

const CardDestaque = ({ titulo, descricao, Icone, link, className }: ICardDestaque) => {
   return (
      <Link href={link}>
         <div className={`text-white h-full py-28 px-8 hover:border-x-2 ${className} `}>
            <Icone className="size-12" />
            <h6 className="mt-5 text-2xl [&_span]:font-black [&_span]:text-4xl mb-2 text-shadow-lg">{titulo}</h6>
            <p className="text-shadow-lg text-lg">{descricao}</p>
         </div>
      </Link>
   );
};
export default CardDestaque;
