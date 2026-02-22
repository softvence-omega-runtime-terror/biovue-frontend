"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { SIDEBAR_MENU } from "./SidebarMenu";


type Role = "user" | "trainer" | "admin";

interface SidebarProps {
  role: Role;
}

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const menu = SIDEBAR_MENU[role];

  return (
    <aside className="w-65 min-h-screen bg-white border-r flex flex-col px-6 py-8">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <Image
          src="/logo.png" // your BioVue logo
          alt="BioVue"
          width={36}
          height={36}
        />
        <span className="text-lg font-semibold">
          BioVue <sup className="text-xs">TM</sup>
        </span>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-1 flex-1">
        {menu.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition
                ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Sign out */}
      <button className="flex items-center gap-3 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
        <LogOut size={18} />
        Sign Out
      </button>
    </aside>
  );
}
