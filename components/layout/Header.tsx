import Image from "next/image";
import Container from "./Container";
import { UserStar } from "lucide-react";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
   return (
      <header className="flex items-center justify-between">
         <Container className="w-full flex items-center justify-between">
            <Image className="my-2" width={194} height={73} src="/img/logo.png" alt="Ilustração do logotipo da marca Amc Contruções" />
            <div className="flex gap-7 items-stretch">
               {/* Menu de navegação */}
               <Nav />
               {/* CTA da Área do cliente */}
               <Link href="#">
                  <div className="text-white bg-theme2 px-[26] py-[22] flex gap-3.5 items-center font-medium">
                     <UserStar className="size-12" />
                     <div className="h-[55] border-s border-white"></div>
                     <p className="text-[16px] leading-6">
                        Área do <br />
                        <span className="text-[28px] font-bold">Cliente</span>
                     </p>
                  </div>
               </Link>
            </div>
         </Container>
      </header>
   );
};
export default Header;
