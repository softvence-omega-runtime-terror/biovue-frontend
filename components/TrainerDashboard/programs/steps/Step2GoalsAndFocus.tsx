"use client";

import { AlertCircle, X } from "lucide-react";
import { ProgramFormData } from "../CreateProgramsModal";

interface Step2Props {
  formData: ProgramFormData;
  setFormData: (data: ProgramFormData) => void;
  onClose: () => void;
}

const focusAreaOptions = [
  { id: "weight-loss", label: "Weight Loss" },
  { id: "performance", label: "Performance Improvement" },
  { id: "body-comp", label: "Body Composition" },
  { id: "energy", label: "Energy & recovery" },
  { id: "health", label: "Overall Health Improvement" },
];

export default function Step2GoalsAndFocus({
  formData,
  setFormData,
  onClose,
}: Step2Props) {
  const handleToggleFocusArea = (areaId: string) => {
    const updatedFocusAreas = formData.focusAreas.includes(areaId)
      ? formData.focusAreas.filter((id) => id !== areaId)
      : [...formData.focusAreas, areaId];

    setFormData({
      ...formData,
      focusAreas: updatedFocusAreas,
    });
  };

  return (
    <div className="space-y-6">
      <div className="border-b bg-white flex justify-between items-start">
        <div>
          <div className="text-2xl mb-3 font-medium text-black">
            Step 2 of 4
          </div>
          <p className="text-base mb-4 text-[#5F6F73]">Goals & Focus</p>
        </div>
        <button
          onClick={onClose}
          className="cursor-pointer rounded-full border-2 p-1 hover:opacity-80"
        >
          <X />
        </button>
      </div>

      {/* Focus Areas */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Select up to 5 Focus Areas
        </label>
        <div className="space-y-3">
          {focusAreaOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleToggleFocusArea(option.id)}
              className={`w-full p-3 text-left rounded-lg border-2 transition ${
                formData.focusAreas.includes(option.id)
                  ? "border-teal-500 bg-teal-50"
                  : "border-gray-300 bg-white hover:border-gray-400"
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                    formData.focusAreas.includes(option.id)
                      ? "bg-teal-500 border-teal-500"
                      : "border-gray-400"
                  }`}
                >
                  {formData.focusAreas.includes(option.id) && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span className="font-medium text-gray-900">
                  {option.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-[#0FA4A91A] rounded-lg px-7 py-4">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-[#0FA4A9]" />

          <p className="text-sm text-[#0FA4A9]">
            These goals guide insights and progress tracking. Clients can view
            goals but cannot edit them.
          </p>
        </div>
      </div>
    </div>
  );
}
