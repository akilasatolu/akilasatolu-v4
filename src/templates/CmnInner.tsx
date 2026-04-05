import type{ ReactNode } from "react";

type CmnInnerProps = {
  children: ReactNode;
  className?: string;
};

export const CmnInner = (props: CmnInnerProps) => {
  return (
    <main className="w-full pl-4 pr-4">
      <div className="max-w-xl p-6 flex justify-start mx-auto rounded-2xl neu">
          { props.children }
      </div>
    </main>
  );
};