import type{ ReactNode } from "react";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Btn } from "../atoms/Btn";


type ModalProps = {
  title?: string;
  children: ReactNode;
  onClose: () => void;
};

export const Modal = (props: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    lastFocused.current = document.activeElement as HTMLElement;
    const focusable = modalRef.current?.querySelector<HTMLElement>(
      'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    (focusable || modalRef.current)?.focus();
    const handleKeyDown = (e: KeyboardEvent) => { 
      if (e.key !== "Tab") return;

      const nodes = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      if (!nodes || nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      lastFocused.current?.focus();
      document.removeEventListener("keydown", handleKeyDown);
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
        tabIndex={-1}
        ref={modalRef}
      >
        <Btn type="button" onClick={props.onClose} shape="circle">
          <FontAwesomeIcon icon={faXmark} />
        </Btn>
        {props.title &&
          <div className="font-bold text-xl leading-relaxed text-center">{props.title}</div>
        }
        {props.children}
      </div>
    </div>
  );
};
