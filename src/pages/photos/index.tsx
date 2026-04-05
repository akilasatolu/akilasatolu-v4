import { useMemo } from "react";
import { CmnInner } from "../../templates/CmnInner";
import { useAtomValue } from 'jotai';
import { allDataAtom } from '../../assets/jotai';
import type { PhotosData } from '../../assets/types';
import { Gallery } from "../../organisms/Gallery";

export const Photos = () => {
  const data: PhotosData | undefined = useAtomValue(allDataAtom)?.photos;
  const reversedData = useMemo(() => (data ? [...data].reverse() : []), [data]);

  return (
    <>
      {reversedData && 
        <CmnInner>
          <Gallery data={reversedData} />
        </CmnInner>
      }
    </>
  )
}