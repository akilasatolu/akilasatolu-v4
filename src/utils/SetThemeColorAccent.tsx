import { useAtomValue } from 'jotai';
import { themeColorAccentAtom } from '../assets/jotai';
import { useEffect } from 'react';

export const SetThemeColorAccent = () => {
  const colorAccent = useAtomValue(themeColorAccentAtom);
  useEffect(() => {
    document.documentElement.setAttribute('data-color', colorAccent);
  }, [colorAccent]);
  return null;
};