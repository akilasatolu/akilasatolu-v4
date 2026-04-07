export type AllLangAllData = {
  en?: AllData;
//   ja?: AllData;
//   kr?: AllData;
};

export type AllData = {
  home?: HomeData;
  photos?: PhotosData;
  goals?: GoalsData;
};

export type HomeData = {
  "1-1": string;
  "1-2": string;
  "1-2-1": string;
  "1-3": string;
  "2-1": string;
  "2-2": string;
  "2-2-1": string;
  "2-3": string;
  "3-1": string;
  "4-1": string;
  "4-2": string;
  "4-2-1": string;
  "4-3": string;
  "4-4": string;
  "4-4-1": string;
  "4-5": string;
  "5-1": string;
};

export type PhotosData = PhotoData[];
export type PhotoData = {
  photo: string;
  text: string;
};

export type GoalsData = {
  year: string;
  goals: {
    progress: number;
    goal: string;
  }[];
}[];
