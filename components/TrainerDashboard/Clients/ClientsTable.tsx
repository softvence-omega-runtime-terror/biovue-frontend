"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MoreVertical, Eye, Gift } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ClientTableItem } from "@/redux/features/api/TrainerDashboard/trainerOverviewApi";
import GiftProjectionModal from "./GiftProjectionModal";

type ClientsTableProps = {
  limit?: number;
  clients: ClientTableItem[];
};

export default function ClientsTable({ clients, limit }: ClientsTableProps) {
  const router = useRouter();
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [selectedUserName, setSelectedUserName] = useState<string>("");
  const statusConfig: Record<string, { label: string, className: string }> = {
    "on-track": {
      label: "On track",
      className: "bg-[#22C55E1A] text-[#22C55E] hover:bg-green-50",
    },
    "need-attention": {
      label: "Need attention",
      className: "bg-[#D3BB5B1A] text-[#D3BB5B] hover:bg-yellow-50",
    },
    inactive: {
      label: "Inactive",
      className: "bg-[#9AAEB24D] text-[#5F6F73] hover:bg-gray-50",
    },
  };

  const normalizeStatus = (status: string) => {
    const s = status.toLowerCase().replace(/\s+/g, "-");
    if (statusConfig[s]) return s;
    if (s === "on-track") return "on-track";
    if (s === "needs-attention" || s === "need-attention") return "need-attention";
    return "inactive";
  };

  const visibleClients = limit ? clients.slice(0, limit) : clients;

  return (
    <div className=" bg-white p-5">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium text-base md:text-lg py-3">
                USER NAME
              </TableHead>
              <TableHead className="font-medium text-base md:text-lg py-3">
                GOAL
              </TableHead>
              <TableHead className="font-medium text-base md:text-lg py-3">
                PROJECTION USED
              </TableHead>
              <TableHead className="font-medium text-base md:text-lg py-3">
                STATUS
              </TableHead>
              <TableHead className="font-medium text-base md:text-lg py-3">
                ACTIVITY
              </TableHead>
              <TableHead className="font-medium text-base md:text-lg py-3">
                ACTIONS
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleClients.map((client) => {
              const statusKey = normalizeStatus(client.status);
              const config = statusConfig[statusKey];

              return (
                <TableRow key={client.user_id}>
                  <TableCell className="font-medium py-3 text-[#666666] text-base md:text-lg">
                    {client.user_name}
                  </TableCell>
                  <TableCell className="text-[#666666] py-3 text-base md:text-lg">
                    {client.goal || "Not specified"}
                  </TableCell>
                  <TableCell className="text-[#666666] py-3 text-base md:text-lg">
                    {client.projection_used || "-"}
                  </TableCell>
                  <TableCell className="text-[#666666] py-3 text-base md:text-lg">
                    <Badge className={config.className}>
                      {config.label}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-[#666666] py-3 text-base md:text-lg">
                    {client.activity || "Recent"}
                  </TableCell>
                  <TableCell className="py-3 text-base md:text-lg">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-2 hover:bg-[#F8FBFA] rounded-full transition-colors text-[#5F6F73] focus:outline-none">
                          <MoreVertical size={20} />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48 p-2 rounded-xl border-[#E4EFFF] shadow-md bg-white">
                        <DropdownMenuItem
                          className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-[#F8FBFA] text-sm text-[#041228] font-medium transition-colors"
                          onClick={() => router.push(`/trainer-dashboard/clients/${client.user_id}`)}
                        >
                          <Eye size={16} className="text-[#0FA4A9]" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-[#F8FBFA] text-sm text-[#041228] font-medium transition-colors mt-1"
                          onClick={() => {
                            setSelectedUserId(client.user_id);
                            setIsGiftModalOpen(true);
                          }}
                        >
                          <Gift size={16} className="text-[#0FA4A9]" />
                          Gift Projection
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      
      <GiftProjectionModal
        isOpen={isGiftModalOpen}
        onClose={() => {
          setIsGiftModalOpen(false);
          setSelectedUserId(null);
        }}
        preselectedUserId={selectedUserId}
      />
    </div>
  );
}
