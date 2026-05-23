import { ReactNode } from "react";

const Btn = ({ children, className, type }: { children: ReactNode; className?: string; type?: "submit" | "reset" | "button" }) => {
   return (
      <button
         className={`bg-theme1 text-white font-medium text-lg px-7 sm:px-10 py-3 sm:py-4 cursor-pointer transition hover:bg-white hover:text-theme1 border border-theme1 ${className}`}
         type={type || "button"}
      >
         {children}
      </button>
   );
};
export default Btn;
