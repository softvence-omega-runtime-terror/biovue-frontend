"use client";

import { useRouter } from "next/navigation";
import { ProgramFormData } from "../CreateProgramsModal";
import { useMemo, useState } from "react";
import { USERS_DATA } from "@/components/AdminDashboard/Data";

interface Step4Props {
  formData: ProgramFormData;
}

export default function Step4ReviewProgram({ formData }: Step4Props) {
  const router = useRouter();

  const [showSuccess, setShowSuccess] = useState(false);
  const [showAssign, setShowAssign] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const habits = ["Sleep", "Nutrition", "Activity"];

  const focusAreas = [
    "Weight Loss",
    "Performance Improvement",
    "Body Composition",
  ];

  const macros = [
    {
      title: "Calories",
      value: "2100",
      unit: " kcal",
      bg: "bg-[#e0f2f1]",
      border: "border-[#26a69a]",
      titleColor: "text-[#00897b]",
      valueColor: "text-[#00695c]",
    },
    {
      title: "Protein",
      value: "160",
      unit: "g",
      bg: "bg-[#1b5e20]",
      border: "border-[#1b5e20]",
      titleColor: "text-[#a5d6a7]",
      valueColor: "text-white",
    },
    {
      title: "Carbs",
      value: "200",
      unit: "g",
      bg: "bg-[#c8e6c9]",
      border: "border-[#a5d6a7]",
      titleColor: "text-[#2e7d32]",
      valueColor: "text-[#1b5e20]",
    },
    {
      title: "Fat",
      value: "70",
      unit: "g",
      bg: "bg-[#dcedc8]",
      border: "border-[#c5e1a5]",
      titleColor: "text-[#558b2f]",
      valueColor: "text-[#33691e]",
    },
  ];

  const supplements = ["Protein", "Creatine", "Omega-3"];

  const filteredUsers = useMemo(() => {
    return USERS_DATA.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const toggleUser = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen ">
      <div className="">
        <div className=" rounded-2xl space-y-5">
          {/* Header */}
          <div className="mb-2">
            <h2 className="text-[22px] font-bold text-gray-900 leading-tight">
              Step 4 of 4 – Review Program
            </h2>
            <p className="text-[13px] text-gray-400 mt-1">
              Confirm all details before creating the program
            </p>
          </div>

          {/* Program Basics */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
            <p className="text-[11px] uppercase font-bold tracking-wide text-gray-400">
              Program Basics
            </p>

            <h3 className="text-[18px] font-bold text-gray-900">
              Advanced Fat Loss Program
            </h3>

            <div className="flex gap-12">
              <div>
                <p className="text-[11px] text-gray-400 font-medium mb-0.5">
                  Duration
                </p>
                <p className="text-[13px] font-bold text-gray-900">12 Weeks</p>
              </div>

              <div>
                <p className="text-[11px] text-gray-400 font-medium mb-0.5">
                  Primary Goal
                </p>
                <p className="text-[13px] font-bold text-gray-900">Fat Loss</p>
              </div>

              <div>
                <p className="text-[11px] text-gray-400 font-medium mb-0.5">
                  Target Intensity
                </p>
                <span className="inline-block px-3 py-0.5 rounded-full bg-orange-100 text-orange-500 text-[13px] font-semibold">
                  Moderate
                </span>
              </div>
            </div>
          </div>

          {/* Habit Focus */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-3">
              <p className="text-[11px] uppercase font-bold tracking-wide text-gray-400">
                Habit Focus
              </p>
              <span className="text-[12px] text-gray-400">
                {habits.length} selected
              </span>
            </div>

            <div className="flex gap-2">
              {habits.map((habit) => (
                <span
                  key={habit}
                  className="px-3.5 py-1.5 rounded-full border border-gray-300 bg-gray-50 text-gray-700 text-[12px] font-medium"
                >
                  {habit}
                </span>
              ))}
            </div>
          </div>

          {/* Program Focus */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
            <p className="text-[11px] uppercase font-bold tracking-wide text-gray-400 mb-3">
              Program Focus
            </p>

            {focusAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                  <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                    <path
                      d="M1 4.5L3.5 7L9.5 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[13px] font-medium text-gray-800">
                  {area}
                </span>
              </div>
            ))}
          </div>

          {/* Wellness Macros */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-[11px] uppercase font-bold tracking-wide text-gray-400 mb-4">
              Wellness Macros
            </p>

            <div className="grid grid-cols-4 gap-3">
              {macros.map((macro) => (
                <div
                  key={macro.title}
                  className={`rounded-lg p-3.5 ${macro.bg} border-l-4 ${macro.border}`}
                >
                  <p
                    className={`text-[11px] font-medium mb-1 ${macro.titleColor}`}
                  >
                    {macro.title}
                  </p>

                  <p
                    className={`text-[20px] font-bold leading-tight ${macro.valueColor}`}
                  >
                    {macro.value}
                    <span className="text-[14px] font-semibold">
                      {macro.unit}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Supplements */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-[11px] uppercase font-bold tracking-wide text-gray-400 mb-4">
              Supplements
            </p>

            <div className="grid grid-cols-2 gap-3">
              {supplements.map((supp) => (
                <div
                  key={supp}
                  className="flex items-center gap-2.5 border border-gray-200 rounded-lg px-4 py-2.5"
                >
                  <div className="w-5 h-5 rounded-lg bg-teal-700 flex items-center justify-center shrink-0">
                    <svg width="11" height="9" viewBox="0 0 11 9">
                      <path
                        d="M1 4.5L3.5 7L9.5 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <span className="text-[13px] font-medium text-gray-800">
                    {supp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => router.back()}
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-[13px] text-gray-600 font-medium hover:bg-gray-50 transition-colors"
            >
              ← Back
            </button>

            <button
              onClick={() => setShowSuccess(true)}
              className="px-6 py-2.5 rounded-lg bg-red-500 text-white text-[13px] font-semibold hover:bg-red-600 transition-colors"
            >
              Save Program
            </button>
          </div>

          {/* SUCCESS MODAL */}
          {showSuccess && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-100">
              <div className="bg-white w-105 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  ✓
                </div>

                <h3 className="text-xl font-bold">Program Created!</h3>

                <p className="text-gray-400 text-sm mt-2">
                  "Power Recomp" has been successfully saved to your dashboard.
                </p>

                <button
                  onClick={() => {
                    setShowSuccess(false);
                    setShowAssign(true);
                  }}
                  className="mt-6 w-full bg-teal-600 text-white py-3 rounded-lg"
                >
                  Assign To Clients
                </button>

                <button
                  onClick={() => router.push("/trainer-dashboard/programs")}
                  className="mt-3 w-full border py-3 rounded-lg text-gray-600"
                >
                  Return To Programs
                </button>
              </div>
            </div>
          )}

          {/* ASSIGN CLIENT MODAL */}
          {showAssign && (
            <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-100">
              <div className="bg-white w-160 rounded-2xl p-6">
                {/* header */}
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Assign Program</h3>

                    <p className="text-sm text-gray-400">
                      Select clients to assign
                    </p>
                  </div>

                  <button onClick={() => setShowAssign(false)}>✕</button>
                </div>

                {/* info */}
                <div className="bg-cyan-50 text-cyan-700 text-xs p-3 rounded mt-4">
                  Clients will see goals & targets but cannot edit structure.
                </div>

                {/* search */}
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search clients..."
                  className="w-full border rounded-lg px-4 py-2 mt-4"
                />

                {/* list */}
                <div className="mt-4 max-h-75 overflow-y-auto">
                  {filteredUsers.map((u) => (
                    <div
                      key={u.id}
                      className="flex justify-between items-center py-3 border-b"
                    >
                      <div>
                        <p className="font-medium">{u.name}</p>

                        <p className="text-xs text-gray-400">{u.email}</p>
                      </div>

                      <input
                        type="checkbox"
                        checked={selected.includes(u.id)}
                        onChange={() => toggleUser(u.id)}
                      />
                    </div>
                  ))}
                </div>

                {/* footer */}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => router.push("/trainer-dashboard/programs")}
                    className="border px-4 py-2 rounded-lg"
                  >
                    Skip For Now
                  </button>

                  <button className="bg-teal-600 text-white px-5 py-2 rounded-lg">
                    Assign Program
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
