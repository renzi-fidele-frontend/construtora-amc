import { ChevronsRight } from "lucide-react";
import Container from "../layout/Container";
import Link from "next/link";

const Breadcrumb = ({ links }: { links: { titulo: string; href: string; ativo?: boolean }[] }) => {
   return (
      <nav className="bg-zinc-100 text-zinc-600 font-light">
         <Container className="py-4.5 flex items-center gap-2">
            {links.map((v, k) => (
               <div className="flex items-center gap-2 " key={k}>
                  <ChevronsRight className="size-4" />
                  <Link className={v?.ativo ? "font-medium" : ""} href={v.href}>
                     {v.titulo}
                  </Link>
               </div>
            ))}
         </Container>
      </nav>
   );
};
export default Breadcrumb;
