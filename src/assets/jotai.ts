import { atom } from 'jotai';
import type { AllData, Lang, Mode } from './types';

export const allDataAtom = atom<AllData>({});
export const languageAtom = atom<Lang>('en');
export const modeColorAtom = atom<Mode>('light');
export const themeColorAtom = atom<string>('blue');
export const isLoadingAtom = atom<boolean>(true);
