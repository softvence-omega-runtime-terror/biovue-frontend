"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LogOut, Menu, X, ChevronDown } from "lucide-react";
import { SIDEBAR_MENU } from "./SidebarMenu";

type Role = "user" | "trainer" | "admin";

interface SidebarProps {
  role: Role;
}

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const menu = SIDEBAR_MENU[role];

  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmenuExpanded, setIsSubmenuExpanded] = useState(false);

  const currentType = searchParams.get("type") || "all";

  return (
    <>
      {/* Hamburger Menu Button - Visible on mobile */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg hover:bg-gray-100"
        aria-label="Toggle sidebar"
      >
        {isExpanded ? (
          <X size={24} className="fixed right-45" />
        ) : (
          <Menu size={24} />
        )}
      </button>

      {/* Overlay - Visible when sidebar is expanded on mobile */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-screen z-40 bg-white flex flex-col px-3 py-8 md:px-6 transition-all duration-300 ease-in-out border-r border-gray-200 ${
          isExpanded
            ? "w-65 translate-x-0"
            : "w-20 -translate-x-full md:translate-x-0 md:w-65"
        }`}
      >
        {/* Logo */}
        <div
          className={`mb-8 transition-all duration-300 flex items-center justify-center md:block 
             w-16 md:w-25 h-8 md:h-14 `}
        >
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt="BioVue"
              width={99}
              height={56}
              className={`object-contain w-full h-full`}
            />
          </Link>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-1 flex-1">
          {menu.map((item) => {
            const Icon = item.icon;
            const isSubscription =
              item.href === "/admin-dashboard/subscription-plans";

            const isActive = isSubscription
              ? pathname === item.href && !searchParams.get("type")
              : pathname === item.href;
            return (
              <div key={item.label}>
                {/* Parent Menu Item */}
                <button
                  onClick={() => {
                    if (isSubscription) {
                      router.push(item.href);
                      setIsSubmenuExpanded(true);
                      setIsExpanded(true);
                    } else {
                      router.push(item.href);
                      setIsExpanded(false);
                    }
                  }}
                  className={`w-full cursor-pointer flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-[#3A86FF25] text-black"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={20} className="shrink-0" />
                  {isExpanded && <span>{item.label}</span>}
                  {!isExpanded && (
                    <span className="hidden md:inline">{item.label}</span>
                  )}

                  {isSubscription && (
                    <ChevronDown
                      size={18}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsSubmenuExpanded((prev) => !prev);
                      }}
                      className={`ml-auto transition-transform ${
                        isSubmenuExpanded ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Submenu */}
                {isSubscription && isSubmenuExpanded && (
                  <div className="ml-9 mt-1 flex flex-col gap-1 animate-in fade-in slide-in-from-top-1">
                    {[
                      { label: "Individual", type: "individual" },
                      { label: "Professional", type: "professional" },
                    ].map((sub) => (
                      <Link
                        key={sub.type}
                        href={`/admin-dashboard/subscription-plans?type=${sub.type}`}
                        onClick={() => setIsExpanded(false)}
                        className={`text-sm px-3 py-1.5 rounded-md transition-colors ${
                          currentType === sub.type
                            ? "bg-blue-100 text-blue-600 font-medium"
                            : "text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        - {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Sign Out Button */}
        <button
          className={`flex items-center gap-3 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 whitespace-nowrap ${
            isExpanded ? "" : "justify-center px-2 md:px-4 md:justify-start"
          }`}
          title={isExpanded ? "" : "Sign Out"}
        >
          <LogOut size={18} className="shrink-0" />
          {isExpanded && <span>Sign Out</span>}
          <span className="hidden md:inline">{!isExpanded && "Sign Out"}</span>
        </button>
      </aside>
    </>
  );
}
