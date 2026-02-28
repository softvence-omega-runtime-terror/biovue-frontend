"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const BusinessRegister = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    professionType: "Supplement Supplier",
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/register/business/profile-setup");
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[600px] mx-auto py-4">
      {/* Logo at the top */}
      <div className="mb-4">
        <Image
          src="/images/logo.png"
          alt="BioVue Logo"
          width={150}
          height={60}
          className="object-contain"
          priority
        />
      </div>

      {/* Main Card */}
      <div className="w-full bg-white rounded-3xl p-6 md:p-8 border border-[#D9E6FF] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        {/* Back Button */}
        <div className="flex justify-center mb-6">
          <Link 
            href="/register" 
            className="inline-flex items-center gap-2 text-[#3A86FF] hover:opacity-80 transition-opacity font-bold text-sm tracking-wider uppercase"
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
            Back to account type
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-[32px] font-bold text-[#041228] mb-3">
            Create Your Account
          </h1>
          <p className="text-[#98A2B3] text-lg">
            Setting up your individual profile.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-lg font-bold text-[#041228] block">
              Email address
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]">
                <Mail size={22} strokeWidth={1.5} />
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="georgia.young@example.com"
                className="w-full bg-[#F5F5F5] border-none rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] placeholder:text-[#98A2B3] font-medium"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-lg font-bold text-[#041228] block">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]">
                <Lock size={22} strokeWidth={1.5} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="•••••"
                className="w-full bg-[#F5F5F5] border-none rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] placeholder:text-[#98A2B3] font-medium"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#5F6F73] transition-colors"
              >
                {showPassword ? <EyeOff size={22} strokeWidth={1.5} /> : <Eye size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="text-lg font-bold text-[#041228] block">
              Confirm password
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]">
                <Lock size={22} strokeWidth={1.5} />
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="•••••"
                className="w-full bg-[#F5F5F5] border-none rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#041228] placeholder:text-[#98A2B3] font-medium"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#5F6F73] transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={22} strokeWidth={1.5} /> : <Eye size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>

          {/* Profession Type */}
          <div className="space-y-2">
            <label className="text-lg font-bold text-[#041228] block">
              Select Profession Type
            </label>
            <div className="relative">
              <select
                name="professionType"
                value={formData.professionType}
                onChange={handleChange}
                className="w-full bg-[#F5F5F5] border-none rounded-xl py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[#98A2B3] font-medium appearance-none cursor-pointer"
              >
                <option value="Supplement Supplier">Supplement Supplier</option>
                <option value="Coach">Coach</option>
                <option value="Trainer">Trainer</option>
                <option value="Wellness Professional">Nutrition</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98A2B3] pointer-events-none">
                <ChevronDown size={22} />
              </span>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-3 mt-4">
            <input
              id="terms"
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="w-5 h-5 accent-[#0FA4A9] border-[#E5E9EA] rounded-md cursor-pointer"
              required
            />
            <label htmlFor="terms" className="text-[15px] text-[#041228] font-bold">
              I agree to the <span className="text-[#3A86FF] cursor-pointer hover:underline">Terms & Privacy Policy</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl font-bold text-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[#0FA4A9]/10 cursor-pointer"
            >
              Continue
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-[#041228] text-[15px] font-bold">
            Already have an account?{" "}
            <Link href="/login" className="text-[#3A86FF] hover:underline ml-1">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegister;
