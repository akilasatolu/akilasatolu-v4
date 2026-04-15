import { useAtomValue } from 'jotai';
import { modeColorAtom } from '../assets/jotai';
import { useEffect } from 'react';
import type { Mode } from '../assets/types';

export const SetModeColor = () => {
  const mode: Mode = useAtomValue(modeColorAtom);
  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);
  return null;
};