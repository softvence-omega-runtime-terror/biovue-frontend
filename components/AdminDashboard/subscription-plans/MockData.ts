export interface SubscriptionPlan {
  id: string;
  name: string;
  type: "Individual" | "Professional";
  billingCycle: "Monthly" | "Yearly" | "Annual";
  price: number;
  status: "Active" | "Inactive";
  createdDate: string;
  users: number;
  features: {
    aiProjections: boolean;
    aiHealthSuggestions: boolean;
    deviceSync: boolean;
    prioritySupport: boolean;
  };
  projectionsPerMonth: number;
  isActive: boolean;
}

export const mockPlans: SubscriptionPlan[] = [
  {
    id: "1",
    name: "Free Trial",
    type: "Individual",
    billingCycle: "Monthly",
    price: 0,
    status: "Active",
    createdDate: "2023-10-12",
    users: 1250,
    features: {
      aiProjections: false,
      aiHealthSuggestions: false,
      deviceSync: false,
      prioritySupport: false,
    },
    projectionsPerMonth: 0,
    isActive: true,
  },
  {
    id: "2",
    name: "Plus",
    type: "Individual",
    billingCycle: "Monthly",
    price: 24,
    status: "Active",
    createdDate: "2023-10-12",
    users: 850,
    features: {
      aiProjections: true,
      aiHealthSuggestions: true,
      deviceSync: true,
      prioritySupport: false,
    },
    projectionsPerMonth: 100,
    isActive: true,
  },
  {
    id: "3",
    name: "Premium",
    type: "Individual",
    billingCycle: "Monthly",
    price: 280,
    status: "Active",
    createdDate: "2023-10-12",
    users: 420,
    features: {
      aiProjections: true,
      aiHealthSuggestions: true,
      deviceSync: true,
      prioritySupport: true,
    },
    projectionsPerMonth: 250,
    isActive: true,
  },
  {
    id: "4",
    name: "Trainer Pro",
    type: "Professional",
    billingCycle: "Annual",
    price: 89,
    status: "Active",
    createdDate: "2023-10-12",
    users: 180,
    features: {
      aiProjections: true,
      aiHealthSuggestions: true,
      deviceSync: true,
      prioritySupport: true,
    },
    projectionsPerMonth: 500,
    isActive: true,
  },
];
