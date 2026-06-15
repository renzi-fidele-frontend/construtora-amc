interface ISectionIntro {
   titulo: string;
   descricao?: string;
   className?: string;
   heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const SectionIntro = ({ titulo, descricao, className, heading }: ISectionIntro) => {
   const headingStyle = `font-bold text-3xl sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]`;
   function analisarHeading(heading: ISectionIntro["heading"]) {
      switch (heading) {
         case "h1":
            return <h1 className={headingStyle}>{titulo}</h1>;
         case "h2":
            return <h2 className={headingStyle}>{titulo}</h2>;
         case "h3":
            return <h3 className={headingStyle}>{titulo}</h3>;
         case "h4":
            return <h4 className={headingStyle}>{titulo}</h4>;
         case "h5":
            return <h5 className={headingStyle}>{titulo}</h5>;
         case "h6":
            return <h6 className={headingStyle}>{titulo}</h6>;
         default:
            return <h2 className={headingStyle}>{titulo}</h2>;
      }
   }

   return (
      <div className={`flex flex-col justify-center items-center gap-2.5 mb-8 sm:mb-12 md:mb-18 ${className}`}>
         <hr className="bg-theme2 w-20 sm:w-26 h-1.5 sm:h-3 border-theme2" />
         {analisarHeading(heading || "h2")}
         <p className={`font-normal sm:text-[20px]`}>{descricao}</p>
      </div>
   );
};
export default SectionIntro;
