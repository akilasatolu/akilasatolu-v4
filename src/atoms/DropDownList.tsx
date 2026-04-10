import React from 'react';

type DropDownListProps = {
  children: React.ReactNode;
  styles?: string;
};

export const DropDownList = (props: DropDownListProps) =>{
  const childrenArray = React.Children.toArray(props.children);
  return (
    childrenArray.length > 0 && 
    <ul className={`${props.styles} space-y-3 flex flex-col absolute top-full mt-1 z-10 border border-[var(--border-color)] rounded-md p-1 bg-[var(--bg-color)]`}>
      {childrenArray.map((child, index) => (
        <li key={index}>
          {child}
        </li>
      ))}
    </ul>
  );
};