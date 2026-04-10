import type{ ReactNode } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Btn } from "../atoms/Btn";


type ModalProps = {
  title?: string;
  children: ReactNode;
  onClose: () => void;
};

export const Modal = (props: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-[var(--bg-color)] flex items-center justify-center z-100"
      onClick={props.onClose}
    >
      <div
        className="w-[80%] max-w-xl p-6 flex justify-start flex-col mx-auto rounded-2xl neu space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <Btn type="button" onClick={props.onClose} shape="circle">
          <FontAwesomeIcon icon={faXmark} />
        </Btn>
        <div className="font-bold text-xl leading-relaxed text-center">{props.title}</div>
        {props.children}
      </div>
    </div>
  );
};
