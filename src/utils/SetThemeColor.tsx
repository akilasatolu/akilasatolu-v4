import { useAtomValue } from 'jotai';
import { themeColorAtom } from '../assets/jotai';
import { useEffect } from 'react';

export const SetThemeColor = () => {
  const color = useAtomValue(themeColorAtom);
  useEffect(() => {
    document.documentElement.setAttribute('data-color', color);
  }, [color]);
  return null;
};