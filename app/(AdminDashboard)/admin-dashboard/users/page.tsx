"use client";

import { useState } from "react";
import { MoreHorizontal, Search, X, User, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { USERS_DATA, UserType } from "@/components/AdminDashboard/Data";
import DashboardHeading from "@/components/common/DashboardHeading";

const getSubscriptionColor = (
  subscription: string,
): "default" | "secondary" | "destructive" | "outline" => {
  switch (subscription) {
    case "Active":
      return "default";
    case "Expired":
      return "destructive";
    case "Free Trail":
      return "secondary";
    case "Cancelled":
      return "outline";
    default:
      return "default";
  }
};

const getTypeColor = (type: string) => {
  return type === "Professional"
    ? "bg-[#0FA4A926] text-[#0FA4A9] border-[#0FA4A9]"
    : "bg-[#8746E726] text-[#8746E7] border-[#8746E7]";
};

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [filterType, setFilterType] = useState<
    "all" | "individual" | "professional"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = USERS_DATA.filter((user) => {
    const matchesType =
      filterType === "all" ||
      (filterType === "individual" && user.type === "Individual") ||
      (filterType === "professional" && user.type === "Professional");
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="flex flex-col lg:flex-row gap-6 min-h-screen ">
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="mb-6">
          <DashboardHeading
            heading="Users"
            subheading="View and manage all platform users"
          />
        </div>

        {/* Filter Tabs */}
        {/* Filter Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          {["all", "individual", "professional"].map((type) => (
            <div
              key={type}
              onClick={() =>
                setFilterType(type as "all" | "individual" | "professional")
              }
              className={`
        cursor-pointer whitespace-nowrap text-sm sm:text-base pb-1
        ${filterType === type ? "border-b-2 border-[#0FA4A9] font-semibold text-[#0FA4A9]" : "text-gray-600"}
        transition-colors
      `}
            >
              {type === "all"
                ? "All Users"
                : type === "individual"
                  ? "Individual Users"
                  : "Professional Users"}
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 text-sm"
            />
          </div>
        </div>

        {/* Table - Responsive */}
        <div className=" rounded-lg border-b border-gray-200 overflow-hidden ">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#0FA4A91A] border-b border-gray-200">
                  <TableHead className="text-gray-700 font-semibold text-xs sm:text-base px-4 py-4">
                    USERS
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold text-xs sm:text-base px-4 py-4">
                    EMAIL
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold text-xs sm:text-base px-4 py-4">
                    USER TYPE
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold text-xs sm:text-base px-4 py-4">
                    SUBSCRIPTION
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold text-xs sm:text-base px-4 py-4">
                    STATUS
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold text-xs sm:text-base px-4 py-4">
                    JOINED DATE
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold w-10 px-4 py-4">
                    {" "}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    className=" hover:bg-gray-50 border-b border-gray-200 transition-colors"
                  >
                    <TableCell className="font-medium text-gray-900 text-sm px-4 py-4">
                      {user.name}
                    </TableCell>
                    <TableCell className="text-gray-600 text-sm px-4 py-4">
                      {user.email}
                    </TableCell>
                    <TableCell className="px-4 py-4">
                      <Badge
                        variant="outline"
                        className={`${getTypeColor(user.type)} text-xs`}
                      >
                        {user.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-4">
                      <Badge
                        variant={getSubscriptionColor(user.subscription)}
                        className="text-xs"
                      >
                        {user.subscription}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-4">
                      <span className="text-green-600 font-medium text-sm">
                        ● {user.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-600 text-sm px-4 py-4">
                      {user.joinedDate}
                    </TableCell>
                    <TableCell className="px-4 py-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MoreVertical className="h-4  w-4" />
                          </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedUser(user);
                            }}
                            className="cursor-pointer hover:opacity-80"
                          >
                            View Details
                          </DropdownMenuItem>

                          <DropdownMenuItem
                            className="text-red-600 cursor-pointer hover:opacity-80"
                            onClick={(e) => {
                              e.stopPropagation();
                              console.log("Delete user", user.id);
                            }}
                          >
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden">
            <div className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="p-4 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                  //   onClick={() => setSelectedUser(user)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {user.name}
                      </h3>
                      <p className="text-xs text-gray-600">{user.email}</p>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedUser(user); // ✅ OPEN PROFILE
                          }}
                        >
                          View Details
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log("Delete user", user.id);
                          }}
                        >
                          Delete User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge
                      variant="outline"
                      className={`${getTypeColor(user.type)} text-xs`}
                    >
                      {user.type}
                    </Badge>
                    <Badge
                      variant={getSubscriptionColor(user.subscription)}
                      className="text-xs"
                    >
                      {user.subscription}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-green-600 font-medium">
                      ● {user.status}
                    </span>
                    <span className="text-gray-600">{user.joinedDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Center Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Card className="w-full max-w-md mx-4 shadow-xl rounded-lg relative">
            {/* Header */}
            <CardHeader className="flex flex-row items-center justify-between border-b">
              <CardTitle className="text-lg font-semibold">
                User Profile
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setSelectedUser(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>

            {/* Content */}
            <CardContent className="space-y-6 pt-6">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {selectedUser.name}
                  </h3>
                  <p className="text-sm text-gray-600">{selectedUser.email}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-500 uppercase">User Type</p>
                <p className="text-sm">{selectedUser.type}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-500 uppercase">Subscription</p>
                <p className="text-sm">{selectedUser.subscription}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-500 uppercase">Status</p>
                <p className="text-sm text-green-600">
                  ● {selectedUser.status}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-500 uppercase">Joined</p>
                <p className="text-sm">{selectedUser.joinedDate}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
