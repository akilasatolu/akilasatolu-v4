import { useSetAtom } from 'jotai';
import { languageAtom, modeColorAtom, themeColorAccentAtom } from '../assets/jotai';
import { useEffect } from 'react';
import { GetLS } from './UseLocalStorage';

export const SetUserSettingInit = () => {
  const setLang = useSetAtom(languageAtom);
  const setMode = useSetAtom(modeColorAtom);
  const setAccent = useSetAtom(themeColorAccentAtom);
  const lang = GetLS('lang');
  const mode = GetLS('mode');
  const accent = GetLS('accent');
  useEffect(() => {
    lang && setLang(lang);
    mode && setMode(mode);
    accent && setAccent(accent);
  }, []);
  return null;
};