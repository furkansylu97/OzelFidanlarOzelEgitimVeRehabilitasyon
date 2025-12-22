import type { ReactNode } from "react";

interface Container {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: Container) => {
  return (
    <div className={`container flex w-full px-20 ${className}`}>{children}</div>
  );
};

export default Container;
