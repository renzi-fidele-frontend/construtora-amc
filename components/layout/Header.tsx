import Image from "next/image";
import Container from "./Container";
import { UserStar } from "lucide-react";
import Nav from "./Nav";
import Link from "next/link";
import SubHeader from "./SubHeader";
import MobileMenu from "./MobileMenu";

// TODO: Instalar o drawer para finalizar a responsividade do cabeçalho
const Header = async () => {
   return (
      <header>
         {/* Superior */}
         <Container className="w-full flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
               <Image
                  className="my-2 w-28 sm:w-35 lg:w-33 xl:w-41 object-contain"
                  width={194}
                  height={73}
                  src="/img/logo.png"
                  alt="Ilustração do logotipo da marca Amc Contruções"
               />
            </Link>
            <div className="flex gap-4 lg:gap-6 xl:gap-8 items-center">
               {/* Menu de navegação */}
               <Nav />
               <MobileMenu />
               {/* CTA da Área do cliente */}
               <Link className="hidden sm:block" href="https://portal.totalbank.com.br/boleto/?ca=SOLAR" target="_blank">
                  <div className="text-white bg-theme2 hover:bg-theme1 transition py-1 px-2.5 lg:px-[17] lg:py-[12] xl:px-[26] xl:py-[21] flex gap-3.5 items-center font-medium">
                     <UserStar className="size-8 md:size-10 xl:size-11" />
                     <div className="h-11 xl:h-13.75 border-s border-white"></div>
                     <p className="text-[15px] md:text-[16px] leading-4.5 md:leading-6">
                        Área do <br />
                        <span className="text-[18px] md:text-[20px] xl:text-[28px] font-bold">Cliente</span>
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
