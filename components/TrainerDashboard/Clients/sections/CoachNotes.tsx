"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Plus } from "lucide-react";

export default function CoachNotes({ notes }: { notes: string[] }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Internal Coach Notes (Private)</CardTitle>
          <button className="flex items-center gap-2 text-[#0D9488] hover:opacity-80 transition-opacity text-sm font-medium">
            <Plus size={16} />
            Add Note
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {notes.map((note, index) => (
            <div
              key={index}
              className="bg-[#F0FDFA] border-l-4 border-[#0D9488] p-4 rounded-lg"
            >
              <div className="flex gap-3">
                <MessageSquare className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                <p className="text-[#1F2937] text-sm leading-relaxed">{note}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
