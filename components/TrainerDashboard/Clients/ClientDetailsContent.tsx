"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Calendar, CheckCircle2, ChevronLeft } from "lucide-react";
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
    "on-track": "bg-green-100 text-green-700",
    "need-attention": "bg-yellow-100 text-yellow-700",
    inactive: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="min-h-screen space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-[#111827]">
              {clientDetails.name}
            </h1>
            <Badge className={`${statusConfig[clientDetails.status]} border-none font-medium capitalize py-0.5 px-2 text-xs hover:bg-transparent`}>
              {clientDetails.status.replace("-", " ")}
            </Badge>
          </div>
          <p className="text-sm text-[#6B7280] font-medium">
            {clientDetails.connectedDate}
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/trainer-dashboard/clients" className="flex items-center gap-2 text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium mr-4">
            <ChevronLeft size={16} />
            Back
          </Link>
          <button className="flex items-center gap-2 bg-[#0D9488] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0A7A6F] transition-colors">
            <MessageSquare size={16} />
            Message Client
          </button>
        </div>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-none shadow-xs bg-white">
          <CardContent className="p-5 space-y-4">
            <p className="text-[10px] font-bold text-[#6B7280] tracking-wider uppercase">PRIMARY GOAL</p>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#111827]">{clientDetails.primaryGoal.title}</h3>
              <p className="text-xs text-[#9CA3AF]">{clientDetails.primaryGoal.subtitle}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xs bg-white">
          <CardContent className="p-5 space-y-4">
            <p className="text-[10px] font-bold text-[#6B7280] tracking-wider uppercase">CURRENT TREND</p>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#111827]">{clientDetails.currentTrend.status}</h3>
              <p className="text-xs text-[#10B981] font-medium">{clientDetails.currentTrend.description}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xs bg-white">
          <CardContent className="p-5 space-y-4">
            <p className="text-[10px] font-bold text-[#6B7280] tracking-wider uppercase">LAST ACTIVITY</p>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#111827]">{clientDetails.lastActivity.status}</h3>
              <p className="text-xs text-[#9CA3AF]">{clientDetails.lastActivity.description}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xs bg-white">
          <CardContent className="p-5 space-y-4">
            <p className="text-[10px] font-bold text-[#6B7280] tracking-wider uppercase">CONSISTENCY SCORE</p>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#111827]">{clientDetails.consistencyScore.score}%</h3>
              <p className="text-xs text-[#FBBF24] font-medium">{clientDetails.consistencyScore.description}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projection Usage */}
      <Card className="w-fit border-none shadow-xs bg-white">
        <CardContent className="p-5 space-y-4">
          <p className="text-[10px] font-bold text-[#6B7280] tracking-wider uppercase">Projection Usage</p>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#111827]">Used: {clientDetails.projectionUsage.used}/{clientDetails.projectionUsage.total}</h3>
            <p className="text-xs text-[#9CA3AF]">Next reset: {clientDetails.projectionUsage.nextResetDays} days</p>
            <p className="text-xs text-[#10B981] font-medium whitespace-nowrap">Last projection: {clientDetails.projectionUsage.lastProjectionDaysAgo} days ago</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          <HealthHabitOverview clientDetails={clientDetails} />
          <CoachSetGoals goals={clientDetails.coachSetGoals} />
          <CoachActions />
          <ProgressTrends />
          <CoachNotes notes={clientDetails.coachNotes} />
          <VisibilityControls />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="border-none shadow-xs bg-[#0D9488] text-white overflow-hidden">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase opacity-80">
                  <Calendar size={14} />
                  NEXT CHECK-IN
                </div>
                <h3 className="text-xl font-bold leading-tight">
                  {clientDetails.nextCheckIn.day}, {clientDetails.nextCheckIn.date}
                </h3>
                <p className="text-xs font-medium opacity-80">
                  {clientDetails.nextCheckIn.time} ({clientDetails.nextCheckIn.timezone})
                </p>
              </div>
              
              <button className="w-full bg-white text-[#0D9488] py-2.5 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all">
                Reschedule
              </button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xs bg-[#F0F9FF]">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#0369A1] tracking-wider uppercase">
                <CheckCircle2 size={14} />
                COMPLIANCE
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#111827]">{clientDetails.compliance.score}%</span>
                  <span className="text-xs text-[#6B7280] font-medium">avg</span>
                </div>
                <p className="text-xs text-[#0369A1] leading-relaxed font-medium">
                  {clientDetails.compliance.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
