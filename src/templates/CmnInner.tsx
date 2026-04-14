import type{ ReactNode } from "react";
import { Loading } from "../molecules/Loading";
import { isLoadingAtom } from "../assets/jotai";
import { useAtomValue } from 'jotai';

type CmnInnerProps = {
  children: ReactNode;
  className?: string;
};

export const CmnInner = (props: CmnInnerProps) => {
  const isLoading = useAtomValue(isLoadingAtom);
  return (
    <main className="w-full flex-1 pl-4 pr-4">
      <div className="max-w-xl p-6 flex justify-start flex-col mx-auto rounded-2xl neu">
          { isLoading ? <Loading /> : props.children }
      </div>
    </main>
  );
};