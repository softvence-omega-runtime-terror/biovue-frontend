"use client";

import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";

import ProgressTrends from "./sections/ProgressTrends";
import ProgressGoals from "./sections/ProgressGoals";
import ProgramSettings from "./sections/ProgressSettings";
import HealthHabitOverview from "./sections/HealthHabitOverview";
import CoachNotes from "./sections/CoachNotes";
import CoachClientRelationship from "./sections/CoachClientRelationship";
import { ClientDetails } from "../overview/data";

export default function ClientDetailsContent({
  clientDetails,
}: {
  clientDetails: ClientDetails;
}) {
  return (
    <div className="min-h-screen bg-[#F3F4F6] p-4 md:p-8">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <Link href="/trainer-dashboard/clients">
          <button className="flex items-center gap-2 text-[#0D9488] hover:opacity-80 transition-opacity">
            <ChevronLeft size={20} />
            <span>Back to Clients</span>
          </button>
        </Link>
      </div>

      {/* Client Info Header */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#1F2937] mb-2">
              {clientDetails.name}
            </h1>
            <p className="text-[#6B7280]">{clientDetails.connectedDate}</p>
          </div>
          <Badge className="bg-[#0D9488] text-white">
            {clientDetails.goal}
          </Badge>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#F9FAFB] p-4 rounded-lg">
            <p className="text-[#6B7280] text-sm font-medium mb-1">Fat Loss</p>
            <p className="text-2xl font-bold text-[#1F2937]">
              {clientDetails.goal}
            </p>
            <p className="text-xs text-[#9CA3AF] mt-2">Connected since</p>
          </div>

          <div className="bg-[#F9FAFB] p-4 rounded-lg">
            <p className="text-[#6B7280] text-sm font-medium mb-1">Improving</p>
            <p className="text-2xl font-bold text-[#1F2937]">
              65% of projection
            </p>
            <p className="text-xs text-[#9CA3AF] mt-2">
              Usage: 45% from 1 year ago
            </p>
          </div>

          <div className="bg-[#F9FAFB] p-4 rounded-lg">
            <p className="text-[#6B7280] text-sm font-medium mb-1">
              Last Activity
            </p>
            <p className="text-2xl font-bold text-[#1F2937]">Logged 2h ago</p>
            <p className="text-xs text-[#9CA3AF] mt-2">
              Active: Check-in score
            </p>
          </div>

          <div className="bg-[#F9FAFB] p-4 rounded-lg">
            <p className="text-[#6B7280] text-sm font-medium mb-1">
              Overall Score
            </p>
            <p className="text-2xl font-bold text-[#1F2937]">71%</p>
            <p className="text-xs text-[#9CA3AF] mt-2">Keep performing well</p>
          </div>
        </div>
      </div>

      {/* Health Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Weight</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-[#1F2937]">
                {clientDetails.currentWeight}
              </span>
              <span className="text-[#6B7280]">kg</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[#0D9488]">Target Weight:</span>
              <span className="font-semibold text-[#1F2937]">
                {clientDetails.targetWeight} kg
              </span>
            </div>
            <div className="mt-2 w-full bg-[#E5E7EB] rounded-full h-2">
              <div
                className="bg-[#0D9488] h-2 rounded-full"
                style={{
                  width: `${
                    ((clientDetails.currentWeight -
                      clientDetails.targetWeight) /
                      (clientDetails.healthMetrics.startWeight -
                        clientDetails.targetWeight)) *
                    100
                  }%`,
                }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">BMI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-[#1F2937]">
                {clientDetails.bmi}
              </span>
            </div>
            <p className="text-sm text-[#6B7280]">Current BMI status</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Measurements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Chest:</span>
                <span className="font-semibold text-[#1F2937]">
                  {clientDetails.measurements.chest} cm
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Waist:</span>
                <span className="font-semibold text-[#1F2937]">
                  {clientDetails.measurements.waist} cm
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Hips:</span>
                <span className="font-semibold text-[#1F2937]">
                  {clientDetails.measurements.hips} cm
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Workouts and Water Intake */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Weekly Workouts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[#1F2937]">
                  {clientDetails.workouts.weekly}
                </span>
                <span className="text-[#6B7280]">
                  of {clientDetails.workouts.goal}
                </span>
              </div>
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#0D9488] to-[#0D8676] flex items-center justify-center text-white font-bold">
                {Math.round(
                  (clientDetails.workouts.weekly /
                    clientDetails.workouts.goal) *
                    100,
                )}
                %
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Water Intake</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[#1F2937]">
                  {clientDetails.waterIntake.current}
                </span>
                <span className="text-[#6B7280]">
                  of {clientDetails.waterIntake.goal}{" "}
                  {clientDetails.waterIntake.unit}
                </span>
              </div>
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#64B5F6] to-[#42A5F5] flex items-center justify-center text-white font-bold">
                {Math.round(
                  (clientDetails.waterIntake.current /
                    clientDetails.waterIntake.goal) *
                    100,
                )}
                %
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        <HealthHabitOverview clientDetails={clientDetails} />
        <CoachClientRelationship />
        <ProgressGoals progressGoals={clientDetails.progressGoals} />
        <ProgressTrends />
        <CoachNotes notes={clientDetails.coachNotes} />
        <ProgramSettings />
      </div>
    </div>
  );
}
