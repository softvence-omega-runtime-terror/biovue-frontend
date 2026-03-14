"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Sparkles, Dumbbell, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type Notification = {
  id: string;
  type: "motivation" | "insight" | "program" | "reminder" | "approval";
  title: string;
  time: string;
  message: string;
  isRead: boolean;
};

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    type: "motivation",
    title: "Sarah Jenkins sent motivation",
    time: "2M AGO",
    message: "You're crushing your water goals today! Keep that momentum going into the evening.",
    isRead: false,
  },
  {
    id: "2",
    type: "insight",
    title: "New AI Insight available",
    time: "1H AGO",
    message: "Based on your sleep data, shifting your workout to 8 AM might improve recovery.",
    isRead: false,
  },
  {
    id: "3",
    type: "program",
    title: "Program phase updated",
    time: "3H AGO",
    message: "Phase 2: Metabolic Conditioning is now active. Review your new workout block.",
    isRead: false,
  },
  {
    id: "4",
    type: "reminder",
    title: "Check-in Reminder",
    time: "5H AGO",
    message: "Your weekly progress review is due. Please upload your latest metrics.",
    isRead: false,
  },
  {
    id: "5",
    type: "approval",
    title: "Goal Approved",
    time: "YESTERDAY",
    message: "Coach Sarah approved your new target: 12,000 steps per day.",
    isRead: true,
  },
];

const getNotificationIcon = (type: Notification["type"]) => {
  switch (type) {
    case "motivation":
      return <MessageCircle size={20} className="text-[#A855F7]" />;
    case "insight":
      return <Sparkles size={20} className="text-[#F59E0B]" />;
    case "program":
      return <Dumbbell size={20} className="text-[#3A86FF]" />;
    case "reminder":
      return <Clock size={20} className="text-[#EF4444]" />;
    case "approval":
      return <CheckCircle2 size={20} className="text-[#10B981]" />;
  }
};

const getNotificationIconBg = (type: Notification["type"]) => {
  switch (type) {
    case "motivation":
      return "bg-[#A855F7]/10";
    case "insight":
      return "bg-[#F59E0B]/10";
    case "program":
      return "bg-[#3A86FF]/10";
    case "reminder":
      return "bg-[#EF4444]/10";
    case "approval":
      return "bg-[#10B981]/10";
  }
};

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onMarkAllAsRead: () => void;
  notifications: Notification[];
}

export default function NotificationDropdown({ isOpen, onClose, onMarkAllAsRead, notifications }: NotificationDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop for mobile or capturing clicks outside */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
          />

          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-14 right-6 w-[400px] bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 bg-[#F9FAFB] border-b border-gray-100">
              <h3 className="text-xl font-medium text-[#1F2D2E]">Recent</h3>
              <button
                onClick={onMarkAllAsRead}
                className="text-[#3A86FF] text-sm font-medium hover:underline cursor-pointer"
              >
                Mark all as read
              </button>
            </div>

            {/* List */}
            <div className="overflow-y-auto flex-1 p-2 flex flex-col">
              <AnimatePresence>
                {notifications.map((notif, index) => (
                  <motion.div
                    key={notif.id}
                    layout // For smooth layout shifting when items are removed or change state
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className="flex gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer border-b border-gray-50 last:border-0"
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                        getNotificationIconBg(notif.type)
                      )}
                    >
                      {getNotificationIcon(notif.type)}
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-base font-medium text-[#1F2D2E] leading-tight">
                          {notif.title}
                        </h4>
                        <span className="text-xs font-bold text-[#5F6F73] uppercase tracking-wider shrink-0 mt-0.5">
                          {notif.time}
                        </span>
                      </div>
                      <p className="text-sm text-[#5F6F73] leading-relaxed">
                        {notif.message}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {notifications.length === 0 && (
                <div className="p-8 text-center text-[#5F6F73]">
                  No recent notifications
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100 bg-[#F9FAFB] flex justify-center">
              <Link
                href="/user-dashboard/notifications"
                onClick={onClose}
                className="text-[#0FA4A9] font-medium hover:underline"
              >
                View notification history
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
