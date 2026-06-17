import { ChevronsRight } from "lucide-react";
import Container from "../layout/Container";
import Link from "next/link";

const Breadcrumb = ({ links }: { links: { titulo: string; href: string; ativo?: boolean }[] }) => {
   const schemaDoBreadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: links.map((link, index) => ({
         "@type": "ListItem",
         position: index + 1,
         name: link.titulo,
         item: link.href !== "#" ? `https://amc.eng.br${link.href}` : undefined,
      })),
   };

   return (
      <>
         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDoBreadcrumb) }} />
         <nav className="bg-zinc-100 text-zinc-600 font-light">
            <Container className="py-2 sm:py-3 xl:py-4 flex flex-wrap items-center gap-2 [&_a]:hover:underline text-sm sm:text-base lg:text-lg">
               {links.map((v, k) => (
                  <div className="flex items-center gap-2" key={k}>
                     <ChevronsRight className="size-4" />
                     <Link className={v?.ativo ? "font-medium" : ""} href={v.href}>
                        {v.titulo}
                     </Link>
                  </div>
               ))}
            </Container>
         </nav>
      </>
   );
};
export default Breadcrumb;
