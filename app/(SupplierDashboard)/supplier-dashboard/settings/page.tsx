"use client";

import React, { useState } from "react";
import { Camera } from "lucide-react";
import { useChangePasswordMutation } from "@/redux/features/api/SupplierDashboard/ChangePassword";
import { toast } from "sonner";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    supplierName: "John Smith",
    email: "john.smith@example.com",
    phoneNumber: "+1 (555) 123-4567",
    businessName: "Premium Supplements Co.",
    businessAddress: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangePassword = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }

    try {
      const res = await changePassword({
        current_password: formData.currentPassword,
        new_password: formData.newPassword,
        new_password_confirmation: formData.confirmPassword,
      }).unwrap();

      toast.success(res.message);

      setFormData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to change password");
    }
  };
  return (
    <div className="max-w-188 mx-auto py-6 flex flex-col gap-10 pb-16">
      <div className="bg-white rounded-3xl p-10 border border-[#D9E6FF] shadow-[0_8px_40px_rgb(0,0,0,0.03)] space-y-12">
        {/* Personal Information */}
        <div className="space-y-10">
          <h2 className="text-xl font-bold text-[#041228] border-b border-[#F8FBFA] pb-6">
            Personal Information
          </h2>

          {/* Profile Image */}
          <div className="space-y-5">
            <label className="text-base font-bold text-[#5F6F73] block">
              Profile Image
            </label>
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
                <span className="text-[#041228] font-bold text-lg leading-tight">
                  Upload a new profile image
                </span>
                <span className="text-[#94A3B8] text-sm font-semibold uppercase tracking-wider">
                  JPG, PNG (Max 2MB)
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10">
            <div className="space-y-4">
              <label className="text-[16px] font-normal text-[#041228] block leading-6">
                Supplier Name
              </label>
              <input
                type="text"
                name="supplierName"
                value={formData.supplierName}
                onChange={handleChange}
                className="w-full bg-white border border-[#E4EFFF] rounded-xl py-4.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] font-normal shadow-sm transition-all text-[16px] leading-6"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[16px] font-normal text-[#1F2D2E] block leading-6">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border border-[#E4EFFF] rounded-xl py-4.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] font-normal shadow-sm transition-all text-[16px] leading-6"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[16px] font-normal text-[#1F2D2E] block leading-6">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full bg-white border border-[#E4EFFF] rounded-xl py-4.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] font-normal shadow-sm transition-all text-[16px] leading-6"
              />
            </div>
          </div>
        </div>

        {/* Business Information */}
        {/* <div className="space-y-10">
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
        </div> */}

        {/* Change Password */}
        <div className="space-y-10">
          <h2 className="text-xl font-normal text-[#041228] border-b border-[#F8FBFA] pb-6">
            Change Password
          </h2>

          <div className="grid grid-cols-1 gap-10">
            <div className="space-y-4">
              <label className="text-[16px] font-normal text-[#1F2D2E] block leading-6">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Enter current password"
                className="w-full bg-white border border-[#E4EFFF] rounded-xl py-4.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] placeholder:text-[#94A3B8] font-normal shadow-sm transition-all text-[16px] leading-6"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[16px] font-normal text-[#1F2D2E] block leading-6">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
                className="w-full bg-white border border-[#E4EFFF] rounded-xl py-4.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] placeholder:text-[#94A3B8] font-normal shadow-sm transition-all text-[16px] leading-6"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[16px] font-normal text-[#1F2D2E] block leading-6">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm new password"
                className="w-full bg-white border border-[#E4EFFF] rounded-xl py-4.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] placeholder:text-[#94A3B8] font-normal shadow-sm transition-all text-[16px] leading-6"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-6">
          <button
            onClick={handleChangePassword}
            disabled={isLoading}
            className="w-full bg-[#5DA2F0] text-white py-4.5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-[#3A86FF]/10 cursor-pointer"
          >
            {isLoading ? "Changing..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
