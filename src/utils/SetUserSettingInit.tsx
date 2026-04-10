import { useSetAtom } from 'jotai';
import { languageAtom, themeColorAtom, themeColorAccentAtom } from '../assets/jotai';
import { useEffect } from 'react';
import { GetLS } from './UseLocalStorage';

export const SetUserSettingInit = () => {
  const setLang = useSetAtom(languageAtom);
  const setTheme = useSetAtom(themeColorAtom);
  const setAccent = useSetAtom(themeColorAccentAtom);
  const lang = GetLS('lang');
  const theme = GetLS('theme');
  const accent = GetLS('accent');
  useEffect(() => {
    lang && setLang(lang);
    theme && setTheme(theme);
    accent && setAccent(accent);
  }, []);
  return null;
};