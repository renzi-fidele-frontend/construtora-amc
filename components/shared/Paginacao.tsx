import { gerarArray } from "@/lib/utils";
import Link from "next/link";

interface IPagination {
   paginaAtual: number;
   totalPaginas: number;
}
const Paginacao = ({ paginaAtual, totalPaginas }: IPagination) => {
   // Prevê o range das páginas do meio
   function preverRange() {
      if (paginaAtual < 5) return [1, 5];
      else if (paginaAtual > totalPaginas - 5) return [totalPaginas - 6, totalPaginas - 1];
      else return [paginaAtual - 2, paginaAtual + 2];
   }

   function isActive(pagina: number) {
      return pagina === paginaAtual;
   }

   return (
      <nav className="flex items-stretch justify-center gap-2 text-xl *:border *:border-theme1 *:py-2 *:px-4 *:href-[?page=1]:bg-theme1">
         {/* Pagina anterior */}
         {paginaAtual > 1 && <Link href={`?page=${paginaAtual - 1}`}>Anterior</Link>}

         {/* Primeira página */}
         <Link href={`?page=1`} className={isActive(1) ? "bg-theme1 text-white" : ""}>
            1
         </Link>

         {/* Ellipsis para a primeira página */}
         {paginaAtual > 5 && <span>...</span>}

         {/* Páginas do meio */}
         {gerarArray(totalPaginas)
            .slice(...preverRange())
            // Excluir 1 e totalPaginas
            .filter((pagina) => pagina !== 1 && pagina !== totalPaginas)
            .map((pagina) => (
               <Link key={pagina} href={`?page=${pagina}`} className={isActive(pagina) ? "bg-theme1 text-white" : ""}>
                  {pagina}
               </Link>
            ))}

         {/* Ellipsis para a ultima página */}
         {paginaAtual < totalPaginas - 5 && <span>...</span>}

         {/* Ultima página */}
         {totalPaginas > 1 && (
            <Link href={`?page=${totalPaginas}`} className={isActive(totalPaginas) ? "bg-theme1 text-white" : ""}>
               {totalPaginas}
            </Link>
         )}

         {/* Proxima página */}
         {paginaAtual < totalPaginas && <Link href={`?page=${paginaAtual + 1}`}>Proxima</Link>}
      </nav>
   );
};
export default Paginacao;
