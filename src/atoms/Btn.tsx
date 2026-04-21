import type{ ReactNode } from "react";
import { Link } from 'react-router-dom';
import { ScrollToTop } from "../utils/ScrollToTop";
import { pageInfo } from "../assets/const";

type ButtonProps = {
  children: ReactNode;
  type: "button";
  shape: "circle" | "square";
  onClick?: () => void;
  styles?: string;
  label: string;
};

type AnchorProps = {
  children: ReactNode;
  type: "a";
  href: string;
  shape: "circle" | "square";
  internal?: boolean;
  styles?: string;
  label: string;
};

type BtnProps = ButtonProps | AnchorProps;

export const Btn = (props: BtnProps) => {
  const circleBtnCss = "w-12 h-12 rounded-full flex items-center justify-center";
  const squareBtnCss = "w-full p-4 rounded-lg flex items-center justify-center";
  const btnCss = props.shape === "circle" ? circleBtnCss : squareBtnCss;

  if (props.type === "a") {
    if (props.internal) {
        return (
            <Link to={(pageInfo[props.href]?.path ?? pageInfo.home.path)} className={`${btnCss} neu ${props.styles}`} onClick={ScrollToTop} aria-label={props.label}>
                {props.children}
            </Link>
        );
    }
    return (
        <a className={`${btnCss} neu ${props.styles}`} href={props.href} target="_blank" rel="noopener noreferrer">
            {props.children}
        </a>
    );
  } else if (props.type === "button") {
    return (
      <button className={`${btnCss} neu ${props.styles}`} onClick={props.onClick} aria-label={props.label}>
        {props.children}
      </button>
    );
  } else {
    return null;
  }
};
