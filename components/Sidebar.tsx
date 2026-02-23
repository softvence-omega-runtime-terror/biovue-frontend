// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { LogOut } from "lucide-react";
// import { SIDEBAR_MENU } from "./SidebarMenu";

// type Role = "user" | "trainer" | "admin";

// interface SidebarProps {
//   role: Role;
// }

// export default function Sidebar({ role }: SidebarProps) {
//   const pathname = usePathname();
//   const menu = SIDEBAR_MENU[role];

//   return (
//     <aside className="w-65 min-h-screen bg-white  flex flex-col px-6 py-8">
//       {/* Logo */}
//       <div className="w-26 h-14 mb-5">
//         <Link href="/">
//           <Image
//             src="/images/logo.png"
//             alt="BioVue"
//             width={99}
//             height={56}
//             className="w-full h-full cursor-pointer"
//           />
//         </Link>
//       </div>

//       {/* Menu */}
//       <nav className="flex flex-col gap-1 flex-1">
//         {menu.map((item) => {
//           const isActive = pathname === item.href;
//           const Icon = item.icon;

//           return (
//             <Link
//               key={item.label}
//               href={item.href}
//               className={`flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium transition
//                 ${
//                   isActive
//                     ? "bg-[rgba(58,134,255,0.25)] text-[#3A86FF]"
//                     : "text-gray-600 hover:bg-gray-100"
//                 }`}
//             >
//               <Icon size={24} />
//               {item.label}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Sign out */}
//       <button className="flex items-center gap-3 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
//         <LogOut size={18} />
//         Sign Out
//       </button>
//     </aside>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { LogOut, Menu, X } from "lucide-react";
import { SIDEBAR_MENU } from "./SidebarMenu";

type Role = "user" | "trainer" | "admin";

interface SidebarProps {
  role: Role;
}

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const menu = SIDEBAR_MENU[role];
  const [isExpanded, setIsExpanded] = useState(false);
  const isChildActive =
    pathname === "/admin-dashboard/subscription-plans" &&
    searchParams.get("type") === "individual";
  return (
    <>
      {/* Hamburger Menu Button - Visible on md and sm screens */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg hover:bg-gray-100"
        aria-label="Toggle sidebar"
      >
        {isExpanded ? (
          <X size={24} className="fixed right-40" />
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
        className={`fixed md:static top-0 left-0 h-screen z-40 bg-white flex flex-col px-3 py-8 md:px-6 transition-all duration-300 ease-in-out
          ${isExpanded ? "w-65 translate-x-0" : "w-20 -translate-x-full md:translate-x-0 md:w-65"}
        `}
      >
        {/* Logo */}
        <div
          className={`mb-5 transition-all duration-300 flex items-center justify-center md:block
            ${isExpanded || "md:w-26 md:h-14"}
            ${isExpanded ? "w-26 h-14" : "w-16 h-16"}`}
        >
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt="BioVue"
              width={99}
              height={56}
              className={`transition-all duration-300
                ${isExpanded ? "w-full h-full" : "w-12 h-12 md:w-full md:h-full"}`}
            />
          </Link>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-1 flex-1">
          {/* {menu.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  setIsExpanded(false);
                }}
                className={`flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap
                  ${isExpanded ? "px-2" : "px-1 justify-center md:px-2 md:justify-start"}
                  ${
                    isActive
                      ? "bg-[rgba(58,134,255,0.25)] text-[#3A86FF]"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                title={isExpanded ? "" : item.label}
              >
                <Icon size={24} className="flex-shrink-0" />
                {isExpanded && <span>{item.label}</span>}
                <span className="hidden md:inline">
                  {!isExpanded && item.label}
                </span>
              </Link>
            );
          })} */}
          {menu.map((item) => {
            const Icon = item.icon;

            // use isChildActive for specific routes
            const isActive =
              pathname === item.href ||
              (item.href === "/admin-dashboard/subscription-plans" &&
                isChildActive);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsExpanded(false)}
                className={`flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap
        ${isExpanded ? "px-2" : "px-1 justify-center md:px-2 md:justify-start"}
        ${
          isActive
            ? "bg-[rgba(58,134,255,0.25)] text-[#3A86FF]"
            : "text-gray-600 hover:bg-gray-100"
        }`}
                title={isExpanded ? "" : item.label}
              >
                <Icon size={24} className="flex-shrink-0" />
                {isExpanded && <span>{item.label}</span>}
                <span className="hidden md:inline">
                  {!isExpanded && item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Sign out */}
        <button
          className={`flex items-center gap-3 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 whitespace-nowrap
            ${isExpanded ? "" : "justify-center px-2 md:px-4 md:justify-start"}`}
          title={isExpanded ? "" : "Sign Out"}
        >
          <LogOut size={18} className="flex-shrink-0" />
          {isExpanded && <span>Sign Out</span>}
          <span className="hidden md:inline">{!isExpanded && "Sign Out"}</span>
        </button>
      </aside>
    </>
  );
}
