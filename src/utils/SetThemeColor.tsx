import { useAtomValue } from 'jotai';
import { themeColorAtom } from '../assets/jotai';
import { useEffect } from 'react';

export const SetThemeColor = () => {
  const theme = useAtomValue(themeColorAtom);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return null;
};