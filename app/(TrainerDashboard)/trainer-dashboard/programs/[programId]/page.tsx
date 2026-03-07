"use client";

import {
  Program,
  programs,
} from "../../../../../components/TrainerDashboard/programs/ProgramsData";
import ProgramView from "../../../../../components/TrainerDashboard/programs/ProgramView";
import { useParams } from "next/navigation";

export default function ProgramDetailsPage() {
  const params = useParams();
  const programId = params.programId;

  const program: Program | undefined = programs.find((p) => p.id === programId);

  if (!program) {
    return <div className="p-6 text-red-600">Program not found.</div>;
  }

  return (
    <ProgramView
      program={{
        id: program.id,
        name: program.name,
        duration: program.duration,
        primaryGoal: program.primaryGoal,
        intensity: program.intensity,
        focusCount: program.focusAreas?.length ?? 0,
        habitFocus: program.habitFocus ?? [],
        programFocus: program.focusAreas ?? [],
        wellnessMacros: {
          calories: program.wellnessMetrics?.calories ?? 0,
          protein: program.wellnessMetrics?.protein ?? 0,
          carbs: program.wellnessMetrics?.carbs ?? 0,
          fat: program.wellnessMetrics?.fat ?? 0,
        },
        supplements: Object.entries(program.supplementRecommendations ?? {})
          .filter(([_, v]) => v)
          .map(([k]) =>
            k.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()),
          ),
      }}
    />
  );
}
