import { useMemo } from "react";
import type { PhotosData } from '../assets/types';
import { InstaxCard } from "../molecules/InstaxCard";

type GalleryProps = {
  data: PhotosData;
};

const getRandomRotate = () => Math.random() * 4 - 2;

export const Gallery = (props: GalleryProps) => {
  const { data } = props;
  const rotations = useMemo(() => data.map(() => getRandomRotate()), [data]);

  return (
    <div className="grid max-[375px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 gap-6">
        {data.map((photo, index) => (
            <InstaxCard key={index} data={photo} rotation={rotations[index]} />
        ))}
    </div>
  );
};