import { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  styles?: string;
};

export const Accordion = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(props.isOpen || false);

  return (
    <div className={`${props?.styles}`}>
      <button
        className="w-full p-4 flex justify-between items-center rounded-2xl neu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-bold min-w-0 break-words">{props.title}</span>
        <span
          className={`block w-3 h-3 border-r-2 border-b-2 
          [border-color:var(--color-accent-blue)]
          transform transition-transform duration-300 shrink-0 ml-2
          ${isOpen ? "-rotate-135 translate-y-1" : "rotate-45 -translate-y-1"}`}
        />
      </button>

      <div
        className={`
          grid transition-all duration-300
          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="overflow-hidden">
          <div
            className="
              mt-3 p-4 rounded-2xl
              shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
            "
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};