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
    { label: "Overview", icon: LayoutGrid, href: "/trainer/overview" },
    { label: "Clients", icon: Users, href: "/trainer/clients" },
    { label: "Programs", icon: FileText, href: "/trainer/programs" },
    { label: "Messages", icon: Mail, href: "/trainer/messages" },
    { label: "Calendar", icon: Calendar, href: "/trainer/calendar" },
    { label: "Settings", icon: Settings, href: "/trainer/settings" },
  ],

  admin: [
    { label: "Overview", icon: LayoutGrid, href: "/admin/overview" },
    { label: "Users", icon: Users, href: "/admin/users" },
    { label: "Subscription Plans", icon: CreditCard, href: "/admin/plans" },
    { label: "Reports", icon: FileText, href: "/admin/reports" },
    { label: "Banner Management", icon: Image, href: "/admin/banners" },
    { label: "Settings", icon: Settings, href: "/admin/settings" },
  ],
};
