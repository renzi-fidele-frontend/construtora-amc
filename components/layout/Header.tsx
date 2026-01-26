import Image from "next/image";
import Container from "./Container";
import { UserStar } from "lucide-react";
import Nav from "./Nav";
import Link from "next/link";

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
         <div className="py-3 bg-theme1 text-white text-lg font-medium uppercase">
            <Container className="flex items-center justify-center gap-20">
               {categorias.map((v, k) => (
                  <Link href={v.url} key={k}>
                     {v.nome}
                  </Link>
               ))}
               {/* CTA para o minha casa minha vida */}

               <div className="flex gap-10 items-center">
                  <div className="border-s border-dashed h-6"></div>
                  <Link href="https://www.caixa.gov.br/voce/habitacao/minha-casa-minha-vida/Paginas/default.aspx" target="_blank">
                     <div className="flex items-center gap-2 text-[11px] font-bold">
                        <Image
                           width={105}
                           height={74}
                           className="w-auto object-contain h-7"
                           src="/img/minha-casa.webp"
                           alt="Ilustração da logo marca do minha casa minha vida"
                        />
                        <div className="leading-2">
                           <p>Minha Casa</p>
                           <br />
                           <p>Minha Vida</p>
                        </div>
                     </div>
                  </Link>
               </div>
            </Container>
         </div>
      </header>
   );
};
export default Header;
