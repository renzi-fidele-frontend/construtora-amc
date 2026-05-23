"use client";
import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import Image from "next/image";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TypeLinks = {
   titulo: string;
   url: string;
   newTab?: boolean;
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
   { titulo: "Blog", url: "/blog" },
   { titulo: "Urbanismo", url: "/empreendimentos?categoria=Urbanismo" },
   { titulo: "Fale conosco", url: "/institucional/ligamos_para_voce", highlight: true },
   { titulo: "Área do cliente", url: "/area_do_cliente", newTab: true },
];

const categorias = [
   {
      nome: "Empreendimentos",
      url: "/empreendimentos",
   },
   {
      nome: "Pré-lançamentos",
      url: "/empreendimentos?categoria=Pré-lançamento",
   },
   {
      nome: "Lançamentos",
      url: "/empreendimentos?categoria=Lançamento",
   },
   {
      nome: "Pronto para morar",
      url: "/empreendimentos?categoria=Entregue",
   },
];

const MobileMenu = () => {
   const pathname = usePathname();

   return (
      <div className="flex lg:hidden ">
         <Drawer direction="left">
            <DrawerTrigger>
               <Menu className="size-9 sm:size-10 **:stroke-3 cursor-pointer" />
            </DrawerTrigger>
            <DrawerContent className="flex flex-col items-start justify-center **:text-xl">
               {/* TOPO */}
               <div className="p-4">
                  <Image src="/img/logo.png" width={194} height={73} alt="Logo da AMC Construções" />
                  <div className="mt-5">
                     <NavigationMenu contentTopDistance="top-12" className="**:w-full!">
                        <NavigationMenuList className="flex flex-col items-start">
                           {links.map((item, k) => (
                              <NavigationMenuItem key={k}>
                                 {!item?.megaLinks ? (
                                    <NavigationMenuLink className={`${item?.highlight ? "bg-theme1 text-white" : ""}`} href={item.url}>
                                       {item.titulo}
                                    </NavigationMenuLink>
                                 ) : (
                                    <>
                                       <NavigationMenuTrigger className="px-2">{item.titulo}</NavigationMenuTrigger>
                                       <NavigationMenuContent className="**:top-0! **:text-[17px]!">
                                          {item.megaLinks.map((link, k) => (
                                             <NavigationMenuLink
                                                className={`border-b ${pathname === link.url ? "bg-theme1 text-white" : ""}`}
                                                href={link.url}
                                                key={k}
                                             >
                                                {link.titulo}
                                             </NavigationMenuLink>
                                          ))}
                                       </NavigationMenuContent>
                                    </>
                                 )}
                              </NavigationMenuItem>
                           ))}
                        </NavigationMenuList>
                     </NavigationMenu>
                  </div>
               </div>
               {/* BAIXO */}
               <div className="flex flex-col mt-3 bg-theme1 text-white w-full px-4 py-6 uppercase">
                  <h5 className="text-4xl!">Imóveis</h5>
                  <nav className="flex flex-col gap-3 mt-2 border-t border-white pt-3.5">
                     {categorias.map((categoria, k) => (
                        <Link className="sm:text-lg!" href={categoria.url} key={k}>
                           {categoria.nome}
                        </Link>
                     ))}
                  </nav>
                  {/* MINHA CASA - CTA */}
               </div>
            </DrawerContent>
         </Drawer>
      </div>
   );
};
export default MobileMenu;
