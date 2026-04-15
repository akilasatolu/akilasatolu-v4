export type Lang = "en" | "ja" | "kr";

export type Mode = "light" | "dark";

export type AllLangAllData = {
  en?: AllData;
  ja?: AllData;
  kr?: AllData;
  cms?: PhotosData;
};

export type AllData = {
  home?: HomeData;
  experience?: ExperienceData;
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

export type ExperienceData = {
  pjTitle: string;
  pjDescription: string;
  pjPeriod: string[];
  pjTechList: string[];
}[];

export type PhotosData = PhotoData[];
export type PhotoData = {
  photo: {
    url: string;
  };
  text: string;
};

export type GoalsData = {
  title: string[];
  goals: {
    progress: number;
    goal: string;
  }[];
};
