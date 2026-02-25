// export type ClientDetails = {
//   id: string;
//   name: string;
//   connectedDate: string;
//   goal: string;
//   currentWeight: number;
//   targetWeight: number;
//   bmi: number;
//   measurements: {
//     chest: number;
//     waist: number;
//     hips: number;
//   };
//   workouts: {
//     weekly: number;
//     goal: number;
//   };
//   waterIntake: {
//     current: number;
//     goal: number;
//     unit: string;
//   };
//   healthMetrics: {
//     startWeight: number;
//     currentWeight: number;
//     weeklyWeightLoss: number;
//   };
//   coachNotes: string[];
//   progressGoals: {
//     goal: string;
//     progress: number;
//     target: number;
//     unit: string;
//   }[];
// };

// export const clientDetailsData: Record<string, ClientDetails> = {
//   "1": {
//     id: "1",
//     name: "Joe Evans",
//     connectedDate: "Connected since",
//     goal: "Fat Loss",
//     currentWeight: 85.5,
//     targetWeight: 75,
//     bmi: 28.1,
//     measurements: {
//       chest: 105,
//       waist: 95,
//       hips: 105,
//     },
//     workouts: {
//       weekly: 3,
//       goal: 5,
//     },
//     waterIntake: {
//       current: 2.5,
//       goal: 3,
//       unit: "L",
//     },
//     healthMetrics: {
//       startWeight: 92,
//       currentWeight: 85.5,
//       weeklyWeightLoss: 0.8,
//     },
//     coachNotes: [
//       "Great progress this week! Keep up the consistency with workouts.",
//       "Need to focus more on hydration. Try to drink more water daily.",
//       "Starting to see results in the measurement data. Stay motivated!",
//     ],
//     progressGoals: [
//       { goal: "Weight Loss", progress: 6.5, target: 17, unit: "kg" },
//       { goal: "Waist Reduction", progress: 3, target: 8, unit: "cm" },
//       { goal: "Weekly Workouts", progress: 3, target: 5, unit: "times" },
//     ],
//   },
//   "2": {
//     id: "2",
//     name: "Sarah Johnson",
//     connectedDate: "Connected since",
//     goal: "Muscle Gain",
//     currentWeight: 62.5,
//     targetWeight: 67,
//     bmi: 23.2,
//     measurements: {
//       chest: 92,
//       waist: 70,
//       hips: 95,
//     },
//     workouts: {
//       weekly: 4,
//       goal: 4,
//     },
//     waterIntake: {
//       current: 2.8,
//       goal: 3,
//       unit: "L",
//     },
//     healthMetrics: {
//       startWeight: 60,
//       currentWeight: 62.5,
//       weeklyWeightLoss: 0.3,
//     },
//     coachNotes: [
//       "Excellent form on all exercises! Increase weight next session.",
//       "Protein intake is perfect. Maintain current diet plan.",
//       "Recovery is on track. Getting enough sleep is helping.",
//     ],
//     progressGoals: [
//       { goal: "Muscle Gain", progress: 2.5, target: 5, unit: "kg" },
//       { goal: "Strength Increase", progress: 15, target: 25, unit: "%" },
//       { goal: "Bench Press", progress: 75, target: 90, unit: "kg" },
//     ],
//   },
// };
import { ClientDetails, clients } from "../overview/data";

const defaultDetails = {
  connectedDate: "Connected since",
  currentWeight: 70,
  targetWeight: 65,
  bmi: 24.5,
  measurements: {
    chest: 95,
    waist: 80,
    hips: 95,
  },
  workouts: {
    weekly: 3,
    goal: 4,
  },
  waterIntake: {
    current: 2.0,
    goal: 3,
    unit: "L",
  },
  healthMetrics: {
    startWeight: 75,
    currentWeight: 70,
    weeklyWeightLoss: 0.5,
  },
  coachNotes: ["Maintain consistency.", "Focus on sleep."],
  progressGoals: [
    { goal: "Weight Loss", progress: 5, target: 10, unit: "kg" },
  ],
};

export const clientDetailsData: Record<string, ClientDetails> = {
  "1": {
    ...clients.find((c) => c.id === 1)!,
    connectedDate: "Connected since Jan 2024",
    currentWeight: 85.5,
    targetWeight: 75,
    bmi: 28.1,
    measurements: {
      chest: 105,
      waist: 95,
      hips: 105,
    },
    workouts: {
      weekly: 3,
      goal: 5,
    },
    waterIntake: {
      current: 2.5,
      goal: 3,
      unit: "L",
    },
    healthMetrics: {
      startWeight: 92,
      currentWeight: 85.5,
      weeklyWeightLoss: 0.8,
    },
    coachNotes: ["Great progress this week!", "Focus more on hydration."],
    progressGoals: [
      { goal: "Weight Loss", progress: 6.5, target: 17, unit: "kg" },
    ],
  },
  "2": {
    ...clients.find((c) => c.id === 2)!,
    ...defaultDetails,
    name: "Sarah Chen",
    goal: "Muscle gain",
  },
  "3": {
    ...clients.find((c) => c.id === 3)!,
    ...defaultDetails,
    name: "Jordan Smith",
    goal: "General wellness",
  },
  "4": {
    ...clients.find((c) => c.id === 4)!,
    ...defaultDetails,
    name: "Elena Rodriguez",
  },
  "5": {
    ...clients.find((c) => c.id === 5)!,
    ...defaultDetails,
    name: "Elena Rodriguez",
  },
  "6": {
    ...clients.find((c) => c.id === 6)!,
    ...defaultDetails,
    name: "Elena Rodriguez",
  },
  "7": {
    ...clients.find((c) => c.id === 7)!,
    ...defaultDetails,
    name: "Elena Rodriguez",
  },
  "8": {
    ...clients.find((c) => c.id === 8)!,
    ...defaultDetails,
    name: "Elena Rodriguez",
  },
  "9": {
    ...clients.find((c) => c.id === 9)!,
    ...defaultDetails,
    name: "Elena Rodriguez",
  },
};
