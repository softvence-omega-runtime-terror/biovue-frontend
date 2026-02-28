"use client";

import React, { useState } from "react";
import { Camera } from "lucide-react";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    supplierName: "John Smith",
    email: "john.smith@example.com",
    phoneNumber: "+1 (555) 123-4567",
    businessName: "Premium Supplements Co.",
    businessAddress: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-[750px] mx-auto py-6 flex flex-col gap-10 pb-16">
      <div className="bg-white rounded-3xl p-10 border border-[#D9E6FF] shadow-[0_8px_40px_rgb(0,0,0,0.03)] space-y-12">
        
        {/* Personal Information */}
        <div className="space-y-10">
          <h2 className="text-xl font-bold text-[#041228] border-b border-[#F8FBFA] pb-6">Personal Information</h2>
          
          {/* Profile Image */}
          <div className="space-y-5">
            <label className="text-base font-bold text-[#5F6F73] block">Profile Image</label>
            <div className="flex items-center gap-8">
              <div className="relative group cursor-pointer">
                <div className="w-32 h-32 rounded-full bg-[#5DA2F0] flex items-center justify-center text-white text-4xl font-bold shadow-sm group-hover:bg-[#4A90E2] transition-colors">
                  SP
                </div>
                <div className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-[#5DA2F0] border-4 border-white flex items-center justify-center text-white group-hover:bg-[#4A90E2] transition-colors shadow-sm">
                  <Camera size={18} fill="white" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#041228] font-bold text-lg leading-tight">Upload a new profile image</span>
                <span className="text-[#94A3B8] text-sm font-semibold uppercase tracking-wider">JPG, PNG (Max 2MB)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10">
            <div className="space-y-4">
              <label className="text-[16px] font-normal text-[#041228] block leading-[24px]">Supplier Name</label>
              <input
                type="text"
                name="supplierName"
                value={formData.supplierName}
                onChange={handleChange}
                className="w-full bg-white border border-[#E4EFFF] rounded-xl py-4.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] font-normal shadow-sm transition-all text-[16px] leading-[24px]"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[16px] font-normal text-[#1F2D2E] block leading-[24px]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border border-[#E4EFFF] rounded-xl py-4.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] font-normal shadow-sm transition-all text-[16px] leading-[24px]"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[16px] font-normal text-[#1F2D2E] block leading-[24px]">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full bg-white border border-[#E4EFFF] rounded-xl py-4.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] font-normal shadow-sm transition-all text-[16px] leading-[24px]"
              />
            </div>
          </div>
        </div>

        {/* Business Information */}
        <div className="space-y-10">
          <h2 className="text-xl font-normal text-[#041228] border-b border-[#F8FBFA] pb-6">Business Information</h2>
          
          <div className="space-y-4">
            <label className="text-[16px] font-normal text-[#1F2D2E] block leading-[24px]">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full bg-white border border-[#E4EFFF] rounded-xl py-4.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] font-normal shadow-sm transition-all text-[16px] leading-[24px]"
            />
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-normal text-[#1F2D2E] block leading-[24px]">Business Address</label>
            <textarea
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              placeholder="Enter business address"
              rows={5}
              className="w-full bg-white border border-[#E4EFFF] rounded-xl py-4.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] placeholder:text-[#94A3B8] font-normal shadow-sm transition-all resize-none text-[16px] leading-[24px]"
            />
          </div>
        </div>

        {/* Change Password */}
        <div className="space-y-10">
          <h2 className="text-xl font-normal text-[#041228] border-b border-[#F8FBFA] pb-6">Change Password</h2>
          
          <div className="grid grid-cols-1 gap-10">
            <div className="space-y-4">
              <label className="text-[16px] font-normal text-[#1F2D2E] block leading-[24px]">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                placeholder="Enter current password"
                className="w-full bg-white border border-[#E4EFFF] rounded-xl py-4.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] placeholder:text-[#94A3B8] font-normal shadow-sm transition-all text-[16px] leading-[24px]"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[16px] font-normal text-[#1F2D2E] block leading-[24px]">New Password</label>
              <input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                className="w-full bg-white border border-[#E4EFFF] rounded-xl py-4.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] placeholder:text-[#94A3B8] font-normal shadow-sm transition-all text-[16px] leading-[24px]"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[16px] font-normal text-[#1F2D2E] block leading-[24px]">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                className="w-full bg-white border border-[#E4EFFF] rounded-xl py-4.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] placeholder:text-[#94A3B8] font-normal shadow-sm transition-all text-[16px] leading-[24px]"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-6">
          <button className="w-full bg-[#5DA2F0] text-white py-4.5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-[#3A86FF]/10 cursor-pointer">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
