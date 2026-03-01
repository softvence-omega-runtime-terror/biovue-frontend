import { ClientDetails } from "@/components/TrainerDashboard/overview/data";

export const clientDetailsMock: ClientDetails = {
  id: 1,
  name: "Alex Rivera",
  goal: "Fat loss",
  projectionUsed: "3/10",
  status: "need-attention",
  activity: "No log in 3days",

  connectedDate: "Connected since Jan 12, 2024",

  primaryGoal: {
    title: "Fat Loss",
    subtitle: "Lose 10 lbs in 12 weeks",
  },

  currentTrend: {
    status: "Downward",
    description: "Weight decreasing steadily",
  },

  lastActivity: {
    status: "Inactive",
    description: "No activity in last 3 days",
  },

  consistencyScore: {
    score: 76,
    description: "Good adherence overall",
  },

  projectionUsage: {
    used: 3,
    total: 10,
    nextResetDays: 12,
    lastProjectionDaysAgo: 2,
  },

  healthHabitOverview: {
    weight: { value: 82, unit: "kg", targetApplied: true },
    nutritionQuality: { value: 7, targetApplied: true },
    activity: { steps: 6500 },
    sleep: { hours: 7, minutes: 30, targetApplied: true },
    stress: "Medium",
    hydration: { value: 2.5, unit: "L" },
  },

  coachSetGoals: {
    targetWeight: 75,
    weeklyWorkoutGoal: 4,
    dailyStepGoal: 8000,
    sleepTargetHours: 8,
  },

  nextCheckIn: {
    day: "Monday",
    date: "Mar 4",
    time: "10:00 AM",
    timezone: "GMT+6",
  },

  compliance: {
    score: 82,
    description: "Client is mostly compliant",
  },

  currentWeight: 82,
  targetWeight: 75,
  bmi: 24.5,
  measurements: { chest: 98, waist: 84, hips: 100 },
  workouts: { weekly: 3, goal: 4 },
  waterIntake: { current: 2, goal: 3, unit: "L" },
  healthMetrics: {
    startWeight: 90,
    currentWeight: 82,
    weeklyWeightLoss: 0.6,
  },
  coachNotes: [],
  progressGoals: [],
};
