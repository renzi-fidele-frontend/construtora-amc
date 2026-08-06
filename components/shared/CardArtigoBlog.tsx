import { IArtigo } from "@/models/Artigo";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

dayjs.locale("pt-br");

const CardArtigoBlog = ({ artigo }: { artigo: IArtigo }) => {
   return (
      <Link
         href={`/blog/${artigo.slug}`}
         className="border transition hover:bg-theme1 hover:text-white hover:outline-2 outline-theme1 relative group"
      >
         <Image
            src={artigo.thumbnail.secure_url}
            width={artigo.thumbnail.width}
            height={artigo.thumbnail.height}
            alt="Ilustração do artigo"
            className="h-60 object-left object-cover"
         />
         <div className="py-5 xl:py-7 px-5 text-sm sm:text-base">
            {/* Data de publicação */}
            <p className="uppercase">{dayjs(artigo.publicadoEm).format("DD/MMMM/YYYY")}</p>
            {/* Categoria */}
            <p className="w-fit px-2 rounded text-white mb-2 text-sm" style={{ background: artigo.categoria.cor }}>
               {artigo.categoria.nome}
            </p>
            {/* Titulo */}
            <h3 className="font-bold text-lg md:text-xl line-clamp-2">{artigo.titulo}</h3>
            {/* Descrição */}
            <p className="line-clamp-4 mt-2">{artigo.descricao}</p>
         </div>
         {/* Categoria */}
         <div className="absolute p-2 sm:p-3 top-0 right-0" style={{ background: artigo.categoria.cor }}>
            <Image
               className="size-9 sm:size-11 invert-100"
               width={300}
               height={300}
               src={`/icons/categorias-blog/${artigo.categoria.slug}.png`}
               alt="Ilustracao da categoria"
            />
         </div>
      </Link>
   );
};
export default CardArtigoBlog;
