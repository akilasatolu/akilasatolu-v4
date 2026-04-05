import { useSetAtom } from 'jotai';
import { languageAtom } from '../assets/jotai';
import { useEffect } from 'react';
import { GetLS } from './UseLocalStorage';

export const SetUserSettingInit = () => {
  const setLang = useSetAtom(languageAtom);
  const lang = GetLS('lang');
  useEffect(() => {
    lang && setLang(lang);
  }, []);
  return null;
};