import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import Btn from "../shared/Btn";
import { Calendar, ChevronsRight, MessageSquareText, Phone } from "lucide-react";

const LinkComChevron = ({ texto, link }: { texto: string; link: string }) => {
   return (
      <Link className="flex items-center gap-1" href={link}>
         <ChevronsRight className="size-4" /> {texto}
      </Link>
   );
};

const Footer = () => {
   return (
      <footer>
         <hr className="border-4 mb-8" />
         <Container className="text-lg">
            {/* Primeira linha */}
            <div className="flex flex-nowrap justify-between *:grow *:flex *:flex-col *:gap-4">
               {/* Coluna 1 */}
               <div className="basis-[28%]">
                  <Image width={170} height={64} src="/img/logo.png" alt="Logotipo do site" />
                  <div className="flex flex-col gap-2 text-lg font-medium mt-2">
                     <LinkComChevron texto="Quem Somos" link="/institucional/quem_somos" />
                     <LinkComChevron texto="Missão e valores" link="/missao_e_valores" />
                  </div>
               </div>
               {/* Coluna 2 */}
               <div>
                  <p className="font-medium">Institucional</p>
                  <nav className="flex flex-col gap-2.5 text-base">
                     <LinkComChevron texto="Infraestrutura" link="/infraestrutura" />
                     <LinkComChevron texto="Clientes" link="/clientes" />
                     <LinkComChevron texto="Contato" link="/contato" />
                     <LinkComChevron texto="Política de Privacidade" link="/politica_de_privacidade" />
                  </nav>
               </div>
               {/* Coluna 3 */}
               <div className="font-medium">
                  <Link href="#">Empreendimentos</Link>
                  <Link href="#">Depoimentos</Link>
                  <Link href="#">Missão e valores</Link>
                  <Link href="#">
                     <Btn className="px-2! py-2!">Fale conosco</Btn>
                  </Link>
               </div>
            </div>
            {/* Barra azul */}
            <div className="grid grid-cols-3 *:flex *:flex-col *:gap-4 *:pt-6 *:pb-9 *:px-8 text-white font-black tracking-wider text-2xl mt-7 *:hover:[&_svg]:animate-bounce *:hover:border-x">
               <Link className="bg-[#0CA5AD]" href="#">
                  <Calendar className="size-8" />
                  <p>BLOG</p>
               </Link>
               <Link className="bg-theme2" href="#">
                  <MessageSquareText className="size-8" />
                  <p>WHATSAPP</p>
               </Link>
               <Link className="bg-[#0CA5AD]" href="#">
                  <Phone className="size-8" />
                  <p>
                     <span className="font-normal text-xl">LIGAMOS</span>
                     <br />
                     <span>PARA VOCÊ</span>
                  </p>
               </Link>
            </div>
         </Container>
         {/* Redes sociais */}
         <div className="flex py-5 bg-zinc-200 items-center justify-center gap-6">
            <p className="font-medium text-xl">Redes Sociais:</p>
            <div className="flex items-center gap-7 **:rounded-full">
               {/* Facebook */}
               <Link href="https://www.facebook.com/people/AMC-Constru%C3%A7%C3%B5es/100063671165105/">
                  <Image width={50} height={50} src="/icons/social/facebook.webp" alt={`Ícone da rede social: Facebook`} />
               </Link>
               {/* Instagram */}
               <Link href="https://www.instagram.com/construcoesamc/">
                  <Image width={50} height={50} src="/icons/social/instagram.webp" alt={`Ícone da rede social: Instagram`} />
               </Link>
               {/* Youtube */}
               <Link href="https://www.youtube.com/@AMCConstrucoes">
                  <Image width={50} height={50} src="/icons/social/youtube.webp" alt={`Ícone da rede social: Youtube`} />
               </Link>
            </div>
         </div>
         {/* Última linha */}
         <Container>
            <div className="flex flex-nowrap justify-between gap-12 py-10.5 text-[12px] font-light [&_h6]:text-base [&_h6]:font-bold [&_p]:mt-1.5 *:flex-1">
               {/* Central de vendas e Assistência Técnica */}
               <div className="[&_p]:text-xl">
                  <div>
                     <h6>Central de Vendas</h6>
                     <p>47 9 9152-0164</p>
                  </div>
                  <div className="mt-3.5">
                     <h6>Assistência Técnica e Administração</h6>
                     <p>48 9 9125-3213</p>
                  </div>
               </div>
               {/* Matriz */}
               <div>
                  <h6>Matriz</h6>
                  <p>Av. Tiradentes, 501 Torre 1 (14º Andar - Sala 1401)</p>
                  <p>Jardim Shangri-Lá, Londrina/PR CEP 86070-545</p>
               </div>
               {/* Filial */}
               <div>
                  <h6>Filial</h6>
                  <p>R. Monza, 226</p>
                  <p>Sala 704</p>
                  <p>Passa Vinte, Palhoça/SC</p>
                  <p>CEP 88132-147</p>
               </div>
               {/* Cornélio Procópio/PR */}
               <div>
                  <h6>Cornélio Procópio/PR</h6>
                  <p>Av. Ismael Reghin</p>
                  <p>Quadra 16 - Lote 41</p>
                  <p>Residencial Ivany Paiva Gatti</p>
                  <p>CEP 86300-000</p>
               </div>
               {/* Tijucas/SC */}
               <div>
                  <h6>Tijucas/SC</h6>
                  <p>Loja de Vendas Tijucas</p>
                  <p>(Av José Manoel Reis 05 Bairro Areias)</p>
                  <p>Plantão - Ilha di Capri (Rua 13 de Maio 2746 - Bairro Areias)</p>
               </div>
               {/* Itapema/SC */}
               <div>
                  <h6>Itapema/SC</h6>
                  <p>Plantão de vendas</p>
                  <p>Rua 700, N° 812</p>
                  <p>Bairro Casa Branca</p>
               </div>
            </div>
         </Container>
      </footer>
   );
};

export default Footer;
