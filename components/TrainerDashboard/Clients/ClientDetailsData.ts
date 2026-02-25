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

export const clientDetailsData: Record<string, ClientDetails> = {
  "1": {
    ...clients.find((c) => c.id === 1)!,
    connectedDate: "Connected since",
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
};
