import Container from "@/components/layout/Container";
import SectionIntro from "@/components/shared/SectionIntro";
import Image from "next/image";

const PoliticaDeCookies = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image width={1920} height={352} src="/img/banners/politica-privacidade.webp" alt="Foto do banner da página de política de privadade" />
         <Container className="py-25">
            <SectionIntro
               className="items-start! mb-2!"
               titulo="Política de Cookies"
               descricao="Utilizamos cookies para melhorar o desempenho e a sua experiência como usuário do nosso site."
            />
            {/* Conteúdo */}
            <div className="mt-12">
               <div className="space-y-8 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-4 text-xl">
                  {/* O que são cookies? */}
                  <section>
                     <h2>O que são cookies?</h2>
                     <p>
                        Os cookies são pequenos arquivos de computador ou pacotes de dados enviados por um site, através de um navegador de
                        internet (browser). Usamos cookies para aprender como você interage com o nosso conteúdo e para melhorar sua experiência
                        ao visitar o nosso website. Por exemplo, alguns cookies lembram o seu idioma ou preferências para que você não tenha que
                        efetuar estas escolhas repetidamente sempre que visitar um dos nossos websites.
                     </p>
                     <p>
                        Os cookies retêm apenas informação relacionada com as suas preferências. A qualquer momento o usuário pode, através do
                        seu navegador de internet (browser) decidir ser notificado sobre a recepção de cookies, bem como bloquear a respectiva
                        entrada no seu sistema.
                     </p>
                  </section>

                  {/* Para que servem os cookies? */}
                  <section>
                     <h2>Para que servem os cookies?</h2>
                     <p>
                        Os cookies são usados para ajudar a determinar a utilidade, interesse e o número de utilizações dos sites, permitindo uma
                        navegação mais rápida e eficiente, eliminando a necessidade de inserir repetidas vezes, as mesmas informações.
                     </p>
                  </section>
                  {/* Tipos de Cookies */}
                  <section>
                     <h2>Tipos de Cookies</h2>
                     <div className="space-y-6 mt-4 [&_h3]:font-bold [&_h3]:text-lg [&_h3]:mb-1">
                        <div>
                           <h3>Cookies Essenciais</h3>
                           <p>
                              Alguns cookies são essenciais para acessar as áreas específicas do nosso website. Permitem a navegação no site e a
                              utilização das suas aplicações. Sem estes cookies, os serviços que o exijam não podem ser prestados.
                           </p>
                        </div>
                        <div>
                           <h3>Cookies Analíticos</h3>
                           <p>
                              Utilizamos estes cookies para analisar a forma como os usuários usam o nosso website e monitorar a performance
                              deste. Estes cookies são utilizados apenas para efeitos de criação e análise estatística, sem recolher informação
                              de caráter pessoal.
                           </p>
                        </div>
                        <div>
                           <h3>Cookies de Funcionalidade</h3>
                           <p>
                              Utilizamos cookies de funcionalidade para nos permitir relembrar as preferências do usuário e fornecer serviços
                              avançados. Guardamos as preferências do usuário de forma que não seja necessário voltar a configurar o site cada
                              vez que o visitar.
                           </p>
                        </div>
                        <div>
                           <h3>Cookies de Sessão</h3>
                           <p>
                              São temporários, permanecem nos cookies do seu navegador até sair do site. A informação obtida permite identificar
                              problemas e fornecer uma melhor experiência de navegação.
                           </p>
                        </div>
                        <div>
                           <h3>Cookies Permanentes</h3>
                           <p>
                              Ficam armazenados ao nível do navegador nos seus dispositivos de acesso e são utilizados sempre que o usuário faz
                              uma nova visita ao site. São utilizados para direcionar a navegação de acordo com os interesses do usuário.
                           </p>
                        </div>
                     </div>
                  </section>
                  {/* Como Gerenciar Cookies? */}
                  <section>
                     <h2>Como Gerenciar Cookies?</h2>
                     <p>
                        Todos os browsers permitem ao usuário aceitar, recusar ou apagar cookies. Depois de autorizar o uso de cookies, o usuário
                        pode sempre desativar parte ou a totalidade dos nossos cookies. É importante ressaltar que desativar o uso de cookies
                        pode impedir que alguns serviços do nosso website funcionem corretamente, afetando a navegação.
                     </p>
                  </section>
               </div>
            </div>
         </Container>
      </div>
   );
};
export default PoliticaDeCookies;
