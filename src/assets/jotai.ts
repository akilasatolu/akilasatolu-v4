import { atom } from 'jotai';
import type { AllData } from './types';

export const allDataAtom = atom<AllData>({});
export const languageAtom = atom<string>('en');