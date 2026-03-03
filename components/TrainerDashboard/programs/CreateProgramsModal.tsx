"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { toast } from "sonner";
import Step1ProgramBasics from "./steps/Step1ProgramBasics";
import Step2GoalsAndFocus from "./steps/Step2GoalsAndFocus";
import Step3NutritionAndSupplements from "./steps/Step3NutritionAndSupplements";
import Step4ReviewProgram from "./steps/Step4ReviewProgram";

export interface ProgramFormData {
  programName: string;
  duration: string;
  habitFocus: string[];
  primaryGoal: string;
  targetIntensity: string;
  focusAreas: string[];
  wellnessMetrics: {
    protein: string;
    calories: string;
    carbs: string;
    fat: string;
  };
  supplementRecommendations: {
    protein: boolean;
    creatine: boolean;
    multivitamin: boolean;
    omega3: boolean;
    electrolytes: boolean;
    vitaminD: boolean;
    aminoAcids: boolean;
    preWorkout: boolean;
    other: boolean;
  };
  wellnessMetricsOptional: {
    proteinOptional: boolean;
    creatineOptional: boolean;
  };
}

interface CreateProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateProgramModal({
  isOpen,
  onClose,
}: CreateProgramModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<ProgramFormData>({
    programName: "",
    duration: "12 weeks",
    primaryGoal: "Fat Loss",
    targetIntensity: "light",
    focusAreas: [],
    wellnessMetrics: {
      protein: "",
      calories: "",
      carbs: "",
      fat: "",
    },
    habitFocus: [],
    supplementRecommendations: {
      protein: false,
      creatine: false,
      multivitamin: false,
      omega3: false,
      electrolytes: false,
      vitaminD: false,
      aminoAcids: false,
      preWorkout: false,
      other: false,
    },
    wellnessMetricsOptional: {
      proteinOptional: false,
      creatineOptional: false,
    },
  });

  // inside CreateProgramModal
  useEffect(() => {
    if (isOpen) {
      // reset step and optionally formData when modal opens
      setCurrentStep(1);
      setFormData({
        programName: "",
        duration: "12 weeks",
        primaryGoal: "Fat Loss",
        targetIntensity: "light",
        focusAreas: [],
        wellnessMetrics: {
          protein: "",
          calories: "",
          carbs: "",
          fat: "",
        },
        habitFocus: [],
        supplementRecommendations: {
          protein: false,
          creatine: false,
          multivitamin: false,
          omega3: false,
          electrolytes: false,
          vitaminD: false,
          aminoAcids: false,
          preWorkout: false,
          other: false,
        },
        wellnessMetricsOptional: {
          proteinOptional: false,
          creatineOptional: false,
        },
      });
      setShowSuccess(false); // also reset success modal
    }
  }, [isOpen]);
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // const handleCreate = () => {
  //   // Here you would typically send the data to an API
  //   console.log("Program Created:", formData);
  //   toast.success(`Program "${formData.programName}" created successfully!`);
  //   onClose();
  //   setCurrentStep(1);
  //   setFormData({
  //     programName: "",
  //     duration: "12 weeks",
  //     primaryGoal: "Fat Loss",
  //     targetIntensity: "light",
  //     focusAreas: [],
  //     wellnessMetrics: {
  //       protein: "",
  //       calories: "",
  //       carbs: "",
  //       fat: "",
  //     },
  //     habitFocus: [],
  //     supplementRecommendations: {
  //       protein: false,
  //       creatine: false,
  //       multivitamin: false,
  //       omega3: false,
  //       electrolytes: false,
  //       vitaminD: false,
  //       aminoAcids: false,
  //       preWorkout: false,
  //       other: false,
  //     },
  //     wellnessMetricsOptional: {
  //       proteinOptional: false,
  //       creatineOptional: false,
  //     },
  //   });
  // };
  const handleCreate = () => {
    console.log("Program Created:", formData);

    // SUCCESS MODAL OPEN
    setShowSuccess(true);
  };
  if (!isOpen) return null;
  const handleClose = () => {
    onClose();
    setCurrentStep(1);
    setShowSuccess(false);
  };
  return (
    <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-h-[90vh] overflow-hidden flex flex-col max-w-4xl w-full mx-4">
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {currentStep === 1 && (
            <Step1ProgramBasics
              onClose={handleClose}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {currentStep === 2 && (
            <Step2GoalsAndFocus
              onClose={handleClose}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {currentStep === 3 && (
            <Step3NutritionAndSupplements
              formData={formData}
              onClose={handleClose}
              setFormData={setFormData}
            />
          )}
          {currentStep === 4 && (
            <Step4ReviewProgram
              formData={formData}
              onClose={handleClose}
              showSuccess={showSuccess}
              setShowSuccess={setShowSuccess}
            />
          )}
        </div>

        {/* Footer */}
        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t">
          {/* LEFT SIDE */}
          {currentStep === 1 ? (
            <button
              onClick={handleClose}
              className="px-4 py-2 border rounded-lg cursor-pointer hover:opacity-80 text-gray-600"
            >
              Cancel
            </button>
          ) : (
            <button
              onClick={handleBack}
              className="flex items-center cursor-pointer gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              <ChevronLeft /> Back
            </button>
          )}

          {/* RIGHT SIDE */}
          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
            >
              <span>Next</span> <ChevronRight />
            </button>
          ) : (
            <button
              onClick={handleCreate}
              className="px-6 py-3 cursor-pointer rounded-lg bg-[#0D9488] text-white text-sm font-medium hover:opacity-80 transition"
            >
              Save Program
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
