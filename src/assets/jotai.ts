import { atom } from 'jotai';
import type { AllData } from './types';

export const allDataAtom = atom<AllData>({});
export const languageAtom = atom<string>('en');
export const themeColorAtom = atom<string>('light');
export const themeColorAccentAtom = atom<string>('blue');