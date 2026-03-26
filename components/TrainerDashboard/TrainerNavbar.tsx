"use client";

import NotificationBell from "../dashboard/NotificationBell";
import Image from "next/image";

export default function TrainerNavbar() {
  return (
    <header className="ml-6 py-5 bg-white  px-6 flex items-center justify-between">
      <h1 className="text-sm font-semibold text-gray-700">Dashboard</h1>

      <div className="flex items-center gap-4">
        <NotificationBell iconSize={20} />

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
