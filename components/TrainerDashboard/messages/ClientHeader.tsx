"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

interface ClientHeaderProps {
  clientName: string;
  clientSubtitle?: string;
  avatarUrl?: string;
  onViewProfile?: () => void;
  onMenuAction?: (action: string) => void;
}

export default function ClientHeader({
  clientName,
  clientSubtitle = clientName,
  avatarUrl,
  onViewProfile,
  onMenuAction,
}: ClientHeaderProps) {
  return (
    <div className="bg-blue-50 border-b border-blue-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={avatarUrl} alt={clientName} />
            <AvatarFallback>{clientName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-base font-semibold text-gray-900">
              {clientName}
            </h2>
            <p className="text-sm text-gray-600">{clientSubtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-cyan-600 hover:text-cyan-700 hover:bg-transparent text-sm font-medium"
            onClick={onViewProfile}
          >
            View client profile
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreVertical className="h-5 w-5 text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onMenuAction?.("view")}>
                View Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onMenuAction?.("edit")}>
                Edit Client
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onMenuAction?.("archive")}>
                Archive Client
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
