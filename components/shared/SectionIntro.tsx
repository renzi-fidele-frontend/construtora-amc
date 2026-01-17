import Barra from "../layout/Barra";
import { Title, TitleDescription } from "../layout/Typography";
interface ISectionIntro {
   titulo: string;
   descricao: string;
}
const SectionIntro = ({ titulo, descricao }: ISectionIntro) => {
   return (
      <div className="flex flex-col justify-center items-center gap-2.5 mb-18">
         <Barra />
         <Title>{titulo}</Title>
         <TitleDescription>{descricao}</TitleDescription>
      </div>
   );
};
export default SectionIntro;
