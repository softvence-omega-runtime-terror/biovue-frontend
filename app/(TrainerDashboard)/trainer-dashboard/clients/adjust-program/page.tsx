"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Badge } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
 
  clients,
} from "@/components/TrainerDashboard/overview/data";
import { clientDetailsMock } from "./clientdetailsmockdata";

export default function AdjustProgramPage() {
  const clientDetails = clientDetailsMock;

  if (!clientDetails) {
    return <div>Client not found</div>;
  }
  const statusConfig = {
    "on-track": "bg-[#22C55E1A] text-[#22C55E]",
    "need-attention": "bg-[#D3BB5B1A] text-[#D3BB5B]",
    inactive: "bg-[#9AAEB24D] text-[#5F6F73]",
  };
  const router = useRouter();

  return (
    <div className="min-h-screen ">
      <div className=" mx-auto">
        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-medium text-[#111827]">
              {clientDetails.name}
            </h1>
            <Badge
              className={`${statusConfig[clientDetails.status]} border-none capitalize`}
            >
              {clientDetails.status.replace("-", " ")}
            </Badge>
          </div>
          <p className="text-lg text-[#6B7280] font-medium">
            {clientDetails.primaryGoal.subtitle}
          </p>
        </div>

        {/* Main Content */}
        
      </div>
    </div>
  );
}
