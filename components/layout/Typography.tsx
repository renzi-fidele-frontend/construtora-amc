import { ReactNode } from "react";

export const Title = ({ children, className }: { children: ReactNode; className?: string }) => (
   <h2 className={`font-bold text-[71px] ${className}`}>{children}</h2>
);

export const TitleDescription = ({ children, className }: { children: ReactNode; className?: string }) => (
   <p className={`font-normal text-[20px] ${className}`}>{children}</p>
);
