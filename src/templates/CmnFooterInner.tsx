import type{ ReactNode } from "react";

type CmnFooterInnerProps = {
  children: ReactNode;
};

export const CmnFooterInner = (props: CmnFooterInnerProps) =>{
  return (
    <footer className="w-full pl-4 pr-4">
        <div className="max-w-xl mb-6 mt-6 mx-auto flex justify-center">
            { props.children }
        </div>
    </footer>
  );
};