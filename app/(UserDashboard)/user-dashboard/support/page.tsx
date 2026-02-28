"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  Star,
  Check,
  Send,
  Heart,
  X,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Mock Data ---
const RECOMMENDED_COACHES = [
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins, RD",
    role: "NUTRITION COACH",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop",
    priority: "HIGH PRIORITY",
    priorityColor: "text-red-500 bg-red-50",
    description: "Suggested due to irregular micronutrient variety and energy spikes in your nutritional data.",
  },
  {
    id: "david-aris",
    name: "David Aris",
    role: "WELLNESS COACH",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop",
    priority: "Medium PRIORITY",
    priorityColor: "text-orange-500 bg-orange-50",
    description: "Recommended based on decreased deep sleep markers.",
  },
  {
    id: "marcus-chen",
    name: "Marcus Chen",
    role: "PERSONAL TRAINER",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop",
    priority: "HIGH PRIORITY",
    priorityColor: "text-red-500 bg-red-50",
    description: "Suggested due to low activity levels and a rising weight trend.",
  },
];

const ALL_PROFESSIONALS = [
  {
    id: "core-supplements",
    name: "Core Supplements",
    role: "SUPPLEMENT SHOP",
    avatar: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=300&h=300&auto=format&fit=crop",
    rating: 4.9,
    isShop: true,
  },
  {
    id: "sarah-jenkins-2",
    name: "Sarah Jenkins, RD",
    role: "NUTRITION COACH",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop",
    rating: 4.9,
  },
  {
    id: "david-aris-2",
    name: "David Aris",
    role: "WELLNESS COACH",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop",
    rating: 4.9,
  },
];

// --- Sub-components ---

const CoachCard = ({ coach, onView }: { coach: any; onView: () => void }) => (
  <div className="bg-white rounded-[16px] p-6 border border-[#3A86FF]/25 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col gap-4">
    <div className="flex items-start justify-between">
       <div className="w-16 h-16 rounded-xl overflow-hidden">
         <Image src={coach.avatar} alt={coach.name} width={64} height={64} className="object-cover w-full h-full" />
       </div>
       <span className={cn("text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider", coach.priorityColor)}>
         {coach.priority}
       </span>
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-[#3A86FF] text-[10px] font-bold uppercase tracking-widest">{coach.role}</span>
      <h3 className="text-lg font-bold text-[#1F2D2E]">{coach.name}</h3>
    </div>
    <div className="bg-[#F8FAFB] rounded-xl p-4 min-h-[80px]">
      <p className="text-[#5F6F73] text-xs italic leading-relaxed">
        &quot;{coach.description}&quot;
      </p>
    </div>
    <button 
      onClick={onView}
      className="w-full bg-[#6C91C2] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#5a7da9] transition-all group cursor-pointer"
    >
      View Profile
      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);

const BrowseCard = ({ item, onAction }: { item: any; onAction: () => void }) => (
  <div className="bg-white rounded-[16px] p-6 border border-[#3A86FF]/25 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col items-center text-center gap-4">
    <div className="w-16 h-16 rounded-xl overflow-hidden">
      <Image src={item.avatar} alt={item.name} width={64} height={64} className="object-cover w-full h-full" />
    </div>
    <div className="flex flex-col gap-1 items-center">
      <span className="text-[#3A86FF] text-[10px] font-bold uppercase tracking-widest">{item.role}</span>
      <h3 className="text-lg font-bold text-[#1F2D2E]">{item.name}</h3>
      <div className="flex items-center gap-1 mt-1">
        <Star size={14} className="text-orange-400 fill-orange-400" />
        <span className="text-sm font-bold text-[#1F2D2E]">{item.rating}</span>
      </div>
    </div>
    <button 
      onClick={onAction}
      className="w-full bg-[#6C91C2] text-white py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#5a7da9] transition-all group cursor-pointer"
    >
      {item.isShop ? "View Shop" : "View Profile"}
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);


// --- Main Page ---

const SupportPage = () => {
  const [step, setStep] = useState<"list" | "detail" | "chat" | "success">("list");
  const [selectedCoach, setSelectedCoach] = useState(RECOMMENDED_COACHES[0]);

  const handleSelectCoach = (coach: any) => {
    setSelectedCoach(coach);
    setStep("detail");
  };

  if (step === "list") {
    return (
      <div className="flex flex-col gap-10 p-6 md:p-8 container mx-auto pb-20">
        <div className="flex flex-col gap-6">
          <Link href="/user-dashboard">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-[#5F6F73] text-xs font-semibold hover:bg-gray-50 transition-all cursor-pointer">
              <ArrowLeft size={14} />
              Back to Dashboard
            </button>
          </Link>

          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-[#1F2D2E]">Support</h1>
            <p className="text-[#5F6F73] text-sm font-medium">Get personalized help based on your health data</p>
          </div>
        </div>

        {/* Recommended for you */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
             <div className="flex items-center gap-2 text-[#3A86FF] font-bold text-sm tracking-wide">
               <Sparkles size={16} className="fill-[#3A86FF]" />
               RECOMMENDED FOR YOU
             </div>
          </div>
          <p className="text-[#5F6F73] text-sm -mt-4">Based on your health data and projections, these professionals can help you most right now.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {RECOMMENDED_COACHES.map(coach => (
               <CoachCard key={coach.id} coach={coach} onView={() => handleSelectCoach(coach)} />
             ))}
          </div>
        </div>

        {/* Your support team */}
        <div className="flex flex-col gap-6">
           <h2 className="text-xl font-bold text-[#1F2D2E]">Your support team</h2>
           <div className="bg-white rounded-[16px] p-4 border border-[#3A86FF]/25 shadow-[0_2px_12px_rgba(0,0,0,0.02)] max-w-sm flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100">
                <Image src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=150&h=150&auto=format&fit=crop" alt="Elena Rossi" width={64} height={64} className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-bold text-[#1F2D2E]">Dr. Elena Rossi</h3>
                <p className="text-[#5F6F73] text-xs">Primary Physician</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="text-[10px] font-bold text-[#1F2D2E]">Active</span>
                </div>
              </div>
           </div>
        </div>

        {/* Browse all professionals */}
        <div className="flex flex-col gap-6">
           <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#1F2D2E]">Browse all professionals</h2>
              <button className="text-[#3A86FF] text-sm font-bold hover:underline">View More</button>
           </div>
           <p className="text-[#5F6F73] text-sm -mt-4">Discover expert help across the BioVue network.</p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_PROFESSIONALS.map(item => (
                <BrowseCard key={item.id} item={item} onAction={() => {}} />
              ))}
           </div>
        </div>

        {/* Footer Banner */}
        <div className="bg-[#E9F3F5] rounded-[16px] p-6 flex flex-col md:flex-row items-center gap-6 border border-[#0FA4A9]/10">

           <div className="w-12 h-12 rounded-xl bg-[#0FA4A9] flex items-center justify-center shrink-0">
             <Heart size={24} className="text-white fill-white" />
           </div>
           <div className="flex flex-col gap-2">
             <h3 className="text-lg font-bold text-[#1F2D2E]">Why professional support matters</h3>
             <p className="text-[#5F6F73] text-sm leading-relaxed">
               Working with a coach or clinic can dramatically improve your progress and long-term outcomes. BioVue data shows users with dedicated support hit their 5-year goals faster.
             </p>
           </div>
        </div>
      </div>
    );
  }

  if (step === "detail") {
    return (
      <div className="flex flex-col gap-8 p-6 md:p-8 container mx-auto pb-20 ">
        <button 
          onClick={() => setStep("list")}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-[#5F6F73] text-xs font-semibold hover:bg-gray-50 transition-all w-fit cursor-pointer"
        >
          <ArrowLeft size={14} />
          Back to Support
        </button>

        <div className="bg-white rounded-[16px] p-8 md:p-12 border border-[#3A86FF]/25 shadow-[0_2px_30px_rgba(0,0,0,0.03)] flex flex-col items-center text-center gap-6 relative overflow-hidden">
          <div className="relative">
             <div className="w-32 h-32 rounded-[24px] overflow-hidden border-4 border-[#3A86FF20]">
               <Image src={selectedCoach.avatar} alt={selectedCoach.name} width={128} height={128} className="object-cover w-full h-full" />
             </div>
             <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-[#0FA4A9] flex items-center justify-center text-white border-2 border-white">
               <Check size={16} strokeWidth={3} />
             </div>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2">
               <h1 className="text-3xl font-bold text-[#1F2D2E]">{selectedCoach.name}</h1>
               <div className="flex items-center gap-1 bg-[#E4EFFF] text-[#3A86FF] px-2 py-0.5 rounded text-[10px] font-bold border border-[#3A86FF20]">
                 <Check size={12} strokeWidth={3} />
                 VERIFIED
               </div>
            </div>
            <span className="text-[#3A86FF] font-bold text-sm tracking-widest uppercase">{selectedCoach.role}</span>
          </div>

          <p className="text-[#5F6F73] text-base max-w-2xl leading-relaxed italic">
            &quot;Helps busy professionals improve body composition, energy, and consistency through data-driven lifestyle adjustments.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Specialties */}
           <div className="bg-white rounded-[16px] p-8 border border-[#3A86FF]/25 shadow-sm flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                   <Sparkles size={20} className="text-orange-400" />
                 </div>
                 <h2 className="text-xl font-bold text-[#1F2D2E]">Specialties</h2>
              </div>
              <div className="flex flex-col gap-4">
                 {["Fat loss", "Strength", "Habit building", "Nutrition guidance"].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#E4EFFF] flex items-center justify-center shrink-0">
                        <Check size={14} className="text-[#3A86FF]" strokeWidth={3} />
                      </div>
                      <span className="text-[#5F6F73] font-medium">{item}</span>
                   </div>
                 ))}
              </div>
           </div>

           {/* What this coach will do for you */}
           <div className="bg-white rounded-[16px] p-8 border border-[#3A86FF]/25 shadow-sm flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                   <Check size={20} className="text-blue-400" />
                 </div>
                 <h2 className="text-xl font-bold text-[#1F2D2E]">What this coach will do for you</h2>
              </div>
              <div className="flex flex-col gap-4">
                 {[
                   "Set personalized goals",
                   "Monitor your progress",
                   "Provide weekly guidance",
                   "Adjust targets based on your data"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#E4EFFF] flex items-center justify-center shrink-0">
                        <Check size={14} className="text-[#3A86FF]" strokeWidth={3} />
                      </div>
                      <span className="text-[#5F6F73] font-medium">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#E9F3F5] rounded-[16px] p-8 flex flex-col md:flex-row items-center justify-center gap-6">
           
           <div className="flex flex-col  items-stretch gap-4 w-full max-w-2xl">
              <button 
                onClick={() => setStep("chat")}
                className="flex-1 bg-[#0FA4A9] text-white py-4 rounded-xl font-bold text-center hover:bg-[#0d8d91] transition-all cursor-pointer shadow-lg shadow-[#0FA4A9]/20"
              >
                Connect With This Coach
              </button>
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  placeholder="Pre-Hire Inquiries" 
                  className="w-full h-full bg-white border border-gray-100 rounded-xl py-4 px-6 text-sm md:text-base outline-none pr-12"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1F2D2E] hover:text-[#0FA4A9] transition-colors">
                  <Send size={20} className="rotate-[-30deg]" />
                </button>
              </div>
           </div>
        </div>
      </div>
    );
  }

  if (step === "chat") {
    return (
      <div className="flex flex-col h-screen overflow-hidden bg-white">
        <div className="px-8 py-6 flex items-center justify-between border-b border-gray-50">
           <div className="flex flex-col">
             <h1 className="text-2xl font-bold text-[#1F2D2E]">Messages</h1>
             <p className="text-[#5F6F73] text-sm font-medium">Communicate with your Trainer</p>
           </div>
           <button 
             onClick={() => setStep("success")}
             className="bg-[#0FA4A9] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#0d8d91] transition-all cursor-pointer shadow-md"
           >
             Connect With This Coach
           </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-[#F8FAFB] p-8 flex flex-col gap-8">
           {/* Date separator */}
           <div className="flex flex-col gap-1 items-start">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100">
                  <Image src={selectedCoach.avatar} alt="mini" width={40} height={40} className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1F2D2E]">{selectedCoach.name.split(",")[0]}</span>
                  <span className="text-[#3A86FF] text-[10px] font-bold tracking-widest uppercase">{selectedCoach.role}</span>
                </div>
             </div>
             <div className="h-px bg-gray-100 w-full mt-2" />
           </div>

           {/* Messages */}
           <div className="flex flex-col gap-6 max-w-4xl w-full mx-auto self-start">
              <div className="flex flex-col gap-2 items-start self-start max-w-[80%]">
                 <div className="bg-white rounded-2xl p-6 border border-gray-50 shadow-sm text-[#1F2D2E] text-base leading-relaxed">
                   Hello! I saw your body projection goals. I&apos;d love to help you reach that body fat target safely.
                 </div>
                 <span className="text-[10px] font-bold text-[#5F6F73] ml-2 uppercase">Today - 8:30 AM</span>
              </div>

              <div className="flex flex-col gap-2 items-end self-end max-w-[80%]">
                 <div className="bg-[#C7F5CB] rounded-2xl p-6 shadow-sm text-[#1F2D2E] text-base leading-relaxed">
                   Hi coach, feeling good about this week!
                 </div>
                 <span className="text-[10px] font-bold text-[#5F6F73] mr-2 uppercase">Today - 8:30 AM</span>
              </div>
           </div>
        </div>

        <div className="p-8 bg-[#F8FAFB]">
           <div className="max-w-4xl mx-auto relative group">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="w-full bg-white border border-gray-100 rounded-2xl py-5 px-8 pr-16 text-base outline-none shadow-sm focus:ring-2 focus:ring-[#0FA4A9]/20 transition-all" 
              />
              <button className="absolute right-6 top-1/2 -translate-y-1/2 text-[#1F2D2E] hover:text-[#0FA4A9] transition-all">
                <Send size={28} className="rotate-[-30deg]" />
              </button>
           </div>
        </div>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F4FBFA]">
         <div className="bg-white rounded-[16px] p-12 md:p-16 max-w-xl w-full shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#3A86FF]/25 flex flex-col items-center text-center gap-8 relative">
            <button 
              onClick={() => setStep("list")}
              className="absolute top-8 right-8 text-[#1F2D2E] hover:bg-gray-50 p-2 rounded-full transition-all cursor-pointer outline-none"
            >
              <X size={24} />
            </button>

            <div className="w-24 h-24 rounded-full bg-[#E4FBF7] flex items-center justify-center relative">
               <div className="w-20 h-20 rounded-full border-[1.5px] border-[#0FA4A9]/20 flex items-center justify-center animate-pulse">
                 <Check size={40} className="text-[#0FA4A9]" strokeWidth={2.5} />
               </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold text-[#1F2D2E]">Connection Secured</h2>
              <p className="text-[#5F6F73] text-base leading-relaxed max-w-sm">
                You are now synced with Dr. Sarah Chen. Your projection data is being shared securely.
              </p>
            </div>

            <button 
              onClick={() => setStep("list")}
              className="w-full bg-[#0FA4A9] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#0d8d91] transition-all cursor-pointer shadow-xl shadow-[#0FA4A9]/20"
            >
              Back To Dashboard
            </button>
         </div>
      </div>
    )
  }

  return null;
};

export default SupportPage;

