"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutGrid, 
  Package, 
  PlusSquare, 
  Settings, 
  LogOut,
  Menu,
  Bell,
  X,
  User,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const MENU_ITEMS = [
  { icon: LayoutGrid, label: "Dashboard", href: "/supplier-dashboard" },
  { icon: Package, label: "My Products", href: "/supplier-dashboard/products" },
  { icon: PlusSquare, label: "Add New Product", href: "/supplier-dashboard/add-product" },
  { icon: Settings, label: "Settings", href: "/supplier-dashboard/settings" },
];

export default function SupplierDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname === "/supplier-dashboard") return "Dashboard";
    if (pathname === "/supplier-dashboard/products") return "My Products";
    if (pathname === "/supplier-dashboard/add-product") return "Add New Product";
    if (pathname === "/supplier-dashboard/settings") return "Settings";
    return "Dashboard";
  };

  return (
    <div className="flex h-screen bg-[#F8FBFA] overflow-hidden">
      {/* Sidebar */}
      <aside className={cn(
        "bg-white border-r border-[#E4EFFF] flex flex-col transition-all duration-300",
        isSidebarOpen ? "w-[300px]" : "w-[80px]"
      )}>
        {/* Sidebar Logo */}
        <div className="h-32 flex items-center px-10">
          <Image
            src="/images/logo.png"
            alt="BioVue Logo"
            width={160}
            height={60}
            className={cn("object-contain", !isSidebarOpen && "hidden")}
            priority
          />
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 px-8 space-y-4">
          {MENU_ITEMS.map((item) => (
            <Link 
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-5 px-6 py-4 rounded-xl transition-all group",
                pathname === item.href 
                  ? "bg-[#E4F0FF] text-[#041228]" 
                  : "text-[#041228] hover:bg-gray-50"
              )}
            >
              <item.icon size={26} strokeWidth={1.2} className="text-[#041228]" />
              {isSidebarOpen && <span className="text-[16px] font-normal leading-[24px] tracking-tight whitespace-nowrap">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-8">
          <div className="h-[1px] bg-gray-100 w-full mb-10" />
          <button className={cn(
            "flex items-center gap-5 w-full px-6 py-4 text-[#041228] hover:bg-gray-50 rounded-xl transition-all group cursor-pointer"
          )}>
            <LogOut size={26} strokeWidth={1.2} className="text-[#041228]" />
            {isSidebarOpen && <span className="text-[20px] font-bold tracking-tight">Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-[#E4EFFF] flex items-center justify-between px-10 shrink-0">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-medium text-[#041228]">{getPageTitle()}</h1>
          </div>

          <div className="flex items-center gap-6">
             <button className="relative p-2.5 text-[#041228] hover:bg-[#F5F5F5] rounded-xl transition-colors cursor-pointer">
                <Bell size={24} strokeWidth={1.5} />
                <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#E54335] rounded-full border-2 border-white"></span>
             </button>
             <div className="flex items-center gap-3 pl-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E4EFFF] shadow-sm">
                   <Image src="/images/avatar.png" alt="Supplier" width={48} height={48} className="object-cover" />
                </div>
             </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
