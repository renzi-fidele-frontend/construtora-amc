import { Skeleton } from "@/components/ui/skeleton";
import { gerarArray } from "@/lib/utils";

export default function LoadingBlogList() {
   return (
      <div className="grid sm:grid-cols-2 gap-5 pt-7.5">
         {gerarArray(6).map((v, k) => (
            <div className="border transition hover:bg-theme1 hover:text-white hover:outline-2 outline-theme1" key={k}>
               {/* Foto */}
               <Skeleton className="w-full h-60" />
               <div className="py-5 xl:py-7 px-5 text-sm sm:text-base">
                  {/* Data de publicação */}
                  <Skeleton className="w-55 h-4" />
                  {/* Titulo */}
                  <Skeleton className="w-full h-8 my-4" />
                  {/* Descrição */}
                  <div className="space-y-2">
                     <Skeleton className="w-full h-5" />
                     <Skeleton className="w-full h-5" />
                     <Skeleton className="w-full h-5" />
                     <Skeleton className="w-full h-5" />
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}
