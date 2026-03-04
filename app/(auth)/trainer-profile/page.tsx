"use client";

import Image from "next/image";
import { ChevronLeft, Plus, X, Check, Save } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrainerProfile() {
  const router = useRouter();
  const [specialties, setSpecialties] = useState([
    "Fat Loss",
    "Strength",
    "Habit Building",
  ]);
  const [services, setServices] = useState([
    "Set personalized goals",
    "Monitor your progress",
    "Provide weekly guidance",
  ]);
  const [bio, setBio] = useState("");

  const removeSpecialty = (index: number) => {
    setSpecialties(specialties.filter((_, i) => i !== index));
  };

  const removeService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#F8FDFF] flex flex-col items-center py-10 px-4">
      {/* Logo */}
      <div className="mb-10">
        <Image
          src="/images/logo.png"
          alt="BioVue Logo"
          width={120}
          height={40}
          priority
        />
      </div>

      <div className="w-full max-w-200">
        {/* Back Link */}
        <button className="flex items-center gap-2 text-[#3B82F6] text-sm font-semibold mb-6 hover:opacity-80 transition-opacity cursor-pointer">
          <ChevronLeft size={18} />
          BACK TO ACCOUNT TYPE
        </button>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1E293B] mb-2">
            Trainer Profile
          </h1>
          <p className="text-[#64748B] text-sm font-medium">
            Update your public profile information
          </p>
        </div>

        <div className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-3xl border border-[#F1F5F9] shadow-sm p-8">
            <h3 className="text-[17px] font-bold text-[#1E293B] mb-6">
              Basic Information
            </h3>
            <div className="flex items-center gap-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#F1F5F9]">
                  <Image
                    src="/images/avatar2.png" // Using available placeholder
                    alt="Profile Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <button className="absolute -right-2 -bottom-2 bg-[#0D9488] text-white p-1.5 rounded-lg border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform">
                  <Plus size={16} />
                </button>
              </div>

              <div className="flex-1 space-y-2">
                <label className="text-xs font-bold text-[#64748B] uppercase tracking-wide">
                  Full Name
                </label>
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-4 text-sm font-medium text-[#1E293B]">
                  Alex Thompson
                </div>
              </div>
            </div>
          </div>

          {/* Short Bio */}
          <div className="bg-white rounded-3xl border border-[#F1F5F9] shadow-sm p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[17px] font-bold text-[#1E293B]">
                Short Bio
              </h3>
              <span className="text-xs font-bold text-[#94A3B8] tracking-widest">
                {bio.length}/180
              </span>
            </div>
            <textarea
              className="w-full h-32 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 text-sm font-medium text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/10 focus:border-[#3B82F6] transition-all resize-none placeholder:text-[#94A3B8]/60"
              placeholder="Introduce yourself and your coaching philosophy..."
              maxLength={180}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          {/* Specialties */}
          <div className="bg-white rounded-3xl border border-[#F1F5F9] shadow-sm p-8">
            <h3 className="text-[17px] font-bold text-[#1E293B] mb-6">
              Specialties
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {specialties.map((tag, idx) => (
                <div
                  key={tag}
                  className="bg-[#F0F7FF] border border-[#D1E9FF] text-[#3B82F6] px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2"
                >
                  {tag}
                  <button
                    onClick={() => removeSpecialty(idx)}
                    className="cursor-pointer hover:text-red-500 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
            <div className="relative group">
              <input
                type="text"
                placeholder="Type specialty and press Enter..."
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-4 text-sm font-medium text-[#1E293B] focus:outline-none focus:border-[#D1E9FF] transition-all"
              />
              <Plus
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] cursor-pointer"
                size={20}
              />
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-white rounded-3xl border border-[#F1F5F9] shadow-sm p-8">
            <h3 className="text-[17px] font-bold text-[#1E293B]">
              What This Coach Will Do
            </h3>
            <p className="text-sm text-[#64748B] font-medium mt-1 mb-8">
              List the specific values or services you provide to your clients.
            </p>

            <div className="space-y-4 mb-6">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-lg bg-[#E0F2FE] flex items-center justify-center text-[#3B82F6]">
                    <Check size={14} />
                  </div>
                  <div className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-3 text-sm font-medium text-[#1E293B]">
                    {service}
                  </div>
                  <button
                    onClick={() => removeService(idx)}
                    className="w-6 h-6 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#94A3B8] hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-6 opacity-60">
              <div className="w-6 h-6" />
              <input
                type="text"
                placeholder="Add new service..."
                className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-3 text-sm font-medium text-[#1E293B] focus:outline-none"
              />
              <div className="w-6 h-6 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#94A3B8]">
                <X size={14} />
              </div>
            </div>

            <button className="text-[#3B82F6] text-sm font-bold flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
              <Plus size={18} /> Add Service
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <button
            onClick={() =>
              router.push(`/register-otp-verify?email=test@example.com`)
            }
            className="w-full sm:w-auto px-10 py-4 bg-[#0D9488] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#0B7A70] transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <Save size={20} />
            Save & Continue
          </button>
          <p className="text-sm font-medium text-[#475569]">
            Already have an account?{" "}
            <button className="text-[#3B82F6] font-bold hover:underline cursor-pointer">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
