export type CalendarType = "solar" | "lunar";

export type FocusArea =
  | "overall"
  | "career"
  | "wealth"
  | "relationship"
  | "year-ahead";

export type BirthProfile = {
  nickname?: string;
  gender?: string;
  date?: string;
  time?: string;
  calendar?: CalendarType;
  location?: string;
  focus?: FocusArea;
};

export type BaziPillarLabel = "Year" | "Month" | "Day" | "Hour";

export type BaziPillar = {
  label: BaziPillarLabel;
  stem: string;
  branch: string;
  element: string;
  note: string;
};

export type FiveElementName = "Wood" | "Fire" | "Earth" | "Metal" | "Water";

export type FiveElementScore = {
  name: FiveElementName;
  score: number;
  tone: string;
};

export type BaziChart = {
  profile: BirthProfile;
  displayName: string;
  dayMaster: string;
  pillars: BaziPillar[];
  fiveElements: FiveElementScore[];
  originPreview: string;
  rhythmPreview: string;
  engine: {
    name: string;
    version: string;
    deterministic: boolean;
    realCalculation: boolean;
  };
};
