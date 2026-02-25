export interface ActionCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export interface Client {
  id: number;
  name: string;
  goal: string;
  projectionUsed: string;
  status: "on-track" | "need-attention" | "inactive";
  activity: string;
}

export const clients: Client[] = [
  {
    id: 1,
    name: "Alex Rivera",
    goal: "Fat loss",
    projectionUsed: "3/10",
    status: "need-attention",
    activity: "No log in 3days",
  },
  {
    id: 2,
    name: "Sarah Chen",
    goal: "Muscle gain",
    projectionUsed: "4/20",
    status: "need-attention",
    activity: "Logged in 2 hrs ago",
  },
  {
    id: 3,
    name: "Jordan Smith",
    goal: "General wellness",
    projectionUsed: "4/20",
    status: "need-attention",
    activity: "Missed check-in",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    goal: "Mobility",
    projectionUsed: "3/10",
    status: "on-track",
    activity: "No log in 3days",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    goal: "Stress reduction",
    projectionUsed: "3/10",
    status: "on-track",
    activity: "Logged today",
  },
  {
    id: 6,
    name: "Elena Rodriguez",
    goal: "Performance",
    projectionUsed: "3/10",
    status: "inactive",
    activity: "No log in 3days",
  },
  {
    id: 7,
    name: "Elena Rodriguez",
    goal: "Mobility",
    projectionUsed: "3/10",
    status: "need-attention",
    activity: "No log in 3days",
  },
  {
    id: 8,
    name: "Elena Rodriguez",
    goal: "Fat loss",
    projectionUsed: "3/10",
    status: "on-track",
    activity: "Logged in 2 hrs ago",
  },
  {
    id: 9,
    name: "Elena Rodriguez",
    goal: "Mobility",
    projectionUsed: "3/10",
    status: "inactive",
    activity: "No activity 14 days",
  },
];

export interface Activity {
  id: number;
  description: string;
  timeAgo: string;
}

export const activities: Activity[] = [
  {
    id: 1,
    description: "Alex logged sleep data",
    timeAgo: "10 mins",
  },
  {
    id: 2,
    description: "Maria completed weekly goal",
    timeAgo: "20 mins",
  },
  {
    id: 3,
    description: "You updated goals for John",
    timeAgo: "1 day",
  },
  {
    id: 4,
    description: "Sarah posted a progress photo",
    timeAgo: "4 hours",
  },
];

export interface StatCard {
  icon: React.ReactNode;
  number: string | number;
  label: string;
  description: string;
}
