import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
         { titulo: "Infraestrutura", url: "/infraestrutura" },
         { titulo: "Clientes", url: "/clientes" },
         { titulo: "Parceria", url: "/parceria" },
         { titulo: "Ligamos para voce", url: "/ligamos_para_voce" },
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
   return (
      <NavigationMenu>
         <NavigationMenuList className="**:cursor-pointer gap-6 text-theme1 **:text-[18px] font-medium">
            {links?.map((v, k) => (
               <NavigationMenuItem key={k}>
                  {!v.megaLinks ? (
                     <NavigationMenuLink
                        className={`data-[active=true]:underline ${v?.highlight && "bg-theme1 text-white cursor-pointer border-theme1 border"}`}
                        href={v?.url}
                     >
                        {v?.titulo}
                     </NavigationMenuLink>
                  ) : (
                     <>
                        <NavigationMenuTrigger className="px-1">{v.titulo}</NavigationMenuTrigger>
                        <NavigationMenuContent className="pe-10! **:w-full! ">
                           {v.megaLinks.map((v, k) => (
                              <NavigationMenuLink href={v?.url} key={k}>
                                 {v?.titulo}
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
