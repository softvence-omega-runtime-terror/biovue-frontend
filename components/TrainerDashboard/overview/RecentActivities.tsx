"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { activities } from "./data";

export default function RecentActivity() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-bold text-foreground mb-4">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className="mt-1">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                {activity.description}
              </p>
              <p className="text-xs text-muted-foreground">
                {activity.timeAgo} ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
