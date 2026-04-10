import React from 'react';

type BtnListProps = {
  children: React.ReactNode;
  type: "row" | "col";
  style?: string;
}

export const BtnList = (props: BtnListProps) =>{
  const childrenArray = React.Children.toArray(props.children);
  if(props.type === "col"){
    return (
      childrenArray.length > 0 && 
      <ul className={`flex flex-col items-center justify-center space-y-4 ${props.style}`}>
        {childrenArray.map((child, index) => (
          <li key={index} className='w-full'>
            {child}
          </li>
        ))}
      </ul>
    );
  } else if(props.type === "row"){
    return (
      childrenArray.length > 0 && 
      <ul className={`flex flex-wrap items-center gap-4 ${props.style}`}>
        {childrenArray.map((child, index) => (
          <li key={index}>
            {child}
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
};
