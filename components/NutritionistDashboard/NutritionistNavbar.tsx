"use client";

import { Bell } from "lucide-react";
import Image from "next/image";

export default function NutritionistNavbar() {
  return (
    <header className="ml-6 py-5 bg-white px-6 flex items-center justify-between shadow-sm border-b border-gray-100">
      <h1 className="text-sm font-semibold text-gray-700">Dashboard</h1>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-50 transition-colors">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
        </button>

        <Image
          src="/images/avatar.png"
          alt="Nutritionist"
          width={36}
          height={36}
          className="rounded-full shadow-sm"
        />
      </div>
    </header>
  );
}
