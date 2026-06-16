import { Skeleton } from "@/components/ui/skeleton";
import { gerarArray } from "@/lib/utils";

export default function LoadingBlog() {
   return (
      <div>
         {/* Foto de destaque */}
         <Skeleton className="w-full h-60 sm:h-96 xl:h-120 " />
         <div className="flex gap-2 sm:gap-4 flex-wrap mt-2 sm:mt-3 mb-3 sm:mb-5 text-sm sm:text-base">
            {/* Data de publicação */}
            <Skeleton className="w-55 h-8" />
            {/* Data de atualização */}
            <Skeleton className="w-55 h-8" />
         </div>
         {/* Título */}
         <Skeleton className="w-full h-13 mb-4 sm:mb-7" />
         {/* Conteúdo */}
         <div className="space-y-3">
            {gerarArray(20).map((v) => (
               <Skeleton className="w-full h-5" key={v} />
            ))}
         </div>
      </div>
   );
}
