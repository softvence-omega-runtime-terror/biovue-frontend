"use client";

import { useState } from "react";
import { MoreVertical, Send } from "lucide-react";

import ChatArea from "@/components/TrainerDashboard/messages/ChatArea";
import ClientsListSidebar from "@/components/TrainerDashboard/messages/ClientListSidebar";
import MotivationModal from "@/components/TrainerDashboard/messages/MotivationModal";
import PreHireInquiries from "@/components/TrainerDashboard/messages/PreHireInqueries";

export interface Client {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
}

const mockClients: Client[] = [
  {
    id: "5",
    name: "Dwight Schrute",

    lastMessage: "Bears. Beets. Battlestar Galactica.",
    timestamp: "2 hrs ago",
  },
  {
    id: "6",
    name: "Andy Bernard",

    lastMessage: "Did you get my voicemail?",
    timestamp: "1 day ago",
  },
  {
    id: "7",
    name: "Stanley Hudson",

    lastMessage: "Is this meeting mandatory?",
    timestamp: "Yesterday",
  },
  {
    id: "8",
    name: "Kevin Malone",

    lastMessage: "I brought snacks.",
    timestamp: "Just now",
  },
  {
    id: "9",
    name: "Angela Martin",

    lastMessage: "This is highly inappropriate.",
    timestamp: "3 hrs ago",
  },
  {
    id: "10",
    name: "Oscar Martinez",

    lastMessage: "Actually, that’s not correct.",
    timestamp: "5 hrs ago",
  },
  {
    id: "11",
    name: "Phyllis Lapin",

    lastMessage: "Close your mouth, sweetie.",
    timestamp: "2 days ago",
  },
  {
    id: "12",
    name: "Ryan Howard",

    lastMessage: "This is a great business idea.",
    timestamp: "Yesterday",
  },
  {
    id: "13",
    name: "Kelly Kapoor",

    lastMessage: "Why didn’t you text me back?",
    timestamp: "Just now",
  },
  {
    id: "14",
    name: "Toby Flenderson",

    lastMessage: "HR needs to talk to you.",
    timestamp: "4 hrs ago",
  },
];

export default function MessagesPage() {
  const [selectedClientId, setSelectedClientId] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [openMotivation, setOpenMotivation] = useState(false);
  const selectedClient = mockClients.find((c) => c.id === selectedClientId);
  const filteredClients = mockClients.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const [viewMode, setViewMode] = useState<"active" | "prehire">("active");
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] gap-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-medium text-[#111827]">Messages</h1>
            <span className="bg-[#0D9488] text-white text-xs font-medium px-3 py-1 rounded-full">
              {viewMode === "active" ? "Active Clients" : "Pre-Hire Inquiries"}
            </span>
          </div>
          <p className="text-sm text-[#6B7280]">
            Communicate with your clients and support their progress.
          </p>
        </div>
        <div className="relative flex items-center gap-3">
          {viewMode === "active" && (
            <button
              onClick={() => selectedClient && setOpenMotivation(true)}
              className="bg-[#0D9488] flex items-center cursor-pointer rounded-lg px-4 py-2.5 hover:opacity-90 transition-opacity text-white gap-2 font-medium"
            >
              <Send className="w-5 h-5 rotate-[-10deg]" />
              <span>Send Motivation</span>
            </button>
          )}

          {/* More Vertical */}
          <div className="relative">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="p-2 cursor-pointer rounded-lg hover:bg-gray-100"
            >
              <MoreVertical className="w-5 h-5" />
            </button>

            {openMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-lg py-2 z-50">
                <button
                  onClick={() => {
                    setViewMode("active");
                    setOpenMenu(false);
                  }}
                  className={`w-full cursor-pointer text-left px-4 py-2 text-sm hover:bg-gray-50  ${viewMode === "active" ? "bg-[#f5f5f5]" : "hover:bg-gray-50"}`}
                >
                  Active Clients
                </button>
                <button
                  onClick={() => {
                    setViewMode("prehire");
                    setOpenMenu(false);
                  }}
                  className={`w-full cursor-pointer text-left px-4 py-2 text-sm hover:bg-gray-50  ${viewMode === "prehire" ? "bg-[#f5f5f5]" : "hover:bg-gray-50"}`}
                >
                  Pre-Hire Inquiries
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 gap-0 border-t border-[#E5E7EB] -mx-6 px-6 pt-0 overflow-hidden">
        {viewMode === "active" ? (
          <div className="flex flex-1 gap-0 border-t border-[#E5E7EB] -mx-6 px-6 pt-0 overflow-hidden">
            {/* Sidebar */}
            <div className="w-[320px] border-r border-[#E5E7EB] pt-6 pr-4 h-full">
              <ClientsListSidebar
                clients={filteredClients}
                selectedClientId={selectedClientId}
                onSelectClient={setSelectedClientId}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>

            {/* Chat */}
            <div className="flex flex-col flex-1 h-full">
              {selectedClient && (
                <ChatArea
                  clientId={selectedClient.id}
                  clientName={selectedClient.name}
                  clientAvatar={selectedClient.avatar}
                />
              )}
            </div>
          </div>
        ) : (
          <PreHireInquiries />
        )}
      </div>
      {selectedClient && (
        <MotivationModal
          open={openMotivation}
          onClose={() => setOpenMotivation(false)}
          clientName={selectedClient.name}
          onSend={(message) => {
            console.log("Send to:", selectedClient.name, message);
          }}
        />
      )}
    </div>
  );
}
