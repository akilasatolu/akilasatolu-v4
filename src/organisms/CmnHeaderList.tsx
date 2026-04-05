import React from 'react';

type CmnHeaderListProps = {
  children: React.ReactNode;
}

export const CmnHeaderList = (props: CmnHeaderListProps) =>{
  const childrenArray = React.Children.toArray(props.children);
  return (
    childrenArray.length > 0 && 
    <ul className='flex items-center gap-3'>
      {childrenArray.map((child, index) => (
        <li key={index}>
          {child}
        </li>
      ))}
    </ul>
  );
};