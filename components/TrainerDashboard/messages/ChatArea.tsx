"use client";

import { useState, useRef, useEffect } from "react";
import { Send, MoreVertical, ExternalLink } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

interface Message {
  id: string;
  senderRole: "client" | "coach";
  text: string;
  timestamp: string;
}

const mockMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      senderRole: "client",
      text: "Hi coach, feeling good about this week!",
      timestamp: "Today - 8:30 AM",
    },
    {
      id: "2",
      senderRole: "coach",
      text: "Hi coach, feeling good about this week!",
      timestamp: "Today - 8:30 AM",
    },
    {
      id: "3",
      senderRole: "client",
      text: "Hi coach, feeling good about this week!",
      timestamp: "Today - 8:30 AM",
    },
    {
      id: "4",
      senderRole: "coach",
      text: "Hi coach, feeling good about this week!",
      timestamp: "Today - 8:30 AM",
    },
  ],
  "2": [
    {
      id: "1",
      senderRole: "client",
      text: "Hi coach, ready for this week!",
      timestamp: "Yesterday - 10:00 AM",
    },
  ],
  "3": [
    {
      id: "1",
      senderRole: "coach",
      text: "Great work this week!",
      timestamp: "Yesterday - 2:00 PM",
    },
  ],
};

interface ChatAreaProps {
  clientId: string;
  clientName: string;
  clientAvatar?: string;
}

export default function ChatArea({ clientId, clientName, clientAvatar }: ChatAreaProps) {
  const [messages, setMessages] = useState<Message[]>(
    mockMessages[clientId] || [],
  );
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages(mockMessages[clientId] || []);
    }, 0);
    return () => clearTimeout(timer);
  }, [clientId]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      senderRole: "coach",
      text: inputValue,
      timestamp: `Today - ${new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}`,
    };
    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col h-full bg-[#F9FAFB] border-l border-[#E5E7EB]">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#E5E7EB]">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src={clientAvatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=default"}
              alt={clientName}
              fill
              className="rounded-full object-cover border border-[#E5E7EB]"
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#111827]">{clientName}</h3>
            <p className="text-xs text-[#6B7280]">{clientName}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#0D9488] text-sm font-medium hover:underline flex items-center gap-1">
            View client profile
          </button>
          <button className="text-[#6B7280] hover:text-[#111827]">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="flex flex-col gap-8">
          {messages.map((msg) => {
            const isCoach = msg.senderRole === "coach";
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isCoach ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                    isCoach
                      ? "bg-[#0D948833] text-[#111827] rounded-tr-none"
                      : "bg-white border border-[#E5E7EB] text-[#374151] rounded-tl-none shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-[#9CA3AF] mt-2 px-1">
                  {msg.timestamp}
                </span>
              </div>
            );
          })}
          <div ref={scrollRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="px-6 py-6 bg-white border-t border-[#E5E7EB]">
        <div className="relative group">
          <input
            placeholder="Type your message..."
            className="w-full bg-white border border-[#E5E7EB] rounded-xl pl-5 pr-14 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#0D9488] focus:border-[#0D9488] transition-all placeholder:text-[#9CA3AF]"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-[#0D9488] hover:bg-[#0D948814] rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Send className="w-6 h-6 rotate-[-10deg]" />
          </button>
        </div>
      </div>
    </div>
  );
}
