import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import Btn from "../shared/Btn";

const Footer = () => {
   return (
      <footer>
         <Container>
            {/* Primeira linha */}
            <div className="grid grid-cols-3">
               {/* Coluna 1 */}
               <div>
                  <Image width={170} height={64} src="/img/logo.png" alt="Logotipo do site" />
                  <div className="flex flex-col gap-1 mt-5">
                     <Link href="#">Quem somos</Link>
                     <Link href="#">Missão e valores</Link>
                  </div>
               </div>
               {/* Coluna 2 */}
               <div>
                  <p>Institucional</p>
                  <nav>
                     <Link href="#">Infraestrutura</Link>
                     <Link href="#">Clientes</Link>
                     <Link href="#">Contato</Link>
                     <Link href="#">Política de Privacidade</Link>
                  </nav>
               </div>
               {/* Coluna 3 */}
               <div>
                  <Link href="#">Empreendimentos</Link>
                  <Link href="#">Depoimentos</Link>
                  <Link href="#">Missão e valores</Link>
                  <Link href="#">
                     <Btn className="px-2! py-2!">Fale conosco</Btn>
                  </Link>
               </div>
            </div>
            {/* Barra azul */}
            <div className="grid grid-cols-3 *:h-44 *:pt-6">
               <Link href="#">
                  <p>BLOG</p>
               </Link>
               <Link href="#">
                  <p>WHATSAPP</p>
               </Link>
               <Link href="#">
                  <p>
                     LIGAMOS <br />
                     <span>PARA VOCÊ</span>
                  </p>
               </Link>
            </div>
            {/* Redes sociais */}
            <div>
               <p>Redes Sociais:</p>
               <div>
                  <Image width={50} height={50} src="/icons/social/facebook.webp" alt={`Ícone da rede social: Facebook`} />
                  <Image width={50} height={50} src="/icons/social/instagram.webp" alt={`Ícone da rede social: Instagram`} />
                  <Image width={50} height={50} src="/icons/social/youtube.webp" alt={`Ícone da rede social: Youtube`} />
               </div>
            </div>
            {/* Última linha */}
            <div>
               Quadra 16 - Lote 41 Residencial Ivany Paiva Gatti CEP 86300-000 Tijucas/SC Loja de Vendas Tijucas (Av José Manoel Reis 05 Bairro
               Areias) Plantão - Ilha di Capri (Rua 13 de Maio 2746 - Bairro Areias) Itapema/SC Plantão de vendas Rua 700, N° 812 Bairro Casa
               Branca
               <div>
                  <div>
                     <h6>Central de Vendas</h6>
                     <p>47 9 9152-0164</p>
                  </div>
                  <div>
                     <h6>Assistência Técnica e Administração</h6>
                     <p>48 9 9125-3213</p>
                  </div>
               </div>
               <div>
                  <h6>Matriz</h6>
                  <p>Av. Tiradentes, 501 Torre 1 (14º Andar - Sala 1401)</p>
                  <p>Jardim Shangri-Lá, Londrina/PR CEP 86070-545</p>
               </div>
               <div>
                  <h6>Filial</h6>
                  <p>R. Monza, 226</p>
                  <p>Sala 704</p>
                  <p>Passa Vinte, Palhoça/SC</p>
                  <p>CEP 88132-147</p>
               </div>
               <div>
                  <h6>Cornélio Procópio/PR</h6>
                  <p>Av. Ismael Reghin</p>
                  <p>Quadra 16 - Lote 41</p>
                  <p>Residencial Ivany Paiva Gatti</p>
                  <p>CEP 86300-000</p>
               </div>
               <div>
                  <h6>Tijucas/SC</h6>
                  <p>Loja de Vendas Tijucas</p>
                  <p>(Av José Manoel Reis 05 Bairro Areias)</p>
                  <p>Plantão - Ilha di Capri (Rua 13 de Maio 2746 - Bairro Areias)</p>
               </div>
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
