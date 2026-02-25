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
import { clients } from "./data";

type ClientsTableProps = {
  limit?: number;
};

export default function ClientsTable({ limit }: ClientsTableProps) {
  const statusConfig = {
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
  const visibleClients = limit ? clients.slice(0, limit) : clients;
  return (
    <div className="">
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
            {visibleClients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium py-3 text-[#666666] text-base md:text-lg">
                  {client.name}
                </TableCell>
                <TableCell className="text-[#666666] py-3 text-base md:text-lg">
                  {client.goal}
                </TableCell>
                <TableCell className="text-[#666666] py-3 text-base md:text-lg">
                  {client.projectionUsed}
                </TableCell>
                <TableCell className="text-[#666666] py-3 text-base md:text-lg">
                  <Badge className={statusConfig[client.status].className}>
                    {statusConfig[client.status].label}
                  </Badge>
                </TableCell>
                <TableCell className="text-[#666666] py-3 text-base md:text-lg">
                  {client.activity}
                </TableCell>
                <TableCell className="py-3 text-base md:text-lg">
                  <button className="flex gap-5 items-center cursor-pointer hover:opacity-80">
                    <span className=" border px-2 py-1 rounded-full border-[#0D9488] text-[#0D9488]">
                      View
                    </span>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
