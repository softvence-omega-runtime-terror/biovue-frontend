export interface Banner {
  id: number;
  title: string;
  preview: string;
  type: "EXTERNAL ADVERTISER" | "INTERNAL FALLBACK";
  placement: string[];
  scheduleFrom: string;
  scheduleTo: string;
  status: "ACTIVE" | "INACTIVE" | "EXPIRED";
  isEnabled: boolean;
}

export const MOCK_BANNERS: Banner[] = [
  {
    id: 1,
    title: "Spring Detox Promotion",
    preview: "/images/admindashboard/banner/banner1.png",
    type: "EXTERNAL ADVERTISER",
    placement: ["Home Page"],
    scheduleFrom: "01/03/2024",
    scheduleTo: "31/05/2024",
    status: "ACTIVE",
    isEnabled: true,
  },
  {
    id: 2,
    title: "New Member Welcome Kit",
    preview: "/images/admindashboard/banner/banner2.png",
    type: "INTERNAL FALLBACK",
    placement: ["Home Page"],
    scheduleFrom: "01/03/2024",
    scheduleTo: "31/05/2024",
    status: "INACTIVE",
    isEnabled: false,
  },
  {
    id: 3,
    title: "Winter Yoga Retreat",
    preview: "/images/admindashboard/banner/banner3.png",
    type: "EXTERNAL ADVERTISER",
    placement: ["Home Page", "Free Dashboard"],
    scheduleFrom: "01/03/2024",
    scheduleTo: "31/05/2024",
    status: "EXPIRED",
    isEnabled: false,
  },
  {
    id: 4,
    title: "Maintenance Update Alert",
    preview: "/images/admindashboard/banner/banner4.png",
    type: "INTERNAL FALLBACK",
    placement: ["Free Dashboard"],
    scheduleFrom: "01/03/2024",
    scheduleTo: "31/05/2024",
    status: "INACTIVE",
    isEnabled: false,
  },
];
