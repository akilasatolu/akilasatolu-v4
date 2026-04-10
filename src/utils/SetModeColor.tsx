import { useAtomValue } from 'jotai';
import { modeColorAtom } from '../assets/jotai';
import { useEffect } from 'react';

export const SetModeColor = () => {
  const mode = useAtomValue(modeColorAtom);
  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);
  return null;
};