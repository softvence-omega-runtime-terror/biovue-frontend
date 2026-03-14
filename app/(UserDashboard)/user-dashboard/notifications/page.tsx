"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  Sparkles, 
  Dumbbell, 
  Clock, 
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MOCK_NOTIFICATIONS, Notification } from "@/components/dashboard/NotificationDropdown";

const getNotificationIcon = (type: Notification["type"]) => {
  switch (type) {
    case "motivation":
      return <MessageCircle size={24} className="text-[#A855F7]" />;
    case "insight":
      return <Sparkles size={24} className="text-[#F59E0B]" />;
    case "program":
      return <Dumbbell size={24} className="text-[#3A86FF]" />;
    case "reminder":
      return <Clock size={24} className="text-[#EF4444]" />;
    case "approval":
      return <CheckCircle2 size={24} className="text-[#10B981]" />;
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

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const removeNotification = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] p-6 md:p-8 max-w-5xl mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1F2D2E] mb-2">Notifications</h1>
          <p className="text-[#5F6F73]">All updates related to your goals, coach activity, and reminders</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={markAllAsRead}
            className="bg-[#0FA4A9] text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors text-sm cursor-pointer"
          >
            Mark all as read
          </button>
          <button
            onClick={clearAll}
            className="bg-red-50 text-red-500 px-4 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors text-sm cursor-pointer"
          >
            Clear all
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex flex-col gap-4">
        <AnimatePresence>
          {notifications.map((notif, index) => (
            <motion.div
              layout
              key={notif.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              className={cn(
                "bg-white rounded-2xl p-5 md:p-6 border shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row sm:items-center gap-4 group hover:border-[#0FA4A9]/50 transition-all cursor-pointer relative",
                notif.isRead ? "border-gray-100" : "border-blue-100 bg-blue-50/50"
              )}
              onClick={() => {
                setNotifications(prev => prev.map(n => n.id === notif.id ? { ...n, isRead: true } : n));
              }}
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors",
                  getNotificationIconBg(notif.type)
                )}
              >
                {getNotificationIcon(notif.type)}
              </div>
              <div className="flex flex-col gap-1.5 flex-1 pr-12 sm:pr-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-[#1F2D2E] leading-tight flex items-center gap-2">
                    {notif.title}
                    {!notif.isRead && (
                      <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                    )}
                  </h3>
                  <span className="text-xs font-bold text-[#5F6F73] uppercase tracking-wider shrink-0 hidden sm:block">
                    {notif.time}
                  </span>
                </div>
                <p className="text-[#5F6F73] text-sm md:text-base leading-relaxed">
                  {notif.message}
                </p>
                <span className="text-xs font-bold text-[#5F6F73] uppercase tracking-wider shrink-0 sm:hidden mt-2">
                  {notif.time}
                </span>
              </div>
              
              {/* Arrow Icon */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 sm:static sm:translate-y-0 w-10 h-10 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 group-hover:border-[#0FA4A9] group-hover:text-[#0FA4A9] transition-all ml-4">
                <ChevronRight size={20} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {notifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl p-12 border border-gray-100 flex flex-col items-center justify-center gap-4 text-center mt-4"
          >
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
              <CheckCircle2 size={32} className="text-gray-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1F2D2E] mb-1">You're all caught up!</h3>
              <p className="text-[#5F6F73]">No new notifications at the moment.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
