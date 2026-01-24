import { ChevronsRight } from "lucide-react";
import Link from "next/link";

export default function Empreendimentos() {
   return (
      <div>
         {/* Banner do topo */}
         <div></div>
         {/* Breadcrumb */}
         <div className="flex items-center gap-2 bg-zinc-100 text-zinc-400 font-light">
            <ChevronsRight /> Início <ChevronsRight />{" "}
            <Link className="font-medium" href="/empreendimentos">
               Empreendimentos
            </Link>
         </div>
         <section></section>
      </div>
   );
}
