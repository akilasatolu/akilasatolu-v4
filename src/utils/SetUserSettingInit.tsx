import { useSetAtom } from 'jotai';
import { languageAtom, modeColorAtom, themeColorAtom } from '../assets/jotai';
import { useEffect } from 'react';
import { GetLS } from './UseLocalStorage';

export const SetUserSettingInit = () => {
  const setLang = useSetAtom(languageAtom);
  const setMode = useSetAtom(modeColorAtom);
  const setColor = useSetAtom(themeColorAtom);
  const lang = GetLS('lang');
  const mode = GetLS('mode');
  const color = GetLS('color');
  useEffect(() => {
    lang && setLang(lang);
    mode && setMode(mode);
    color && setColor(color);
  }, []);
  return null;
};