"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Send, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Mock Data ---
const CONTACTS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    handle: "@sarah.jenkins",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    lastMessage: "Great progress this week keep going!",
    time: "Just now",
    isActive: true,
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    handle: "@brooklyn.s",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    lastMessage: "Great progress this week keep going!",
    time: "5 Hrs ago",
    isActive: false,
  },
  {
    id: 3,
    name: "Theresa Webb",
    handle: "@theresa.webb",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    lastMessage: "Great progress this week keep going!",
    time: "Yesterday",
    isActive: false,
  },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    senderId: "other",
    text: "Hi coach, feeling good about this week!",
    time: "Today - 8:30 AM",
  },
  {
    id: 2,
    senderId: "me",
    text: "Hi coach, feeling good about this week!",
    time: "Today - 8:30 AM",
  },
  {
    id: 3,
    senderId: "other",
    text: "Hi coach, feeling good about this week!",
    time: "Today - 8:30 AM",
  },
  {
    id: 4,
    senderId: "me",
    text: "Hi coach, feeling good about this week!",
    time: "Today - 8:30 AM",
  },
];

const MessagesPage = () => {
  const [activeContact, setActiveContact] = useState(CONTACTS[0]);
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState(INITIAL_MESSAGES);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      senderId: "me",
      text: messageText,
      time: "Just now",
    };
    
    setMessages([...messages, newMessage]);
    setMessageText("");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Page Header */}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold text-[#1F2D2E]">Messages</h1>
        <p className="text-[#5F6F73] text-sm">Communicate with your Trainer</p>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden bg-[#F8FAFB] border-t border-gray-100">
        
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-100 flex flex-col">
          {/* Search Box */}
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5F6F73]" size={18} />
              <input
                type="text"
                placeholder="Search Clients"
                className="w-full bg-[#F4FBFA] border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#0FA4A9] outline-none placeholder:text-[#5F6F73]/60"
              />
            </div>
          </div>

          {/* Contacts List */}
          <div className="flex-1 overflow-y-auto">
            {CONTACTS.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setActiveContact(contact)}
                className={cn(
                  "p-4 cursor-pointer transition-all flex items-start gap-3 border-b border-gray-50",
                  contact.id === activeContact.id ? "bg-[#E4EFFF]/50" : "hover:bg-gray-50"
                )}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                     {/* Using a generic UI image or local one if available */}
                     <Image 
                       src={contact.avatar} 
                       alt={contact.name} 
                       width={48} 
                       height={48} 
                       className="object-cover"
                       onError={(e) => {
                         (e.target as any).src = "https://ui-avatars.com/api/?name=" + contact.name;
                       }}
                     />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-[#1F2D2E] truncate">{contact.name}</h3>
                    <span className="text-[10px] font-medium text-[#5F6F73] whitespace-nowrap">{contact.time}</span>
                  </div>
                  <p className="text-xs text-[#5F6F73] truncate leading-tight">
                    {contact.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                <Image 
                  src={activeContact.avatar} 
                  alt={activeContact.name} 
                  width={40} 
                  height={40} 
                  className="object-cover"
                  onError={(e) => {
                    (e.target as any).src = "https://ui-avatars.com/api/?name=" + activeContact.name;
                  }}
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-sm font-bold text-[#1F2D2E]">{activeContact.name}</h2>
                <span className="text-xs text-[#5F6F73]">{activeContact.name}</span>
              </div>
            </div>
            {/* Optional menu icon */}
            <button className="text-[#5F6F73] hover:text-[#1F2D2E] transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>

          {/* Message History */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8 bg-[#F8FAFB]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex flex-col max-w-[70%]",
                  msg.senderId === "me" ? "self-end items-end text-right" : "self-start items-start text-left"
                )}
              >
                <div
                  className={cn(
                    "px-6 py-4 rounded-2xl shadow-sm mb-2 text-sm md:text-base leading-relaxed font-medium",
                    msg.senderId === "me" 
                      ? "bg-[#C7F5CB] text-[#1F2D2E] rounded-tr-none" 
                      : "bg-white text-[#1F2D2E] border border-gray-50 rounded-tl-none"
                  )}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] font-medium text-[#5F6F73]">{msg.time}</span>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-6 bg-[#F8FAFB]">
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
              <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-transparent border-none outline-none text-[#1F2D2E] text-sm md:text-base placeholder:text-[#5F6F73]/50"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!messageText.trim()}
                className="text-[#1F2D2E] hover:text-[#0FA4A9] transition-colors disabled:opacity-30 flex-shrink-0"
              >
                <Send size={24} className="rotate-[-30deg]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MessagesPage;

