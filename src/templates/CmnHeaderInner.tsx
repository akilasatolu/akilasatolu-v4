import type{ ReactNode } from "react";

type CmnHeaderInnerProps = {
  children: ReactNode;
};

export const CmnHeaderInner = (props: CmnHeaderInnerProps) =>{
  return (
    <header className="w-full pl-4 pr-4">
        <div className="max-w-xl mt-16 mb-6 mx-auto flex justify-start">
            { props.children }
        </div>
    </header>
  );
};