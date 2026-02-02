"use client";

import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type TypeLinks = {
   titulo: string;
   url: string;
   megaLinks?: {
      titulo: string;
      url: string;
   }[];
   highlight?: boolean;
}[];
const links: TypeLinks = [
   {
      titulo: "Institucional",
      url: "#",
      megaLinks: [
         { titulo: "Quem somos", url: "/institucional/quem_somos" },
         { titulo: "Infraestrutura", url: "/institucional/infraestrutura" },
         { titulo: "Clientes", url: "/institucional/clientes" },
         { titulo: "Depoimentos", url: "/institucional/depoimentos" },
         { titulo: "Parceria", url: "/institucional/parceria" },
         { titulo: "Ligamos para você", url: "/institucional/ligamos_para_voce" },
         { titulo: "Política de privacidade", url: "/politica_de_privacidade" },
         { titulo: "Política de cookies", url: "/politica_de_cookies" },
      ],
   },
   { titulo: "Empreendimentos", url: "/empreendimentos" },
   { titulo: "Urbanismo", url: "/empreendimentos?categoria=Urbanismo" },
   { titulo: "Blog", url: "/blog" },
   { titulo: "Fale conosco", url: "/fale_conosco", highlight: true },
];

const Nav = () => {
   const pathname = usePathname();

   return (
      <NavigationMenu>
         <NavigationMenuList className="**:cursor-pointer gap-6 text-theme1 **:text-[18px] font-medium">
            {links?.map((v, k) => (
               <NavigationMenuItem key={k}>
                  {!v.megaLinks ? (
                     <NavigationMenuLink
                        className={`hover:underline underline-offset-7 ${v?.highlight && "bg-theme1 text-white cursor-pointer border-theme1 border"} ${pathname === v.url ? "underline  " : ""}`}
                        href={v?.url}
                     >
                        {v?.titulo}
                     </NavigationMenuLink>
                  ) : (
                     <>
                        <NavigationMenuTrigger className="px-1">{v.titulo}</NavigationMenuTrigger>
                        <NavigationMenuContent className=" **:w-full!">
                           {v.megaLinks.map((link, k) => (
                              <NavigationMenuLink
                                 className={`font-medium text-theme1 ${k + 1 < v.megaLinks.length ? "border-b" : ""} ${pathname === link.url ? "bg-theme1 text-white" : ""}`}
                                 href={link?.url}
                                 key={k}
                              >
                                 {link?.titulo}
                              </NavigationMenuLink>
                           ))}
                        </NavigationMenuContent>
                     </>
                  )}
               </NavigationMenuItem>
            ))}
         </NavigationMenuList>
      </NavigationMenu>
   );
};
export default Nav;
