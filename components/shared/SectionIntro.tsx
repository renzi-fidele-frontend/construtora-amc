interface ISectionIntro {
   titulo: string;
   descricao?: string;
   className?: string;
}
const SectionIntro = ({ titulo, descricao, className }: ISectionIntro) => {
   return (
      <div className={`flex flex-col justify-center items-center gap-2.5 mb-8 sm:mb-12 md:mb-18 ${className}`}>
         <hr className="bg-theme2 w-20 sm:w-26 h-1.5 sm:h-3 border-theme2" />
         <h2 className={`font-bold text-3xl sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]`}>{titulo}</h2>
         <p className={`font-normal sm:text-[20px]`}>{descricao}</p>
      </div>
   );
};
export default SectionIntro;
