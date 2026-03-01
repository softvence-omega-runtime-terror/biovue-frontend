"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

import HealthHabitOverview from "./sections/HealthHabitOverview";
import CoachSetGoals from "./sections/CoachSetGoals";
import CoachActions from "./sections/CoachActions";
import ProgressTrends from "./sections/ProgressTrends";
import CoachNotes from "./sections/CoachNotes";
import VisibilityControls from "./sections/ProgressSettings";

import { ClientDetails } from "../overview/data";

export default function ClientDetailsContent({
  clientDetails,
}: {
  clientDetails: ClientDetails;
}) {
  const statusConfig = {
    "on-track": "bg-[#22C55E1A] text-[#22C55E]",
    "need-attention": "bg-[#D3BB5B1A] text-[#D3BB5B]",
    inactive: "bg-[#9AAEB24D] text-[#5F6F73]",
  };

  return (
    <div className="min-h-screen space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-medium text-[#111827]">
              {clientDetails.name}
            </h1>
            <Badge
              className={`${statusConfig[clientDetails.status]} border-none font-medium capitalize py-0.5 px-2 text-base `}
            >
              {clientDetails.status.replace("-", " ")}
            </Badge>
          </div>
          <p className="text-lg text-[#6B7280] font-medium">
            {clientDetails.connectedDate}
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/trainer-dashboard/clients"
            className="flex items-center gap-2 text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium mr-4"
          >
            <ChevronLeft size={16} />
            Back
          </Link>
          <button className="flex items-center gap-2 bg-[#0D9488] text-white px-4 py-3 cursor-pointer rounded-lg text-sm font-semibold hover:bg-[#0A7A6F] transition-colors">
            <MessageSquare size={16} />
            Message Client
          </button>
        </div>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-none shadow-xs bg-white">
          <CardContent className="p-5 ">
            <p className="text-base mb-2 font-bold text-[#5F6F73] tracking-wider uppercase">
              PRIMARY GOAL
            </p>
            <div className="">
              <h3 className="text-xl md:text-[28px] mb-2 font-medium text-[#111827]">
                {clientDetails.primaryGoal.title}
              </h3>
              <p className="text-base text-[#9AAEB2]">
                {clientDetails.primaryGoal.subtitle}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xs bg-white">
          <CardContent className="p-5 space-y-4">
            <p className="text-base mb-2 font-bold text-[#5F6F73] tracking-wider uppercase">
              CURRENT TREND
            </p>
            <div className="space-y-1">
              <h3 className="text-xl md:text-[28px] mb-2 font-medium text-[#111827]">
                {clientDetails.currentTrend.status}
              </h3>
              <p className="text-base text-[#22C55E] font-medium">
                {clientDetails.currentTrend.description}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xs bg-white">
          <CardContent className="p-5 space-y-4">
            <p className="text-base mb-2 font-bold text-[#5F6F73] tracking-wider uppercase">
              LAST ACTIVITY
            </p>
            <div className="space-y-1">
              <h3 className="text-xl md:text-[28px] mb-2 font-medium text-[#111827]">
                {clientDetails.lastActivity.status}
              </h3>
              <p className="text-base text-[#9AAEB2]">
                {clientDetails.lastActivity.description}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xs bg-white">
          <CardContent className="p-5 space-y-4">
            <p className="text-base mb-2 font-bold text-[#5F6F73] tracking-wider uppercase">
              CONSISTENCY SCORE
            </p>
            <div className="space-y-1">
              <h3 className="text-xl md:text-[28px] mb-2 font-medium text-[#111827]">
                {clientDetails.consistencyScore.score}%
              </h3>
              <p className="text-base text-[#D3BB5B] font-medium">
                {clientDetails.consistencyScore.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projection Usage */}
      <Card className="w-fit border-none shadow-xs bg-white">
        <CardContent className="p-5 space-y-4">
          <p className="text-base mb-2 font-bold text-[#5F6F73] tracking-wider uppercase">
            Projection Usage
          </p>
          <div className="space-y-1">
            <h3 className="text-base font-medium text-[#111827]">
              Used: {clientDetails.projectionUsage.used}/
              {clientDetails.projectionUsage.total}
            </h3>
            <p className="text-sm text-[#5F6F73]">
              Next reset: {clientDetails.projectionUsage.nextResetDays} days
            </p>
            <p className="text-base text-[#22C55E] font-medium whitespace-nowrap">
              Last projection:{" "}
              {clientDetails.projectionUsage.lastProjectionDaysAgo} days ago
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-10">
          <HealthHabitOverview clientDetails={clientDetails} />
          <CoachSetGoals
            goals={clientDetails.coachSetGoals}
            clientDetails={clientDetails}
          />
          <CoachActions />
          <ProgressTrends />
          <CoachNotes notes={clientDetails.coachNotes} />
          <VisibilityControls />
        </div>

        {/* Sidebar */}
      </div>
    </div>
  );
}
