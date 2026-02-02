import Image from "next/image";
import Container from "./Container";
import { UserStar } from "lucide-react";
import Nav from "./Nav";
import Link from "next/link";
import SubHeader from "./SubHeader";

const Header = () => {
   return (
      <header>
         {/* Superior */}
         <Container className="w-full flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
               <Image
                  className="my-2 w-41 object-contain"
                  width={194}
                  height={73}
                  src="/img/logo.png"
                  alt="Ilustração do logotipo da marca Amc Contruções"
               />
            </Link>
            <div className="flex gap-8 items-stretch">
               {/* Menu de navegação */}
               <Nav />
               {/* CTA da Área do cliente */}
               <Link href="#">
                  <div className="text-white bg-theme2 px-[26] py-[22] flex gap-3.5 items-center font-medium">
                     <UserStar className="size-11" />
                     <div className="h-13.75 border-s border-white"></div>
                     <p className="text-[16px] leading-6">
                        Área do <br />
                        <span className="text-[28px] font-bold">Cliente</span>
                     </p>
                  </div>
               </Link>
            </div>
         </Container>
         {/* Inferior */}
         <SubHeader />
      </header>
   );
};
export default Header;
