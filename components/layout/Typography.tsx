import { ReactNode } from "react";

export const Title = ({ children, className }: { children: ReactNode; className?: string }) => (
   <h2 className={`font-bold text-3xl sm:text-[40px] md:text-[50px] lg:text-[60px] *: ${className}`}>{children}</h2>
);

export const TitleDescription = ({ children, className }: { children: ReactNode; className?: string }) => (
   <p className={`font-normal sm:text-[20px] ${className}`}>{children}</p>
);
