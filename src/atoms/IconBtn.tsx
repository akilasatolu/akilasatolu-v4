import type{ ReactNode } from "react";
import { Link } from 'react-router-dom';
import { ScrollToTop } from "../utils/ScrollToTop";
import { pageInfo } from "../assets/const";

type BtnProps = {
  children: ReactNode;
  type: "button";
  onClick?: () => void;
  styles?: string;
};

type AnchorProps = {
  children: ReactNode;
  type: "a";
  href: string;
  internal?: boolean;
  styles?: string;
};

type IconBtnProps = BtnProps | AnchorProps;

export const IconBtn = (props: IconBtnProps) => {
  const iconBtnCss = "w-12 h-12 rounded-full flex items-center justify-center";
  if (props.type === "a") {
    if (props.internal) {
        return (
            <Link to={(pageInfo[props.href]?.path ?? pageInfo.home.path)} className={`${iconBtnCss} neu ${props.styles}`} onClick={ScrollToTop}>
                {props.children}
            </Link>
        );
    }
    return (
        <a className={`${iconBtnCss} neu ${props.styles}`} href={props.href} target="_blank" rel="noopener noreferrer">
            {props.children}
        </a>
    );
  } else if (props.type === "button") {
    return (
      <button className={`${iconBtnCss} neu ${props.styles}`} onClick={props.onClick}>
        {props.children}
      </button>
    );
  } else {
    return null;
  }
};
