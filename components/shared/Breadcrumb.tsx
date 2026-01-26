import { ChevronsRight } from "lucide-react";
import Container from "../layout/Container";
import Link from "next/link";

const Breadcrumb = ({ links }: { links: { titulo: string; href: string; ativo?: boolean }[] }) => {
   return (
      <nav className="bg-zinc-100 text-zinc-600 font-light">
         <Container className="flex items-center gap-2 py-4.5">
            {links.map((v, k) => (
               <>
                  <ChevronsRight className="size-4" key={k} />
                  <Link className={v?.ativo ? "font-medium" : ""} href={v.href}>{v.titulo}</Link>
               </>
            ))}
         </Container>
      </nav>
   );
};
export default Breadcrumb;
