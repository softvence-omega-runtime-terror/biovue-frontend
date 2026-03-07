"use client";

import { useParams } from "next/navigation";
import ProgramEdit from "@/components/TrainerDashboard/programs/ProgramEdit";
import {
  programs,
  Program,
} from "@/components/TrainerDashboard/programs/ProgramsData";

function mapProgramToEdit(program: Program) {
  return {
    id: program.id,
    name: program.name,
    duration: program.duration,
    primaryGoal: program.primaryGoal,
    intensity: program.intensity,
    focusCount: program.focusAreas?.length ?? 0,
    habitFocus: program.habitFocus ?? [],
    programFocus: program.focusAreas ?? [],
    weeklyActivityTarget: "4–5 sessions/week",
    wellnessMacros: {
      calories: program.wellnessMetrics?.calories ?? 0,
      protein: program.wellnessMetrics?.protein ?? 0,
      carbs: program.wellnessMetrics?.carbs ?? 0,
      fat: program.wellnessMetrics?.fat ?? 0,
    },
    supplements: Object.entries(program.supplementRecommendations ?? {})
      .filter(([, enabled]) => enabled)
      .map(([key]) =>
        key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()),
      ),
    internalNotes: "",
  };
}

export default function EditProgramPage() {
  const params = useParams();
  const programId = params.programId as string;

  const foundProgram = programs.find((p) => p.id === programId);

  if (!foundProgram) {
    return <div className="p-6">Program not found (ID: {programId})</div>;
  }

  const program = mapProgramToEdit(foundProgram);

  return <ProgramEdit program={program} />;
}
