import Container from "@/components/layout/Container";
import SectionIntro from "@/components/shared/SectionIntro";
import Image from "next/image";

const PoliticaDePrivacidade = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image
            width={1920}
            height={352}
            src="/img/banners/politica-privacidade.webp"
            alt="Foto do banner da página de política de privadade"
         />
         <Container className="py-25">
            <SectionIntro
               className="items-start! mb-2!"
               titulo="Política de Privacidade"
               descricao="Para saber mais sobre nossos empreendimentos, preencha o formulário que entraremos em contato com você."
            />
            {/* Conteúdo */}
            <div className="mt-12">
               <div className="space-y-8 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-4 text-xl">
                  {/* Coleta de informações */}
                  <section>
                     <h2>1. Coleta de Informações</h2>
                     <p>
                        Coletamos informações pessoais que você voluntariamente nos fornece através de formulários, como nome, e-mail, telefone e
                        endereço para melhor atendimento.
                     </p>
                  </section>
                  {/* Uso das Informações */}
                  <section>
                     <h2>2. Uso das Informações</h2>
                     <p>As informações coletadas são utilizadas para:</p>
                     <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>Responder suas consultas e solicitações</li>
                        <li>Enviar informações sobre empreendimentos</li>
                        <li>Melhorar nossos serviços</li>
                        <li>Comunicações relacionadas a projetos</li>
                     </ul>
                  </section>
                  {/* Proteção de Dados */}
                  <section>
                     <h2>3. Proteção de Dados</h2>
                     <p>
                        Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado,
                        alteração ou destruição.
                     </p>
                  </section>
                  {/* Compartilhamento de Informações */}
                  <section>
                     <h2>4. Compartilhamento de Informações</h2>
                     <p>Não compartilhamos suas informações pessoais com terceiros sem seu consentimento, exceto quando exigido por lei.</p>
                  </section>
                  {/* Cookies */}
                  <section>
                     <h2>5. Cookies</h2>
                     <p>
                        Utilizamos cookies para melhorar sua experiência no site. Você pode desativar cookies nas configurações do seu navegador.
                     </p>
                  </section>
                  {/* Contato */}
                  <section>
                     <h2>6. Contato</h2>
                     <p>
                        Para dúvidas sobre esta política de privacidade, entre em contato conosco através do formulário no site ou pelos dados
                        fornecidos em nossa página de contato.
                     </p>
                  </section>
               </div>
            </div>
         </Container>
      </div>
   );
};
export default PoliticaDePrivacidade;
