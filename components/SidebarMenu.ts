import {
  LayoutGrid,
  TrendingUp,
  Brain,
  Repeat,
  HeartHandshake,
  Mail,
  Settings,
  Users,
  Calendar,
  FileText,
  Image,
  CreditCard,
  LogOut,
} from "lucide-react";

export const SIDEBAR_MENU = {
  user: [
    { label: "Dashboard", icon: LayoutGrid, href: "/dashboard" },
    { label: "Projections", icon: TrendingUp, href: "/projections" },
    { label: "Insights", icon: Brain, href: "/insights" },
    { label: "Habits", icon: Repeat, href: "/habits" },
    { label: "Support", icon: HeartHandshake, href: "/support" },
    { label: "Message", icon: Mail, href: "/messages" },
    { label: "Settings", icon: Settings, href: "/settings" },
  ],

  trainer: [
    {
      label: "Overview",
      icon: LayoutGrid,
      href: "/trainer-dashboard/overview",
    },
    { label: "Clients", icon: Users, href: "/trainer-dashboard/clients" },
    { label: "Programs", icon: FileText, href: "/trainer-dashboard/programs" },
    { label: "Messages", icon: Mail, href: "/trainer-dashboard/messages" },
    { label: "Calendar", icon: Calendar, href: "/trainer-dashboard/calendar" },
    { label: "Settings", icon: Settings, href: "/trainer-dashboard/settings" },
  ],

  admin: [
    { label: "Overview", icon: LayoutGrid, href: "/admin-dashboard/overview" },
    { label: "Users", icon: Users, href: "/admin-dashboard/users" },
    {
      label: "Subscription Plans",
      icon: CreditCard,
      href: "/admin-dashboard/plans",
    },
    { label: "Reports", icon: FileText, href: "/admin-dashboard/reports" },
    {
      label: "Banner Management",
      icon: Image,
      href: "/admin-dashboard/banners",
    },
    { label: "Settings", icon: Settings, href: "/admin-dashboard/settings" },
  ],
};
