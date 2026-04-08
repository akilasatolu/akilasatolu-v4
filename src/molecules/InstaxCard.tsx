import { useState } from "react";
import type { PhotoData } from '../assets/types';

type InstaxCardProps = {
  data: PhotoData;
  rotation: number;
};

export const InstaxCard = (props: InstaxCardProps) => {
  const { data, rotation } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
        className={`bg-white p-2 pb-4 shadow-md rounded-sm w-full h-full flex flex-col transition-transform hover:scale-110 max-[375px]:hover:scale-105`}
        style={{ transform: `rotate(${isHovered ? 0 : rotation}deg)` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <div className="w-full flex-1 flex">
            <img className="w-full h-full object-contain" src={`/photos/${data.photo}`} alt={`${data.photo}`} loading="lazy" />
        </div>
        <p className="text-center text-xs mt-4 font-['Comic_Sans_MS',Verdana,Arial,sans-serif]">
            {data.text}
        </p>
    </div>
  );
};
