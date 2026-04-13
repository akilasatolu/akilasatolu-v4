import { useSetAtom, useAtomValue } from 'jotai';
import { allDataAtom, languageAtom } from '../assets/jotai';
import { useEffect, useRef } from 'react';
import type { AllLangAllData, PhotosData, Lang } from '../assets/types';

const API_BASE = import.meta.env.VITE_API_BASE || "";

export const SetAllData = () => {
  const setAllData = useSetAtom(allDataAtom);
  const lang: Lang = useAtomValue(languageAtom);
  const dataRef = useRef<AllLangAllData>({});
  const fetchData = async () => {
    try {
      const [localRes, cmsRes] = await Promise.all([
        fetch('/akilasatolu.json'),
        fetch(`${API_BASE}/api/microcms`)
      ]);
      if (!localRes.ok) throw new Error(`HTTP error: ${localRes.status} : data json not found`);
      if (!cmsRes.ok) throw new Error(`HTTP error: ${cmsRes.status} : photos json not found`);
      const localData: AllLangAllData = await localRes.json();
      const cmsData:{contents: PhotosData} = await cmsRes.json();
      dataRef.current = { ...localData, cms: cmsData.contents };
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    const applyData = () => {
      const cmsPhotos = dataRef.current?.cms;
      const langData = dataRef.current ? (dataRef.current[lang] ?? dataRef.current.en) : undefined;
      const base = langData ?? {};
      setAllData({ ...base, photos: cmsPhotos });
    };

    if (dataRef.current && Object.keys(dataRef.current).length === 0) {
      fetchData().then(() => {
        applyData();
      });
    } else {
      applyData();
    }
  }, [lang, setAllData]);
  return null;
};