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
    <aside className="w-65 min-h-screen bg-white  flex flex-col px-6 py-8">
      {/* Logo */}
    
      <div className="w-26 h-14 mb-5">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="BioVue"
            width={99}
            height={56}
            className="w-full h-full cursor-pointer"
          />
        </Link>
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
              className={`flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium transition
                ${
                  isActive
                    ? "bg-[rgba(58,134,255,0.25)] text-[#3A86FF]"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <Icon size={24} />
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
