import Container from "@/components/layout/Container";
import Image from "next/image";

export default function Preloader() {
   return (
      <Container className="flex flex-col items-center text-center justify-center py-30 sm:py-40 gap-7 animate-pulse">
         <Image src="/img/logo.png" alt="Logo" width={194} height={73} />
         <p className="text-md lg:text-xl italic">Atuando com excelência em construção civil e desenvolvimento imobiliário</p>
      </Container>
   );
}
