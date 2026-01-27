import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionIntro from "@/components/shared/SectionIntro";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Btn from "@/components/shared/Btn";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cidadesPorEstado } from "@/data/data";

const Parceria = () => {
   return (
      <div>
         {/* Banner do topo */}
         <Image width={1914} height={431} src="/img/banners/parceria.jpg" alt="Banner ilustrando a capa da página de empreendimento" />
         {/* Breadcrumb */}
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Institucional", href: "#" },
               { titulo: "Parceria", href: "/institucional/parceria", ativo: true },
            ]}
         />
         <section>
            <Container className="py-25">
               <SectionIntro
                  className="items-start! mb-2!"
                  titulo="INSTITUCIONAL PARCERIA"
                  descricao="O relacionamento da empresa com seus parceiros é essencial. Priorizamos sempre alianças estratégicas que visam gerar ganhos para toda a cadeia de negócios e resultem em mais benefícios para o cliente: produto de qualidade, preços competitivos e excelência na prestação de serviço."
               />
               <form className="grid grid-cols-3 gap-4 [&_input]:border-theme1 mt-10 text-sm">
                  {/* Nome */}
                  <fieldset>
                     <label htmlFor="nome">Nome</label>
                     <Input min={3} name="nome" required />
                  </fieldset>
                  {/* Email */}
                  <fieldset>
                     <label htmlFor="email">E-mail</label>
                     <Input type="email" name="email" required />
                  </fieldset>
                  {/* Telefone */}
                  <fieldset>
                     <label htmlFor="tel">Telefone</label>
                     <Input type="tel" name="tel" required />
                  </fieldset>
                  {/* Estado */}
                  <fieldset>
                     <label htmlFor="estado">Estado</label>
                     <Select>
                        <SelectTrigger className="border-theme1 w-full">
                           <SelectValue placeholder="Selecione o estado" />
                        </SelectTrigger>
                        <SelectContent className="">
                           {cidadesPorEstado.map((cidade, k) => (
                              <SelectItem value={cidade.nome} key={k}>
                                 {cidade.nome}
                              </SelectItem>
                           ))}
                        </SelectContent>
                     </Select>
                  </fieldset>
                  {/* Cidade */}
                  <fieldset>
                     <label htmlFor="cidade">Cidade</label>
                     <Input name="cidade" required />
                  </fieldset>
                  {/* Mensagem */}
                  <fieldset className="col-span-2">
                     <label htmlFor="msg">Mensagem</label>
                     <textarea className="w-full border border-theme1 h-23 p-3" name="" id=""></textarea>
                  </fieldset>
                  {/* Botão */}
                  <div>
                     <Btn>Enviar mensagem</Btn>
                  </div>
               </form>
            </Container>
         </section>
      </div>
   );
};
export default Parceria;
