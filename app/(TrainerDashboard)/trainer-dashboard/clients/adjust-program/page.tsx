"use client";

import { useRouter } from "next/navigation";
import {
  AdjustProgramRequest,
  useAdjustProgramMutation,
} from "../../../../../redux/features/api/TrainerDashboard/Clients/AdjustProgram/CreateAdjustProgram";
import {
  AlertCircle,
  ArrowLeft,
  Eye,
  Focus,
  History,
  Notebook,
  Save,
  Settings,
} from "lucide-react";
import { Button } from "../../../../../components/ui/button";
import { Card } from "../../../../../components/ui/card";
import { Switch } from "../../../../../components/ui/switch";
import { clientDetailsMock } from "./clientdetailsmockdata";

export default function CoachingDashboard() {
  const clientDetails = clientDetailsMock;
  const router = useRouter();

  const statusConfig = {
    "on-track": "bg-[#22C55E1A] text-[#22C55E]",
    "need-attention": "bg-[#D3BB5B1A] text-[#D3BB5B]",
    inactive: "bg-[#9AAEB24D] text-[#5F6F73]",
  };

  return (
    <div className="min-h-screen ">
      <div className="">
        {/* Header */}
        <div className="mb-8 space-y-3">
          <button
            onClick={() => router.back()}
            className="flex cursor-pointer items-center gap-1 text-sm text-[#64748B] hover:text-[#475569]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold text-[#111827]">
              {clientDetails.name}
            </h1>
            <p
              className={`${statusConfig[clientDetails.status]} px-3 rounded-full  border-none capitalize`}
            >
              {clientDetails.status.replace("-", " ")}
            </p>
          </div>
          <p className="text-base font-medium text-[#6B7280]">
            {clientDetails.primaryGoal.subtitle}
          </p>
        </div>

        {/* Program Context */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold tracking-wide text-[#0F172A]">
            Program Context
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              { label: "Name", value: clientDetails.programContext.name },
              {
                label: "Duration",
                value: clientDetails.programContext.duration,
              },
              {
                label: "Primary Goal",
                value: clientDetails.programContext.primaryGoal,
              },
              {
                label: "Template Intensity",
                value: clientDetails.programContext.templateIntensity,
              },
            ].map(({ label, value }) => (
              <Card
                key={label}
                className="rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-none"
              >
                <p className="text-sm font-semibold uppercase text-[#5F6F73]">
                  {label}
                </p>
                <p className="mt-3 text-base font-semibold text-[#111827]">
                  {value}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* AI-Observed Metrics */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-[#0F172A]">
            AI-Observed Metrics
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {clientDetails.aiObservedMetrics.map((metric) => (
              <div key={metric.id} className="rounded-xl border bg-white p-5">
                <p className="text-base font-medium text-black uppercase">
                  {metric.label}
                </p>

                <p className="mt-2 text-xl font-medium text-gray-900">
                  {metric.value}
                </p>

                <p className="mt-2 text-sm text-[#8746E7] flex items-center gap-1">
                  ● {metric.tag.text}
                </p>

                <p className="mt-2 text-sm text-[#5F6F73]">
                  {metric.updatedTime}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Coach Set Targets */}
          <Card className="rounded-lg border border-[#E5E7EB] bg-white py-8 px-6 shadow-none">
            <div className="mb-4 flex items-center gap-2">
              <Settings className="h-4 w-4 text-[#0F172A]" />
              <h3 className="text-lg font-medium text-[#0F172A]">
                Coach Set Targets
              </h3>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-base font-medium text-[#6B7280]">
                    Target Weight (lbs)
                  </label>
                  <div className="mt-2 flex items-center gap-2">
                    <input
                      type="number"
                      defaultValue={175}
                      className="flex-1 rounded border border-[#D1D5DB] bg-white px-3 py-2 text-base font-semibold text-[#5F6F73] placeholder-[#9CA3AF]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-[#6B7280]">
                    Weekly Workouts
                  </label>
                  <div className="mt-2">
                    <select className="w-full rounded border border-[#D1D5DB] bg-white px-3 py-2 text-base font-semibold text-[#5F6F73]">
                      <option>4 Sessions / Week</option>
                      <option>3 Sessions / Week</option>
                      <option>5 Sessions / Week</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-base font-medium text-[#6B7280]">
                    Sleep Target Range (hrs)
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="mt-2">
                      <input
                        type="number"
                        defaultValue={7}
                        className="w-full rounded border border-[#D1D5DB] bg-white px-3 py-2 text-base font-semibold text-[#5F6F73]"
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        type="number"
                        defaultValue={8}
                        className="w-full rounded border border-[#D1D5DB] bg-white px-3 py-2 text-base font-semibold text-[#5F6F73]"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-[#6B7280]">
                    Hydration Target (L)
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      defaultValue={3.5}
                      step="0.5"
                      className="w-full rounded border border-[#D1D5DB] bg-white px-3 py-2 text-base font-semibold text-[#5F6F73]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Client Visibility Controls */}
          <Card className="rounded-lg border border-[#E5E7EB] bg-white py-8 px-6  shadow-none">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-[#0F172A]">
              <Eye className="h-4 w-4" />
              Client Visibility Controls
            </h3>

            <div className="space-y-4">
              {clientDetails.visibilityControls.map((control) => (
                <div
                  key={control.label}
                  className="flex items-center justify-between"
                >
                  <p className="text-sm text-[#5F6F73]">{control.label}</p>
                  <Switch defaultChecked={control.enabled} />
                </div>
              ))}
            </div>
          </Card>

          <Card className="rounded-lg border border-[#E5E7EB] bg-white py-8 px-6  shadow-none">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-[#0F172A]">
              <Focus className="h-4 w-4" />
              Focus & Intensity Adjustment
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-base font-medium text-[#6B7280]">
                  Program
                </label>
                <div className="mt-3">
                  <select className="w-full rounded border border-[#D1D5DB] bg-white px-3 py-2 text-base font-semibold text-[#5F6F73]">
                    <option>Fat Loss</option>
                    <option>Bulking</option>
                    <option>Weight Gain</option>
                  </select>
                </div>
              </div>
              <div className="">
                <label className="text-base font-medium text-[#6B7280]">
                  Primary Focus Area
                </label>
                <div className="mt-4 flex gap-2 bg-[#0FA4A91A] rounded-lg px-6 py-2">
                  {["Low", "Medium", "High", "Elite"].map((level) => (
                    <button
                      key={level}
                      className={`rounded-md px-3 py-1 text-base font-medium ${
                        level === "High" ? "bg-white " : "bg-transparent "
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-sm text-[#E5A966] flex items-center gap-1 uppercase">
                <AlertCircle size={14} />
                <span>This overrides the template intensity</span>
              </p>
            </div>
          </Card>

          <Card className="rounded-lg border border-[#E5E7EB] bg-white py-8 px-6  shadow-none">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-[#0F172A]">
              <Notebook className="h-4 w-4" />
              Internal Coach Notes (Private)
            </h3>

            <div className="space-y-4">
              <div>
                <textarea
                  placeholder="Add private observations, risks, or follow-up reminders..."
                  className="px-3 py-2 border rounded-lg w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                />
              </div>
              <p className="text-sm  flex items-center gap-1 text-[#8746E7]">
                <Eye />
                <span>
                  Clients cannot see this section. Only visible to BioVue
                </span>
                staff.
              </p>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-6">
          <Button
            variant="outline"
            className="border-[#D1D5DB] cursor-pointer text-sm text-[#111827] hover:bg-[#F9FAFB]"
          >
            <History /> Reset to Program Defaults
          </Button>
          <Button className="bg-[#0D9488] cursor-pointer hover:bg-[#0F766E]">
            <Save /> Save Adjustments
          </Button>
        </div>
      </div>
    </div>
  );
}
