import { Title, TitleDescription } from "../layout/Typography";
interface ISectionIntro {
   titulo: string;
   descricao?: string;
   className?: string;
}
const SectionIntro = ({ titulo, descricao, className }: ISectionIntro) => {
   return (
      <div className={`flex flex-col justify-center items-center gap-2.5 mb-8 sm:mb-12 md:mb-18 ${className}`}>
         <hr className="bg-theme2 w-20 sm:w-26 h-1.5 sm:h-3 border-theme2" />
         <Title>{titulo}</Title>
         <TitleDescription>{descricao}</TitleDescription>
      </div>
   );
};
export default SectionIntro;
