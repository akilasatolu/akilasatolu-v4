import React from 'react';

type IconListProps = {
  children: React.ReactNode;
  style?: string;
}

export const IconList = (props: IconListProps) =>{
  const childrenArray = React.Children.toArray(props.children);
  return (
    childrenArray.length > 0 && 
    <ul className={`flex flex-wrap items-center gap-3 ${props.style}`}>
      {childrenArray.map((child, index) => (
        <li key={index}>
          {child}
        </li>
      ))}
    </ul>
  );
};