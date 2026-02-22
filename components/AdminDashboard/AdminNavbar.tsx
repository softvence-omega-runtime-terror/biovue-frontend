"use client";

import { Bell } from "lucide-react";
import Image from "next/image";

export default function AdminNavbar() {
  return (
    <header className="md:ml-6 py-5 bg-white px-6 flex items-center justify-between">
      <h1 className="text-sm font-semibold text-gray-700 pl-10 md:pl-0">Dashboard</h1>

      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={24} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <Image
          src="/images/avatar.png"
          alt="Admin"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </header>
  );
}
