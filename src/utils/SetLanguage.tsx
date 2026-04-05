import { useAtomValue } from 'jotai';
import { languageAtom } from '../assets/jotai';
import { useEffect } from 'react';

export const SetLanguage = () => {
  const lang = useAtomValue(languageAtom);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
};