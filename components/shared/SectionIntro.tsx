import Barra from "../layout/Barra";
import { Title, TitleDescription } from "../layout/Typography";
interface ISectionIntro {
   titulo: string;
   descricao?: string;
   className?: string;
}
const SectionIntro = ({ titulo, descricao, className }: ISectionIntro) => {
   return (
      <div className={`flex flex-col justify-center items-center gap-2.5 mb-18 ${className}`}>
         <Barra />
         <Title>{titulo}</Title>
         <TitleDescription>{descricao}</TitleDescription>
      </div>
   );
};
export default SectionIntro;
