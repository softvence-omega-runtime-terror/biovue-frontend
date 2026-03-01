"use client";

import { ProgramFormData } from "../CreateProgramsModal";



interface Step3Props {
  formData: ProgramFormData;
  setFormData: (data: ProgramFormData) => void;
}

const supplementOptions = [
  { id: "protein", label: "Protein" },
  { id: "creatine", label: "Creatine" },
  { id: "multivitamin", label: "Multivitamin" },
  { id: "omega3", label: "Omega-3" },
  { id: "electrolytes", label: "Electrolytes" },
  { id: "vitaminD", label: "Vitamin D" },
  { id: "aminoAcids", label: "Amino Acids (BCAAs/Glutamine)" },
  { id: "preWorkout", label: "Pre-Workout" },
  { id: "other", label: "Other" },
];

export default function Step3NutritionAndSupplements({
  formData,
  setFormData,
}: Step3Props) {
  const handleMetricsChange = (key: string, value: string | boolean) => {
    setFormData({
      ...formData,
      wellnessMetrics: {
        ...formData.wellnessMetrics,
        [key]: value,
      },
    });
  };

  const handleSupplementChange = (supplementId: string, isChecked: boolean) => {
    setFormData({
      ...formData,
      supplementRecommendations: {
        ...formData.supplementRecommendations,
        [supplementId]: isChecked,
      },
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Step 3 of 4 - Nutrition & Supplements
        </h3>
      </div>

      {/* Wellness Metrics */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">
          A. Wellness Metrics (Optional)
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Water (mL)
            </label>
            <input
              type="text"
              placeholder="e.g. 3000"
              value={formData.wellnessMetrics.water}
              onChange={(e) => handleMetricsChange("water", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Creatine
            </label>
            <input
              type="checkbox"
              checked={formData.wellnessMetrics.creatine}
              onChange={(e) =>
                handleMetricsChange("creatine", e.target.checked)
              }
              className="w-5 h-5 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Carbs (g)
            </label>
            <input
              type="text"
              placeholder="e.g. 300"
              value={formData.wellnessMetrics.carbs}
              onChange={(e) => handleMetricsChange("carbs", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fat (g)
            </label>
            <input
              type="text"
              placeholder="e.g. 70"
              value={formData.wellnessMetrics.fat}
              onChange={(e) => handleMetricsChange("fat", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Supplement Recommendations */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">
          B. Supplement Recommendations (Optional)
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {supplementOptions.map((supplement) => (
            <label
              key={supplement.id}
              className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
            >
              <input
                type="checkbox"
                checked={
                  formData.supplementRecommendations[
                    supplement.id as keyof typeof formData.supplementRecommendations
                  ]
                }
                onChange={(e) =>
                  handleSupplementChange(supplement.id, e.target.checked)
                }
                className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500"
              />
              <span className="text-sm font-medium text-gray-700">
                {supplement.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
