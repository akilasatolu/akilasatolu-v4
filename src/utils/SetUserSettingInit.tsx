import { useSetAtom } from 'jotai';
import { languageAtom, modeColorAtom, themeColorAtom } from '../assets/jotai';
import { useEffect } from 'react';
import { GetLS } from './UseLocalStorage';
import type { Lang, Mode } from '../assets/types';

export const SetUserSettingInit = () => {
  const setLang = useSetAtom(languageAtom);
  const setMode = useSetAtom(modeColorAtom);
  const setColor = useSetAtom(themeColorAtom);
  const lang = GetLS('lang') as Lang;
  const mode = GetLS('mode') as Mode | null;
  const color = GetLS('color');
  useEffect(() => {
    lang && setLang(lang);
    setMode(mode ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    color && setColor(color);
  }, []);
  return null;
};