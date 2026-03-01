export type PrimaryGoal =
  | "FAT LOSS"
  | "WELLNESS"
  | "MUSCLE GAIN"
  | "PERFORMANCE";

export type Intensity = "Aggressive" | "Light" | "Moderate";

export type Status = "ACTIVE" | "INACTIVE";

export interface Program {
  id: string;
  name: string;
  duration: string;
  primaryGoal: PrimaryGoal;
  intensity: Intensity;
  clients: number;
  status: Status;
  updatedAgo: string;
}

export const programs: Program[] = [
  {
    id: "2147225841",
    name: "12-WEEK FAT LOSS ACCELERATOR",
    duration: "12-WEEK",
    primaryGoal: "FAT LOSS",
    intensity: "Aggressive",
    clients: 6,
    status: "ACTIVE",
    updatedAgo: "3 DAYS AGO",
  },
  {
    id: "2147225842",
    name: "6-WEEK WELLNESS BOOST",
    duration: "6-WEEK",
    primaryGoal: "WELLNESS",
    intensity: "Light",
    clients: 4,
    status: "INACTIVE",
    updatedAgo: "5 DAYS AGO",
  },
  {
    id: "2147225843",
    name: "8-WEEK MUSCLE GAIN PROGRAM",
    duration: "8-WEEK",
    primaryGoal: "MUSCLE GAIN",
    intensity: "Aggressive",
    clients: 10,
    status: "ACTIVE",
    updatedAgo: "2 DAYS AGO",
  },
  {
    id: "2147225844",
    name: "PERFORMANCE TRAINING",
    duration: "10-WEEK",
    primaryGoal: "PERFORMANCE",
    intensity: "Light",
    clients: 5,
    status: "ACTIVE",
    updatedAgo: "1 DAY AGO",
  },
  {
    id: "2147225845",
    name: "WELLNESS & RECOVERY",
    duration: "4-WEEK",
    primaryGoal: "WELLNESS",
    intensity: "Aggressive",
    clients: 3,
    status: "INACTIVE",
    updatedAgo: "7 DAYS AGO",
  },
];
