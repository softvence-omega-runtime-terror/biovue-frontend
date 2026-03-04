"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Plus, Check } from "lucide-react";

export default function TrainerProfile() {
  const [specialties, setSpecialties] = useState([
    "Strength & Conditioning",
    "Fat Loss & Body Transformation",
    "Functional Movement Screen (FMS)",
    "Corrective Exercise",
    "HIIT Training",
    "Nutrition & Meal Planning",
  ]);

  const [services, setServices] = useState([
    "1-on-1 Personalized Coaching",
    "Small Group Strength Training",
    "Custom Nutrition & Meal Plans",
    "Post-Injury Mobility Programs",
    "Remote Online Coaching",
  ]);

  const removeSpecialty = (index: number) => {
    setSpecialties(specialties.filter((_, i) => i !== index));
  };

  const removeService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
      {/* Basic Info Card */}
      <div className="bg-[#E9FBFB] rounded-3xl p-8 flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src="/images/trainer-avatar.png"
            alt="Trainer Avatar"
            fill
            className="rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 bg-[#0D9488] text-white p-2 rounded-full shadow-lg hover:bg-[#0B7A70] transition-colors">
            <Plus size={20} />
          </button>
        </div>
        <h2 className="text-2xl font-bold text-[#1E293B]">Jenny Wilson</h2>
        <p className="text-[#64748B] mb-6">Certified Head Trainer</p>

        <div className="w-full flex justify-between items-center bg-white rounded-2xl p-4 shadow-sm mb-4">
          <span className="text-[#64748B] text-sm">Experience</span>
          <span className="text-[#1E293B] font-semibold text-lg">10+ Years</span>
        </div>

        <div className="w-full flex justify-between items-center bg-white rounded-2xl p-4 shadow-sm">
          <span className="text-[#64748B] text-sm">Active Clients</span>
          <span className="text-[#1E293B] font-semibold text-lg">45</span>
        </div>
      </div>

      {/* About Your Bio Card */}
      <div className="bg-[#E9FBFB] rounded-3xl p-8">
        <h3 className="text-xl font-bold text-[#1E293B] mb-2">About Your Bio</h3>
        <p className="text-[#64748B] text-sm mb-4">
          Briefly describe your coaching style, philosophy, and background.
        </p>
        <div className="relative bg-white rounded-2xl shadow-sm h-full max-h-[220px]">
          <textarea
            className="w-full h-full p-4 text-[#1E293B] bg-transparent border-none focus:ring-0 resize-none no-scrollbar"
            defaultValue="I am a dedicated fitness professional with over a decade of experience in strength and conditioning. My philosophy revolves around movement quality, functional longevity, and evidence-based nutrition. I've helped hundreds of clients transform their bodies and mindsets through sustainable habit building."
          />
          <div className="absolute bottom-4 right-4 text-[#94A3B8] text-xs">
            280 / 500 characters remaining
          </div>
        </div>
      </div>

      {/* Specialties Card */}
      <div className="bg-[#E9FBFB] rounded-3xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-[#1E293B]">Specialties</h3>
          <button className="bg-[#0D9488] text-white p-2 rounded-full shadow-lg hover:bg-[#0B7A70] transition-colors">
            <Plus size={20} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#F1F5F9] text-[#1E293B] px-4 py-2 rounded-full text-sm font-medium"
            >
              {specialty}
              <button
                onClick={() => removeSpecialty(index)}
                className="text-[#94A3B8] hover:text-[#EF4444]"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Services Checklist Card */}
      <div className="bg-[#E9FBFB] rounded-3xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-[#1E293B]">Services Checklist</h3>
          <button className="bg-[#0D9488] text-white p-2 rounded-full shadow-lg hover:bg-[#0B7A70] transition-colors">
            <Plus size={20} />
          </button>
        </div>
        <div className="space-y-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#0D9488] rounded-md flex items-center justify-center text-white">
                  <Check size={14} strokeWidth={4} />
                </div>
                <span className="text-[#1E293B] font-medium text-sm">
                  {service}
                </span>
              </div>
              <button
                onClick={() => removeService(index)}
                className="text-[#94A3B8] hover:text-[#EF4444]"
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
