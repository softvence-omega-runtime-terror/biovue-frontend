"use client";

import React from "react";
import SubscriptionManagement from "@/components/dashboard/SubscriptionManagement";
import { useRouter } from "next/navigation";

const UpgradePage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8 p-6 md:p-10 pb-20 w-full">
      <SubscriptionManagement 
        onBack={() => router.push("/supplier-dashboard/settings")}
        backLabel="Back to Settings"
        role="professional"
      />
    </div>
  );
};

export default UpgradePage;
