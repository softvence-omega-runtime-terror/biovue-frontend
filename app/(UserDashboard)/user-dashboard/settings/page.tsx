"use client";

import React from "react";

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6 container mx-auto pb-12">
      <h2 className="text-2xl font-bold text-[#1F2D2E]">Settings</h2>
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <p className="text-[#5F6F73]">Manage your account settings and preferences here.</p>
      </div>
    </div>
  );
}

export default SettingsPage;
