import { useSetAtom, useAtomValue } from 'jotai';
import { allDataAtom, languageAtom } from '../assets/jotai';
import { useEffect, useRef } from 'react';
import type { AllLangAllData } from '../assets/types';

export const SetAllData = () => {
  const setAllData = useSetAtom(allDataAtom);
  const lang: string = useAtomValue(languageAtom);
  const dataRef = useRef<AllLangAllData>({});
  const fetchData = async () => {
    try {
      const res = await fetch('/akilasatolu.json');
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

      const data: AllLangAllData = await res.json();
      dataRef.current = data;
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    if (dataRef.current && Object.keys(dataRef.current).length === 0) {
      fetchData().then(()=>{
        setAllData(dataRef.current[lang as keyof typeof dataRef.current] || dataRef.current.en || {});
      });
    } else {
        setAllData(dataRef.current[lang as keyof typeof dataRef.current] || dataRef.current.en || {});
    }
  }, [dataRef, lang]);
  return null;
};