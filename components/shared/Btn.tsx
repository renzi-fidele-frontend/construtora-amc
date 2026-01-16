import { ReactNode } from "react";

const Btn = ({ children, className }: { children: ReactNode; className?: string }) => {
   return <button className={`bg-theme1 text-white font-medium text-lg px-10 py-4 cursor-pointer transition hover:bg-white hover:text-theme1 border border-theme1 ${className}`}>{children}</button>;
};
export default Btn;
